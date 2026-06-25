(function () {
  const storageKey = "wavy-theme-colors";

  // Pastel renk paleti - tüm seçenekler
  const pastelPalette = {
    cream: "#fff2e4",
    peach: "#ffd2c1",
    coral: "#ffc8b8",
    "coral-soft": "#ffd0c4",
    pink: "#ffbfd8",
    rose: "#ffb8cc",
    lavender: "#ebd6ff",
    lilac: "#dbcbfa",
    mint: "#b8ebd0",
    aqua: "#bee6e2",
    cyan: "#adebe6",
    blue: "#c3e4ff",
    sky: "#b8dcfa",
    yellow: "#ffe9a6",
    vanilla: "#fff6cc",
  };

  const sections = [
    "hero",
    "services",
    "clinic",
    "doctors",
    "calm-care",
    "asi-hesaplayici",
    "appointment-cta",
    "contact",
    "footer",
  ];

  const defaultColors = {
    hero: "#ffd2c1",
    services: "#b8ebd0",
    clinic: "#bee6e2",
    doctors: "#dbcbfa",
    "calm-care": "#ffe9a6",
    "asi-hesaplayici": "#c3e4ff",
    "appointment-cta": "#ffc8b8",
    contact: "#ffb8cc",
    footer: "#fff2e4",
  };

  const sectionLabels = {
    hero: "Giriş & İşlemler",
    services: "Hizmetler",
    clinic: "Klinik",
    doctors: "Hekimler",
    "calm-care": "Sakin Yaklaşım",
    "asi-hesaplayici": "Aşı Hesaplama",
    "appointment-cta": "Randevu",
    contact: "İletişim",
    footer: "Alt Bilgi (Footer)",
  };

  const getSavedColors = () => {
    try {
      const savedStr = window.localStorage.getItem(storageKey);
      if (!savedStr) return { ...defaultColors };
      const saved = JSON.parse(savedStr);
      // Eski renkler kayitliysa (seftali #ffe2d6 ise) temizle ve yeni koyu pastel renkleri uygula
      if (saved.hero === "#ffe2d6") {
        window.localStorage.removeItem(storageKey);
        return { ...defaultColors };
      }
      return { ...defaultColors, ...saved };
    } catch {
      return { ...defaultColors };
    }
  };

  const saveColors = (colors) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(colors));
    } catch {
      // localStorage unavailable
    }
  };

  const applyColors = (colors) => {
    let style = document.getElementById("wavy-theme-colors-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "wavy-theme-colors-style";
      document.head.appendChild(style);
    }

    let css = `html[data-theme="wavy"] {\n`;

    sections.forEach((section) => {
      const color = colors[section] || defaultColors[section];
      css += `  --wavy-section-bg-${section}: ${color};\n`;
    });

    const height = colors._waveHeight || 90;
    const speed = colors._waveSpeed || 5;
    const durations = [0, 45, 35, 27, 22, 18, 14, 10, 8, 6, 4.5];
    const duration = durations[speed] || 18;

    css += `  --wavy-wave-height: ${height}px;\n`;
    css += `  --wavy-wave-duration: ${duration}s;\n`;

    css += `}\n\n`;

    /* Hero ve Quick-actions ayni section olarak kabul ediliyor */
    css += `html[data-theme="wavy"] .hero::before,\n`;
    css += `html[data-theme="wavy"] .hero::after { display: none !important; }\n`;

    /* Her section icin dogru selector kullan */
    sections.forEach((section) => {
      const color = colors[section] || defaultColors[section];
      if (section === "hero") {
        css += `html[data-theme="wavy"] .hero, html[data-theme="wavy"] .quick-actions { background-color: ${color} !important; background-image: none !important; }\n`;
      } else if (section === "asi-hesaplayici") {
        css += `html[data-theme="wavy"] #asi-hesaplayici { background-color: ${color} !important; }\n`;
      } else if (section === "footer") {
        css += `html[data-theme="wavy"] footer { background-color: ${color} !important; background-image: none !important; }\n`;
      } else {
        css += `html[data-theme="wavy"] .${section} { background-color: ${color} !important; }\n`;
      }
    });

    style.textContent = css;

    /* Divider'lari guncelle */
    document.dispatchEvent(new CustomEvent("gulkent:wavycolorschange"));
  };

  const createColorPicker = () => {
    const colors = getSavedColors();

    const picker = document.createElement("div");
    picker.id = "wavy-color-picker";
    picker.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 12px 48px rgba(48, 52, 59, 0.18);
      padding: 20px;
      z-index: 10000;
      font-family: "Manrope", sans-serif;
      max-width: 360px;
      display: none;
    `;

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #30343b;">Wavy Renkleri</h3>
        <button id="wavy-color-close" style="background: none; border: none; font-size: 20px; cursor: pointer;">✕</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px; max-height: 400px; overflow-y: auto;">
    `;

    sections.forEach((section) => {
      const label = sectionLabels[section] || section;

      html += `
        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: #656971; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
            ${label}
          </label>
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;">
      `;

      Object.entries(pastelPalette).forEach(([name, hex]) => {
        const isSelected = colors[section] === hex;
        html += `
          <button
            class="wavy-color-swatch"
            data-section="${section}"
            data-color="${hex}"
            style="
              width: 100%;
              aspect-ratio: 1;
              border: ${isSelected ? "3px solid #30343b" : "1px solid #ddd"};
              border-radius: 50%;
              background-color: ${hex};
              cursor: pointer;
              transition: all 200ms ease;
              box-shadow: ${isSelected ? "0 4px 12px rgba(48, 52, 59, 0.18)" : "none"};
            "
            title="${name}"
          />
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    const height = colors._waveHeight || 90;
    const speed = colors._waveSpeed || 5;
    const frequency = colors._waveFrequency || 2;

    html += `
      </div>
      <!-- Dalga Ayarları -->
      <div style="border-top: 1px solid #eee; margin-top: 14px; padding-top: 14px;">
        <h4 style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; color: #656971; text-transform: uppercase; letter-spacing: 0.05em;">Dalga Ayarları</h4>
        
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: #30343b; margin-bottom: 4px;">
            <span>Dalga Boyutu (Yükseklik)</span>
            <span id="wavy-height-val" style="color: #656971;">${height}px</span>
          </div>
          <input type="range" id="wavy-height-slider" min="40" max="160" value="${height}" style="width: 100%; cursor: pointer;">
        </div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: #30343b; margin-bottom: 4px;">
            <span>Dalga Sayısı (Sıklık)</span>
            <span id="wavy-frequency-val" style="color: #656971;">${frequency}</span>
          </div>
          <input type="range" id="wavy-frequency-slider" min="1" max="12" value="${frequency}" style="width: 100%; cursor: pointer;">
        </div>

        <div style="margin-bottom: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: #30343b; margin-bottom: 4px;">
            <span>Dalgalanma Hızı</span>
            <span id="wavy-speed-val" style="color: #656971;">${speed}</span>
          </div>
          <input type="range" id="wavy-speed-slider" min="1" max="10" value="${speed}" style="width: 100%; cursor: pointer;">
        </div>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 16px;">
        <button id="wavy-color-reset" style="flex: 1; padding: 10px; background: #f0f0f0; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">Sıfırla</button>
      </div>
    `;

    picker.innerHTML = html;
    document.body.appendChild(picker);

    // Renk secimi
    picker.querySelectorAll(".wavy-color-swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        const section = btn.dataset.section;
        const color = btn.dataset.color;
        colors[section] = color;
        saveColors(colors);
        applyColors(colors);
        /* Eski picker'i kaldir, yenisini olustur */
        const oldPicker = document.getElementById("wavy-color-picker");
        if (oldPicker) oldPicker.remove();
        createColorPicker();
      });
    });

    // Sliders
    const heightSlider = picker.querySelector("#wavy-height-slider");
    const heightVal = picker.querySelector("#wavy-height-val");
    heightSlider.addEventListener("input", (e) => {
      const val = e.target.value;
      heightVal.textContent = val + "px";
      colors._waveHeight = Number(val);
      saveColors(colors);
      applyColors(colors);
    });

    const frequencySlider = picker.querySelector("#wavy-frequency-slider");
    const frequencyVal = picker.querySelector("#wavy-frequency-val");
    frequencySlider.addEventListener("input", (e) => {
      const val = e.target.value;
      frequencyVal.textContent = val;
      colors._waveFrequency = Number(val);
      saveColors(colors);
      applyColors(colors);
    });

    const speedSlider = picker.querySelector("#wavy-speed-slider");
    const speedVal = picker.querySelector("#wavy-speed-val");
    speedSlider.addEventListener("input", (e) => {
      const val = e.target.value;
      speedVal.textContent = val;
      colors._waveSpeed = Number(val);
      saveColors(colors);
      applyColors(colors);
    });

    // Kapat
    document
      .getElementById("wavy-color-close")
      ?.addEventListener("click", () => {
        picker.style.display = "none";
      });

    // Sifirla
    document
      .getElementById("wavy-color-reset")
      ?.addEventListener("click", () => {
        Object.keys(defaultColors).forEach((key) => {
          colors[key] = defaultColors[key];
        });
        colors._waveHeight = 90;
        colors._waveFrequency = 2;
        colors._waveSpeed = 5;
        saveColors(colors);
        applyColors(colors);
        const oldPicker = document.getElementById("wavy-color-picker");
        if (oldPicker) oldPicker.remove();
        createColorPicker();
      });

    // Toggle butonu
    const toggleBtn = document.getElementById("wavy-color-toggle");
    if (!toggleBtn) {
      const btn = document.createElement("button");
      btn.id = "wavy-color-toggle";
      btn.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffd2c1, #b8ebd0, #ffbfd8, #bee6e2);
        border: none;
        box-shadow: 0 4px 16px rgba(48, 52, 59, 0.16);
        cursor: pointer;
        font-size: 24px;
        z-index: 9999;
        transition: all 200ms ease;
      `;
      btn.innerHTML = "🎨";
      btn.addEventListener("click", () => {
        picker.style.display =
          picker.style.display === "none" ? "block" : "none";
      });
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.1)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
      });
      document.body.appendChild(btn);
    }

    return picker;
  };

  // İnit
  const init = () => {
    // Wavy temada mı kontrol et
    if (document.documentElement.dataset.theme === "wavy") {
      const colors = getSavedColors();
      applyColors(colors);
      createColorPicker();
    }

    // Tema değişimi dinle
    document.addEventListener("gulkent:themechange", (e) => {
      const picker = document.getElementById("wavy-color-picker");
      const toggle = document.getElementById("wavy-color-toggle");
      if (e.detail.theme === "wavy") {
        const colors = getSavedColors();
        applyColors(colors);
        createColorPicker();
      } else {
        if (picker) picker.remove();
        if (toggle) toggle.remove();
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
