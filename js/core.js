/**
 * Shared lightweight helpers for Gülkent static pages.
 * Blog pages currently use js/config.js; this file must stay syntax-safe on
 * every page because it is loaded globally.
 */
(function () {
  const supportedLanguages = ["tr", "en"];
  let blogCache = {
    path: "",
    lang: "",
    posts: [],
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getCurrentLang() {
    try {
      const requested = new URLSearchParams(window.location.search).get("lang");
      if (supportedLanguages.includes(requested)) return requested;

      const saved = window.localStorage.getItem("selectedLang");
      return supportedLanguages.includes(saved) ? saved : "tr";
    } catch (error) {
      return document.documentElement.lang === "en" ? "en" : "tr";
    }
  }

  function parseCSV(text) {
    const normalizedText = text.replace(/^\uFEFF/, "");
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;

    for (let index = 0; index < normalizedText.length; index += 1) {
      const char = normalizedText[index];
      const next = normalizedText[index + 1];

      if (char === '"' && quoted && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        row.push(cell.trim());
        cell = "";
      } else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") index += 1;
        row.push(cell.trim());
        if (row.some(Boolean)) rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += char;
      }
    }

    if (cell || row.length) {
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
    }

    if (rows.length < 2) return [];
    const headers = rows[0];
    return rows.slice(1).map((values) => {
      const entry = {};
      headers.forEach((header, index) => {
        entry[header] = values[index] || "";
      });
      return entry;
    });
  }

  function csvPostToCard(post, lang) {
    const title = post[`title_${lang}`] || post.title_tr || "";
    const content = post[`content_${lang}`] || post.content_tr || "";
    const excerptSource = post[`excerpt_${lang}`] || post.excerpt_tr || content;
    return {
      id: post.id,
      slug: post.slug || String(post.id || ""),
      date: post.date || "",
      image: post.image || "assets/img/hero-bg.jpg",
      category: post.category || "",
      reviewedBy: post.reviewedBy || post.reviewed_by || "",
      updated: post.updated || "",
      title,
      excerpt: excerptSource
        .replace(/<[^>]+>/g, "")
        .trim()
        .slice(0, 180),
      content,
      title_tr: post.title_tr || "",
      title_en: post.title_en || "",
      content_tr: post.content_tr || "",
      content_en: post.content_en || "",
      raw: post,
    };
  }

  async function loadCsvBlogPosts(path = "data/content.csv") {
    const lang = getCurrentLang();
    if (
      blogCache.path === path &&
      blogCache.lang === lang &&
      blogCache.posts.length
    ) {
      return blogCache.posts;
    }

    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok)
        throw new Error(`Blog CSV yüklenemedi: ${response.status}`);
      const posts = parseCSV(await response.text()).map((post) =>
        csvPostToCard(post, lang),
      );
      blogCache = { path, lang, posts };
      return posts;
    } catch (error) {
      if (typeof window.getBlogPosts === "function") {
        const fallbackPosts = window.getBlogPosts().map((post) => ({
          ...post,
          slug: post.slug || String(post.id || ""),
          category: post.category || "",
          reviewedBy: post.reviewedBy || "",
          updated: post.updated || "",
          excerpt:
            post.excerpt ||
            (post.content || "")
              .replace(/<[^>]+>/g, "")
              .trim()
              .slice(0, 180),
          content: post.content || "",
        }));
        blogCache = { path, lang, posts: fallbackPosts };
        return fallbackPosts;
      }

      throw error;
    }
  }

  async function loadCsvBlogPost(id, path = "data/content.csv") {
    if (!id) return null;
    const posts = await loadCsvBlogPosts(path);
    return (
      posts.find(
        (post) =>
          String(post.id) === String(id) || String(post.slug) === String(id),
      ) || null
    );
  }

  window.GulkentCore = {
    escapeHtml,
    getCurrentLang,
    parseCSV,
    loadCsvBlogPosts,
    loadCsvBlogPost,
  };
})();
