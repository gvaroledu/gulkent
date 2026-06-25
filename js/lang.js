// js/lang.js

// Tüm çeviri anahtarları - TR/EN
const translations = {
  tr: {
    // Navigation
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_blog: "Bilgi Köşesi",
    nav_contact: "İletişim",
    btn_contact: "RANDEVU AL",

    // Mobil Bar
    mob_call: "Ara",
    mob_wa: "WhatsApp",
    mob_emg: "ACİL",

    // Hero Section
    hero_badge: "Isparta Merkezde Randevulu Veteriner Bakımı",
    hero_title: "SAĞLIK, SEVGİ VE GÜLKENT.",
    hero_desc:
      "Isparta'da muayene, koruyucu hekimlik, tanı desteği ve takip süreçlerini açık iletişimle planlıyoruz.",
    home_hero_badge: "ISPARTA MERKEZDE RANDEVULU VETERİNER BAKIMI",
    home_hero_title_1: "Gülkent",
    home_hero_title_2: "Veteriner",
    home_hero_title_3: "Kliniği",
    home_hero_welcome: "Hoş Geldiniz",
    home_hero_desc:
      "Muayene, aşı, kısırlaştırma, mikroçip, görüntüleme ve laboratuvar süreçlerini açık iletişimle planlıyor; her ziyaretin sonunda takip adımını netleştiriyoruz.",
    appointment_short: "Randevu Al",
    call_now: "Hemen Ara",
    hero_proof_1_t: "Şefkatli Yaklaşım",
    hero_proof_1_d: "Her canlıya sevgiyle",
    hero_proof_2_t: "Uzman Ekip",
    hero_proof_2_d: "Şehriban ve Mehmet Sefa Erdoğan",
    hero_proof_3_t: "Tanı Desteği",
    hero_proof_3_d: "Laboratuvar ve görüntüleme",
    btn_calc: "📅 Aşı Hesapla",

    // Features
    feat_247: "Acil Durumda Telefon Desteği",
    feat_lab: "Modern Laboratuvar",
    feat_docs: "Uzman Hekimler",
    feat_groom: "Evde Hizmet",

    // Calculator
    calc_title: "Akıllı Aşı Takvimi",
    calc_desc: "Doğum tarihini girin, aşı takvimini anında görün.",
    lbl_type: "Tür Seçin:",
    lbl_date: "Doğum Tarihi:",
    btn_calculate: "HESAPLA",

    // Footer
    footer_slogan: "Mahallenizde randevulu veteriner bakımı.",
    footer_links: "Hızlı Linkler",
    footer_link_services: "Hizmetler",
    footer_link_contact: "İletişim",
    footer_link_blog: "Blog",
    rights: "© 2026 Gülkent Veteriner Kliniği.",
    emergency_short: "Acil",
    emergency_kicker: "Acil Durum",
    emergency_title: "Önce sakin kal, telefonu kullan.",
    emergency_desc:
      "Zehirlenme, travma, nöbet, solunum zorluğu, yoğun kanama veya ani halsizlikte beklemeden kliniği ara. WhatsApp yerine önce telefonla bilgi vermen hazırlığı hızlandırır.",
    emergency_call: "Hemen Ara",
    emergency_tip_1:
      "Zehirlenme şüphesinde kutu/etiket bilgisini yanında getir.",
    emergency_tip_2: "Travmada hayvanı fazla hareket ettirme, sıcak tut.",
    emergency_tip_3:
      "Nöbet geçiriyorsa ağzına elini sokma, çevresini güvenli hale getir.",
    trust_kicker: "Güven",
    trust_title: "Güven, açık iletişimle başlar.",
    trust_desc:
      "Muayene, test, işlem ve takip kararları hasta yakınıyla anlaşılır şekilde paylaşılır; kesinlik gerektiren durumlarda değerlendirme hekime aittir.",
    trust_stat_1: "Randevu öncesi ihtiyaç ve aciliyet değerlendirmesi",
    trust_stat_2_value: "02",
    trust_stat_2: "Gerekirse test ve görüntüleme desteği",
    trust_stat_3: "Kontrol, aşı, operasyon ve bakım takip planı",
    trust_quote: "",
    trust_quote_source: "",

    // Hakkımızda Sayfası
    about_page_subtitle: "Hikayemiz",
    about_page_title: "Biz Kimiz?",
    about_page_why: "Neden Gülkent?",
    about_main_text: `
            <p>Gülkent Veteriner Kliniği olarak, dostlarınız için bilimsel, şeffaf ve sevgi dolu bir yaklaşım benimsiyoruz. 
            Onları sadece birer hasta değil, ailenizin <strong>değerli</strong> bir üyesi olarak görüyoruz.</p>
            <p>Koruyucu hekimlikten acil müdahaleye, modern görüntüleme ve laboratuvar imkanlarından cerrahi işlemlere kadar
            geniş bir yelpazede hizmet sunuyoruz.</p>
        `,
    about_sign_title: "Gülkent Ekibi",
    about_sign_sub: "Kurucu Veteriner Hekimler",
    about_value_1_t: "Sevgi & Saygı",
    about_value_1_d: "Her canlıya kendi ailemizin bir parçası gibi davranırız.",
    about_value_2_t: "Bilim & Teknoloji",
    about_value_2_d:
      "Teşhis ve tedavide modern tıbbın tüm imkanlarını kullanırız.",
    about_value_3_t: "Hijyen",
    about_value_3_d: "Klinik temizliği ve sterilizasyon kırmızı çizgimizdir.",

    // Blog Sayfası
    blog_subtitle: "Güncel Bilgiler",
    blog_title: "Bilgi Köşesi",
    blog_intro:
      "Minik dostlarınızın bakımı, sağlığı ve beslenmesi hakkında uzman veterinerlerimizden ipuçları.",
    blog_disclaimer:
      "Blog yazıları Gülkent Vet ekibi tarafından hazırlanmakta olup bilgilendirme amaçlıdır; tanı ve tedavi için mutlaka veteriner hekiminize danışın.",
    loading: "Yazılar yükleniyor...",

    // İletişim Sayfası
    contact_page_subtitle: "Randevu ve Uygunluk",
    contact_page_title: "Bize Ulaşın",
    contact_hero_desc:
      "Randevu almak, acil durum ön bilgisi vermek veya genel bilgi almak için ulaşın.",
    contact_badge_fast: "Hızlı Ulaşım",
    contact_phone_t: "Bizi Arayın",
    contact_phone_d: "Acil durumlar ve randevu için:",
    contact_whatsapp: "WhatsApp",
    contact_hours_t: "Güncel Uygunluk",
    contact_hours_d: `<li>Randevu ve güncel uygunluk için telefonla ulaşın.</li>`,
    contact_addr_t: "Adresimiz",
    contact_addr_d: "Gülistan Mah. 127. Cadde No:21/1<br> Isparta / Merkez",
    contact_map_link: "Haritada Gör →",
    map_title: "Kliniğimizin Konumu",
    map_subtitle: "Gülistan Mahallesi, Isparta",

    // Hizmetler Sayfası
    serv_page_subtitle: "Neler Yapıyoruz?",
    serv_page_title: "Hizmetlerimiz",
    serv_hero_desc:
      "Minik dostlarınızın sağlığı için modern tıbbın tüm imkanlarını, sevgi dolu bir yaklaşımla sunuyoruz.",

    serv_1_t: "Aşı & Koruyucu",
    serv_1_d:
      "Hastalıkları oluşmadan önlemek en temel görevimizdir. Size özel aşı takvimi oluşturuyor ve zamanı gelince hatırlatıyoruz.",
    serv_2_t: "Genel Cerrahi",
    serv_2_d:
      "Modern ameliyathanemizde kısırlaştırma ve yumuşak doku operasyonlarını güvenli anestezi cihazlarıyla yapıyoruz.",
    serv_3_t: "Laboratuvar",
    serv_3_d:
      "Hemogram, biyokimya ve temel laboratuvar değerlendirmeleriyle tanı sürecini destekliyoruz.",
    serv_4_t: "Ağız ve Diş",
    serv_4_d:
      "Ultrasonik cihazlarla diş taşı temizliği ve ağız kokusu tedavisi yaparak dostunuzun iştahını geri kazandırıyoruz.",
    serv_5_t: "Dijital Röntgen",
    serv_5_d:
      "Röntgen ve ultrason bulgularını muayene ile birlikte değerlendirerek tanı sürecini destekliyoruz.",
    serv_6_t: "Mikroçip & Pasaport",
    serv_6_d:
      "Mikroçip, kayıt ve seyahat belgesi süreçlerinde doğru yönlendirme sağlıyoruz.",

    how_title: "Nasıl Çalışıyoruz?",
    how_1_t: "Randevu",
    how_1_d: "Telefondan veya siteden kolayca randevunuzu planlayın.",
    how_2_t: "Muayene",
    how_2_d: "Dostunuzu sevgiyle karşılar, detaylıca muayene ederiz.",
    how_3_t: "Tedavi",
    how_3_d: "En modern yöntemlerle tedavi sürecini şeffafça yürütürüz.",
    how_4_t: "Mutlu Son",
    how_4_d: "İyileşme sonrası kontrollerle dostluğumuz devam eder.",
    how_cta: "Hemen Randevu Alın",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_blog: "Knowledge Hub",
    nav_contact: "Contact",
    btn_contact: "BOOK APPOINTMENT",

    // Mobile Bar
    mob_call: "Call",
    mob_wa: "WhatsApp",
    mob_emg: "EMERGENCY",

    // Hero Section
    hero_badge: "Scheduled Veterinary Care in Isparta Center",
    hero_title: "HEALTH, LOVE AND GÜLKENT.",
    hero_desc:
      "We plan examination, preventive medicine, diagnostic support and follow-up with clear communication in Isparta.",
    home_hero_badge: "Modern, reliable veterinary care in Isparta",
    home_hero_title_1: "Gülkent",
    home_hero_title_2: "Veterinary",
    home_hero_title_3: "Clinic",
    home_hero_welcome: "Welcome",
    home_hero_desc:
      "We plan examinations, vaccines, neutering, microchip, imaging and laboratory processes with clear communication, then define the follow-up step after every visit.",
    appointment_short: "Book Appointment",
    call_now: "Call Now",
    hero_proof_1_t: "Compassionate Care",
    hero_proof_1_d: "Love for every life",
    hero_proof_2_t: "Expert Team",
    hero_proof_2_d: "Experienced veterinarians",
    hero_proof_3_t: "Modern Clinic",
    hero_proof_3_d: "Advanced diagnosis and care",
    btn_calc: "📅 Calculate Vaccines",

    // Features
    feat_247: "Emergency Phone Guidance",
    feat_lab: "Modern Laboratory",
    feat_docs: "Expert Doctors",
    feat_groom: "Home Visit",

    // Calculator
    calc_title: "Smart Vaccine Calendar",
    calc_desc: "Enter birth date, see vaccine schedule instantly.",
    lbl_type: "Select Species:",
    lbl_date: "Birth Date:",
    btn_calculate: "CALCULATE",

    // Footer
    footer_slogan: "Your trusted neighborhood vet.",
    footer_links: "Quick Links",
    footer_link_services: "Services",
    footer_link_contact: "Contact",
    footer_link_blog: "Blog",
    rights: "© 2026 Gülkent Veterinary Clinic.",
    emergency_short: "Emergency",
    emergency_kicker: "Emergency",
    emergency_title: "Stay calm first, contact us quickly.",
    emergency_desc:
      "In poisoning, trauma, seizures, breathing difficulty, heavy bleeding or sudden weakness, call the clinic without waiting. Call first instead of WhatsApp to help us prepare faster.",
    emergency_call: "Call Now",
    emergency_tip_1:
      "If poisoning is suspected, bring the package or label information.",
    emergency_tip_2:
      "In trauma, avoid moving your pet too much and keep them warm.",
    emergency_tip_3:
      "During a seizure, do not put your hand in the mouth; make the area safe.",
    trust_kicker: "Trust",
    trust_title: "Trust starts with clear communication.",
    trust_desc:
      "Examination, test, procedure and follow-up decisions are shared clearly with the pet owner; case-specific decisions belong to the veterinarian.",
    trust_stat_1: "Pre-appointment need and urgency assessment",
    trust_stat_2_value: "02",
    trust_stat_2: "Tests and imaging support when necessary",
    trust_stat_3: "Check-up, vaccine, surgery and care follow-up plan",
    trust_quote: "",
    trust_quote_source: "",

    // About Page
    about_page_subtitle: "Our Story",
    about_page_title: "Who Are We?",
    about_page_why: "Why Gülkent?",
    about_main_text: `
            <p>At Gülkent Veterinary Clinic, we combine science, transparency, and genuine compassion for your pets. 
            We see them not just as patients, but as a <strong>precious</strong> part of your family.</p>
            <p>From preventive medicine and check-ups to emergency care, modern imaging, lab diagnostics and surgery,
            we offer a wide range of services under one roof.</p>
        `,
    about_sign_title: "Gülkent Team",
    about_sign_sub: "Founding Veterinarians",
    about_value_1_t: "Love & Respect",
    about_value_1_d: "We treat every animal as part of our own family.",
    about_value_2_t: "Science & Technology",
    about_value_2_d: "We use all the possibilities of modern medicine.",
    about_value_3_t: "Hygiene",
    about_value_3_d: "Clinic cleanliness and sterilization are non‑negotiable.",

    // Blog Page
    blog_subtitle: "Latest Information",
    blog_title: "Knowledge Hub",
    blog_intro:
      "Tips from our expert veterinarians about the care, health and nutrition of your little friends.",
    blog_disclaimer:
      "Blog articles are prepared by the Gülkent Vet team for informational purposes only; always consult your veterinarian for diagnosis and treatment.",
    loading: "Loading articles...",

    // Contact Page
    contact_page_subtitle: "Appointment and Availability",
    contact_page_title: "Contact Us",
    contact_hero_desc:
      "Reach out to make an appointment, share emergency pre-information or ask a general question.",
    contact_badge_fast: "Quick Access",
    contact_phone_t: "Call Us",
    contact_phone_d: "For emergencies and appointments:",
    contact_whatsapp: "WhatsApp",
    contact_hours_t: "Current Availability",
    contact_hours_d: `<li>Please call for appointments and current availability.</li>`,
    contact_addr_t: "Our Address",
    contact_addr_d:
      "Gülistan District, 127th Avenue, No:21/1<br> Isparta / Merkez",
    contact_map_link: "View on Map →",
    map_title: "Our Clinic Location",
    map_subtitle: "Gülistan District, Isparta",

    // Services Page
    serv_page_subtitle: "What We Do?",
    serv_page_title: "Our Services",
    serv_hero_desc:
      "We offer all the possibilities of modern medicine with a loving approach for your little friends' health.",

    serv_1_t: "Vaccination & Prevention",
    serv_1_d:
      "Preventing diseases before they occur is our fundamental mission. We create personalized vaccine schedules and remind you when it's time.",
    serv_2_t: "General Surgery",
    serv_2_d:
      "We perform neutering and soft tissue operations in our modern operating room with safe anesthesia devices.",
    serv_3_t: "Laboratory",
    serv_3_d:
      "We support diagnosis with hemogram, biochemistry and essential laboratory assessments.",
    serv_4_t: "Oral & Dental",
    serv_4_d:
      "We restore your friend's appetite with ultrasonic dental cleaning and bad breath treatment.",
    serv_5_t: "Digital X-Ray",
    serv_5_d:
      "We support diagnosis by evaluating X-ray and ultrasound findings together with the examination.",
    serv_6_t: "Microchip & Passport",
    serv_6_d:
      "We guide microchip, registration and travel document processes correctly.",

    how_title: "How We Work?",
    how_1_t: "Appointment",
    how_1_d: "Easily schedule your appointment by phone or website.",
    how_2_t: "Examination",
    how_2_d: "We welcome your friend warmly and examine thoroughly.",
    how_3_t: "Treatment",
    how_3_d:
      "We carry out the treatment process transparently with the most modern methods.",
    how_4_t: "Happy Ending",
    how_4_d: "Our friendship continues with post-recovery check-ups.",
    how_cta: "Book Appointment Now",
  },
};

const supplementalTranslations = {
  tr: {
    brand_subtitle: "Veteriner Kliniği",
    clinic_full_name: "Gülkent Veteriner Kliniği",
    clinic_exam_alt: "Veteriner kliniğinde köpek muayenesi",
    nav_clinic: "Klinik",
    nav_doctors: "Hekimler",
    appointment_short: "Randevu Al",
    call_now: "Hemen Ara",
    close_label: "Kapat",
    discover_services: "Hizmetleri keşfet",
    home_hero_badge: "Isparta Merkezde randevulu veteriner bakımı",
    home_hero_title: "Gülkent Veteriner Kliniği",
    home_hero_title_1: "Gülkent",
    home_hero_title_2: "Veteriner",
    home_hero_title_3: "Kliniği",
    home_hero_welcome: "Hoş Geldiniz",
    home_hero_desc:
      "Muayene, aşı, kısırlaştırma, mikroçip, görüntüleme ve laboratuvar süreçlerini açık iletişimle planlıyor; kapsam, uygunluk ve takip adımını randevuda netleştiriyoruz.",
    hero_doctor_count: "2 veteriner hekim",
    hero_doctor_names: "Şehriban Korkmaz Erdoğan<br>Mehmet Sefa Erdoğan",
    hero_call_note: "Randevu, acil durum ve güncel uygunluk için arayın.",
    hero_location_city: "Isparta / Merkez",
    hero_location_addr_short: "Gülistan Mah. 127. Cadde No:21/1",
    hero_whatsapp_title: "WhatsApp randevu",
    hero_whatsapp_note:
      "Acil durumda telefon önceliklidir; randevu ve kısa ön bilgi için yazabilirsiniz.",
    hero_process_title: "Klinik akış",
    hero_process_1: "İletişim",
    hero_process_2: "Muayene",
    hero_process_3: "Plan",
    hero_process_4: "Takip",
    emergency_tip_4:
      "Solunum zorluğu, idrar yapamama, yabancı cisim yutma veya doğum komplikasyonunda beklemeyin.",
    emergency_tip_5:
      "WhatsApp mesajı acil ön değerlendirme için yeterli olmayabilir; önce telefonla arayın.",
    doctor_kicker: "Veteriner hekimler",
    doctor_title: "Hekimlerimizle tanışın.",
    doctor_desc:
      "Randevu, muayene, tedavi planı ve takip süreci veteriner hekimlerimiz tarafından planlanır.",
    doctor_role: "Veteriner Hekim",
    doctor_1_desc:
      "Klinik muayene, koruyucu hekimlik ve hasta yakını bilgilendirmesi.",
    doctor_2_desc:
      "Tanı, tedavi planlama, cerrahi süreç ve takip koordinasyonu.",
    calm_card_title: "Sakin muayene akışı",
    calm_card_desc:
      "Hastanın karakterine göre yaklaşım hızı ayarlanır; muayene öncesi ve sonrası hasta yakını bilgilendirilir.",
    calm_step_1: "Hazırlık",
    calm_step_2: "Muayene",
    calm_step_3: "Bilgilendirme",
    hero_proof_1_t: "Şefkatli Yaklaşım",
    hero_proof_1_d: "Her canlıya sevgiyle",
    hero_proof_2_t: "Uzman Ekip",
    hero_proof_2_d: "Şehriban ve Mehmet Sefa Erdoğan",
    hero_proof_3_t: "Tanı Desteği",
    hero_proof_3_d: "Laboratuvar ve görüntüleme",
    quick_emergency_t: "Acil destek",
    quick_emergency_d: "Telefonla ön değerlendirme ve doğru yönlendirme.",
    quick_lab_t: "Laboratuvar",
    quick_lab_d: "Hekim gerekli görürse kan ve hızlı testlerle tanı desteği.",
    quick_preventive_t: "Koruyucu hekimlik",
    quick_preventive_d: "Aşı, parazit ve düzenli kontrol.",
    quick_groom_t: "Evde hizmet",
    quick_groom_d:
      "Uygunluk ve mesafe sınırı telefonla netleşen randevulu destek.",
    story_kicker: "Gülkent yaklaşımı",
    story_title: "Sakin, anlaşılır ve güven veren veteriner deneyimi.",
    story_1_t: "Karşılama",
    story_1_d:
      "Telefon veya WhatsApp ile ön bilgi, acil durumda telefon önceliği ve doğru yönlendirme.",
    story_2_t: "Muayene",
    story_2_d:
      "Anamnez, fizik muayene ve gerekli görülürse test/görüntüleme planı.",
    story_3_t: "Konfor",
    story_3_d:
      "Çekingen hastalarda daha yavaş temas, kısa bekleme ve hasta yakını bilgilendirmesi.",
    story_4_t: "Takip",
    story_4_d:
      "Kontrol, aşı, bakım ve operasyon sonrası uyarı belirtilerinin paylaşılması.",
    home_services_title: "Resmi hizmet kapsamını tek bakışta görün.",
    home_services_desc:
      "Gülkent'te her hizmet başlığı muayene, süreç ve takip mantığıyla ele alınır. Cihaz, test ve evde hizmet kapsamı hastaya göre hekim tarafından netleştirilir.",
    svc_exam_t: "Muayene ve teşhis",
    svc_exam_d: "Anamnez, fizik muayene, klinik değerlendirme ve tedavi planı.",
    svc_exam_full_d:
      "Anamnez, fizik muayene ve klinik değerlendirme sonrası gerekli test planı ile tedavi önerisi.",
    svc_surgery_t: "Cerrahi ve kısırlaştırma",
    svc_surgery_d:
      "Operasyon öncesi hazırlık, anestezi planı ve operasyon sonrası takip.",
    svc_surgery_full_d:
      "Kısırlaştırma ve yumuşak doku operasyonlarında muayene, hazırlık, steril süreç ve takip.",
    svc_puppy_t: "Mikroçip ve pasaport",
    svc_puppy_d: "Kimliklendirme ve seyahat belgeleri.",
    svc_vaccine_t: "Aşı ve parazit takibi",
    svc_vaccine_d:
      "Yaş, sağlık durumu ve yaşam riskine göre aşı, parazit ve kontrol planı.",
    svc_lab_t: "Laboratuvar",
    svc_imaging_t: "Görüntüleme",
    svc_imaging_d:
      "Muayene ile birlikte röntgen veya ultrason gerekliliğinin değerlendirilmesi.",
    svc_microchip_t: "Mikroçip ve pasaport",
    svc_microchip_d:
      "Kimliklendirme, kayıt ve seyahat belgesi süreci için yönlendirme.",
    svc_home_t: "Evde hizmet",
    svc_home_d:
      "Uygun hastalarda randevulu ev ziyareti kapsamında muayene ve aşı desteği.",
    location_open_map: "Haritada Aç",
    svc_lab_d:
      "Hekim gerekli görürse hemogram, biyokimya ve hızlı testlerin planlanması.",
    svc_dental_t: "Ağız ve diş sağlığı",
    svc_dental_d:
      "Diş taşı, ağız kokusu, diş eti ve ev bakım önerilerinin değerlendirilmesi.",
    service_when: "Ne zaman?",
    service_process: "Süreç",
    service_follow: "Takip",
    svc_exam_when:
      "Halsizlik, kusma, ishal, deri-kulak-göz şikayeti veya rutin kontrolde.",
    svc_exam_process:
      "Anamnez, fizik muayene ve gerekirse test/görüntüleme planı yapılır.",
    svc_exam_follow:
      "Tedavi, kontrol tarihi ve evde izlenecek belirtiler paylaşılır.",
    svc_vaccine_when:
      "Yavru dönem, gecikmiş aşı, seyahat, pansiyon veya riskli temas öncesinde.",
    svc_vaccine_process:
      "Ateş, genel durum, parazit ve aşı geçmişi değerlendirilir.",
    svc_vaccine_follow:
      "Rapel tarihi, olası reaksiyonlar ve parazit planı anlatılır.",
    svc_lab_when:
      "Muayenede kan, enfeksiyon, organ fonksiyonu veya hızlı test ihtiyacı varsa.",
    svc_lab_process:
      "Hekim uygun gördüğü testleri seçer; sonuçlar muayene bulgularıyla yorumlanır.",
    svc_lab_follow:
      "Sonuca göre tedavi, kontrol veya dış laboratuvar yönlendirmesi planlanır.",
    svc_surgery_when:
      "Kısırlaştırma, yara, kitle ve uygun yumuşak doku operasyonlarında.",
    svc_surgery_process:
      "Muayene, gerekli kan kontrolleri, anestezi ve ağrı yönetimi planlanır.",
    svc_surgery_follow:
      "Dikiş bakımı, yakalık, hareket kısıtlaması ve kontrol tarihi verilir.",
    svc_dental_when:
      "Ağız kokusu, diş taşı, salya, çiğneme güçlüğü veya diş eti kızarıklığında.",
    svc_dental_process:
      "Ağız muayenesi yapılır; temizlik veya ileri işlem ihtiyacı değerlendirilir.",
    svc_dental_follow:
      "Ev bakım önerisi, beslenme ve kontrol aralığı paylaşılır.",
    svc_imaging_when:
      "Travma, ağrı, yabancı cisim, gebelik veya iç organ değerlendirmesi gerektiğinde.",
    svc_imaging_process:
      "Görüntüleme bulguları muayene ve laboratuvarla birlikte yorumlanır.",
    svc_imaging_follow:
      "Tanı desteğine göre tedavi, sevk veya kontrol planı netleşir.",
    svc_microchip_when:
      "Kimliklendirme, kayıt, sahip değişikliği veya seyahat hazırlığında.",
    svc_microchip_process:
      "Mikroçip, kayıt ve pasaport/adres bilgisi doğru şekilde kontrol edilir.",
    svc_microchip_follow:
      "Seyahat ve resmi belge gereklilikleri için güncel yönlendirme yapılır.",
    svc_home_when:
      "Taşınması zor, aşı veya basit muayene için uygun hastalarda.",
    svc_home_process:
      "Mesafe, zaman ve hastanın durumu telefonla değerlendirilir.",
    svc_home_follow:
      "Acil, cerrahi veya ileri tanı gereken durumlarda kliniğe yönlendirme yapılır.",
    calm_kicker: "Hassas hasta yaklaşımı",
    calm_title: "Korkuyu büyütmeden, güveni adım adım kurarız.",
    calm_desc:
      "Taşıma çantasından muayene masasına kadar temasın hızını hastanın karakterine göre ayarlarız. Sessiz alan, kısa bekleme ve yumuşak iletişim; özellikle çekingen kedi ve köpeklerde muayeneyi daha kontrollü hale getirir.",
    calm_point_1: "Sessiz karşılama",
    calm_point_2: "Kısa bekleme",
    calm_point_3: "Yumuşak temas",
    calm_badge: "Stres azaltan yaklaşım",
    smart_tool: "Akıllı araç",
    followup_short: "Takip",
    calc_title: "Tahmini Aşı Planı",
    calc_desc:
      "Doğum tarihini girin; sonucu kesin program değil, randevu öncesi ön bilgilendirme olarak görün.",
    clinic_kicker: "Klinik standardı",
    clinic_title: "Modern tıp, şefkatli temas ve düzenli takip.",
    clinic_1_t: "Sakin karşılama",
    clinic_1_d:
      "Randevu, aciliyet ve hassas hasta ihtiyacına göre hazırlık yapılır.",
    clinic_2_t: "Şeffaf tedavi planı",
    clinic_2_d:
      "Ne yapılacağı, neden önerildiği, alternatifler ve takip adımı açık anlatılır.",
    clinic_3_t: "Takip ve hatırlatma",
    clinic_3_d:
      "Aşı, kontrol, operasyon sonrası bakım ve uyarı belirtileri planlanır.",
    footer_slogan_long:
      "Modern veteriner bakımı, şefkatli ekip ve sakin klinik deneyimi.",
    footer_copy: "© 2026 Gülkent Veteriner Kliniği. Tüm hakları saklıdır.",
    vaccine_calendar: "Aşı Takvimi",
    location_appointment: "Konum ve Randevu",
    appointment_contact: "Randevu ve İletişim",
    blog_page_title_new: "Bakımı daha anlaşılır kılalım.",
    blog_page_lead_new:
      "Aşı, parazit, kısırlaştırma ve günlük bakım konularında kısa, okunabilir ve veteriner bakışlı içerikler.",
    blog_disclaimer_new:
      "Bu yazılar bilgilendirme amaçlıdır. Tanı, tedavi, ilaç veya aşı kararı için dostunuzu mutlaka veteriner hekime muayene ettirin.",
    reviewed_by_default: "Gülkent Veteriner Hekimleri",
    reviewed_by_suffix: "tarafından gözden geçirildi.",
    last_updated: "Son güncelleme",
    blog_medical_note:
      "Bu içerik genel bilgilendirme amaçlıdır; muayene, tanı ve tedavi yerine geçmez.",
    blog_empty: "Henüz blog yazısı yok.",
    read_more: "Devamını Oku",
    back_to_blog: "Bloga Dön",
    post_loading: "Yazı yükleniyor...",
    post_not_found: "Yazı bulunamadı.",
    services_kicker_new: "Klinik Hizmetleri",
    services_title_new: "Her ihtiyaç için net bakım.",
    services_lead_new:
      "Muayeneden koruyucu hekimliğe, kısırlaştırmadan görüntüleme ve laboratuvara kadar süreci sakin, şeffaf ve hastaya göre planlıyoruz.",
    process_kicker: "Süreç",
    process_title: "Randevudan takibe kadar aynı çizgi.",
    process_1_t: "Planlama",
    process_1_d: "İhtiyaca göre doğru randevu ve hazırlık bilgisi.",
    process_2_t: "Muayene",
    process_2_d: "Sakin yaklaşım, açık anlatım ve net tedavi planı.",
    process_3_t: "Takip",
    process_3_d: "Kontrol, aşı ve bakım hatırlatmalarıyla süreklilik.",
    contact_kicker_new: "Randevu ve Uygunluk",
    contact_title_new: "Randevu için bize ulaşın.",
    contact_lead_new:
      "Randevu, acil durum ön bilgisi veya konum için telefon ve WhatsApp bağlantılarını tek yerde topladık. Güncel uygunluk için arayın.",
    phone_title: "Telefon",
    phone_desc:
      "Randevu ve acil ön bilgi için doğrudan arayın; gelmeden önce bilgi vermeniz hazırlığı hızlandırır.",
    wa_desc:
      "Fotoğraf ve kısa bilgi ön değerlendirme içindir; tanı ve tedavi yerine geçmez.",
    send_message: "Mesaj Gönder",
    hours_title: "Güncel Uygunluk",
    hours_desc: "Randevu ve güncel uygunluk için telefonla ulaşın.",
    hours_note: "Acil durumda WhatsApp yerine önce telefonla arayın.",
    appointment_message_hint:
      "Randevu mesajınızda tür, yaş, şikayet, aciliyet ve uygun olduğunuz saati yazmanız süreci hızlandırır.",
    location_title: "Konum",
    contact_addr_plain: "Gülistan Mah. 127. Cadde No:21/1, Isparta / Merkez",
  },
  en: {
    brand_subtitle: "Veterinary Clinic",
    clinic_full_name: "Gülkent Veterinary Clinic",
    clinic_exam_alt: "Dog examination in a veterinary clinic",
    nav_clinic: "Clinic",
    nav_doctors: "Veterinarians",
    appointment_short: "Book Appointment",
    call_now: "Call Now",
    close_label: "Close",
    discover_services: "Explore services",
    home_hero_badge: "Modern, reliable veterinary care in Isparta",
    home_hero_title: "Welcome to Gülkent Veterinary Clinic",
    home_hero_title_1: "Gülkent",
    home_hero_title_2: "Veterinary",
    home_hero_title_3: "Clinic",
    home_hero_welcome: "Welcome",
    home_hero_desc:
      "We plan examinations, vaccines, neutering, microchip, imaging and laboratory processes with clear communication; scope, availability and follow-up are clarified during appointment planning.",
    hero_doctor_count: "2 veterinarians",
    hero_doctor_names: "Şehriban Korkmaz Erdoğan<br>Mehmet Sefa Erdoğan",
    hero_call_note:
      "Call for appointments, emergencies and current availability.",
    hero_location_city: "Isparta / Center",
    hero_location_addr_short: "Gülistan Mah. 127. Cadde No:21/1",
    hero_whatsapp_title: "WhatsApp appointment",
    hero_whatsapp_note:
      "For emergencies, phone is the priority; WhatsApp is for appointments and brief pre-information.",
    hero_process_title: "Clinic flow",
    hero_process_1: "Contact",
    hero_process_2: "Examination",
    hero_process_3: "Plan",
    hero_process_4: "Follow-up",
    emergency_tip_4:
      "Do not wait in breathing difficulty, inability to urinate, foreign body ingestion or birth complications.",
    emergency_tip_5:
      "A WhatsApp message may not be enough for a preliminary emergency assessment; call first.",
    doctor_kicker: "Veterinarians",
    doctor_title: "Meet our veterinarians.",
    doctor_desc:
      "Appointment, examination, treatment planning and follow-up are planned by our veterinarians.",
    doctor_role: "Veterinarian",
    doctor_1_desc:
      "Clinical examination, preventive medicine and owner communication.",
    doctor_2_desc:
      "Diagnosis, treatment planning, surgical process and follow-up coordination.",
    calm_card_title: "Calm examination flow",
    calm_card_desc:
      "The pace of contact is adjusted to the patient's temperament; the owner is informed before and after examination.",
    calm_step_1: "Preparation",
    calm_step_2: "Examination",
    calm_step_3: "Information",
    hero_proof_1_t: "Compassionate Care",
    hero_proof_1_d: "Love for every life",
    hero_proof_2_t: "Expert Team",
    hero_proof_2_d: "Experienced veterinarians",
    hero_proof_3_t: "Modern Clinic",
    hero_proof_3_d: "Advanced diagnosis and care",
    quick_emergency_t: "Emergency support",
    quick_emergency_d:
      "Phone-first preliminary assessment and clear guidance for emergency signs.",
    quick_lab_t: "Laboratory",
    quick_lab_d:
      "Diagnostic support with bloodwork and rapid tests when necessary.",
    quick_preventive_t: "Preventive medicine",
    quick_preventive_d: "Vaccines, parasite control and regular check-ups.",
    quick_groom_t: "Home visit",
    quick_groom_d:
      "Scheduled support after availability and distance limits are clarified by phone.",
    story_kicker: "Gülkent approach",
    story_title: "A calm, clear and reassuring veterinary experience.",
    story_1_t: "Welcome",
    story_1_d:
      "Brief pre-information by phone or WhatsApp, with phone priority for emergencies.",
    story_2_t: "Examination",
    story_2_d:
      "History, physical examination and test/imaging planning when needed.",
    story_3_t: "Comfort",
    story_3_d:
      "Slower contact, short waiting and owner communication for sensitive patients.",
    story_4_t: "Follow-up",
    story_4_d:
      "Check-up, vaccine, care and post-operative warning signs are shared clearly.",
    home_services_title:
      "Whatever the need, the process is clear from start to finish.",
    home_services_desc:
      "At Gülkent, each service is handled through examination, process and follow-up. Equipment, tests and home visit scope are clarified by the veterinarian for each patient.",
    svc_exam_t: "Examination and diagnosis",
    svc_exam_d:
      "History, physical examination, clinical assessment and treatment planning.",
    svc_exam_full_d:
      "History, physical examination and clinical assessment followed by necessary test planning and treatment recommendation.",
    svc_surgery_t: "Surgical procedures",
    svc_surgery_d:
      "Pre-op preparation, anesthesia planning and post-op follow-up.",
    svc_surgery_full_d:
      "Examination, preparation, sterile process and follow-up for neutering and soft tissue operations.",
    svc_puppy_t: "Microchip and passport",
    svc_puppy_d: "Identification, registration and travel document guidance.",
    svc_vaccine_t: "Vaccination and parasite follow-up",
    svc_vaccine_d:
      "Vaccines, parasite control and check-up plan by age, health status and lifestyle risk.",
    svc_lab_t: "Laboratory",
    svc_imaging_t: "Imaging",
    svc_imaging_d:
      "Evaluating the need for X-ray or ultrasound together with the examination.",
    svc_microchip_t: "Microchip and passport",
    svc_microchip_d:
      "Identification, registration and travel document guidance.",
    svc_home_t: "Home visit",
    svc_home_d:
      "Scheduled home visits with examination and vaccine support for suitable patients.",
    location_open_map: "Open in Maps",
    svc_lab_d:
      "Planning hemogram, biochemistry and rapid tests when necessary.",
    svc_dental_t: "Oral and dental health",
    svc_dental_d:
      "Dental tartar, bad breath, gum health and home care recommendations.",
    service_when: "When?",
    service_process: "Process",
    service_follow: "Follow-up",
    svc_exam_when:
      "For lethargy, vomiting, diarrhea, skin-ear-eye concerns or routine checks.",
    svc_exam_process:
      "History, physical examination and tests/imaging are planned if needed.",
    svc_exam_follow:
      "Treatment, control date and home warning signs are shared.",
    svc_vaccine_when:
      "Before puppy/kitten series, delayed vaccines, travel, boarding or risky contact.",
    svc_vaccine_process:
      "Fever, general condition, parasite status and vaccine history are assessed.",
    svc_vaccine_follow:
      "Booster date, possible reactions and parasite plan are explained.",
    svc_lab_when:
      "When bloodwork, infection, organ function or rapid testing is needed.",
    svc_lab_process:
      "The veterinarian selects suitable tests and interprets results with examination findings.",
    svc_lab_follow:
      "Treatment, control or external lab referral is planned according to results.",
    svc_surgery_when:
      "For neutering, wounds, masses and suitable soft tissue procedures.",
    svc_surgery_process:
      "Examination, recommended blood checks, anesthesia and pain management are planned.",
    svc_surgery_follow:
      "Wound care, collar use, activity restriction and control date are given.",
    svc_dental_when:
      "For bad breath, tartar, drooling, chewing difficulty or gum redness.",
    svc_dental_process:
      "Oral examination is performed; cleaning or further treatment needs are assessed.",
    svc_dental_follow: "Home care, nutrition and control interval are shared.",
    svc_imaging_when:
      "For trauma, pain, foreign body suspicion, pregnancy or internal organ assessment.",
    svc_imaging_process:
      "Imaging findings are interpreted together with exam and laboratory results.",
    svc_imaging_follow:
      "Treatment, referral or control plan is clarified according to diagnostic support.",
    svc_microchip_when:
      "For identification, registration, owner change or travel preparation.",
    svc_microchip_process:
      "Microchip, registration and passport/address information are checked correctly.",
    svc_microchip_follow:
      "Current guidance is provided for travel and official document requirements.",
    svc_home_when:
      "For hard-to-transport patients suitable for vaccines or simple examination.",
    svc_home_process:
      "Distance, timing and patient condition are evaluated by phone.",
    svc_home_follow:
      "Emergencies, surgery or advanced diagnostic needs are directed to the clinic.",
    calm_kicker: "Sensitive patient approach",
    calm_title: "We build trust step by step without amplifying fear.",
    calm_desc:
      "From carrier to exam table, we adjust the pace of contact to each patient's temperament. A quiet area, short waiting time and gentle communication make examinations more controlled, especially for shy cats and dogs.",
    calm_point_1: "Quiet welcome",
    calm_point_2: "Short wait",
    calm_point_3: "Gentle contact",
    calm_badge: "Stress-reducing approach",
    smart_tool: "Smart tool",
    followup_short: "Follow-up",
    calc_title: "Estimated Vaccine Plan",
    calc_desc:
      "Enter the birth date and use the result as preliminary information, not as a final vaccination program.",
    clinic_kicker: "Clinic standard",
    clinic_title:
      "Modern medicine, compassionate contact and regular follow-up.",
    clinic_1_t: "Calm welcome",
    clinic_1_d:
      "Preparation is made according to appointment, urgency and sensitive patient needs.",
    clinic_2_t: "Transparent treatment plan",
    clinic_2_d:
      "What is recommended, why it is recommended, alternatives and follow-up are explained clearly.",
    clinic_3_t: "Follow-up and reminders",
    clinic_3_d:
      "Vaccines, check-ups, post-operative care and warning signs are planned.",
    footer_slogan_long:
      "Modern veterinary care, compassionate team and a calm clinic experience.",
    footer_copy: "© 2026 Gülkent Veterinary Clinic. All rights reserved.",
    vaccine_calendar: "Vaccine Calendar",
    location_appointment: "Location and Appointment",
    appointment_contact: "Appointment and Contact",
    blog_page_title_new: "Let’s make care easier to understand.",
    blog_page_lead_new:
      "Short, readable veterinary content about vaccines, parasites, neutering and daily care.",
    blog_disclaimer_new:
      "These articles are for informational purposes. For diagnosis, treatment, medication or vaccination decisions, have your pet examined by a veterinarian.",
    reviewed_by_default: "Gülkent Veterinarians",
    reviewed_by_suffix: "reviewed this article.",
    last_updated: "Last updated",
    blog_medical_note:
      "This content is for general information only and does not replace examination, diagnosis or treatment.",
    blog_empty: "No blog posts yet.",
    read_more: "Read More",
    back_to_blog: "Back to Blog",
    post_loading: "Loading post...",
    post_not_found: "Post not found.",
    services_kicker_new: "Clinic Services",
    services_title_new: "Clear care for every need.",
    services_lead_new:
      "From examination to surgery, preventive medicine to imaging and laboratory support, we plan the process calmly, transparently and according to each patient's needs.",
    process_kicker: "Process",
    process_title: "One clear line from appointment to follow-up.",
    process_1_t: "Planning",
    process_1_d: "The right appointment and preparation details for the need.",
    process_2_t: "Examination",
    process_2_d:
      "Calm approach, clear explanation and a concrete treatment plan.",
    process_3_t: "Follow-up",
    process_3_d: "Continuity through check-up, vaccine and care reminders.",
    contact_kicker_new: "Appointment and Availability",
    contact_title_new: "Contact us for an appointment.",
    contact_lead_new:
      "We gathered phone, WhatsApp and location links in one place for appointments, emergency pre-information and general guidance. Call first for current availability.",
    phone_title: "Phone",
    phone_desc:
      "Call directly for appointments and emergency pre-information; calling before arrival helps us prepare.",
    wa_desc:
      "Photos and short notes are for preliminary information only; they do not replace diagnosis or treatment.",
    send_message: "Send Message",
    hours_title: "Current Availability",
    hours_desc: "Call for appointments and current availability.",
    hours_note: "For emergencies, call first instead of using WhatsApp.",
    appointment_message_hint:
      "Include species, age, complaint, urgency and your preferred time in your appointment message.",
    location_title: "Location",
    contact_addr_plain: "Gülistan Mah. 127. Cadde No:21/1, Isparta / Merkez",
  },
};

Object.keys(supplementalTranslations).forEach((lang) => {
  translations[lang] = Object.assign(
    translations[lang] || {},
    supplementalTranslations[lang],
  );
});

const pageMetaTranslations = {
  tr: {
    "index.html": {
      title: "Gülkent Veteriner Kliniği | Modern ve Şefkatli Veteriner Bakımı",
      description:
        "Gülkent Veteriner Kliniği; muayene, aşı, parazit takibi, cerrahi, laboratuvar, görüntüleme, mikroçip ve uygun hastalarda randevulu ev ziyareti için Isparta Merkez'de yanınızda.",
    },
    "blog.html": {
      title: "Bilgi Köşesi | Gülkent Veteriner Kliniği",
      description:
        "Kedi ve köpek sağlığı, aşı, parazit, kısırlaştırma ve bakım konularında hekim gözden geçirmeli bilgilendirici içerikler.",
    },
    "hizmetler.html": {
      title: "Hizmetler | Gülkent Veteriner Kliniği",
      description:
        "Muayene, aşı ve parazit takibi, cerrahi, diş sağlığı, laboratuvar, görüntüleme, mikroçip ve uygun hastalarda randevulu ev ziyareti süreçleri.",
    },
    "iletisim.html": {
      title: "İletişim | Gülkent Veteriner Kliniği",
      description:
        "Gülkent Veteriner Kliniği için randevu alın, güncel uygunluk için telefonla arayın, WhatsApp'tan ön bilgi gönderin veya konum bilgisine ulaşın.",
    },
    "blog-detay.html": {
      title: "Blog Detay | Gülkent Veteriner Kliniği",
      description:
        "Gülkent Veteriner Kliniği bilgi köşesi yazısı. İçerikler genel bilgilendirme amaçlıdır; tanı ve tedavi için veteriner hekim muayenesi gerekir.",
    },
  },
  en: {
    "index.html": {
      title:
        "Gülkent Veterinary Clinic | Modern and Compassionate Veterinary Care",
      description:
        "Gülkent Veterinary Clinic in Isparta supports pets with examinations, vaccines, parasite care, surgery, laboratory, imaging, microchip and suitable scheduled home visits.",
    },
    "blog.html": {
      title: "Knowledge Hub | Gülkent Veterinary Clinic",
      description:
        "Veterinarian-reviewed informational articles on cat and dog health, vaccines, parasites, neutering and daily care.",
    },
    "hizmetler.html": {
      title: "Services | Gülkent Veterinary Clinic",
      description:
        "Examination, vaccination and parasite follow-up, surgery, dental care, laboratory, imaging, microchip and suitable scheduled home visit processes.",
    },
    "iletisim.html": {
      title: "Contact | Gülkent Veterinary Clinic",
      description:
        "Book an appointment, call first for current availability, send preliminary information on WhatsApp or find location details.",
    },
    "blog-detay.html": {
      title: "Blog Detail | Gülkent Veterinary Clinic",
      description:
        "Knowledge hub article from Gülkent Veterinary Clinic. Content is informational and does not replace veterinary examination.",
    },
  },
};

function getCurrentPageName() {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  return fileName === "" ? "index.html" : fileName;
}

function updatePageMeta(lang) {
  const pageName = getCurrentPageName();
  const meta =
    pageMetaTranslations[lang] && pageMetaTranslations[lang][pageName];
  if (!meta) return;

  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description && meta.description) {
    description.setAttribute("content", meta.description);
  }
}

const translationKeys = Object.keys(translations.tr);
const sourceTextToKey = Object.keys(translations).reduce((map, lang) => {
  translationKeys.forEach((key) => {
    const value = translations[lang] && translations[lang][key];
    if (typeof value === "string" && value.indexOf("<") === -1) {
      const normalized = value.replace(/\s+/g, " ").trim();
      if (normalized) map[normalized] = key;
    }
  });
  return map;
}, {});

function getTranslationDictionary(lang) {
  return translations[lang] || translations.tr;
}

let fallbackStoredLang = "tr";

function getStoredLanguage() {
  try {
    return window.localStorage.getItem("selectedLang") || fallbackStoredLang;
  } catch (error) {
    return fallbackStoredLang;
  }
}

function setStoredLanguage(lang) {
  fallbackStoredLang = lang;
  try {
    window.localStorage.setItem("selectedLang", lang);
  } catch (error) {
    // Storage can be unavailable in strict privacy modes; in-memory state keeps the switcher usable.
  }
}

function getRequestedLanguage() {
  try {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return translations[requested] ? requested : null;
  } catch (error) {
    return null;
  }
}

function createLanguageButton(code, title, flag, label) {
  const button = document.createElement("button");
  button.className = "lang-btn w-8 h-8 rounded-full overflow-hidden opacity-70";
  button.type = "button";
  button.setAttribute("data-lang-code", code);
  button.title = title;
  button.setAttribute("aria-label", label);
  button.innerHTML = `<img src="https://flagcdn.com/w40/${flag}.png" class="w-full h-full object-cover" alt="">`;
  return button;
}

function ensureLanguageSwitcher() {
  if (document.querySelector(".lang-btn")) return;

  const headerInner = document.querySelector("header > div");
  if (!headerInner) return;

  const switcher = document.createElement("div");
  switcher.className =
    "hidden xl:flex items-center gap-1 bg-white/75 rounded-full p-1 border border-ink/5";
  switcher.setAttribute("data-auto-lang-switcher", "true");
  switcher.append(
    createLanguageButton("tr", "Türkçe", "tr", "Türkçe"),
    createLanguageButton("en", "English", "gb", "English"),
  );

  const lastChild = headerInner.lastElementChild;
  if (lastChild && lastChild.tagName === "A") {
    const group = document.createElement("div");
    group.className = "flex items-center gap-3";
    headerInner.insertBefore(group, lastChild);
    group.append(switcher, lastChild);
  } else {
    headerInner.appendChild(switcher);
  }
}

function translateStaticTextNodes(dict) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (
          !parent ||
          ["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "OPTION"].includes(
            parent.tagName,
          )
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        const normalized = node.nodeValue.replace(/\s+/g, " ").trim();
        return sourceTextToKey[normalized]
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    },
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const normalized = node.nodeValue.replace(/\s+/g, " ").trim();
    const key = sourceTextToKey[normalized];
    if (key && dict[key]) {
      const leading = node.nodeValue.match(/^\s*/)[0];
      const trailing = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = `${leading}${dict[key]}${trailing}`;
    }
  });
}

function translateAttributes(dict) {
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((el) => {
    ["aria-label", "alt", "title"].forEach((attr) => {
      if (!el.hasAttribute(attr)) return;
      const key = sourceTextToKey[el.getAttribute(attr)];
      if (key && dict[key]) el.setAttribute(attr, dict[key]);
    });
  });
}

// Sayfayı seçilen dile göre çeviren fonksiyon
function applyTranslations(lang) {
  const dict = translations[lang] || translations.tr;

  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    if (!key) return;

    const value = dict[key];
    if (typeof value === "undefined") {
      console.warn(`⚠️ Çeviri bulunamadı: ${key} (${lang})`);
      return;
    }

    // İçerikte HTML varsa (about_main_text, contact_hours_d gibi)
    if (value.indexOf("<") !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // <html lang=".."> güncelle
  document.documentElement.setAttribute("lang", lang);
  updatePageMeta(lang);
  translateStaticTextNodes(dict);
  translateAttributes(dict);

  // Aktif bayrak butonunu vurgula
  document.querySelectorAll("[data-lang-code]").forEach((btn) => {
    btn.classList.remove("ring-2", "ring-primary", "scale-110", "opacity-100");
    btn.classList.add("opacity-50");
    if (btn.getAttribute("data-lang-code") === lang) {
      btn.classList.remove("opacity-50");
      btn.classList.add("ring-2", "ring-primary", "scale-110", "opacity-100");
    }
  });

  console.log(`✅ Dil değiştirildi: ${lang}`);
}

// Dil değiştirici
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.error(`❌ Geçersiz dil kodu: ${lang}`);
    return;
  }
  setStoredLanguage(lang);
  applyTranslations(lang);
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

// Sayfa yüklenince çalıştır
function initLanguageSystem() {
  const storedLang = getRequestedLanguage() || getStoredLanguage() || "tr";
  const stored = translations[storedLang] ? storedLang : "tr";
  setStoredLanguage(stored);

  ensureLanguageSwitcher();
  console.log(`🌍 Kaydedilmiş dil: ${stored}`);
  applyTranslations(stored);

  // Bayrak butonlarını bağla
  document.querySelectorAll("[data-lang-code]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const code = btn.getAttribute("data-lang-code");
      console.log(`🔄 Dil değiştirme isteği: ${code}`);
      changeLanguage(code);
    });
  });

  console.log("✅ Dil sistemi hazır! 🚀");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSystem);
} else {
  initLanguageSystem();
}

window.getTranslations = function (lang) {
  return getTranslationDictionary(lang || getStoredLanguage() || "tr");
};
