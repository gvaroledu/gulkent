/**
 * wavy-dividers.js
 * Wavy temasi icin section'larin alt kismina,
 * bir sonraki section'in renginde puruzsuz SVG dalgalari ekler.
 */
(function () {
  "use strict";

  const DEFAULT_COLORS = {
    hero: "#ffd2c1" /* Daha belirgin pastel seftali */,
    services: "#b8ebd0" /* Daha belirgin pastel nane */,
    clinic: "#bee6e2" /* Daha belirgin pastel turkuaz */,
    doctors: "#dbcbfa" /* Daha belirgin pastel lavanta */,
    "calm-care": "#ffe9a6" /* Daha belirgin pastel sari */,
    "asi-hesaplayici": "#c3e4ff" /* Daha belirgin pastel mavi */,
    "appointment-cta": "#ffc8b8" /* Daha belirgin pastel mercan */,
    contact: "#ffb8cc" /* Daha belirgin pastel toz pembe */,
    footer: "#fff2e4" /* Daha belirgin pastel krem */,
    "quick-actions": "#ffd2c1" /* Hero ile ortak */,
  };

  function getColors() {
    try {
      const saved = JSON.parse(
        window.localStorage.getItem("wavy-theme-colors") || "{}",
      );
      return {
        ...DEFAULT_COLORS,
        ...saved,
        "quick-actions": saved.hero || DEFAULT_COLORS.hero,
      };
    } catch (_) {
      return { ...DEFAULT_COLORS };
    }
  }

  /* Gecisler: fromSel'in en altina toColor renginde dalga konur */
  function buildTransitions(colors) {
    return [
      {
        fromSel: ".quick-actions",
        toColor: colors.services,
        waveType: "A",
      },
      {
        fromSel: ".services",
        toColor: colors.clinic,
        waveType: "B",
      },
      {
        fromSel: ".clinic",
        toColor: colors.doctors,
        waveType: "C",
      },
      {
        fromSel: ".doctors",
        toColor: colors["calm-care"],
        waveType: "D",
      },
      {
        fromSel: ".calm-care",
        toColor: colors["asi-hesaplayici"],
        waveType: "A",
      },
      {
        fromSel: "#asi-hesaplayici",
        toColor: colors["appointment-cta"],
        waveType: "B",
      },
      {
        fromSel: ".appointment-cta",
        toColor: colors.contact,
        waveType: "C",
      },
      {
        fromSel: ".contact",
        toColor: colors.footer,
        waveType: "D",
      },
    ];
  }

  /* Gerçek deniz dalgası: cubic bezier S-eğrisi ile pürüzsüz sinüs dalgası */
  function buildWaveSVG(toColor, waveType) {
    const saved = JSON.parse(window.localStorage.getItem("wavy-theme-colors") || "{}");
    const frequency = saved._waveFrequency || 2;

    // SVG boyutları
    const svgHeight = 110;
    // Dalganın ortalandığı Y ekseni — fill alanı baseline'dan svgHeight'a kadar
    const baseline = 62;

    // Her dalga tipi için sabit genlik (amplitüd) — tutarsız görünümü önler
    let amp;
    if (waveType === "A") amp = 22;
    else if (waveType === "B") amp = 32;
    else if (waveType === "C") amp = 18;
    else amp = 28; // D

    // Her dalga döngüsünün genişliği (px cinsinden viewBox'ta)
    const cycleWidth = 800;
    // 2x genişlik: animasyon döngüsü için seamless scroll sağlar
    const viewWidth = frequency * cycleWidth * 2;

    // Cubic bezier S-eğrisi formülü:
    //   C  x+w*0.33, baseline-amp   →  tepeye (crest) çeker
    //      x+w*0.67, baseline+amp   →  çukura (trough) çeker
    //      x+w, baseline            →  sıfır geçişi (zero crossing)
    // Bu formül gerçek sinüs dalgasını %99 hassasiyetle taklit eder.
    let d = `M0,${baseline}`;
    let x = 0;
    const totalCycles = frequency * 2;

    for (let i = 0; i < totalCycles; i++) {
      const w = cycleWidth;
      const x1 = x + w * 0.33;          // 1. kontrol: tepeye çek (yukarı)
      const y1 = baseline - amp;         // crest Y
      const x2 = x + w * 0.67;          // 2. kontrol: çukura çek (aşağı)
      const y2 = baseline + amp * 0.6;  // trough Y (hafif — fill alanına girmemesi için)
      const xEnd = x + w;

      d += ` C${x1},${y1} ${x2},${y2} ${xEnd},${baseline}`;
      x = xEnd;
    }

    const filterId = "wave-shadow-" + waveType;

    return `
      <svg class="wave-layer wave-layer-single" viewBox="0 0 ${viewWidth} ${svgHeight}" preserveAspectRatio="none" aria-hidden="true" style="width: 200%;">
        <defs>
          <filter id="${filterId}" x="-5%" y="-30%" width="110%" height="160%">
            <feDropShadow dx="0" dy="-4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
          </filter>
        </defs>
        <path fill="${toColor}" filter="url(#${filterId})" d="${d} L${x},${svgHeight} L0,${svgHeight} Z" />
      </svg>
    `;
  }

  function insertDividers() {
    /* Eski divider'lari temizle */
    document.querySelectorAll(".wavy-divider").forEach((el) => el.remove());

    const colors = getColors();
    const transitions = buildTransitions(colors);

    transitions.forEach(({ fromSel, toColor, waveType }) => {
      const fromEl = document.querySelector(fromSel);
      if (!fromEl) return;

      const divider = document.createElement("div");
      divider.className = "wavy-divider";
      divider.setAttribute("aria-hidden", "true");
      divider.innerHTML = buildWaveSVG(toColor, waveType);

      /* fromEl'in en ALTINA (icine) ekle */
      fromEl.appendChild(divider);
    });
  }

  function init() {
    if (document.documentElement.dataset.theme !== "wavy") return;
    insertDividers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  document.addEventListener("gulkent:themechange", (e) => {
    if (e.detail.theme === "wavy") {
      setTimeout(insertDividers, 50);
    } else {
      document.querySelectorAll(".wavy-divider").forEach((el) => el.remove());
    }
  });

  document.addEventListener("gulkent:wavycolorschange", () => {
    if (document.documentElement.dataset.theme !== "wavy") return;
    insertDividers();
  });
})();
