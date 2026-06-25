(function () {
  const key = "gulkentCatVideoConfig";
  const defaults = {
    version: "video-speed-100-1",
    enabled: true,
    size: 34,
    mobileSize: 72,
    desktopRight: 5,
    desktopBottom: 4,
    mobileRight: -16,
    mobileBottom: 2,
    opacity: 100,
    scale: 100,
    speed: 100,
    layer: "front",
    dogEnabled: true,
    dogSize: 16,
    dogMobileSize: 40,
    dogDesktopLeft: 13,
    dogDesktopBottom: 1.4,
    dogMobileLeft: -10,
    dogMobileBottom: 1.4,
    dogOpacity: 100,
    dogScale: 100,
    dogSpeed: 100,
    dogLayer: "front",
    dogMobileScale: 100,
    frenchBulldogEnabled: true,
    frenchBulldogSize: 13,
    frenchBulldogMobileSize: 32,
    frenchBulldogDesktopLeft: 46,
    frenchBulldogDesktopBottom: 1.1,
    frenchBulldogMobileLeft: 36,
    frenchBulldogMobileBottom: 1.2,
    frenchBulldogOpacity: 100,
    frenchBulldogScale: 100,
    frenchBulldogSpeed: 100,
    frenchBulldogLayer: "front",
    frenchBulldogMobileScale: 100,
    mobileScale: 100,
    grayCatEnabled: true,
    grayCatSize: 13,
    grayCatMobileSize: 34,
    grayCatDesktopRight: 3,
    grayCatDesktopTop: 15,
    grayCatMobileRight: -13,
    grayCatMobileBottom: 13,
    grayCatOpacity: 100,
    grayCatScale: 100,
    grayCatSpeed: 100,
    grayCatMobileScale: 100,
    grayCatLayer: "behind",
    loungeCatEnabled: true,
    loungeCatSize: 16,
    loungeCatMobileSize: 38,
    loungeCatDesktopRight: 24,
    loungeCatDesktopBottom: 0.2,
    loungeCatMobileRight: -8,
    loungeCatMobileBottom: 5.6,
    loungeCatOpacity: 100,
    loungeCatScale: 100,
    loungeCatSpeed: 100,
    loungeCatMobileScale: 100,
    loungeCatLayer: "behind",
    footerDogcatEnabled: true,
    footerDogcatSize: 42,
    footerDogcatMobileSize: 92,
    footerDogcatRight: 3,
    footerDogcatBottom: 0.1,
    footerDogcatMobileRight: -22,
    footerDogcatMobileBottom: 1.2,
    footerDogcatOpacity: 100,
    footerDogcatScale: 100,
    footerDogcatMobileScale: 100,
    footerDogcatSpeed: 100,
  };

  function decodeConfigPayload(payload) {
    try {
      const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
      const padded = normalized.padEnd(
        Math.ceil(normalized.length / 4) * 4,
        "=",
      );
      const json = decodeURIComponent(escape(atob(padded)));
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  function importConfigFromUrl() {
    const payload = new URLSearchParams(window.location.search).get(
      "petConfig",
    );
    if (!payload) return;
    const config = decodeConfigPayload(payload);
    if (!config || typeof config !== "object") return;
    localStorage.setItem(key, JSON.stringify({ ...defaults, ...config }));
  }

  importConfigFromUrl();

  function readConfig() {
    try {
      const stored = JSON.parse(localStorage.getItem(key) || "{}");
      if (stored.version !== defaults.version) return { ...defaults };
      return { ...defaults, ...stored };
    } catch {
      return { ...defaults };
    }
  }

  function writeConfig(config) {
    localStorage.setItem(key, JSON.stringify({ ...defaults, ...config }));
    applyConfig();
  }

  function applyConfigObject(configInput) {
    const config = { ...defaults, ...configInput };
    const root = document.documentElement;
    const stage = document.querySelector(".cat-clinic-video");
    const dogStage = document.querySelector(".dog-stage");
    const frenchBulldogStage = document.querySelector(".french-bulldog-stage");
    const grayCatStage = document.querySelector(".grikedi-stage");
    const loungeCatStage = document.querySelector(".lounging-cat-stage");
    const footerDogcatStages = document.querySelectorAll(".footer-dogcat");
    const speedMap = [
      { selector: ".cat-video", value: config.speed },
      { selector: ".dog-video", value: config.dogSpeed },
      { selector: ".french-bulldog-video", value: config.frenchBulldogSpeed },
      { selector: ".grikedi-video", value: config.grayCatSpeed },
      { selector: ".lounging-cat-video", value: config.loungeCatSpeed },
      { selector: ".footer-dogcat-video", value: config.footerDogcatSpeed },
    ];

    root.style.setProperty("--cat-video-width", `min(${config.size}vw, 680px)`);
    root.style.setProperty(
      "--cat-video-mobile-width",
      `${config.mobileSize}vw`,
    );
    root.style.setProperty("--cat-video-right", `${config.desktopRight}vw`);
    root.style.setProperty("--cat-video-bottom", `${config.desktopBottom}rem`);
    root.style.setProperty(
      "--cat-video-mobile-right",
      `${config.mobileRight}vw`,
    );
    root.style.setProperty(
      "--cat-video-mobile-bottom",
      `${config.mobileBottom}rem`,
    );
    root.style.setProperty("--cat-video-opacity", String(config.opacity / 100));
    root.style.setProperty("--cat-video-scale", String(config.scale / 100));
    root.style.setProperty(
      "--cat-video-mobile-scale",
      String(config.mobileScale / 100),
    );
    root.style.setProperty(
      "--cat-video-z",
      config.layer === "behind" ? "1" : "4",
    );
    root.style.setProperty(
      "--dog-video-width",
      `min(${config.dogSize}vw, 560px)`,
    );
    root.style.setProperty(
      "--dog-video-mobile-width",
      `${config.dogMobileSize}vw`,
    );
    root.style.setProperty("--dog-video-left", `${config.dogDesktopLeft}vw`);
    root.style.setProperty(
      "--dog-video-bottom",
      `${config.dogDesktopBottom}rem`,
    );
    root.style.setProperty(
      "--dog-video-mobile-left",
      `${config.dogMobileLeft}vw`,
    );
    root.style.setProperty(
      "--dog-video-mobile-bottom",
      `${config.dogMobileBottom}rem`,
    );
    root.style.setProperty(
      "--dog-video-opacity",
      String(config.dogOpacity / 100),
    );
    root.style.setProperty("--dog-video-scale", String(config.dogScale / 100));
    root.style.setProperty(
      "--dog-video-mobile-scale",
      String(config.dogMobileScale / 100),
    );
    root.style.setProperty(
      "--dog-video-z",
      config.dogLayer === "behind" ? "8" : "17",
    );
    root.style.setProperty(
      "--french-bulldog-width",
      `min(${config.frenchBulldogSize}vw, 360px)`,
    );
    root.style.setProperty(
      "--french-bulldog-mobile-width",
      `${config.frenchBulldogMobileSize}vw`,
    );
    root.style.setProperty(
      "--french-bulldog-left",
      `${config.frenchBulldogDesktopLeft}vw`,
    );
    root.style.setProperty(
      "--french-bulldog-bottom",
      `${config.frenchBulldogDesktopBottom}rem`,
    );
    root.style.setProperty(
      "--french-bulldog-mobile-left",
      `${config.frenchBulldogMobileLeft}vw`,
    );
    root.style.setProperty(
      "--french-bulldog-mobile-bottom",
      `${config.frenchBulldogMobileBottom}rem`,
    );
    root.style.setProperty(
      "--french-bulldog-opacity",
      String(config.frenchBulldogOpacity / 100),
    );
    root.style.setProperty(
      "--french-bulldog-scale",
      String(config.frenchBulldogScale / 100),
    );
    root.style.setProperty(
      "--french-bulldog-mobile-scale",
      String(config.frenchBulldogMobileScale / 100),
    );
    root.style.setProperty(
      "--french-bulldog-z",
      config.frenchBulldogLayer === "behind" ? "9" : "16",
    );
    root.style.setProperty(
      "--gray-cat-width",
      `min(${config.grayCatSize}vw, 420px)`,
    );
    root.style.setProperty(
      "--gray-cat-mobile-width",
      `${config.grayCatMobileSize}vw`,
    );
    root.style.setProperty(
      "--gray-cat-right",
      `${config.grayCatDesktopRight}vw`,
    );
    root.style.setProperty("--gray-cat-top", `${config.grayCatDesktopTop}rem`);
    root.style.setProperty(
      "--gray-cat-mobile-right",
      `${config.grayCatMobileRight}vw`,
    );
    root.style.setProperty(
      "--gray-cat-mobile-bottom",
      `${config.grayCatMobileBottom}rem`,
    );
    root.style.setProperty(
      "--gray-cat-opacity",
      String(config.grayCatOpacity / 100),
    );
    root.style.setProperty(
      "--gray-cat-scale",
      String(config.grayCatScale / 100),
    );
    root.style.setProperty(
      "--gray-cat-mobile-scale",
      String(config.grayCatMobileScale / 100),
    );
    root.style.setProperty(
      "--gray-cat-z",
      config.grayCatLayer === "behind" ? "10" : "18",
    );
    root.style.setProperty(
      "--lounge-cat-width",
      `min(${config.loungeCatSize}vw, 460px)`,
    );
    root.style.setProperty(
      "--lounge-cat-mobile-width",
      `${config.loungeCatMobileSize}vw`,
    );
    root.style.setProperty(
      "--lounge-cat-right",
      `${config.loungeCatDesktopRight}vw`,
    );
    root.style.setProperty(
      "--lounge-cat-bottom",
      `${config.loungeCatDesktopBottom}rem`,
    );
    root.style.setProperty(
      "--lounge-cat-mobile-right",
      `${config.loungeCatMobileRight}vw`,
    );
    root.style.setProperty(
      "--lounge-cat-mobile-bottom",
      `${config.loungeCatMobileBottom}rem`,
    );
    root.style.setProperty(
      "--lounge-cat-opacity",
      String(config.loungeCatOpacity / 100),
    );
    root.style.setProperty(
      "--lounge-cat-scale",
      String(config.loungeCatScale / 100),
    );
    root.style.setProperty(
      "--lounge-cat-mobile-scale",
      String(config.loungeCatMobileScale / 100),
    );
    root.style.setProperty(
      "--lounge-cat-z",
      config.loungeCatLayer === "behind" ? "11" : "18",
    );
    root.style.setProperty(
      "--footer-dogcat-width",
      `min(${config.footerDogcatSize}vw, 520px)`,
    );
    root.style.setProperty(
      "--footer-dogcat-mobile-width",
      `${config.footerDogcatMobileSize}vw`,
    );
    root.style.setProperty(
      "--footer-dogcat-right",
      `${config.footerDogcatRight}vw`,
    );
    root.style.setProperty(
      "--footer-dogcat-bottom",
      `${config.footerDogcatBottom}rem`,
    );
    root.style.setProperty(
      "--footer-dogcat-mobile-right",
      `${config.footerDogcatMobileRight}vw`,
    );
    root.style.setProperty(
      "--footer-dogcat-mobile-bottom",
      `${config.footerDogcatMobileBottom}rem`,
    );
    root.style.setProperty(
      "--footer-dogcat-opacity",
      String(config.footerDogcatOpacity / 100),
    );
    root.style.setProperty(
      "--footer-dogcat-scale",
      String(config.footerDogcatScale / 100),
    );
    root.style.setProperty(
      "--footer-dogcat-mobile-scale",
      String(config.footerDogcatMobileScale / 100),
    );

    if (stage) {
      stage.style.display = config.enabled ? "" : "none";
    }
    if (dogStage) {
      dogStage.style.display = config.dogEnabled ? "" : "none";
    }
    if (frenchBulldogStage) {
      frenchBulldogStage.style.display = config.frenchBulldogEnabled
        ? ""
        : "none";
    }
    if (grayCatStage) {
      grayCatStage.style.display = config.grayCatEnabled ? "" : "none";
    }
    if (loungeCatStage) {
      loungeCatStage.style.display = config.loungeCatEnabled ? "" : "none";
    }
    footerDogcatStages.forEach((footerDogcatStage) => {
      footerDogcatStage.style.display = config.footerDogcatEnabled
        ? ""
        : "none";
    });

    speedMap.forEach(({ selector, value }) => {
      const rate = Math.max(0.2, Math.min(1.5, value / 100));
      document.querySelectorAll(`video${selector}`).forEach((video) => {
        video.playbackRate = rate;
      });
      document.querySelectorAll(`canvas${selector}`).forEach((canvas) => {
        canvas.dataset.alphaSpeed = String(value);
      });
    });

    if (window.MobileAlphaCanvas) window.MobileAlphaCanvas.refresh();
  }

  function applyConfig() {
    applyConfigObject(readConfig());
  }

  window.GulkentCatVideoConfig = {
    defaults,
    read: readConfig,
    write: writeConfig,
    apply: applyConfig,
    applyObject: applyConfigObject,
    reset: function () {
      localStorage.removeItem(key);
      applyConfig();
    },
  };

  document.addEventListener("DOMContentLoaded", applyConfig);
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll(
        "video.cat-video, video.dog-video, video.french-bulldog-video, video.grikedi-video, video.lounging-cat-video, video.footer-dogcat-video",
      )
      .forEach((video) => {
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        if (!video.currentSrc && video.querySelectorAll("source").length === 0)
          return;
        applyConfig();
        video.addEventListener("pause", () => {
          if (!video.ended && document.visibilityState === "visible") {
            video.play().catch(() => {});
          }
        });
        video.addEventListener("ended", () => {
          video.currentTime = 0;
          video.play().catch(() => {});
        });
        video.play().catch(() => {});
      });
  });
})();
