import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const siteUrl = "https://hidahikaru.com";
const locales = ["en", "it", "th", "ja"];
const languageMenuOrder = ["en", "ja", "it", "th"];
const languageLabels = { en: "English", ja: "Japanese", it: "Italian", th: "Thai" };
const languageCodes = { en: "EN", ja: "JA", it: "IT", th: "TH" };
const languageNames = { en: "English", it: "Italiano", th: "ไทย", ja: "日本語" };
const heroImage = "https://hidahikaru.com/wp-prod-2025/wp-content/themes/hidahikaru2025/dist/assets/img/front-img-main__img-21217e33.webp";
const serviceImages = [
  "https://hidahikaru.com/wp-prod-2025/wp-content/themes/hidahikaru2025/dist/assets/img/front-services-main__img01-efc33a0f.webp",
  "https://hidahikaru.com/wp-prod-2025/wp-content/themes/hidahikaru2025/dist/assets/img/front-services-main__img02-50465b24.webp",
  "https://hidahikaru.com/wp-prod-2025/wp-content/themes/hidahikaru2025/dist/assets/img/front-services-main__img03-4008a806.webp"
];
// TODO: Confirm these process images are approved company photography before production deployment.
const processImages = [
  { src: "/assets/process-consultation.png", source: "C:/Users/70725762/Downloads/1.png" },
  { src: "/assets/process-selection.png", source: "C:/Users/70725762/Downloads/4.png" },
  { src: "/assets/process-preparation.png", source: "C:/Users/70725762/Downloads/3.png" },
  { src: "/assets/process-support.png", source: "C:/Users/70725762/Downloads/2.png" }
];

const content = {
  en: {
    title: "Hida Hikaru Recruitment | Thailand-Japan Recruitment Support",
    description: "Hida Hikaru Recruitment connects Thai talent with employment opportunities in Japan through recruitment, candidate preparation, placement coordination, and ongoing support.",
    ogTitle: "Hida Hikaru Recruitment",
    ogDescription: "Thailand-Japan recruitment support for employers, candidates, and partner organisations.",
    nav: { home: "Home", services: "Services", process: "How It Works", company: "Company", contact: "Contact" },
    hero: {
      eyebrow: "THAILAND-JAPAN EMPLOYMENT SOLUTIONS",
      heading: "Connecting Thai talent with professional opportunities in Japan",
      text: "Hida Hikaru Recruitment connects Japanese companies with motivated professionals from Thailand, supporting recruitment, preparation, placement, and assistance throughout the employment journey.",
      primary: "Contact Us",
      secondary: "Our Services",
      trust: "Authorised by the Thai Ministry of Labour · Licence No. Tor 1217/2561"
    },
    intro: {
      heading: "Building stronger relationships between Thailand and Japan",
      body: ["Since receiving authorisation from the Thai Ministry of Labour in 2018, Hida Hikaru Recruitment has supported the recruitment and preparation of Thai professionals who are ready to work in Japan.", "We work closely with candidates and companies to help create reliable, responsible, and sustainable employment relationships."],
      indicators: ["Authorised since 2018", "Thailand-Japan recruitment", "Candidate preparation and support"]
    },
    services: {
      eyebrow: "Our Services",
      heading: "Recruitment support from selection to placement",
      items: [
        ["International Recruitment", "We identify and introduce qualified Thai candidates based on the professional needs of Japanese companies."],
        ["Candidate Preparation and Support", "We support candidates with Japanese language study, workplace preparation, documentation, and practical aspects of professional life in Japan."],
        ["Recruitment Consulting", "We help companies plan international recruitment, from profile definition and interviews through hiring coordination."]
      ]
    },
    process: {
      heading: "A clear recruitment process",
      stages: [
        ["Consultation", "We review company needs, required profiles, employment conditions, and expected timelines."],
        ["Candidate Selection", "We identify and assess suitable candidates, coordinating introductions and interviews."],
        ["Preparation", "We prepare candidates linguistically, professionally, documentally, and culturally."],
        ["Placement and Support", "We coordinate workplace onboarding and continue supporting candidates and companies."]
      ],
      alt: [
        "Recruitment consultation with an employer",
        "Candidate recruitment interview",
        "Japanese-language and workplace preparation",
        "Employee onboarding and ongoing support"
      ]
    },
    company: {
      heading: "About Hida Hikaru Recruitment",
      text: "Hida Hikaru Recruitment is based in Chiang Rai, Thailand, and facilitates recruitment relationships between Thai professionals and companies in Japan.",
      labels: [["Company", "Hida Hikaru Recruitment"], ["Location", "Chiang Rai, Thailand"], ["Licence", "Thai Ministry of Labour · Tor 1217/2561"]]
    },
    contact: {
      heading: "Let's discuss your staffing needs",
      text: "Whether you represent a company, are a candidate, or are part of a partner organisation, you can contact us using the form below.",
      labels: ["Full name", "Company or organisation", "Phone number", "Email address", "Inquiry type", "Message", "Privacy Policy consent"],
      placeholders: ["Your name", "Company, school, or organisation", "+66 ...", "name@example.com", "Tell us briefly how we can help"],
      options: ["Company inquiry", "Candidate inquiry", "Partnership proposal", "General inquiry"],
      consent: "I have read and accept the Privacy Policy.",
      privacyNote: "The information provided will be used only to respond to your inquiry and will be handled in accordance with our Privacy Policy.",
      submit: "Send Inquiry",
      submitting: "Sending...",
      success: "Thank you. Your inquiry has been prepared for submission.",
      error: "Please check the highlighted fields and try again.",
      required: "This field is required.",
      emailError: "Please enter a valid email address.",
      consentError: "Please accept the Privacy Policy before sending.",
      privacy: "Privacy Policy"
    },
    footer: "Thailand-Japan recruitment support for responsible employment relationships."
  },
  it: {
    title: "Hida Hikaru Recruitment | Supporto al reclutamento Thailandia-Giappone",
    description: "Hida Hikaru Recruitment collega i talenti thailandesi alle opportunità professionali in Giappone con selezione, preparazione, inserimento e supporto continuo.",
    ogTitle: "Hida Hikaru Recruitment",
    ogDescription: "Supporto al reclutamento Thailandia-Giappone per aziende, candidati e organizzazioni partner.",
    nav: { home: "Home", services: "Servizi", process: "Come funziona", company: "Azienda", contact: "Contatti" },
    hero: {
      eyebrow: "SOLUZIONI PER IL LAVORO TRA THAILANDIA E GIAPPONE",
      heading: "Colleghiamo i talenti thailandesi alle opportunità professionali in Giappone",
      text: "Hida Hikaru Recruitment mette in contatto le aziende giapponesi con professionisti motivati provenienti dalla Thailandia, offrendo supporto nelle attività di selezione, preparazione, inserimento e assistenza durante il percorso lavorativo.",
      primary: "Contattaci",
      secondary: "I nostri servizi",
      trust: "Autorizzata dal Ministero del Lavoro thailandese · Licenza n. Tor 1217/2561"
    },
    intro: {
      heading: "Costruiamo relazioni più solide tra Thailandia e Giappone",
      body: ["Dal 2018, anno in cui ha ricevuto l'autorizzazione dal Ministero del Lavoro thailandese, Hida Hikaru Recruitment supporta la selezione e la preparazione di professionisti thailandesi destinati a lavorare in Giappone.", "Collaboriamo attentamente con i candidati e con le aziende per contribuire alla creazione di rapporti di lavoro affidabili, responsabili e sostenibili."],
      indicators: ["Autorizzata dal 2018", "Selezione Thailandia-Giappone", "Preparazione e supporto dei candidati"]
    },
    services: {
      eyebrow: "I nostri servizi",
      heading: "Supporto al reclutamento, dalla selezione all'inserimento",
      items: [
        ["Selezione internazionale", "Individuiamo e presentiamo candidati thailandesi qualificati in base alle esigenze professionali delle aziende giapponesi."],
        ["Preparazione e supporto dei candidati", "Supportiamo i candidati nello studio della lingua giapponese, nella preparazione al lavoro, nella documentazione e negli aspetti pratici della vita professionale in Giappone."],
        ["Consulenza per il reclutamento", "Aiutiamo le aziende a pianificare il processo di selezione internazionale, dalla definizione dei profili e dai colloqui fino al coordinamento delle assunzioni."]
      ]
    },
    process: {
      heading: "Un processo di selezione chiaro",
      stages: [
        ["Consulenza", "Analizziamo le esigenze dell'azienda, i profili richiesti, le condizioni di impiego e le tempistiche."],
        ["Selezione dei candidati", "Individuiamo e valutiamo i candidati più adatti, coordinando la presentazione e i colloqui."],
        ["Preparazione", "Prepariamo i candidati dal punto di vista linguistico, professionale, documentale e culturale."],
        ["Inserimento e supporto", "Coordiniamo l'inserimento lavorativo e continuiamo a supportare candidati e aziende."]
      ],
      alt: [
        "Consulenza con un'azienda per la selezione del personale",
        "Colloquio di selezione con un candidato",
        "Preparazione linguistica e professionale dei candidati",
        "Inserimento lavorativo e supporto continuativo"
      ]
    },
    company: {
      heading: "Chi è Hida Hikaru Recruitment",
      text: "Hida Hikaru Recruitment ha sede a Chiang Rai, in Thailandia, e facilita i rapporti di selezione tra professionisti thailandesi e aziende in Giappone.",
      labels: [["Azienda", "Hida Hikaru Recruitment"], ["Sede", "Chiang Rai, Thailandia"], ["Licenza", "Ministero del Lavoro thailandese · Tor 1217/2561"]]
    },
    contact: {
      heading: "Parliamo delle vostre esigenze di personale",
      text: "Che rappresentiate un'azienda, siate candidati o facciate parte di un'organizzazione partner, potete contattarci utilizzando il modulo seguente.",
      labels: ["Nome e cognome", "Azienda o organizzazione", "Numero di telefono", "Indirizzo e-mail", "Tipo di richiesta", "Messaggio", "Consenso alla Privacy Policy"],
      placeholders: ["Il vostro nome", "Azienda, scuola o organizzazione", "+66 ...", "nome@example.com", "Descrivete brevemente come possiamo aiutarvi"],
      options: ["Richiesta da parte di un'azienda", "Richiesta da parte di un candidato", "Proposta di collaborazione", "Richiesta generale"],
      consent: "Dichiaro di aver letto e accettato la Privacy Policy.",
      privacyNote: "Le informazioni fornite saranno utilizzate esclusivamente per rispondere alla richiesta e saranno trattate in conformità alla nostra Privacy Policy.",
      submit: "Invia la richiesta",
      submitting: "Invio in corso...",
      success: "Grazie. La vostra richiesta è pronta per l'invio.",
      error: "Controllate i campi evidenziati e riprovate.",
      required: "Questo campo è obbligatorio.",
      emailError: "Inserite un indirizzo e-mail valido.",
      consentError: "Accettate la Privacy Policy prima di inviare.",
      privacy: "Privacy Policy"
    },
    footer: "Supporto al reclutamento Thailandia-Giappone per rapporti di lavoro responsabili."
  },
  th: {
    title: "Hida Hikaru Recruitment | บริการสรรหาบุคลากรไทย-ญี่ปุ่น",
    description: "Hida Hikaru Recruitment เชื่อมโยงบุคลากรไทยกับโอกาสทำงานในญี่ปุ่น พร้อมสนับสนุนการสรรหา การเตรียมความพร้อม การประสานงาน และการดูแลต่อเนื่อง",
    ogTitle: "Hida Hikaru Recruitment",
    ogDescription: "บริการสรรหาบุคลากรไทย-ญี่ปุ่นสำหรับบริษัท ผู้สมัคร และองค์กรพันธมิตร",
    nav: { home: "หน้าแรก", services: "บริการ", process: "ขั้นตอน", company: "บริษัท", contact: "ติดต่อ" },
    hero: {
      eyebrow: "โซลูชันการจ้างงานไทย-ญี่ปุ่น",
      heading: "เชื่อมโยงบุคลากรไทยกับโอกาสทางอาชีพในประเทศญี่ปุ่น",
      text: "Hida Hikaru Recruitment เชื่อมต่อบริษัทญี่ปุ่นกับบุคลากรไทยที่มีความมุ่งมั่น พร้อมสนับสนุนด้านการสรรหา การเตรียมความพร้อม การประสานงานเข้าทำงาน และการดูแลตลอดเส้นทางการทำงาน",
      primary: "ติดต่อเรา",
      secondary: "บริการของเรา",
      trust: "ได้รับอนุญาตจากกระทรวงแรงงานไทย · ใบอนุญาตเลขที่ Tor 1217/2561"
    },
    intro: {
      heading: "สร้างความสัมพันธ์ที่แข็งแรงยิ่งขึ้นระหว่างไทยและญี่ปุ่น",
      body: ["นับตั้งแต่ได้รับอนุญาตจากกระทรวงแรงงานไทยในปี 2018 Hida Hikaru Recruitment ได้สนับสนุนการสรรหาและเตรียมความพร้อมให้บุคลากรไทยที่ต้องการทำงานในประเทศญี่ปุ่น", "เราทำงานอย่างใกล้ชิดกับผู้สมัครและบริษัท เพื่อช่วยสร้างความสัมพันธ์ในการจ้างงานที่น่าเชื่อถือ รับผิดชอบ และยั่งยืน"],
      indicators: ["ได้รับอนุญาตตั้งแต่ปี 2018", "สรรหาบุคลากรไทย-ญี่ปุ่น", "เตรียมความพร้อมและดูแลผู้สมัคร"]
    },
    services: {
      eyebrow: "บริการของเรา",
      heading: "สนับสนุนการสรรหาตั้งแต่คัดเลือกจนถึงเริ่มงาน",
      items: [
        ["การสรรหาระหว่างประเทศ", "ค้นหาและนำเสนอผู้สมัครชาวไทยที่มีคุณสมบัติเหมาะสมตามความต้องการด้านบุคลากรของบริษัทญี่ปุ่น"],
        ["การเตรียมความพร้อมและดูแลผู้สมัคร", "สนับสนุนผู้สมัครด้านการเรียนภาษาญี่ปุ่น การเตรียมตัวทำงาน เอกสาร และเรื่องปฏิบัติที่เกี่ยวข้องกับชีวิตการทำงานในญี่ปุ่น"],
        ["ที่ปรึกษาด้านการสรรหา", "ช่วยบริษัทวางแผนกระบวนการสรรหาระหว่างประเทศ ตั้งแต่การกำหนดคุณสมบัติ การสัมภาษณ์ ไปจนถึงการประสานงานการจ้างงาน"]
      ]
    },
    process: {
      heading: "กระบวนการสรรหาที่ชัดเจน",
      stages: [
        ["ให้คำปรึกษา", "ทำความเข้าใจความต้องการบุคลากร คุณสมบัติที่ต้องการ เงื่อนไขการจ้างงาน และกรอบเวลาที่คาดหวัง"],
        ["คัดเลือกผู้สมัคร", "ค้นหา ประเมิน และนำเสนอผู้สมัครที่เหมาะสมให้บริษัทพิจารณาและสัมภาษณ์"],
        ["เตรียมความพร้อม", "ผู้สมัครที่ผ่านการคัดเลือกจะได้รับการเตรียมความพร้อมด้านภาษา การทำงาน เอกสาร และก่อนเดินทาง"],
        ["เริ่มงานและดูแลต่อเนื่อง", "ประสานงานขั้นตอนการเริ่มงาน และสนับสนุนการสื่อสารต่อเนื่องหลังเริ่มความสัมพันธ์ในการจ้างงาน"]
      ],
      alt: [
        "การให้คำปรึกษาด้านการสรรหากับนายจ้าง",
        "การสัมภาษณ์คัดเลือกผู้สมัคร",
        "การเตรียมความพร้อมด้านภาษาญี่ปุ่นและการทำงาน",
        "การเริ่มงานและการดูแลสนับสนุนต่อเนื่อง"
      ]
    },
    company: {
      heading: "เกี่ยวกับ Hida Hikaru Recruitment",
      text: "Hida Hikaru Recruitment ตั้งอยู่ที่จังหวัดเชียงราย ประเทศไทย และสนับสนุนความสัมพันธ์ด้านการสรรหาระหว่างบุคลากรไทยกับบริษัทในประเทศญี่ปุ่น",
      labels: [["บริษัท", "Hida Hikaru Recruitment"], ["ที่ตั้ง", "เชียงราย ประเทศไทย"], ["ใบอนุญาต", "กระทรวงแรงงานไทย · Tor 1217/2561"]]
    },
    contact: {
      heading: "มาคุยกันเกี่ยวกับความต้องการด้านบุคลากรของคุณ",
      text: "ไม่ว่าคุณจะเป็นตัวแทนบริษัท ผู้สมัคร หรือองค์กรพันธมิตร สามารถติดต่อเราได้ผ่านแบบฟอร์มด้านล่าง",
      labels: ["ชื่อ-นามสกุล", "บริษัทหรือองค์กร", "หมายเลขโทรศัพท์", "อีเมล", "ประเภทการติดต่อ", "ข้อความ", "การยินยอมต่อนโยบายความเป็นส่วนตัว"],
      placeholders: ["ชื่อของคุณ", "บริษัท โรงเรียน หรือองค์กร", "+66 ...", "name@example.com", "แจ้งรายละเอียดโดยย่อว่าเราจะช่วยคุณได้อย่างไร"],
      options: ["ติดต่อจากบริษัท", "ติดต่อจากผู้สมัคร", "ข้อเสนอความร่วมมือ", "สอบถามทั่วไป"],
      consent: "ข้าพเจ้าได้อ่านและยอมรับนโยบายความเป็นส่วนตัวแล้ว",
      privacyNote: "ข้อมูลที่ให้ไว้จะถูกใช้เพื่อการตอบกลับคำถามของคุณเท่านั้น และจะได้รับการจัดการตามนโยบายความเป็นส่วนตัวของเรา",
      submit: "ส่งคำถาม",
      submitting: "กำลังส่ง...",
      success: "ขอบคุณ แบบฟอร์มของคุณพร้อมสำหรับการส่งแล้ว",
      error: "กรุณาตรวจสอบช่องที่ระบุและลองอีกครั้ง",
      required: "จำเป็นต้องกรอกข้อมูลนี้",
      emailError: "กรุณากรอกอีเมลให้ถูกต้อง",
      consentError: "กรุณายอมรับนโยบายความเป็นส่วนตัวก่อนส่ง",
      privacy: "นโยบายความเป็นส่วนตัว"
    },
    footer: "บริการสรรหาบุคลากรไทย-ญี่ปุ่นเพื่อความสัมพันธ์ในการจ้างงานที่รับผิดชอบ"
  },
  ja: {
    title: "Hida Hikaru Recruitment | タイ・日本間の人材採用支援",
    description: "Hida Hikaru Recruitmentは、タイ人材と日本での就業機会をつなぎ、採用、候補者準備、入社調整、継続的な支援を行います。",
    ogTitle: "Hida Hikaru Recruitment",
    ogDescription: "企業、候補者、パートナー組織のためのタイ・日本間の人材採用支援。",
    nav: { home: "ホーム", services: "サービス", process: "流れ", company: "会社情報", contact: "お問い合わせ" },
    hero: {
      eyebrow: "タイ・日本間の雇用ソリューション",
      heading: "タイの人材と日本での専門的な就業機会をつなぎます",
      text: "Hida Hikaru Recruitmentは、日本企業と意欲あるタイの専門人材を結び、採用、準備、入社調整、就業期間中の支援まで一貫してサポートします。",
      primary: "お問い合わせ",
      secondary: "サービスを見る",
      trust: "タイ労働省認可 · ライセンス番号 Tor 1217/2561"
    },
    intro: {
      heading: "タイと日本のより強い信頼関係を築く",
      body: ["Hida Hikaru Recruitmentは、2018年にタイ労働省の認可を受けて以来、日本で働くタイ人材の採用と準備を支援してきました。", "候補者と企業の双方に寄り添い、信頼性、責任、持続性のある雇用関係づくりに貢献します。"],
      indicators: ["2018年より認可", "タイ・日本間の採用支援", "候補者の準備とサポート"]
    },
    services: {
      eyebrow: "サービス",
      heading: "選考から入社までを支える採用サポート",
      items: [
        ["国際人材採用", "日本企業の職務ニーズに応じて、条件に合うタイ人候補者を見つけ、紹介します。"],
        ["候補者の準備とサポート", "日本語学習、就業準備、書類対応、日本での職業生活に関わる実務面を支援します。"],
        ["採用コンサルティング", "求める人物像の整理、面接、採用調整まで、国際採用プロセスの計画を支援します。"]
      ]
    },
    process: {
      heading: "明確な採用プロセス",
      stages: [
        ["ご相談", "人材ニーズ、求める人物像、雇用条件、想定スケジュールを確認します。"],
        ["候補者選考", "適切な候補者を探し、評価したうえで、企業での確認と面接に向けて紹介します。"],
        ["準備", "選考された候補者には、語学、就業、書類、渡航前に必要な準備を行います。"],
        ["入社と継続支援", "入社手続きを調整し、雇用開始後もコミュニケーションを支援します。"]
      ],
      alt: [
        "企業との採用相談",
        "候補者の採用面接",
        "日本語と就業準備の研修",
        "入社オンボーディングと継続支援"
      ]
    },
    company: {
      heading: "Hida Hikaru Recruitmentについて",
      text: "Hida Hikaru Recruitmentはタイ・チェンライを拠点とし、タイの専門人材と日本企業の採用関係を支援しています。",
      labels: [["会社名", "Hida Hikaru Recruitment"], ["所在地", "タイ、チェンライ"], ["ライセンス", "タイ労働省 · Tor 1217/2561"]]
    },
    contact: {
      heading: "人材ニーズについてご相談ください",
      text: "企業のご担当者、候補者、パートナー組織の方は、以下のフォームよりお問い合わせください。",
      labels: ["氏名", "会社または組織名", "電話番号", "メールアドレス", "お問い合わせ種別", "メッセージ", "プライバシーポリシーへの同意"],
      placeholders: ["お名前", "会社、学校、または組織名", "+66 ...", "name@example.com", "ご相談内容を簡単にご記入ください"],
      options: ["企業からのお問い合わせ", "候補者からのお問い合わせ", "協業のご提案", "一般的なお問い合わせ"],
      consent: "プライバシーポリシーを読み、同意します。",
      privacyNote: "ご提供いただいた情報はお問い合わせへの回答のみに使用し、当社のプライバシーポリシーに従って取り扱います。",
      submit: "お問い合わせを送信",
      submitting: "送信中...",
      success: "ありがとうございます。お問い合わせ内容は送信準備ができました。",
      error: "入力内容をご確認のうえ、もう一度お試しください。",
      required: "この項目は必須です。",
      emailError: "有効なメールアドレスを入力してください。",
      consentError: "送信前にプライバシーポリシーに同意してください。",
      privacy: "プライバシーポリシー"
    },
    footer: "責任ある雇用関係のためのタイ・日本間採用支援。"
  }
};

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function altLinks(locale, path = "/") {
  return locales.map((code) => `<link rel="alternate" hreflang="${code}" href="${siteUrl}/${code}${path}" />`).join("\n    ") +
    `\n    <link rel="alternate" hreflang="x-default" href="${siteUrl}/en${path}" />`;
}

function languageSwitcher(active, suffix = "/") {
  return `<details class="language-switcher">
    <summary aria-label="Language selector"><span class="lang-code">${languageCodes[active]}</span><span>${languageLabels[active]}</span></summary>
    <nav class="language-menu" aria-label="Language selector">
      ${languageMenuOrder.map((code) => `<a href="/${code}${suffix}" lang="${code}" hreflang="${code}" data-locale-link="${code}" aria-label="${languageNames[code]}"${code === active ? ' aria-current="page"' : ""}><span class="lang-code">${languageCodes[code]}</span><span>${languageLabels[code]}</span></a>`).join("\n      ")}
    </nav>
  </details>`;
}

function renderPage(locale) {
  const t = content[locale];
  const path = "/";
  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(t.title)}</title>
    <meta name="description" content="${esc(t.description)}" />
    <link rel="canonical" href="${siteUrl}/${locale}/" />
    ${altLinks(locale)}
    <meta property="og:locale" content="${locale}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}/${locale}/" />
    <meta property="og:title" content="${esc(t.ogTitle)}" />
    <meta property="og:description" content="${esc(t.ogDescription)}" />
    <meta property="og:image" content="${siteUrl}/assets/og.svg" />
    <link rel="stylesheet" href="/assets/styles.css" />
    <script defer src="/assets/site.js"></script>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/${locale}/" aria-label="Hida Hikaru Recruitment home">
        <span class="brand-mark">HIDA</span>
        <span class="brand-name">HIDA HIKARU RECRUITMENT</span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-menu">
        <span></span><span></span><span></span>
      </button>
      <div class="header-panel" id="primary-menu">
        <nav class="primary-nav" aria-label="Primary navigation">
          <a href="/${locale}/">${esc(t.nav.home)}</a>
          <a href="/${locale}/#services">${esc(t.nav.services)}</a>
          <a href="/${locale}/#process">${esc(t.nav.process)}</a>
          <a href="/${locale}/#company">${esc(t.nav.company)}</a>
          <a href="/${locale}/#contact">${esc(t.nav.contact)}</a>
        </nav>
        ${languageSwitcher(locale, path)}
      </div>
    </header>
    <main>
      <section class="hero" id="home">
        <div class="hero-copy">
          <h1>Global People,<br />Local Impact.</h1>
          <p class="live-message">世界の人材が、地域を動かす。</p>
          <p class="lead">${esc(t.hero.text)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#contact">${esc(t.hero.primary)}</a>
            <a class="button secondary" href="#services">${esc(t.hero.secondary)}</a>
          </div>
          <p class="trust-line">${esc(t.hero.trust)}</p>
        </div>
        <figure class="hero-image">
          <img src="${heroImage}" alt="${esc(t.hero.heading)}" />
        </figure>
      </section>
      <section class="section intro" id="introduction">
        <div>
          <p class="eyebrow">${esc(t.nav.company)}</p>
          <h2>${esc(t.intro.heading)}</h2>
        </div>
        <div>
          ${t.intro.body.map((p) => `<p>${esc(p)}</p>`).join("\n          ")}
          <div class="indicator-row">${t.intro.indicators.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
        </div>
      </section>
      <section class="section" id="services">
        <p class="eyebrow">${esc(t.services.eyebrow)}</p>
        <h2>${esc(t.services.heading)}</h2>
        <div class="card-grid">
          ${t.services.items.map(([title, text], index) => `<article class="card"><img src="${serviceImages[index]}" alt="${esc(title)}" /><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></article>`).join("\n          ")}
        </div>
      </section>
      <section class="section process" id="process">
        <h2>${esc(t.process.heading)}</h2>
        <div class="timeline">
          ${t.process.stages.map(([title, text], index) => `<article class="process-card"><div class="process-media"><img src="${processImages[index].src}" width="640" height="480" loading="lazy" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" alt="${esc(t.process.alt[index])}" /><span class="step-badge">${String(index + 1).padStart(2, "0")}</span></div><div class="process-body"><h3>${esc(title)}</h3><p>${esc(text)}</p></div></article>`).join("\n          ")}
        </div>
      </section>
      <section class="section company" id="company">
        <div>
          <p class="eyebrow">${esc(t.nav.company)}</p>
          <h2>${esc(t.company.heading)}</h2>
          <p>${esc(t.company.text)}</p>
        </div>
        <dl>${t.company.labels.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
      </section>
      <section class="section contact" id="contact">
        <div>
          <p class="eyebrow">${esc(t.nav.contact)}</p>
          <h2>${esc(t.contact.heading)}</h2>
          <p>${esc(t.contact.text)}</p>
          <p class="privacy-note">${esc(t.contact.privacyNote)} <a href="/${locale}/privacy/">${esc(t.contact.privacy)}</a></p>
        </div>
        <form class="contact-form" novalidate data-required="${esc(t.contact.required)}" data-email="${esc(t.contact.emailError)}" data-consent="${esc(t.contact.consentError)}" data-success="${esc(t.contact.success)}" data-error="${esc(t.contact.error)}" data-submitting="${esc(t.contact.submitting)}">
          <input type="hidden" name="website_language" value="${locale}" />
          <label>${esc(t.contact.labels[0])}<input required name="name" autocomplete="name" placeholder="${esc(t.contact.placeholders[0])}" /></label>
          <label>${esc(t.contact.labels[1])}<input name="organisation" autocomplete="organization" placeholder="${esc(t.contact.placeholders[1])}" /></label>
          <label>${esc(t.contact.labels[2])}<input required name="phone" autocomplete="tel" placeholder="${esc(t.contact.placeholders[2])}" /></label>
          <label>${esc(t.contact.labels[3])}<input required type="email" name="email" autocomplete="email" placeholder="${esc(t.contact.placeholders[3])}" /></label>
          <label>${esc(t.contact.labels[4])}<select required name="inquiry_type"><option value=""></option>${t.contact.options.map((option) => `<option>${esc(option)}</option>`).join("")}</select></label>
          <label class="full">${esc(t.contact.labels[5])}<textarea required name="message" rows="5" placeholder="${esc(t.contact.placeholders[4])}"></textarea></label>
          <label class="consent full"><input required type="checkbox" name="privacy_consent" /> <span>${esc(t.contact.consent)} <a href="/${locale}/privacy/">${esc(t.contact.privacy)}</a></span></label>
          <p class="form-status full" role="status" aria-live="polite"></p>
          <button class="button primary full" type="submit">${esc(t.contact.submit)}</button>
        </form>
      </section>
    </main>
    <footer class="site-footer">
      <p>© 2026 Hida Hikaru Recruitment. ${esc(t.footer)}</p>
      ${languageSwitcher(locale, path)}
    </footer>
  </body>
</html>`;
}

function renderPrivacy(locale) {
  const t = content[locale];
  const official = {
    en: "This page identifies the official privacy-policy status for this first multilingual release. Only the existing official policy text should be treated as legally binding until reviewed translations are approved.",
    it: "Questa pagina indica lo stato ufficiale della Privacy Policy per questa prima versione multilingue. Solo il testo ufficiale esistente deve essere considerato legalmente vincolante fino all'approvazione di traduzioni revisionate.",
    th: "หน้านี้ระบุสถานะนโยบายความเป็นส่วนตัวอย่างเป็นทางการสำหรับเวอร์ชันหลายภาษาแรกนี้ โปรดถือว่าเฉพาะข้อความนโยบายฉบับทางการที่มีอยู่เท่านั้นมีผลผูกพันทางกฎหมาย จนกว่าคำแปลจะได้รับการตรวจสอบและอนุมัติ",
    ja: "このページは、初回多言語版におけるプライバシーポリシーの公式な位置づけを示すものです。翻訳文が法務確認を受けて承認されるまでは、既存の公式本文のみを法的に有効なものとして扱ってください。"
  };
  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(t.contact.privacy)} | Hida Hikaru Recruitment</title>
    <meta name="description" content="${esc(official[locale])}" />
    <link rel="canonical" href="${siteUrl}/${locale}/privacy/" />
    ${altLinks(locale, "/privacy/")}
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/${locale}/"><span class="brand-mark">HIDA</span><span class="brand-name">HIDA HIKARU RECRUITMENT</span></a>
      ${languageSwitcher(locale, "/privacy/")}
    </header>
    <main class="legal-page">
      <h1>${esc(t.contact.privacy)}</h1>
      <p>${esc(official[locale])}</p>
      <p><a class="button secondary" href="/${locale}/#contact">${esc(t.nav.contact)}</a></p>
    </main>
  </body>
</html>`;
}

let css = `:root{color-scheme:light;--hida-blue:#3673a8;--ink:#242424;--muted:#4b4b4b;--line:#e5e5e5;--paper:#fff;--soft:#f6f8fa;--accent:#3673a8;--accent-dark:#255b89;--gold:#b7791f;--white:#fff}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:"Helvetica Neue",Arial,"Noto Sans","Noto Sans JP","Noto Sans Thai",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.75;overflow-x:hidden}a{color:inherit}.site-header{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:28px;min-height:112px;padding:16px clamp(24px,4vw,58px);background:rgba(255,255,255,.96);border-bottom:5px solid #f0f0f0;backdrop-filter:blur(10px)}.brand{display:flex;align-items:center;gap:28px;text-decoration:none;color:var(--hida-blue);white-space:nowrap;flex-shrink:0}.brand-mark{font-family:Georgia,"Times New Roman",serif;font-size:clamp(3rem,5.2vw,5.2rem);line-height:.8;letter-spacing:.03em;font-weight:500}.brand-name{font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.25rem,2.1vw,2rem);font-weight:700;letter-spacing:.02em}.header-panel{display:flex;align-items:center;justify-content:flex-end;gap:30px;min-width:0;flex:1}.primary-nav{display:flex;align-items:center;gap:clamp(22px,4vw,76px);font-weight:800;letter-spacing:.05em;min-width:0}.primary-nav a{padding:10px 0;text-decoration:none;font-size:clamp(1rem,1.4vw,1.45rem);text-transform:uppercase;color:#333}.primary-nav a:hover{color:var(--hida-blue)}.language-switcher{display:flex;align-items:center;gap:0;max-width:min(34vw,360px);overflow-x:auto;white-space:nowrap;padding:6px;border:1px solid #d8e4ef;border-radius:999px;background:#f7fbff;scrollbar-width:thin;flex:0 1 auto}.language-switcher a{flex:0 0 auto;padding:8px 13px;border-radius:999px;text-decoration:none;font-size:.9rem;font-weight:900;color:var(--accent-dark)}.language-switcher a+a{border-left:1px solid #d8e4ef}.language-switcher a:hover{background:#e8f2fb}.language-switcher a[aria-current=page]{background:var(--hida-blue);color:var(--white);border-left-color:transparent}.menu-toggle{display:none;background:none;border:0;padding:8px}.menu-toggle span{display:block;width:24px;height:2px;background:var(--ink);margin:5px 0}.hero{display:block;padding:clamp(52px,7vw,86px) 0 0;background:#fff}.hero-copy{padding:0 clamp(28px,6vw,68px) clamp(44px,6vw,72px)}.hero h1{font-size:clamp(4.1rem,9vw,8.5rem);line-height:1.12;margin:0 0 26px;max-width:980px;color:var(--hida-blue);font-weight:900;letter-spacing:0}.live-message{font-size:clamp(1.45rem,2.3vw,2.3rem);letter-spacing:.22em;color:#242424;margin:0 0 22px}.lead{font-size:clamp(1rem,1.4vw,1.18rem);max-width:860px;color:var(--muted)}.eyebrow{margin:0 0 12px;color:var(--accent-dark);font-weight:850;text-transform:uppercase;letter-spacing:.08em;font-size:.82rem}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin:28px 0}.button{display:inline-flex;justify-content:center;align-items:center;min-height:46px;padding:11px 18px;border-radius:2px;border:1px solid var(--accent);font-weight:800;text-decoration:none;cursor:pointer}.button.primary{background:var(--accent);color:var(--white)}.button.secondary{background:transparent;color:var(--accent-dark)}.trust-line{color:var(--accent-dark);font-weight:750}.hero-image{margin:0;border-top:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;line-height:0}.hero-image img{display:block;width:100%;height:clamp(250px,38vw,520px);object-fit:cover}.section{padding:clamp(56px,8vw,100px) clamp(20px,6vw,88px);border-top:1px solid var(--line)}.section h2{font-size:clamp(1.8rem,3.5vw,3.2rem);line-height:1.15;margin:0 0 24px;color:var(--hida-blue)}.intro,.company,.contact{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(28px,5vw,72px)}.section p{color:var(--muted);font-size:1.03rem}.indicator-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.indicator-row span{padding:9px 12px;border:1px solid var(--line);border-radius:999px;background:var(--white);font-weight:750}.card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}.card{background:var(--white);border:1px solid var(--line);border-radius:0;overflow:hidden}.card img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}.card div{padding:24px}.card h3,.timeline h3{margin:0 0 10px;font-size:1.22rem}.process{background:#f7f9fb}.timeline{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.timeline article{background:var(--white);border:1px solid var(--line);border-radius:0;padding:24px}.timeline span{display:inline-block;margin-bottom:16px;color:var(--gold);font-weight:900}.company dl{margin:0;background:var(--white);border:1px solid var(--line)}.company dl div{display:grid;grid-template-columns:150px 1fr;gap:18px;padding:18px;border-bottom:1px solid var(--line)}.company dl div:last-child{border-bottom:0}.company dt{font-weight:850}.company dd{margin:0;color:var(--muted)}.contact{background:#fff}.privacy-note{font-size:.95rem}.contact-form{display:grid;grid-template-columns:1fr 1fr;gap:14px;background:#f7f9fb;padding:22px;border:1px solid var(--line)}label{display:grid;gap:6px;font-weight:800}input,select,textarea{width:100%;border:1px solid #c9d2d9;border-radius:2px;padding:12px 13px;font:inherit;background:var(--white);color:var(--ink)}textarea{resize:vertical}.full{grid-column:1/-1}.consent{display:flex;align-items:flex-start;gap:10px}.consent input{width:auto;margin-top:7px}.form-status{margin:0;font-weight:800}.form-status.error{color:#a23b2a}.form-status.success{color:var(--accent-dark)}.site-footer{display:flex;justify-content:space-between;gap:24px;align-items:center;padding:28px clamp(20px,6vw,88px);background:#255b89;color:var(--white)}.site-footer p{margin:0}.site-footer .language-switcher{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.35)}.site-footer .language-switcher a{color:#fff}.site-footer .language-switcher a:hover{background:rgba(255,255,255,.14)}.site-footer .language-switcher a[aria-current=page]{background:var(--white);color:var(--accent-dark)}.legal-page{max-width:860px;margin:0 auto;padding:80px 20px}.legal-page h1{font-size:clamp(2rem,4vw,3.5rem);color:var(--hida-blue)}@media (max-width:1500px){.site-header{align-items:flex-start;flex-direction:column;gap:12px}.header-panel{width:100%;justify-content:space-between}.language-switcher{max-width:100%}.primary-nav{gap:28px}}@media (max-width:900px){.site-header{min-height:86px;padding:12px 18px;align-items:center;flex-direction:row}.brand{gap:12px;min-width:0}.brand-mark{font-size:3.2rem}.brand-name{font-size:1rem;white-space:normal}.menu-toggle{display:block}.header-panel{position:absolute;left:0;right:0;top:86px;display:none;align-items:stretch;flex-direction:column;padding:18px;background:#fff;border-bottom:1px solid var(--line)}.site-header.open .header-panel{display:flex}.primary-nav{flex-direction:column;align-items:stretch;gap:0}.primary-nav a{padding:12px 4px}.language-switcher{max-width:100%;justify-content:flex-start}.intro,.company,.contact{grid-template-columns:1fr}.card-grid,.timeline{grid-template-columns:1fr 1fr}.contact-form{grid-template-columns:1fr}.company dl div{grid-template-columns:1fr}}@media (max-width:560px){.hero-copy,.hero,.section{padding-left:18px;padding-right:18px}.hero{padding-left:0;padding-right:0}.hero-copy{padding-top:36px}.hero h1{font-size:3.3rem}.live-message{font-size:1.12rem;letter-spacing:.04em}.card-grid,.timeline{grid-template-columns:1fr}.site-footer{display:block}.site-footer .language-switcher{margin-top:18px}.button{width:100%}.hero-actions{display:grid}.hero-image img{height:260px}}@media (max-width:430px){.site-header{padding-left:16px;padding-right:14px}.brand-name{display:none}.brand-mark{font-size:3rem}.hero h1{font-size:3rem}.language-switcher a{padding-left:11px;padding-right:11px}}`;
css += `.language-switcher{position:relative;display:block;max-width:none;overflow:visible;padding:0;border:0;border-radius:0;background:transparent;scrollbar-width:auto;flex:0 0 auto}.language-switcher summary{list-style:none;display:flex;align-items:center;gap:9px;min-width:148px;padding:7px 12px;border:1px solid rgba(255,255,255,.36);border-radius:6px;background:var(--hida-blue);color:#fff;font-size:.88rem;font-weight:750;cursor:pointer;box-shadow:0 5px 14px rgba(0,0,0,.12)}.language-switcher summary::-webkit-details-marker{display:none}.language-switcher summary:after{content:"v";margin-left:auto;font-size:.72rem;opacity:.82}.lang-code{display:inline-grid;place-items:center;min-width:27px;height:18px;padding:0 4px;border-radius:3px;background:rgba(255,255,255,.18);font-size:.68rem;font-weight:900;letter-spacing:.04em}.language-menu{position:absolute;right:0;top:calc(100% + 4px);z-index:40;display:grid;width:148px;padding:4px;background:#255b89;border-radius:6px;box-shadow:0 10px 24px rgba(0,0,0,.22)}.language-switcher a{display:flex;align-items:center;gap:8px;padding:7px 9px;border-radius:4px;text-decoration:none;font-size:.86rem;font-weight:750;color:#fff}.language-switcher a+a{border-left:0}.language-switcher a:hover,.language-switcher a[aria-current=page]{background:#3f7fb6;color:#fff}.site-footer .language-switcher{background:transparent;border:0}.site-footer .language-switcher a{color:#fff}.site-footer .language-switcher a[aria-current=page]{background:#3f7fb6;color:#fff}.brand-mark{font-size:clamp(2.55rem,4.3vw,4.35rem)}.brand-name{font-size:clamp(1.05rem,1.65vw,1.6rem)}.primary-nav a{font-size:clamp(.92rem,1.08vw,1.12rem)}.hero{padding-top:clamp(36px,5.2vw,64px)}.hero h1{font-size:clamp(3.05rem,6.8vw,6.45rem);line-height:1.08}.live-message{font-size:clamp(1.1rem,1.7vw,1.75rem);letter-spacing:.16em}.lead{font-size:clamp(.95rem,1.15vw,1.08rem)}.process{position:relative}.timeline{position:relative;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;align-items:stretch}.timeline:before{content:"";position:absolute;left:7%;right:7%;top:129px;height:2px;background:#cddbeb;z-index:0}.process-card{position:relative;z-index:1;display:flex;flex-direction:column;min-height:100%;padding:0!important;overflow:hidden;border:1px solid #dbe3ea!important;background:#fff;transition:transform .18s ease,box-shadow .18s ease}.process-card:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(37,91,137,.14)}.process-media{position:relative}.process-media img{display:block;width:100%;height:clamp(210px,15vw,240px);aspect-ratio:4/3;object-fit:cover}.step-badge{position:absolute;left:18px;bottom:-24px;display:grid!important;place-items:center;width:54px;height:54px;margin:0!important;border-radius:999px;background:var(--hida-blue);color:#fff!important;border:4px solid #fff;box-shadow:0 7px 16px rgba(0,0,0,.16);font-weight:900}.process-body{display:flex;flex-direction:column;gap:10px;flex:1;padding:40px 20px 22px}.process-body h3{margin:0;font-size:1.1rem;line-height:1.35}.process-body p{margin:0;color:var(--muted);font-size:.96rem;line-height:1.65}@media (prefers-reduced-motion:reduce){.process-card{transition:none}.process-card:hover{transform:none}}@media (max-width:1500px){.language-switcher{max-width:none}}@media (max-width:1023px){.timeline{grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.timeline:before{display:none}.process-media img{height:auto}.process-card:hover{transform:none}}@media (max-width:900px){.language-switcher{align-self:flex-start}.language-menu{left:0;right:auto}.brand-mark{font-size:2.7rem}.brand-name{font-size:.92rem}.hero h1{font-size:clamp(2.75rem,12vw,4.3rem)}}@media (max-width:640px){.timeline{grid-template-columns:1fr}.process-body{padding:38px 18px 20px}}@media (max-width:430px){.brand-mark{font-size:2.55rem}.hero h1{font-size:2.62rem}.live-message{font-size:1rem;letter-spacing:.02em}.language-switcher summary{min-width:142px}}`;

const js = `const supported=["en","it","th","ja"];document.querySelector(".menu-toggle")?.addEventListener("click",e=>{const h=document.querySelector(".site-header");const open=!h.classList.contains("open");h.classList.toggle("open",open);e.currentTarget.setAttribute("aria-expanded",String(open));});function updateLocaleLinks(){const hash=location.hash||"";document.querySelectorAll("[data-locale-link]").forEach(a=>{const code=a.getAttribute("data-locale-link");const isPrivacy=location.pathname.includes("/privacy/");a.href="/"+code+(isPrivacy?"/privacy/":"/")+hash;});}updateLocaleLinks();window.addEventListener("hashchange",updateLocaleLinks);document.addEventListener("click",event=>{document.querySelectorAll(".language-switcher[open]").forEach(menu=>{if(!menu.contains(event.target))menu.removeAttribute("open");});});document.querySelectorAll(".contact-form").forEach(form=>{form.addEventListener("submit",event=>{event.preventDefault();const status=form.querySelector(".form-status");status.className="form-status full";status.textContent="";form.querySelectorAll("[aria-invalid]").forEach(el=>el.removeAttribute("aria-invalid"));let ok=true;const required=form.dataset.required;for(const field of form.querySelectorAll("[required]")){if((field.type==="checkbox"&&!field.checked)||(field.type!=="checkbox"&&!field.value.trim())){field.setAttribute("aria-invalid","true");ok=false;}}const email=form.querySelector('input[type="email"]');if(email&&email.value&&!email.checkValidity()){email.setAttribute("aria-invalid","true");status.textContent=form.dataset.email;status.classList.add("error");return;}if(!ok){const consent=form.querySelector('input[name="privacy_consent"]');status.textContent=consent?.hasAttribute("aria-invalid")?form.dataset.consent:required;status.classList.add("error");return;}const language=form.elements.website_language.value;if(!supported.includes(language)){status.textContent=form.dataset.error;status.classList.add("error");return;}const button=form.querySelector("button");const original=button.textContent;button.textContent=form.dataset.submitting;button.disabled=true;setTimeout(()=>{button.textContent=original;button.disabled=false;status.textContent=form.dataset.success;status.classList.add("success");form.reset();form.elements.website_language.value=language;},350);});});`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#fbfcf8"/><rect x="72" y="72" width="1056" height="486" rx="24" fill="#eef4ed" stroke="#d9e0db"/><text x="116" y="180" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#0b4f4a">Hida Hikaru Recruitment</text><text x="116" y="285" font-family="Inter, Arial, sans-serif" font-size="70" font-weight="900" fill="#17211f">Thailand-Japan</text><text x="116" y="370" font-family="Inter, Arial, sans-serif" font-size="70" font-weight="900" fill="#17211f">Recruitment Support</text><text x="116" y="455" font-family="Inter, Arial, sans-serif" font-size="30" fill="#586764">Recruitment, preparation, placement, and ongoing assistance</text><circle cx="940" cy="286" r="76" fill="#0f766e"/><text x="900" y="307" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="900" fill="#fff">TH</text><circle cx="1018" cy="374" r="76" fill="#b7791f"/><text x="981" y="395" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="900" fill="#fff">JP</text></svg>`;

mkdirSync(join(root, "assets"), { recursive: true });
for (const image of processImages) {
  copyFileSync(image.source, join(root, image.src.replace("/assets/", "assets/")));
}
writeFileSync(join(root, "assets", "styles.css"), css);
writeFileSync(join(root, "assets", "site.js"), js);
writeFileSync(join(root, "assets", "og.svg"), og);
writeFileSync(join(root, "index.html"), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/en/"><link rel="canonical" href="${siteUrl}/en/"><title>Hida Hikaru Recruitment</title></head><body><p><a href="/en/">English</a></p></body></html>`);
for (const locale of locales) {
  mkdirSync(join(root, locale), { recursive: true });
  mkdirSync(join(root, locale, "privacy"), { recursive: true });
  writeFileSync(join(root, locale, "index.html"), renderPage(locale));
  writeFileSync(join(root, locale, "privacy", "index.html"), renderPrivacy(locale));
}
writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${locales.map((locale) => `  <url>\n    <loc>${siteUrl}/${locale}/</loc>\n${locales.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${siteUrl}/${code}/" />`).join("\n")}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />\n  </url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
