/**
 * VACCINE.JS
 * Gülkent Vet – Çok Dilli Aşı Takvimi
 *
 * Dil kaynağı: VaccineLocales (js/vaccine-locales.js)
 * Dil kaynağı: URL lang parametresi, kaydedilmiş seçim veya html lang (tr, en)
 */

(function () {
  function getCurrentLang() {
    try {
      const requested = new URLSearchParams(window.location.search).get("lang");
      if (["tr", "en"].includes(requested)) return requested;

      const saved = window.localStorage.getItem("selectedLang");
      if (["tr", "en"].includes(saved)) return saved;
    } catch (error) {
      return document.documentElement.lang === "en" ? "en" : "tr";
    }

    return document.documentElement.lang === "en" ? "en" : "tr";
  }

  function L() {
    const lang = getCurrentLang();
    return VaccineLocales[lang] || VaccineLocales.tr;
  }

  function addWeeks(date, weeks) {
    const d = new Date(date.getTime());
    d.setDate(d.getDate() + weeks * 7);
    return d;
  }

  function formatDate(date) {
    const lang = getCurrentLang();
    const localeMap = {
      tr: "tr-TR",
      en: "en-GB",
    };
    const loc = localeMap[lang] || "tr-TR";
    try {
      return date.toLocaleDateString(loc);
    } catch (e) {
      return date.toISOString().split("T")[0];
    }
  }

  function generateSchedule(petType, birthDate) {
    const t = L();
    const s = [];

    if (petType === "kopek") {
      s.push({ label: t.dog_1, date: formatDate(addWeeks(birthDate, 6)) });
      s.push({ label: t.dog_2, date: formatDate(addWeeks(birthDate, 10)) });
      s.push({ label: t.dog_3, date: formatDate(addWeeks(birthDate, 14)) });
      s.push({ label: t.dog_4, date: formatDate(addWeeks(birthDate, 52)) });
    } else {
      s.push({ label: t.cat_1, date: formatDate(addWeeks(birthDate, 8)) });
      s.push({ label: t.cat_2, date: formatDate(addWeeks(birthDate, 12)) });
      s.push({ label: t.cat_3, date: formatDate(addWeeks(birthDate, 16)) });
      s.push({ label: t.cat_4, date: formatDate(addWeeks(birthDate, 52)) });
    }

    return s;
  }

  function renderResult(schedule, petType) {
    const t = L();
    const resultArea = document.getElementById("result-area");
    if (!resultArea) return;

    if (!schedule || schedule.length === 0) {
      resultArea.classList.add("hidden");
      resultArea.innerHTML = "";
      return;
    }

    const petLabel = petType === "kopek" ? t.pet_dog : t.pet_cat;

    resultArea.classList.remove("hidden");
    resultArea.innerHTML = `
      <div class="mt-4 bg-white rounded-2xl p-6 shadow-inner border border-gray-100">
        <h3 class="text-xl font-bold mb-1 text-text-dark">
          ${t.title}
        </h3>
        <p class="text-xs text-gray-500 mb-3">
          (${petLabel})
        </p>
        <ul class="space-y-2 mb-3">
          ${schedule
            .map(
              (item) => `
            <li class="flex justify-between text-sm text-gray-700 border-b border-gray-100 pb-1">
              <span>${item.label}</span>
              <span class="font-bold text-text-dark">${item.date}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
        <p class="text-xs text-gray-500">
          ${t.note}
        </p>
      </div>
    `;
  }

  // HTML'den çağrılan fonksiyon
  window.asiHesapla = function () {
    const t = L();
    const typeEl = document.getElementById("pet-type");
    const dateEl = document.getElementById("birth-date");
    if (!typeEl || !dateEl) return;

    const petType = typeEl.value; // "kedi" veya "kopek"
    const birthStr = dateEl.value;

    if (!birthStr) {
      alert(t.alert_date_missing);
      return;
    }

    const birthDate = new Date(birthStr);
    if (isNaN(birthDate.getTime())) {
      alert(t.alert_date_missing);
      return;
    }

    const schedule = generateSchedule(petType, birthDate);
    renderResult(schedule, petType);
  };

  // SAYFA YÜKLENİRKEN: tür select'ini dile göre doldur
  document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("pet-type");
    if (!select) return;

    function fillOptions() {
      const t = L();
      select.innerHTML = `
        <option value="kedi">${t.pet_cat_label}</option>
        <option value="kopek">${t.pet_dog_label}</option>
      `;
    }

    fillOptions();

    window.addEventListener("languagechange", fillOptions);
  });
})();
