// js/config.js

// Blog yazıları - aktif arayüz dili yalnızca Türkçe ve İngilizce.
const blogPosts = {
  tr: [
    {
      id: 1,
      slug: "core-vaccine-importance",
      title: "Karma Aşı Neden Önemli?",
      excerpt:
        "Yavru ve erişkin dostlarda aşılama, muayene ve risk değerlendirmesiyle planlandığında en güçlü koruyucu hekimlik adımlarından biridir.",
      image: "assets/img/hero-bg.jpg",
      date: "01 Şubat 2026",
      category: "Koruyucu Hekimlik",
      reviewedBy: "Gülkent Veteriner Hekimleri",
      updated: "23 Haziran 2026",
      content: `
                <p>Karma aşılar, özellikle yavru dönemde bağışıklık sistemi henüz olgunlaşmamış kedi ve köpekleri ciddi enfeksiyonlara karşı korumaya yardımcı olur. Aşılama kararı; yaş, önceki aşı geçmişi, genel sağlık durumu ve yaşam koşulları birlikte değerlendirilerek verilmelidir.</p>

                <p>Yavru hayvanlarda ilk aşı serisi ve hatırlatma dozları hekimin muayenesinden sonra planlanır. Aşıdan önce ateş, iştah, dışkı, parazit durumu ve genel klinik tablo değerlendirilmelidir.</p>

                <h3>Ne zaman randevu almalısınız?</h3>
                <ul>
                    <li>Yavru dostunuzun aşı geçmişi bilinmiyorsa</li>
                    <li>Aşı tarihi geciktiyse veya aşı karnesinde boşluk varsa</li>
                    <li>Yeni sahiplenme, pansiyon, seyahat veya başka hayvanlarla temas planı varsa</li>
                    <li>Halsizlik, kusma, ishal veya ateş gibi belirtiler varsa önce muayene gerekiyorsa</li>
                </ul>

                <p><strong>Not:</strong> Aşı takvimi her hasta için aynı değildir. En doğru program muayene ve risk değerlendirmesi sonrası belirlenir.</p>
            `,
    },
    {
      id: 2,
      slug: "parasite-control",
      title: "Kaşıntıdan Fazlası: Parazit Kontrolü",
      excerpt:
        "Kaşıntı yalnızca pire veya keneden kaynaklanmaz; düzenli parazit kontrolü, deri sağlığı ve aile sağlığı birlikte değerlendirilmelidir.",
      image: "assets/img/bg-hero-alt.webp",
      date: "02 Şubat 2026",
      category: "Parazit Kontrolü",
      reviewedBy: "Gülkent Veteriner Hekimleri",
      updated: "23 Haziran 2026",
      content: `
                <p>Pire, kene ve iç parazitler hem hayvan sağlığı hem de bazı zoonoz riskler açısından önemlidir. Ancak kaşıntının tek nedeni parazit değildir; alerji, mantar, uyuz, kulak problemleri, beslenme ve bazı sistemik hastalıklar da benzer belirtiler oluşturabilir.</p>

                <p>Bu nedenle parazit uygulaması rastgele ürün seçimiyle değil; tür, yaş, kilo, yaşam alanı, dışarı çıkma sıklığı ve mevcut klinik bulgulara göre planlanmalıdır.</p>

                <h3>Kontrol planında neler değerlendirilir?</h3>
                <ul>
                    <li>Deri ve tüy muayenesi, kaşıntının yeri ve süresi</li>
                    <li>Kene, pire, uyuz veya mantar şüphesi</li>
                    <li>İç parazit ve dışkı değerlendirmesi ihtiyacı</li>
                    <li>Evde çocuk, yaşlı veya bağışıklığı baskılanmış birey varlığı</li>
                </ul>

                <p><strong>Not:</strong> Ürün ve uygulama aralığı hastaya göre değişir. Yanlış ürün veya doz özellikle yavru, yaşlı ve hasta hayvanlarda risk oluşturabilir.</p>
            `,
    },
    {
      id: 3,
      slug: "neutering-decision",
      title: "Kısırlaştırma Kararı Nasıl Verilmeli?",
      excerpt:
        "Kısırlaştırma bazı hastalık risklerini azaltabilir; doğru zamanlama ve anestezi hazırlığı her hasta için ayrı değerlendirilmelidir.",
      image: "assets/img/hero-bg.png",
      date: "15 Şubat 2026",
      category: "Genel Cerrahi",
      reviewedBy: "Gülkent Veteriner Hekimleri",
      updated: "23 Haziran 2026",
      content: `
                <p>Kısırlaştırma operasyonu üreme kontrolünün yanında bazı üreme sistemi hastalıklarının riskini azaltabilir. Dişi hayvanlarda rahim enfeksiyonu gibi bazı riskler ortadan kalkabilir; meme tümörü riski ise tür, yaş, ırk ve operasyon zamanına göre değişkenlik gösterir. Bu nedenle tüm risklerin tamamen ortadan kalktığını söylemek doğru değildir.</p>

                <p>Operasyon kararı verilirken hastanın yaşı, kilosu, genel muayene bulguları, kan tahlili ihtiyacı, anestezi riski, yaşam tarzı ve hasta yakınının beklentisi birlikte değerlendirilmelidir.</p>

                <h3>Süreç nasıl ilerler?</h3>
                <ul>
                    <li>Operasyon öncesi muayene ve gerekli görülen kan kontrolleri yapılır</li>
                    <li>Anestezi ve ağrı yönetimi hastaya göre planlanır</li>
                    <li>Operasyon sonrası dikiş bakımı, yakalık, beslenme ve hareket kısıtlaması anlatılır</li>
                    <li>Kontrol randevusu ve olası uyarı belirtileri hasta yakınıyla paylaşılır</li>
                </ul>

                <p><strong>Not:</strong> Kısırlaştırma doğru hastada önemli faydalar sağlayabilir; en uygun zamanlama için veteriner hekiminizle bireysel değerlendirme yapılmalıdır.</p>
            `,
    },
  ],

  en: [
    {
      id: 1,
      slug: "core-vaccine-importance",
      title: "Why Core Vaccines Matter",
      excerpt:
        "Vaccination is one of the strongest preventive care steps when it is planned with an examination and individual risk assessment.",
      image: "assets/img/hero-bg.jpg",
      date: "February 01, 2026",
      category: "Preventive Care",
      reviewedBy: "Gülkent Veterinarians",
      updated: "June 23, 2026",
      content: `
                <p>Core vaccines help protect puppies, kittens and adult pets against serious infectious diseases. The right schedule depends on age, previous vaccine history, current health and lifestyle risk.</p>
                <p>Before vaccination, your veterinarian should evaluate general condition, fever, appetite, stool history, parasite status and any current symptoms.</p>
                <h3>When should you book a visit?</h3>
                <ul>
                    <li>Your pet's vaccination history is unknown</li>
                    <li>A vaccine dose is delayed or the record is incomplete</li>
                    <li>You plan adoption, boarding, travel or contact with other animals</li>
                    <li>Your pet has lethargy, vomiting, diarrhea or fever and needs examination first</li>
                </ul>
                <p><strong>Note:</strong> Vaccine schedules are not identical for every patient. The safest plan follows an examination and risk assessment.</p>
            `,
    },
    {
      id: 2,
      slug: "parasite-control",
      title: "More Than an Itch: Parasite Control",
      excerpt:
        "Itching is not always caused by fleas or ticks; parasite control, skin health and family health should be evaluated together.",
      image: "assets/img/bg-hero-alt.webp",
      date: "February 02, 2026",
      category: "Parasite Control",
      reviewedBy: "Gülkent Veterinarians",
      updated: "June 23, 2026",
      content: `
                <p>Fleas, ticks and internal parasites matter for both animal health and some zoonotic risks. Still, itching can also be caused by allergies, fungal disease, mites, ear problems, diet or systemic disease.</p>
                <p>Parasite prevention should be selected according to species, age, weight, living environment, outdoor exposure and clinical findings.</p>
                <h3>What is checked in a control plan?</h3>
                <ul>
                    <li>Skin and coat examination, location and duration of itching</li>
                    <li>Suspicion of fleas, ticks, mites or fungal disease</li>
                    <li>Need for internal parasite or stool evaluation</li>
                    <li>Children, elderly people or immunocompromised family members at home</li>
                </ul>
                <p><strong>Note:</strong> Product choice and interval vary by patient. Incorrect products or doses can be risky, especially for young, senior or ill animals.</p>
            `,
    },
    {
      id: 3,
      slug: "neutering-decision",
      title: "How to Decide on Neutering",
      excerpt:
        "Neutering can reduce some health risks, but timing and anesthesia preparation should be assessed for each patient.",
      image: "assets/img/hero-bg.png",
      date: "February 15, 2026",
      category: "General Surgery",
      reviewedBy: "Gülkent Veterinarians",
      updated: "June 23, 2026",
      content: `
                <p>Neutering controls reproduction and may reduce the risk of some reproductive diseases. Some risks, such as uterine infection in females, can be removed; mammary tumor risk varies by species, age, breed and timing. It is not accurate to say that every risk is fully eliminated.</p>
                <p>The decision should consider age, weight, examination findings, bloodwork needs, anesthesia risk, lifestyle and the owner's expectations.</p>
                <h3>How does the process work?</h3>
                <ul>
                    <li>Pre-operative examination and recommended blood checks</li>
                    <li>Patient-specific anesthesia and pain management planning</li>
                    <li>Post-operative wound care, collar use, feeding and activity guidance</li>
                    <li>Control appointment and warning signs shared with the owner</li>
                </ul>
                <p><strong>Note:</strong> Neutering can be highly beneficial for the right patient. The best timing should be decided with your veterinarian.</p>
            `,
    },
  ],
};

function getCurrentLanguage() {
  try {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (blogPosts[requested]) return requested;

    const stored = window.localStorage.getItem("selectedLang");
    return blogPosts[stored] ? stored : "tr";
  } catch (error) {
    return document.documentElement.lang === "en" ? "en" : "tr";
  }
}

function getBlogPosts() {
  const lang = getCurrentLanguage();
  return blogPosts[lang] || blogPosts.tr;
}

function getBlogPost(id) {
  if (!id) return null;
  const posts = getBlogPosts();
  return posts.find(
    (post) => String(post.id) === String(id) || post.slug === id,
  );
}

console.log("config.js loaded");
