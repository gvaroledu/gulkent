(function () {
  const storageKey = "gulkent-theme";
  const glassStorageKey = "gulkent-glass-settings";
  const themeLabels = {
    gulkent: "Gülkent Tema",
    wavy: "Wavy Tema",
  };
  const defaultGlassSettings = {
    color: "#ffffff",
    alpha: 0.14,
    highlight: 0.2,
    tint: 0.06,
    border: 0.42,
    blur: 18,
    saturate: 1.16,
  };

  const normalizeTheme = (value) => (value === "wavy" ? "wavy" : "gulkent");

  const getSavedTheme = () => {
    try {
      return normalizeTheme(window.localStorage.getItem(storageKey));
    } catch {
      return "gulkent";
    }
  };

  const setTheme = (theme) => {
    const nextTheme = normalizeTheme(theme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // localStorage unavailable; keep the in-memory theme only.
    }

    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      const isActive = button.getAttribute("data-theme-choice") === nextTheme;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.textContent =
        themeLabels[button.getAttribute("data-theme-choice")] ||
        button.textContent;
    });

    document.dispatchEvent(
      new CustomEvent("gulkent:themechange", { detail: { theme: nextTheme } }),
    );
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const hexToRgb = (hex) => {
    const clean = String(hex || "").replace("#", "");
    if (!/^[0-9a-fA-F]{6}$/.test(clean)) return [255, 255, 255];
    return [
      parseInt(clean.slice(0, 2), 16),
      parseInt(clean.slice(2, 4), 16),
      parseInt(clean.slice(4, 6), 16),
    ];
  };

  const readGlassSettings = () => {
    try {
      const saved = JSON.parse(
        window.localStorage.getItem(glassStorageKey) || "{}",
      );
      return {
        ...defaultGlassSettings,
        ...saved,
      };
    } catch {
      return { ...defaultGlassSettings };
    }
  };

  const writeGlassSettings = (settings) => {
    try {
      window.localStorage.setItem(glassStorageKey, JSON.stringify(settings));
    } catch {
      // localStorage unavailable; keep current runtime values.
    }
  };

  const applyGlassSettings = (settings) => {
    const next = {
      color: settings.color || defaultGlassSettings.color,
      alpha: clamp(Number(settings.alpha), 0, 0.8),
      highlight: clamp(Number(settings.highlight), 0, 0.8),
      tint: clamp(Number(settings.tint), 0, 0.8),
      border: clamp(Number(settings.border), 0, 1),
      blur: clamp(Number(settings.blur), 0, 40),
      saturate: clamp(Number(settings.saturate), 0.8, 1.8),
    };
    const [r, g, b] = hexToRgb(next.color);
    const root = document.documentElement;
    root.style.setProperty("--gulkent-glass-rgb", `${r} ${g} ${b}`);
    root.style.setProperty("--gulkent-glass-alpha", next.alpha.toFixed(2));
    root.style.setProperty(
      "--gulkent-glass-highlight-alpha",
      next.highlight.toFixed(2),
    );
    root.style.setProperty("--gulkent-glass-tint-alpha", next.tint.toFixed(2));
    root.style.setProperty(
      "--gulkent-glass-border-alpha",
      next.border.toFixed(2),
    );
    root.style.setProperty(
      "--gulkent-glass-blur",
      `${Math.round(next.blur)}px`,
    );
    root.style.setProperty(
      "--gulkent-glass-saturate",
      next.saturate.toFixed(2),
    );
    return next;
  };

  const buildGlassControl = () => {
    if (document.getElementById("gulkent-glass-control")) return;

    let settings = applyGlassSettings(readGlassSettings());

    const control = document.createElement("div");
    control.id = "gulkent-glass-control";
    control.className = "gulkent-glass-control";

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "gulkent-glass-control__toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Cam Ayarı";

    const panel = document.createElement("div");
    panel.className = "gulkent-glass-control__panel";

    const head = document.createElement("div");
    head.className = "gulkent-glass-control__head";
    const title = document.createElement("div");
    title.className = "gulkent-glass-control__title";
    title.textContent = "Buzlu Cam";
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "gulkent-glass-control__reset";
    reset.textContent = "Sıfırla";
    head.append(title, reset);
    panel.appendChild(head);

    const controls = [
      {
        key: "alpha",
        label: "Şeffaflık",
        min: 0,
        max: 0.5,
        step: 0.01,
        suffix: "",
      },
      { key: "blur", label: "Blur", min: 0, max: 40, step: 1, suffix: "px" },
      {
        key: "highlight",
        label: "Parlama",
        min: 0,
        max: 0.5,
        step: 0.01,
        suffix: "",
      },
      { key: "border", label: "Kenar", min: 0, max: 1, step: 0.01, suffix: "" },
      {
        key: "saturate",
        label: "Renk canlılığı",
        min: 0.8,
        max: 1.8,
        step: 0.01,
        suffix: "",
      },
    ];

    const inputs = new Map();

    const updateValueText = (key) => {
      const field = inputs.get(key);
      if (!field) return;
      const value = Number(field.input.value);
      field.value.textContent =
        field.suffix === "px" ? `${Math.round(value)}px` : value.toFixed(2);
    };

    const commit = () => {
      settings = applyGlassSettings(settings);
      writeGlassSettings(settings);
      for (const item of controls) updateValueText(item.key);
    };

    const colorField = document.createElement("label");
    colorField.className = "gulkent-glass-control__field";
    colorField.innerHTML = `<span class="gulkent-glass-control__label">Renk</span>`;
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = settings.color;
    colorInput.addEventListener("input", () => {
      settings.color = colorInput.value;
      commit();
    });
    colorField.appendChild(colorInput);
    panel.appendChild(colorField);

    for (const item of controls) {
      const field = document.createElement("label");
      field.className = "gulkent-glass-control__field";
      const label = document.createElement("span");
      label.className = "gulkent-glass-control__label";
      label.textContent = item.label;
      const value = document.createElement("span");
      value.className = "gulkent-glass-control__value";
      const input = document.createElement("input");
      input.type = "range";
      input.min = String(item.min);
      input.max = String(item.max);
      input.step = String(item.step);
      input.value = String(settings[item.key]);
      input.addEventListener("input", () => {
        settings[item.key] = Number(input.value);
        commit();
      });
      field.append(label, value, input);
      panel.appendChild(field);
      inputs.set(item.key, { input, value, suffix: item.suffix });
      updateValueText(item.key);
    }

    reset.addEventListener("click", () => {
      settings = { ...defaultGlassSettings };
      colorInput.value = settings.color;
      for (const item of controls) {
        const field = inputs.get(item.key);
        if (field) field.input.value = String(settings[item.key]);
      }
      commit();
    });

    toggle.addEventListener("click", () => {
      const isOpen = control.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (event) => {
      if (!control.classList.contains("is-open")) return;
      if (control.contains(event.target)) return;
      control.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      control.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });

    control.append(toggle, panel);
    document.body.appendChild(control);
  };

  const buildSwitcher = () => {
    if (document.getElementById("theme-switcher")) return;

    const switcher = document.createElement("div");
    switcher.id = "theme-switcher";
    switcher.className = "theme-switcher";
    switcher.setAttribute("role", "navigation");
    switcher.setAttribute("aria-label", "Tema seçici");

    const label = document.createElement("span");
    label.className = "theme-switcher__label";
    label.textContent = "Tema";

    const buttons = document.createElement("div");
    buttons.className = "theme-switcher__buttons";

    for (const theme of ["gulkent", "wavy"]) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "theme-switcher__button";
      button.setAttribute("data-theme-choice", theme);
      button.textContent = themeLabels[theme];
      button.addEventListener("click", () => setTheme(theme));
      buttons.appendChild(button);
    }

    switcher.appendChild(label);
    switcher.appendChild(buttons);
    document.body.prepend(switcher);
  };

  const init = () => {
    setTheme(getSavedTheme());
    buildSwitcher();
    buildGlassControl();
    setTheme(getSavedTheme());
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
