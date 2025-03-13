import { b as addMessages, i as init, g as getLocaleFromNavigator } from "./runtime.js";
const metadata$A = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$A = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$A = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$A = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$A = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$A = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$A = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_0 = {
  metadata: metadata$A,
  home: home$A,
  blog: blog$A,
  docs: docs$A,
  footer: footer$A,
  navbar: navbar$A,
  download: download$A
};
const metadata$z = {
  name: "{FilesName}",
  home: "{FilesName} • الرئيسية",
  docs_home: "{FilesName} • الوثائق",
  docs_page: "{FilesName} • الوثائق - {title}",
  blog_home: "{FilesName} • المدونة",
  blog_page: "{FilesName} • {title}",
  description: "بناء أفضل مدير ملفات لنظام ويندوز."
};
const home$z = {
  community: {
    chip: "المجتمع",
    title: "تم تصميمه وتطويره من قِـبلك.",
    description: "{FilesName} هي برمجيات مجانية ومفتوحة المصدر، تقام بصيانتها وتصميمها مجموعة من مئات المساهمين.",
    discord: "انضم إلى المناقشة",
    docs: "كن مساهماً",
    contributions: "{amount, plural, =0 {لا توجد مساهمات} one {# مساهمة} other {# مساهمات}}"
  },
  design: {
    chip: "التصميم",
    title: "تلتقي القوة بالجمال.",
    description: "استكشف تصميم جميل لنظام ويندوز أولاً. إدارة جميع ملفاتك مع زيادة الإنتاجية. العمل عبر مجلدات متعددة مع علامات التبويب. وأكثر من ذلك.",
    download: "تحميل",
    learn_more: "معرفة المزيد"
  },
  features: {
    chip: "المميزات",
    title: "إنه يعمل ذلك بالفعل.",
    description: "دمج الملفات السحابية؟ علامات التبويب والتخطيطات المتعددة؟ معاينات الملفات الغنية؟ {FilesName} غطتها بميزات قوية تتوقعها من مدير الملفات الحديث.",
    unknown: "غير معروف",
    cloud: {
      title: "التكامل السحابي السلس",
      description: "الدعم المدمج لأقراص السحابة مثل وان درايف، وكوكل درايف، والأي كلاود."
    },
    preview: {
      title: "لوحة المعاينة",
      description: "معاينة الصور ومقاطع الفيديو والمستندات بدون فتحها."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro الدعم",
      description: "معاينة ملفات أوفيس، المستندات، وأنواع الملفات الأخرى عن طريق الضغط على مفتاح المسافة. تتطلب هذه الميزة تثبيت QuickLook أو SeerPro."
    },
    tags: {
      title: "علامات الملفات والمجلدات",
      description: "تنظيم وفرز ملفاتك ومجلداتك بعلامات ملونة."
    },
    tabs: {
      title: "تعدد المهام مع علامات التبويب",
      description: "تجنب نوافذ متعددة والحفاظ على خلو سطح المكتب مع علامات التبويب."
    },
    columns: {
      title: "عرض الأعمدة",
      description: "التنقل بسرعة عبر مختلف مستويات نظام الملفات باستخدام تخطيط العمود."
    },
    archives: {
      title: "عرض وتحرير الأرشيف",
      description: "إنشاء واستخراج الأرشيفات بما في ذلك المضغوط زيب، وينرار، و ٧زيب."
    },
    git: {
      title: "تكامل Git",
      description: "إدارة مشاريع Git بسهولة. إنشاء فروع جديدة، التبديل بينها، ومزامنة التغييرات الخاصة بك - كل ذلك دون ترك الملفات."
    },
    "dual-pane": {
      title: "لوحة مزدوجة",
      description: "عرض وإدارة مجلدين جنبا إلى جنب مع ميزة اللوحة المزدوجة."
    },
    hashes: {
      title: "التجزئة",
      description: "عرض تجزئة الملفات من نافذة الخصائص ومقارنتها."
    },
    "command-palette": {
      title: "لوحة الأوامر",
      description: "الوصول السريع إلى الأوامر والميزات والإعدادات من لوحة الأوامر."
    },
    "remap-key-bindings": {
      title: "اربط المفتاح",
      description: "تبسيط سير العمل عن طريق إنشاء ارتباطات مفاتيح مخصصة."
    }
  },
  themes: {
    chip: "السمات",
    title: "متميز شخصيا.",
    description: "خذها على طريقتك. {FilesName} تحتوي على واجهة مستخدم قابلة للتخصيص بالكامل، مباشرة إلى الألوان والمواد. جرب المواضيع المخصصة التي تم بناؤها في {FilesName} أو تصفح مباشرة في المستندات وإنشاء الخاص بك.",
    grey_blue: "رمادي داكن • أزرق فاتح",
    grey_green: "أزرق رمادي • نيون أخضر",
    purple: "بنفسجي",
    yellow_white: "أصفر • أبيض",
    white_teal: "أبيض رائع • التركواز المظلم",
    sky_blue: "ازرق سماوي",
    select_theme: "اختر السمة #{index}"
  }
};
const blog$z = {
  coming_soon: "المزيد من المشاركات قريباً!",
  read_more: "إقرأ المزيد",
  share: {
    "default": "المشاركة الأصلية",
    url: "نسخ الرابط",
    tweet: "تويتر",
    facebook: "فيسبوك",
    rss: "تلقيم ويب"
  }
};
const docs$z = {
  autocomplete_empty: "لم يتم العثور على أي نتائج",
  edit_page: "تعديل هذه الصفحة",
  search_docs: "البحث في المستندات"
};
const footer$z = {
  home: "الرئيسية",
  docs: "الوثائق",
  news: "الأخبار",
  download: "التحميل",
  contribute: "ساهم في {FilesName}",
  feedback: "اعطي ملاحظات",
  style_guide: "دليل السمة",
  translations: "الترجمات",
  support: "الدعم",
  privacy: "الخصوصية"
};
const navbar$z = {
  home: "الرئيسية",
  docs: "توثيق",
  news: "أخبار",
  download: "تحميل",
  themes: "سمات",
  discord: "ديسكورد",
  github: "جيتهاب"
};
const download$z = {
  title: "تحميل {FilesName}",
  donation_description: "مشروع {FilesName} هو مشروع-مجتمعي ويعتمد على دعمك للنمو والتحسين. يرجى النظر في شراء {FilesName} من خلال متجر مايكروسوفت أو دعمنا على جيتهاب إذا كنت تستخدم النسخة الكلاسيكية.",
  donation_button: "تبرع",
  microsoft_store: {
    title: "تحميل الملفات",
    description: "شراء {FilesName} عن طريق متجر مايكروسوفت يساعد في دعم المطورين ويسمح لنا بمواصلة تحديث التطبيق مع إضافة مميزات وتحسينات جديدة."
  },
  preview: {
    title: "تحميل نسخة Insider Preview",
    description: "يمكن تثبيت النسخة التجريبية إلى جانب الإصدار المستقر وتوفر الوصول المبكر إلى المميزات والتحسينات الجديدة."
  },
  self_signed: {
    link_text: "المثبت الكلاسيكي",
    description: "هل ليس لديك إمكانية الوصول إلى متجر مايكروسوفت؟ جرب "
  }
};
const __vite_glob_0_1 = {
  metadata: metadata$z,
  home: home$z,
  blog: blog$z,
  docs: docs$z,
  footer: footer$z,
  navbar: navbar$z,
  download: download$z
};
const metadata$y = {
  name: "{FilesName}",
  home: "{FilesName} • Inici",
  docs_home: "{FilesName} • Documentació",
  docs_page: "{FilesName} • Documentació - {title}",
  blog_home: "{FilesName} • Bloc",
  blog_page: "{FilesName} • {title}",
  description: "Construint el millor gestor de fitxers per a Windows."
};
const home$y = {
  community: {
    chip: "Comunitat",
    title: "Dissenyat i desenvolupat per tu.",
    description: "{FilesName} és un programari gratuït i de codi obert, mantingut i dissenyat per una col·lectiva de centenars de col·laboradors.",
    discord: "Uneix-te a la discussió",
    docs: "Converteix-te en col·laborador",
    contributions: "{amount, plural, =0 {No hi ha contribucions} one {# contribució} other {# contribucions}}"
  },
  design: {
    chip: "Disseny",
    title: "La potència es troba amb la bellesa.",
    description: "Explora un bell disseny pensat per a Windows. Gestiona tots els teus fitxers amb una productivitat incrementada. Treballa en diverses carpetes amb pestanyes. I molt més.",
    download: "Baixa",
    learn_more: "Aprèn més"
  },
  features: {
    chip: "Característiques",
    title: "Ja ho fa.",
    description: "Integració amb fitxers a la núvol? Pestanyes i més d'un disseny? Previsualitzacions avançades de fitxers? {FilesName} ho té cobert amb característiques robustes que esperes d'un gestor de fitxers modern.",
    unknown: "Desconegut",
    cloud: {
      title: "Integració a la núvol sense costura",
      description: "Suport integrat per a discos a la núvol com OneDrive, Google Drive i iCloud."
    },
    preview: {
      title: "Pany de previsualització",
      description: "Visualitza fotos, vídeos i documents sense obrir-los."
    },
    "popup-preview": {
      title: "Suport per a QuickLook i SeerPro",
      description: "Previsualitza fitxers d'Office, documents i altres tipus de fitxers prement la barra d'espai. Aquesta característica requereix instal·lar QuickLook o SeerPro."
    },
    tags: {
      title: "Etiqueta fitxers i carpetes",
      description: "Organitza i classifica els teus fitxers i carpetes amb etiquetes de colors."
    },
    tabs: {
      title: "Feu multitasca amb pestanyes",
      description: "Evita finestres múltiples i mantén el teu escriptori sense desordre amb pestanyes."
    },
    columns: {
      title: "Vista de columnes",
      description: "Navega ràpidament a través de diferents nivells del sistema de fitxers utilitzant la disposició de columnes."
    },
    archives: {
      title: "Visualitza i edita arxius comprimits",
      description: "Crea i extreu arxius, incloent zip, WinRar i 7zip."
    },
    git: {
      title: "Integració amb Git",
      description: "Gestiona fàcilment els teus projectes Git. Crea noves branques, canvia entre elles i sincronitza els teus canvis, tot sense sortir de Files."
    },
    "dual-pane": {
      title: "Panell dual",
      description: "Visualitza i gestiona dues carpetes al costat amb la funció de panell dual."
    },
    hashes: {
      title: "Hashes",
      description: "Visualitza i compara els hash dels fitxers des de la finestra de propietats."
    },
    "command-palette": {
      title: "Paleta de Comandes",
      description: "Accedeix ràpidament a comandes, funcions i configuracions des de la Paleta de Comandes."
    },
    "remap-key-bindings": {
      title: "Torna a assignar les combinacions de tecles",
      description: "Optimitza el teu flux de treball creant combinacions de tecles personalitzades."
    }
  },
  themes: {
    chip: "Temes",
    title: "Distingitament personal.",
    description: "A la teva manera. {FilesName} ofereix una interfície d'usuari totalment personalitzable, fins als colors i materials. Prova els temes personalitzats incorporats a {FilesName} o plongeu a la documentació i crea el teu propi.",
    grey_blue: "Gris Fosc • Blau Clar",
    grey_green: "Blau Gris • Verd Neó",
    purple: "Lila",
    yellow_white: "Groc • Blanc",
    white_teal: "Blanc Fresc • Teal Fosc",
    sky_blue: "Blau Cel",
    select_theme: "Selecciona el tema #{index}"
  }
};
const blog$y = {
  coming_soon: "Més publicacions aviat!",
  read_more: "Llegeix més",
  share: {
    "default": "Compartir de forma nativa",
    url: "Copia la URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Canal RSS"
  }
};
const docs$y = {
  autocomplete_empty: "Cap resultat trobat",
  edit_page: "Edita aquesta pàgina",
  search_docs: "Cerca Documentació"
};
const footer$y = {
  home: "Inici",
  docs: "Documentació",
  news: "Notícies",
  download: "Baixa",
  contribute: "Contribueix a {FilesName}",
  feedback: "Proporciona retroacció",
  style_guide: "Guia d'estil",
  translations: "Traduccions",
  support: "Support",
  privacy: "Privacy"
};
const navbar$y = {
  home: "Inici",
  docs: "Documentació",
  news: "Notícies",
  download: "Baixa",
  themes: "Temes",
  discord: "Discord",
  github: "Github"
};
const download$y = {
  title: "Baixa {FilesName}",
  donation_description: "{FilesName} és un projecte impulsat per la comunitat que depèn del vostre suport per créixer i millorar. Si us plau, considereu adquirir {FilesName} a través de la Microsoft Store o donar-nos suport a GitHub si feu servir l'instal·lador clàssic.",
  donation_button: "Donar",
  microsoft_store: {
    title: "Baixa el Files",
    description: "Adquirir {FilesName} a través de la Microsoft Store ajuda a donar suport als desenvolupadors i ens permet continuar actualitzant l'aplicació amb noves funcionalitats i millores."
  },
  preview: {
    title: "Insider Preview",
    description: "La versió de previsualització es pot instal·lar al costat de la versió estable i ofereix accés anticipat a noves funcionalitats i millores."
  },
  self_signed: {
    link_text: "instal·lador clàssic",
    description: "No tens accés a la Microsoft Store? Prova la nostra "
  }
};
const __vite_glob_0_2 = {
  metadata: metadata$y,
  home: home$y,
  blog: blog$y,
  docs: docs$y,
  footer: footer$y,
  navbar: navbar$y,
  download: download$y
};
const metadata$x = {
  name: "{FilesName}",
  home: "{FilesName} • Domů",
  docs_home: "{FilesName} • Dokumentace",
  docs_page: "{FilesName} • Dokumentace - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Vytvoření nejlepšího správce souborů pro systém Windows."
};
const home$x = {
  community: {
    chip: "Komunita",
    title: "Navrženo a vyvinuto vámi.",
    description: "{FilesName} je svobodný software s otevřeným zdrojovým kódem, který spravuje a navrhuje kolektiv stovek přispěvatelů.",
    discord: "Připojit se k diskuzi",
    docs: "Staňte se přispěvatelem",
    contributions: "{amount, plural, =0 {Žádné příspěvky} one {# příspěvek} few {# přispěvků} other {# přispěvků}}"
  },
  design: {
    chip: "Vzhled",
    title: "Síla se setkává s krásou.",
    description: "Prozkoumejte krásný design v systému Windows. Spravujte všechny své soubory s vyšší produktivitou. Pracujte ve více složkách s kartami. A mnohem více.",
    download: "Stáhnout",
    learn_more: "Zjistit více"
  },
  features: {
    chip: "Funkce",
    title: "Už to umí také.",
    description: "Integrace cloudových souborů? Karty a více rozvržení? Bohaté náhledy souborů? {FilesName} je vybaven robustními funkcemi, které očekáváte od moderního správce souborů.",
    unknown: "Neznámé",
    cloud: {
      title: "Bezproblémová integrace cloudu",
      description: "Vestavěná podpora cloudových disků, jako je OneDrive, Disk Google a iCloud."
    },
    preview: {
      title: "Podokno náhledu",
      description: "Prohlížení fotografií, videí a dokumentů bez jejich otevírání."
    },
    "popup-preview": {
      title: "Podpora QuickLook & SeerPro",
      description: "Stisknutím mezerníku zobrazíte náhled souborů Office, dokumentů a dalších typů souborů. Tato funkce vyžaduje instalaci aplikace QuickLook nebo SeerPro."
    },
    tags: {
      title: "Štítkování souborů a složek",
      description: "Uspořádejte a roztřiďte své soubory a složky pomocí barevných štítků."
    },
    tabs: {
      title: "Multitask pomocí karet",
      description: "Vyhněte se více oknům a udržujte pracovní plochu bez nepořádku pomocí karet."
    },
    columns: {
      title: "Sloupcové zobrazení",
      description: "Pomocí sloupcového uspořádání můžete rychle procházet různé úrovně souborového systému."
    },
    archives: {
      title: "Prohlížení a úprava archivů",
      description: "Vytváření a rozbalování archivů včetně souborů zip, WinRar a 7zip."
    },
    git: {
      title: "Integrace systému Git",
      description: "Snadná správa projektů Git. Vytvářejte nové větve, přepínejte mezi nimi a synchronizujte změny - a to vše bez nutnosti opouštět aplikaci Files."
    },
    "dual-pane": {
      title: "Dvojitý panel",
      description: "Zobrazte a spravujte dvě složky vedle sebe pomocí funkce Dvojitého panelu."
    },
    hashes: {
      title: "Haše",
      description: "Zobrazení a porovnání hašů souborů v okně vlastností."
    },
    "command-palette": {
      title: "Paleta příkazů",
      description: "Rychlý přístup k příkazům, funkcím a nastavením z palety příkazů."
    },
    "remap-key-bindings": {
      title: "Vlastní klávesové zkratky",
      description: "Zjednodušte si pracovní postupy vytvořením vlastních klávesových zkratek."
    }
  },
  themes: {
    chip: "Motivy",
    title: "Zcela osobní.",
    description: "Ať je po vašem. {FilesName} má plně přizpůsobitelné uživatelské rozhraní, ať už barvy a materiály níže. Vyzkoušejte vlastní motivy, které jsou zabudovány do {FilesName}, nebo se ponořte přímo do dokumentace a vytvořte si vlastní.",
    grey_blue: "Tmavě šedá • Světle modrá",
    grey_green: "Modro šedá • Neonově zelená",
    purple: "Fialová",
    yellow_white: "Žlutá • Bílá",
    white_teal: "Chladně bílá • Tmavě hnědá",
    sky_blue: "Modré nebe",
    select_theme: "Vybrat motiv #{index}"
  }
};
const blog$x = {
  coming_soon: "Další příspěvky se objeví již brzy!",
  read_more: "Zobrazit více",
  share: {
    "default": "Přirozené sdílení",
    url: "Zkopírovat URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS zdroj"
  }
};
const docs$x = {
  autocomplete_empty: "Nebyly nalezeny žádné výsledky",
  edit_page: "Upravit tuto stránku",
  search_docs: "Vyhledat dokumentaci"
};
const footer$x = {
  home: "Domů",
  docs: "Dokumentace",
  news: "Novinky",
  download: "Stáhnout",
  contribute: "Přispějte do {FilesName}",
  feedback: "Zanechat zpětnou vazbu",
  style_guide: "Příručka stylu",
  translations: "Překlad",
  support: "Podpora",
  privacy: "Soukromí"
};
const navbar$x = {
  home: "Domů",
  docs: "Dokumentace",
  news: "Novinky",
  download: "Stáhnout",
  themes: "Motivy",
  discord: "Discord",
  github: "GitHub"
};
const download$x = {
  title: "Stáhnout {FilesName}",
  donation_description: "{FilesName} je komunitní projekt, jehož růst a zlepšování závisí na vaší podpoře. Zvažte prosím zakoupení {FilesName} prostřednictvím obchodu Microsoft Store nebo nás podpořte na GitHubu, pokud používáte klasický instalátor.",
  donation_button: "Přispět",
  microsoft_store: {
    title: "Stáhnout Files",
    description: "Zakoupením {FilesName} prostřednictvím obchodu Microsoft Store podpoříte vývojáře a umožníte nám pokračovat v aktualizaci aplikace o nové funkce a vylepšení."
  },
  preview: {
    title: "Předběžná verze",
    description: "Preview verzi lze nainstalovat současně se stabilní verzí a poskytuje předběžný přístup k novým funkcím a vylepšením."
  },
  self_signed: {
    link_text: "klasický instalátor",
    description: "Nemáte přístup do obchodu Microsoft Store? Zkuste náš "
  }
};
const __vite_glob_0_3 = {
  metadata: metadata$x,
  home: home$x,
  blog: blog$x,
  docs: docs$x,
  footer: footer$x,
  navbar: navbar$x,
  download: download$x
};
const metadata$w = {
  name: "{FilesName}",
  home: "{FilesName} • Hjem",
  docs_home: "{FilesName} • Dokumenter",
  docs_page: "{FilesName} • Dokumenter - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Vi bygger den bedste filhåndtering til Windows."
};
const home$w = {
  community: {
    chip: "Fællesskab",
    title: "Designet og udviklet af dig.",
    description: "{FilesName} er fri og open source-software, vedligeholdt og designet af et kollektiv af hundredvis af bidragsydere.",
    discord: "Vær med i diskussionen",
    docs: "Bliv en bidragsyder",
    contributions: "{amount, plural, =0 {Ingen bidrag} one {# bidrag} other {# bidrag}}"
  },
  design: {
    chip: "Design",
    title: "Kraft møder skønhed.",
    description: "Udforsk et smukt Windows-først design. Administrer alle dine filer med øget produktivitet. Arbejd på tværs af flere mapper med faner. Og så meget mere.",
    download: "Hent",
    learn_more: "Lær mere"
  },
  features: {
    chip: "Funktioner",
    title: "Det gør den allerede.",
    description: "Integration af cloud-filer? Faner og flere layouts? Rige filforhåndsvisninger? {FilesName} har det hele med robuste funktioner, som du forventer af en moderne filhåndtering.",
    unknown: "Ukendt",
    cloud: {
      title: "Problemfri cloud-integration",
      description: "Indbygget understøttelse af cloud-drev som OneDrive, Google Drev og iCloud."
    },
    preview: {
      title: "Forhåndsvisningsrude",
      description: "Forhåndsvis billeder, videoer og dokumenter uden at åbne dem."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro-understøttelse",
      description: "Forhåndsvis Office-filer, dokumenter og andre filtyper ved at trykke på mellemrumstasten. Denne funktion kræver installation af QuickLook eller SeerPro."
    },
    tags: {
      title: "Tag filer og mapper",
      description: "Organiser og sortér dine filer og mapper med farvede tags."
    },
    tabs: {
      title: "Multitask med faner",
      description: "Undgå mange vinduer, og hold dit skrivebord ryddeligt med faner."
    },
    columns: {
      title: "Kolonnevisning",
      description: "Naviger hurtigt gennem forskellige niveauer af filsystemet med kolonnelayoutet."
    },
    archives: {
      title: "Se og rediger arkiver",
      description: "Opret og udpak arkiver, herunder zip, WinRar og 7zip."
    },
    git: {
      title: "Git-integration",
      description: "Administrer nemt dine Git-projekter. Opret nye grene, skift mellem dem, og synkroniser dine ændringer - alt uden at forlade Files."
    },
    "dual-pane": {
      title: "Dobbelt rude",
      description: "Se og administrer to mapper side om side med Dobbelt Rude-funktionen."
    },
    hashes: {
      title: "Hashes",
      description: "Se og sammenlign filhashes fra egenskabsvinduet."
    },
    "command-palette": {
      title: "Kommandopalette",
      description: "Få hurtigt adgang til kommandoer, funktioner og indstillinger fra Kommandopalette."
    },
    "remap-key-bindings": {
      title: "Omlæg tastebindinger",
      description: "Strømlin din arbejdsgang ved at oprette brugerdefinerede tastebindinger."
    }
  },
  themes: {
    chip: "Temaer",
    title: "Særdeles personlig.",
    description: "Få det på din måde. {FilesName} har en brugergrænseflade, der kan tilpasses helt ned til farver og materialer. Prøv tilpassede temaer, der er indbygget i {FilesName}, eller dyk direkte ned i dokumenterne og lav dine egne.",
    grey_blue: "Mørkegrå • Lyseblå",
    grey_green: "Blågrå • Neongrøn",
    purple: "Lilla",
    yellow_white: "Gul • Hvid",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Himmelblå",
    select_theme: "Vælg tema #{index}"
  }
};
const blog$w = {
  coming_soon: "Flere indlæg kommer snart!",
  read_more: "Læs Mere",
  share: {
    "default": "Indbygget deling",
    url: "Kopiér URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS-feed"
  }
};
const docs$w = {
  autocomplete_empty: "Ingen resultater fundet",
  edit_page: "Rediger denne side",
  search_docs: "Søg Dokumentation"
};
const footer$w = {
  home: "Hjem",
  docs: "Dokumenter",
  news: "Nyheder",
  download: "Hent",
  contribute: "Bidrag til {FilesName}",
  feedback: "Giv Feedback",
  style_guide: "Stilguide",
  translations: "Oversættelser",
  support: "Support",
  privacy: "Privatliv"
};
const navbar$w = {
  home: "Hjem",
  docs: "Dokumentation",
  news: "Nyheder",
  download: "Hent",
  themes: "Temaer",
  discord: "Discord",
  github: "Github"
};
const download$w = {
  title: "Hent {FilesName}",
  donation_description: "{FilesName} er et fællesskabsdrevet projekt, der afhænger af din støtte for at vokse og blive bedre. Overvej venligst at købe {FilesName} via Microsoft Store eller støtte os på GitHub, hvis du bruger den klassiske installatør.",
  donation_button: "Donér",
  microsoft_store: {
    title: "Hent Files",
    description: "Køb af {FilesName} via Microsoft Store er med til at støtte udviklerne og gør det muligt for os at fortsætte med at opdatere appen med nye funktioner og forbedringer."
  },
  preview: {
    title: "Hent Insider-forhåndsvisning",
    description: "Forhåndsvisningsversionen kan installeres sammen med den stabile udgivelse og giver tidlig adgang til nye funktioner og forbedringer."
  },
  self_signed: {
    link_text: "klassisk installatør",
    description: "Har du ikke adgang til Microsoft Store? Prøv vores "
  }
};
const __vite_glob_0_4 = {
  metadata: metadata$w,
  home: home$w,
  blog: blog$w,
  docs: docs$w,
  footer: footer$w,
  navbar: navbar$w,
  download: download$w
};
const metadata$v = {
  name: "",
  home: "{FilesName} • Startseite",
  docs_home: "{FilesName} • Dokumentation",
  docs_page: "{FilesName} • Dokumentation - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Entwicklung des besten Dateimanagers für Windows."
};
const home$v = {
  community: {
    chip: "Gemeinschaft",
    title: "Designt und entwickelt von euch.",
    description: "{FilesName} ist eine freie und quelloffene Software, gepflegt und designt von hunderten von Mitwirkenden.",
    discord: "Nimm an der Diskussion teil",
    docs: "Werde Mitwirkender",
    contributions: "{amount, plural, =0 {Keine Beiträge} one {# Beitrag} other {# Beiträge}}"
  },
  design: {
    chip: "Design",
    title: "Funktionalität trifft Schönheit.",
    description: "Entdecken Sie ein wundervolles Design für Windows Dateimanager. Verwalten Sie alle Ihre Dateien mit erhöhter Produktivität. Arbeiten Sie mit mehreren Ordnern und Tabs gleichzeitig. Und vieles mehr.",
    download: "Herunterladen",
    learn_more: "Mehr erfahren"
  },
  features: {
    chip: "Funktionen",
    title: "Das tut es bereits.",
    description: "Integration von Cloud-Dateien? Tabs und mehrere Layouts? Ergiebige Dateivorschauen? {FilesName} hat all diese grundlegenden Funktionen, die Sie von einem modernen Dateimanager erwarten.",
    unknown: "Unbekannt",
    cloud: {
      title: "Nahtlose Cloud-Integration",
      description: "Integrierte Unterstützung für Cloudspeicher wie OneDrive, Google Drive und iCloud."
    },
    preview: {
      title: "Vorschaufenster",
      description: "Vorschau von Fotos, Videos und Dokumenten, ohne sie zu öffnen."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro Unterstützung",
      description: "Vorschau von Office-Dateien, Dokumenten und anderen Dateitypen mit einem Druck auf die Leertaste. Diese Funktion erfordert die Installation von QuickLook oder SeerPro."
    },
    tags: {
      title: "Dateien und Ordner markieren",
      description: "Organisieren und sortieren Sie Ihre Dateien und Ordner mit farbigen Tags."
    },
    tabs: {
      title: "Multitasking mit Tabs",
      description: "Vermeiden Sie mehrere Fenster und halten Sie Ihren Desktop mit Tabs übersichtlich."
    },
    columns: {
      title: "Spaltenansicht",
      description: "Navigieren Sie mit Hilfe des Spaltenlayouts schnell durch verschiedene Ebenen des Dateisystems."
    },
    archives: {
      title: "Dateiarchive anzeigen und bearbeiten",
      description: "Erstellen und extrahieren von Archiven inklusive zip, WinRar und 7zip."
    },
    git: {
      title: "Git-Integration",
      description: "Verwalten Sie Ihre Git-Projekte ganz unkompliziert. Erstellen Sie neue Zweige, wechseln Sie zwischen ihnen und synchronisieren Sie Ihre Änderungen - alles ohne Files zu verlassen."
    },
    "dual-pane": {
      title: "Geteilte Ansicht",
      description: "Betrachten und verwalten Sie zwei Ordner nebeneinander in einem Zwei-Spalten-Layout."
    },
    hashes: {
      title: "Prüfsummen",
      description: "Prüfsummen von Dateien über das Eigenschaftsfenster anzeigen und vergleichen."
    },
    "command-palette": {
      title: "Befehlspalette",
      description: "Schneller Zugriff auf Befehle, Funktionen und Einstellungen über die Befehlspalette."
    },
    "remap-key-bindings": {
      title: "Tastenzuordnungen umgehen",
      description: "Streamline deinen Workflow durch das Erstellen benutzerdefinierter Tastenbelegungen."
    }
  },
  themes: {
    chip: "Farbschemas",
    title: "Genau an dich angepasst.",
    description: "Machen Sie es so, wie Sie es wollen. {FilesName} bietet ein vollständig personalisierbares Design bis hin zu den Farben und Texturen. Probieren Sie benutzerdefinierte Farbschemas eingebaut in {FilesName} oder tauchen Sie in die Dokumentation ein und erstellen Sie Ihre eigenen.",
    grey_blue: "Dunkelgrau • Hellblau",
    grey_green: "Blaugrau • Neongrün",
    purple: "Lila",
    yellow_white: "Gelb • Weiß",
    white_teal: "Kühles Weiß • Dunkles Türkis",
    sky_blue: "Himmelblau",
    select_theme: "Theme #{index} auswählen"
  }
};
const blog$v = {
  coming_soon: "Weitere Posts kommen demnächst!",
  read_more: "Mehr Erfahren",
  share: {
    "default": "Natives Teilen",
    url: "URL kopieren",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS-Feed"
  }
};
const docs$v = {
  autocomplete_empty: "Keine Ergebnisse gefunden",
  edit_page: "Diese Seite bearbeiten",
  search_docs: "Suchdokumentation"
};
const footer$v = {
  home: "Startseite",
  docs: "Dokumentation",
  news: "Neuigkeiten",
  download: "Herunterladen",
  contribute: "Zu {FilesName} beitragen",
  feedback: "Feedback geben",
  style_guide: "Styleguide",
  translations: "Übersetzungen",
  support: "Unterstützung",
  privacy: "Privatsphäre"
};
const navbar$v = {
  home: "Startseite",
  docs: "Dokumentation",
  news: "Neuigkeiten",
  download: "Herunterladen",
  themes: "Farbschemas",
  discord: "Discord",
  github: "GitHub"
};
const download$v = {
  title: "{FilesName} herunterladen",
  donation_description: "{FilesName} ist ein Gemeinschaftsprojekt, das auf Ihre Unterstützung angewiesen ist, um zu wachsen und besser zu werden. Bitte erwägen Sie den Kauf von {FilesName} über den Microsoft Store oder unterstützen Sie uns auf GitHub, wenn Sie das klassische Installationsprogramm verwenden.",
  donation_button: "Spenden",
  microsoft_store: {
    title: "Files herunterladen",
    description: "Der Kauf von {FilesName} über den Microsoft Store unterstützt die Entwickler und ermöglicht es uns, die App weiterhin mit neuen Funktionen und Verbesserungen zu aktualisieren."
  },
  preview: {
    title: "Insider Preview",
    description: "Die Vorschauversion kann neben dem stabilen Release installiert werden und ermöglicht frühzeitigen Zugriff auf neue Funktionen und Verbesserungen."
  },
  self_signed: {
    link_text: "klassischer Installer",
    description: "Sie haben keinen Zugriff auf den Microsoft Store? Probieren Sie unseren "
  }
};
const __vite_glob_0_5 = {
  metadata: metadata$v,
  home: home$v,
  blog: blog$v,
  docs: docs$v,
  footer: footer$v,
  navbar: navbar$v,
  download: download$v
};
const metadata$u = {
  name: "{FilesName}",
  home: "{FilesName} • Αρχική",
  docs_home: "{FilesName} • Έγγραφα",
  docs_page: "{FilesName} • Έγγραφα - {title}",
  blog_home: "{FilesName} • Ιστολόγιο",
  blog_page: "{FilesName} • {title}",
  description: "Δημιουργία του καλύτερου διαχειριστή αρχείων για Windows."
};
const home$u = {
  community: {
    chip: "Κοινότητα",
    title: "Σχεδιάστηκε και αναπτύχθηκε από εσάς.",
    description: "Το {FilesName} είναι ελεύθερο και ανοικτού κώδικα λογισμικό, συντηρούμενο και σχεδιασμένο από μια συλλογική ομάδα εκατοντάδων συνεισφερόντων.",
    discord: "Λάβετε μέρος στη συζήτηση",
    docs: "Γίνετε συνεισφέρων",
    contributions: "{amount, plural, =0 {Δεν υπάρχουν συνεισφορές} one {# συνεισφορές} other {# συνεισφορές}}"
  },
  design: {
    chip: "Σχεδίαση",
    title: "Η δύναμη συναντά την ομορφιά.",
    description: "Εξερευνήστε ένα όμορφο, πρωτόγνωρο για τα Windows, σχεδιασμό. Διαχειριστείτε όλα τα αρχεία σας με αυξημένη παραγωγικότητα. Εργαστείτε σε πολλαπλούς φακέλους με καρτέλες, Και πολλά περισσότερα.",
    download: "Λήψη",
    learn_more: "Μάθε περισσότερα"
  },
  features: {
    chip: "Λειτουργίες",
    title: "Αυτό ήδη το κάνει.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Άγνωστο",
    cloud: {
      title: "Άνευ ραφής ενσωμάτωση σύννεφο",
      description: "Ενσωματωμένη υποστήριξη για cloud drives όπως OneDrive, Google Drive, και iCloud."
    },
    preview: {
      title: "Πλαίσιο προεπισκόπησης",
      description: "Προεπισκόπηση φωτογραφιών, βίντεο και εγγράφων χωρίς να τις ανοίξετε."
    },
    "popup-preview": {
      title: "Υποστήριξη QuickLook & SeerPro",
      description: "Προεπισκόπηση αρχείων του Office και άλλων τύπων αρχείων πατώντας το πλήκτρο διαστήματος. Αυτή η λειτουργία απαιτεί εγκατάσταση του QuickLook ή του SeerPro."
    },
    tags: {
      title: "Βάλε ετικέτα σε αρχεία και φακέλους",
      description: "Οργάνωση και ταξινόμηση των αρχείων και των φακέλων σας με χρωματιστές ετικέτες."
    },
    tabs: {
      title: "Πολυδιεργασία με καρτέλες",
      description: "Αποφύγετε πολλά παράθυρα και κρατήστε την επιφάνεια εργασίας σας καθαρή χρησιμοποιώντας καρτέλες."
    },
    columns: {
      title: "Προβολή στηλών",
      description: "Περιηγηθείτε γρήγορα σε διαφορετικά επίπεδα του συστήματος αρχείων χρησιμοποιώντας τη διάταξη στήλης."
    },
    archives: {
      title: "Προβολή και επεξεργασία συμπιεσμένων αρχείων",
      description: "Δημιουργία και εξαγωγή αρχείων συμπεριλαμβανομένων zip, WinRar και 7zip."
    },
    git: {
      title: "Ενσωμάτωση με Git",
      description: "Εύκολη διαχείριση των έργων Git. Δημιουργήστε νέους κλάδους, μεταβείτε μεταξύ τους και συγχρονίστε τις αλλαγές σας - όλα χωρίς να βγείτε από το πρόγραμμα."
    },
    "dual-pane": {
      title: "Διπλό παράθυρο",
      description: "Προβολή και διαχείριση δύο φακέλων δίπλα-δίπλα με το διπλό Pane χαρακτηριστικό."
    },
    hashes: {
      title: "Hashes",
      description: "Προβολή και σύγκριση κατακερμάτων αρχείων από το παράθυρο ιδιοτήτων."
    },
    "command-palette": {
      title: "Παλέτα Εντολών",
      description: "Γρήγορη πρόσβαση στις εντολές, τα χαρακτηριστικά και τις ρυθμίσεις από την Παλέτα Εντολών."
    },
    "remap-key-bindings": {
      title: "Αφαίρεση συντομεύσεων πλήκτρων",
      description: "Μεταδώστε τη ροή εργασίας δημιουργώντας προσαρμοσμένες συνδέσεις κλειδιών."
    }
  },
  themes: {
    chip: "Θέματα",
    title: "Διακριτικά προσωπικό.",
    description: "Το {FilesName} διαθέτει μια πλήρως προσαρμόσιμη διεπαφή χρήστη, μέχρι τα χρώματα και τα υλικά. Δοκιμάστε προσαρμοσμένα θέματα που είναι ενσωματωμένα στο {FilesName} ή βουτήξτε δεξιά στα έγγραφα και δημιουργήστε τα δικά σας.",
    grey_blue: "Σκούρο Γκρι • Ανοιχτό Μπλε",
    grey_green: "Μπλε Γκρι • Νέον Πράσινο",
    purple: "Μωβ",
    yellow_white: "Κίτρινο • Λευκό",
    white_teal: "Cool White • Σκούρο Teal",
    sky_blue: "Μπλε Ουρανού",
    select_theme: "Select theme #{index}"
  }
};
const blog$u = {
  coming_soon: "Περισσότερα άρθρα που έρχονται σύντομα!",
  read_more: "Διαβάστε Περισσότερα",
  share: {
    "default": "Εγγενής κοινή χρήση",
    url: "Αντιγραφή URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Ροή RSS"
  }
};
const docs$u = {
  autocomplete_empty: "Δεν βρέθηκαν αποτελέσματα",
  edit_page: "Επεξεργαστείτε αυτή τη σελίδα",
  search_docs: "Αναζήτηση Εγγραφής"
};
const footer$u = {
  home: "Αρχική",
  docs: "Έγγραφα",
  news: "Νέα",
  download: "Λήψη",
  contribute: "Συνεισφέρετε στο {FilesName}",
  feedback: "Δώστε Σχόλια",
  style_guide: "Style Guide",
  translations: "Μεταφράσεις",
  support: "Υποστήριξη",
  privacy: "Απόρρητο"
};
const navbar$u = {
  home: "Αρχική",
  docs: "Τεκμηρίωση",
  news: "Νέα",
  download: "Λήψη",
  themes: "Θέματα",
  discord: "Discord",
  github: "GitHub"
};
const download$u = {
  title: "Λήψη {FilesName}",
  donation_description: "Το {FilesName} είναι ένα έργο βασισμένο στην κοινότητα που εξαρτάται από την υποστήριξή σας για να αναπτυχθεί και να βελτιωθεί. Παρακαλούμε σκεφτείτε να αγοράσετε το {FilesName} μέσω του Microsoft Store ή να μας υποστηρίξετε στο GitHub αν χρησιμοποιήσετε το κλασικό πρόγραμμα εγκατάστασης.",
  donation_button: "Δωρεά",
  microsoft_store: {
    title: "Λήψη Αρχείων",
    description: "Αγοράζοντας το {FilesName} μέσω του Microsoft Store βοηθά στην υποστήριξη των προγραμματιστών και μας επιτρέπει να συνεχίσουμε την ενημέρωση της εφαρμογής με νέες δυνατότητες και βελτιώσεις."
  },
  preview: {
    title: "Insider Preview",
    description: "Η έκδοση προεπισκόπησης μπορεί να εγκατασταθεί παράλληλα με τη σταθερή απελευθέρωση και παρέχει έγκαιρη πρόσβαση σε νέες δυνατότητες και βελτιώσεις."
  },
  self_signed: {
    link_text: "κλασικός εγκαταστάτης",
    description: "Δεν έχετε πρόσβαση στο Microsoft Store? Δοκιμάστε μας "
  }
};
const __vite_glob_0_6 = {
  metadata: metadata$u,
  home: home$u,
  blog: blog$u,
  docs: docs$u,
  footer: footer$u,
  navbar: navbar$u,
  download: download$u
};
const metadata$t = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$t = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organise and sort your files and folders with coloured tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRAR, and 7-Zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customisable user interface, right down to the colours and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Gray • Light Blue",
    grey_green: "Blue Gray • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Turquoise",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$t = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$t = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$t = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$t = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$t = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Download Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_7 = {
  metadata: metadata$t,
  home: home$t,
  blog: blog$t,
  docs: docs$t,
  footer: footer$t,
  navbar: navbar$t,
  download: download$t
};
const metadata$s = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$s = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline your workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$s = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$s = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$s = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$s = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$s = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Download Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_8 = {
  metadata: metadata$s,
  home: home$s,
  blog: blog$s,
  docs: docs$s,
  footer: footer$s,
  navbar: navbar$s,
  download: download$s
};
const metadata$r = {
  name: "{FilesName}",
  home: "{FilesName} • Inicio",
  docs_home: "{FilesName} • Documentos",
  docs_page: "{FilesName} • Documentos - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Construyendo el mejor gestor de archivos para Windows."
};
const home$r = {
  community: {
    chip: "Comunidad",
    title: "Diseñado y desarrollado por ti.",
    description: "{FilesName} es software libre y de código abierto, mantenido y diseñado por un colectivo de cientos de colaboradores.",
    discord: "Únete al debate",
    docs: "Hazte colaborador",
    contributions: "{amount, plural, =0 {No hay contribuciones} one {# contribución} other {# contribuciones}}"
  },
  design: {
    chip: "Diseño",
    title: "El poder se encuentra con la belleza.",
    description: "Explore un atractivo diseño basado en Windows. Administre todos sus archivos con mayor productividad. Utilice pestañas para trabajar en varias carpetas. Y mucho más.",
    download: "Descargar",
    learn_more: "Más información"
  },
  features: {
    chip: "Características",
    title: "A esto ya lo hace.",
    description: "¿Integración de archivos en la nube? ¿Pestañas y varios diseños? ¿Vista previa de archivos enriquecidos? {FilesName} lo ha resuelto con las características que esperas ver en un administrador de archivos moderno.",
    unknown: "Desconocido",
    cloud: {
      title: "Integración perfecta en la nube",
      description: "Compatibilidad integrada con servicios de almacenamiento en la nube como OneDrive, Google Drive e iCloud."
    },
    preview: {
      title: "Panel de vista previa",
      description: "Mira fotos, videos y documentos sin tener que abrirlos."
    },
    "popup-preview": {
      title: "Soporte para QuickLook y SeerPro",
      description: "Previsualiza archivos de Office, documentos y otros tipos de archivos presionando la barra espaciadora. Esta función requiere instalar QuickLook o SeerPro."
    },
    tags: {
      title: "Etiqueta archivos y carpetas",
      description: "Organiza y clasifica tus archivos y carpetas con etiquetas de colores."
    },
    tabs: {
      title: "Multitarea con pestañas",
      description: "Evita múltiples ventanas y mantiene tu escritorio ordenado con pestañas."
    },
    columns: {
      title: "Vista de columna",
      description: "Navega rápidamente a través de diferentes niveles del sistema de archivos utilizando el diseño de columnas."
    },
    archives: {
      title: "Ver y editar archivos",
      description: "Crear y extraer archivos, incluyendo zip, WinRar y 7zip."
    },
    git: {
      title: "Integración con Git",
      description: "Gestiona fácilmente tus proyectos de Git. Crea nuevas ramas, cambia entre ellas y sincroniza tus cambios, todo sin salir de Archivos."
    },
    "dual-pane": {
      title: "Panel dual",
      description: "Ve y gestiona dos carpetas lado a lado con la función de Panel Dual."
    },
    hashes: {
      title: "Hashes",
      description: "Ver y comparar los hashes de archivos desde la ventana de propiedades."
    },
    "command-palette": {
      title: "Paleta de Comandos",
      description: "Accede rápidamente a comandos, funciones y configuraciones desde la Paleta de Comandos."
    },
    "remap-key-bindings": {
      title: "Remap teclas",
      description: "Transmitirá su flujo de trabajo creando enlaces de teclas personalizados."
    }
  },
  themes: {
    chip: "Temas",
    title: "Distintivamente personal.",
    description: "Hazlo a tu manera. {FilesName} cuenta con una interfaz de usuario totalmente personalizable, hasta los colores y materiales. Prueba temas personalizados que están incorporados en {FilesName} o sumérgete en los documentos y crea el tuyo propio.",
    grey_blue: "Gris Oscuro • Azul claro",
    grey_green: "Gris azul • Verde neón",
    purple: "Púrpura",
    yellow_white: "Amarillo • Blanco",
    white_teal: "Blanco frío • Turquesa",
    sky_blue: "Azul cielo",
    select_theme: "Seleccionar tema #{index}"
  }
};
const blog$r = {
  coming_soon: "¡Próximamente más publicaciones!",
  read_more: "Leer más",
  share: {
    "default": "Compartir nativo",
    url: "Copiar URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Suscripciones RSS"
  }
};
const docs$r = {
  autocomplete_empty: "No se encontraron resultados",
  edit_page: "Editar esta página",
  search_docs: "Buscar documentación"
};
const footer$r = {
  home: "Inicio",
  docs: "Documentación",
  news: "Noticias",
  download: "Descargar",
  contribute: "Contribuir a {FilesName}",
  feedback: "Danos tu opinión",
  style_guide: "Guía de estilo",
  translations: "Traducciones",
  support: "Soporte",
  privacy: "Privacidad"
};
const navbar$r = {
  home: "Inicio",
  docs: "Documentación",
  news: "Noticias",
  download: "Descarga",
  themes: "Temas",
  discord: "Discord",
  github: "Github"
};
const download$r = {
  title: "Descargar {FilesName}",
  donation_description: "{FilesName} es un proyecto impulsado por la comunidad que depende de tu apoyo para crecer y mejorar. Por favor, considere comprar {FilesName} a través de la tienda Microsoft o apoyarnos en GitHub si utiliza el instalador clásico.",
  donation_button: "Donar",
  microsoft_store: {
    title: "Descargar archivos",
    description: "Comprar {FilesName} a través de la tienda Microsoft ayuda a apoyar a los desarrolladores y nos permite continuar actualizando la aplicación con nuevas características y mejoras."
  },
  preview: {
    title: "Insider Preview",
    description: "La versión de vista previa se puede instalar junto a la versión estable y proporciona acceso anticipado a nuevas características y mejoras."
  },
  self_signed: {
    link_text: "instalador clásico",
    description: "¿No tiene acceso a Microsoft Store? Pruebe nuestro "
  }
};
const __vite_glob_0_9 = {
  metadata: metadata$r,
  home: home$r,
  blog: blog$r,
  docs: docs$r,
  footer: footer$r,
  navbar: navbar$r,
  download: download$r
};
const metadata$q = {
  name: "{FilesName}",
  home: "{FilesName} • Koti",
  docs_home: "{FilesName} • Dokumentit",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blogi",
  blog_page: "{FilesName} • {title}",
  description: "Rakennetaan paras tiedostonhallinta Windowsille."
};
const home$q = {
  community: {
    chip: "Yhteisö",
    title: "Suunnitellut ja kehittänyt sinua.",
    description: "{FilesName} on ilmainen ja avoimen lähdekoodin ohjelmisto, jota ylläpitää ja suunnittelee satojen osallistujien ryhmä.",
    discord: "Liity keskusteluun",
    docs: "Tule osallistujaksi",
    contributions: "{amount, plural, =0 {Ei lisäyksiä} one {# lisäystä} other {# lisäystä}}"
  },
  design: {
    chip: "Ulkoasu",
    title: "Virta kohtaa kauneuden.",
    description: "Tutustu kauniiseen Windows-ensisuunnitteluun. Hallitse kaikkia tiedostoja paremmalla tuottavuudella. Työskentele useissa kansioissa välilehdillä. Ja paljon muuta.",
    download: "Lataa",
    learn_more: "Lue lisää"
  },
  features: {
    chip: "Ominaisuudet",
    title: "Näin se jo tekee.",
    description: "Cloud files integration? Välilehdet ja useita asetteluja? Rich file previews? {FilesName} on kattanut vankat ominaisuudet, joita odotat nykyaikaiselta tiedostonhallinnalta.",
    unknown: "Tuntematon",
    cloud: {
      title: "Saumaton pilviintegraatio",
      description: "Sisäänrakennettu tuki pilviasemille, kuten OneDrivelle, Google Drivelle ja iCloudille."
    },
    preview: {
      title: "Esikatsele paneelia",
      description: "Esikatsele valokuvia, videoita ja asiakirjoja avaamatta niitä."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro tuki",
      description: "Esikatsele Officen tiedostoja, asiakirjoja ja muita tiedostotyyppejä painamalla välilyöntipalkkia. Tämä ominaisuus vaatii QuickLookin tai SeerPro:n asentamisen."
    },
    tags: {
      title: "Tunnistetiedostot ja kansiot",
      description: "Järjestä ja lajittele tiedostot ja kansiot värillisillä tageilla."
    },
    tabs: {
      title: "Monitehtävä välilehdillä",
      description: "Vältä useita ikkunoita ja pidä työpöytäsi sykkeettömänä välilehdillä."
    },
    columns: {
      title: "Sarakkeen näkymä",
      description: "Navigoi nopeasti tiedostojärjestelmän eri tasojen läpi käyttäen sarakkeen asettelua."
    },
    archives: {
      title: "Tarkastele ja muokkaa arkistoja",
      description: "Luo ja poimia arkistoja kuten zip, WinRar ja 7zip."
    },
    git: {
      title: "Git integraatio",
      description: "Hallinnoi Git projektejasi helposti. Luo uusia sivukonttoreita, vaihda niiden välillä ja synkronoi muutoksesi - kaikki poistumatta tiedostoista."
    },
    "dual-pane": {
      title: "Kaksoispaneeli",
      description: "Tarkastele ja hallitse kahta kansiota rinnakkain Dual Pane ominaisuuden kanssa."
    },
    hashes: {
      title: "Ihottumat",
      description: "Tarkastele ja vertaile tiedoston tiivisteitä ominaisuuksien ikkunasta."
    },
    "command-palette": {
      title: "Komentopaletti",
      description: "Käytä komentoja, ominaisuuksia ja asetuksia nopeasti komentopaletista."
    },
    "remap-key-bindings": {
      title: "Uudelleennimeä näppäinsidokset",
      description: "Virtaa työnkulkuasi luomalla mukautettuja näppäinyhdistelmiä."
    }
  },
  themes: {
    chip: "Teemat",
    title: "Erityisen henkilökohtainen.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Tumma Harmaa • Vaaleansininen",
    grey_green: "Sininen Harmaa • Neon Green",
    purple: "Violetti",
    yellow_white: "Keltainen • Valkoinen",
    white_teal: "Viileä Valkoinen • Tumma Teaali",
    sky_blue: "Taivas Sininen",
    select_theme: "Valitse teema #{index}"
  }
};
const blog$q = {
  coming_soon: "Lisää viestejä tulossa pian!",
  read_more: "Lue Lisää",
  share: {
    "default": "Alkuperäinen jakaminen",
    url: "Kopioi URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS-syöte"
  }
};
const docs$q = {
  autocomplete_empty: "Tuloksia ei löytynyt",
  edit_page: "Muokkaa tätä sivua",
  search_docs: "Hae Dokumentaatiosta"
};
const footer$q = {
  home: "Koti",
  docs: "Asiakirjat",
  news: "Uutiset",
  download: "Lataa",
  contribute: "Osallistu {FilesName}",
  feedback: "Anna Palautetta",
  style_guide: "Style Guide",
  translations: "Käännökset",
  support: "Tuki",
  privacy: "Yksityisyys"
};
const navbar$q = {
  home: "Koti",
  docs: "Dokumentaatio",
  news: "Uutiset",
  download: "Lataa",
  themes: "Teemat",
  discord: "Discord",
  github: "Github"
};
const download$q = {
  title: "Lataa {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Lahjoita",
  microsoft_store: {
    title: "Lataa Tiedostoja",
    description: "{FilesName} -sovelluksen ostaminen Microsoft Storesta auttaa tukemaan kehittäjiä ja sallii meidän jatkaa sovelluksen päivittämistä uusilla ominaisuuksilla ja parannuksilla."
  },
  preview: {
    title: "Insider Preview",
    description: "Esikatseluversio voidaan asentaa vakaan julkaisun rinnalle ja se mahdollistaa varhaisen pääsyn uusiin ominaisuuksiin ja parannuksiin."
  },
  self_signed: {
    link_text: "klassinen asentaja",
    description: "Eikö sinulla ole pääsyä Microsoft Storeen? Kokeile meidän "
  }
};
const __vite_glob_0_10 = {
  metadata: metadata$q,
  home: home$q,
  blog: blog$q,
  docs: docs$q,
  footer: footer$q,
  navbar: navbar$q,
  download: download$q
};
const metadata$p = {
  name: "{FilesName}",
  home: "{FilesName} • Accueil",
  docs_home: "{FilesName} • Documentation",
  docs_page: "{FilesName} • Documentation - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Construire le meilleur explorateur de fichiers pour Windows."
};
const home$p = {
  community: {
    chip: "Communauté",
    title: "Conçu et développé par vous.",
    description: "{FilesName} est un logiciel gratuit et open source, conçu et maintenu par des centaines de contributeurs.",
    discord: "Rejoindre la discussion",
    docs: "Devenir un contributeur",
    contributions: "{amount, plural, =0 {Aucune contribution} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "La puissance rencontre l'élégance.",
    description: "Explorez un design pensé pour Windows. Gérez tous vos fichiers avec une productivité accrue. Travaillez sur plusieurs dossiers simultanément avec des onglets. Et bien plus encore.",
    download: "Téléchargement",
    learn_more: "En apprendre plus"
  },
  features: {
    chip: "Fonctionnalités",
    title: "Il le fait déjà.",
    description: "L'intégration du Cloud ? Des onglets et plusieurs dispositions ? Des aperçus de fichiers enrichis ? {FilesName} vous offre toutes ces fonctionnalités robustes que vous pouvez attendre d'un gestionnaire de fichiers moderne.",
    unknown: "Inconnu",
    cloud: {
      title: "Intégration harmonieuse du cloud",
      description: "Prise en charge intégrée des services de stockage en nuage tels que OneDrive, Google Drive et iCloud."
    },
    preview: {
      title: "Volet de prévisualisation",
      description: "Prévisualisez les photos, vidéos et documents sans les ouvrir."
    },
    "popup-preview": {
      title: "Prise en charge de QuickLook & SeerPro",
      description: "Prévisualisez les fichiers Office, les documents et d'autres types de fichiers en appuyant sur la barre d'espace. Cette fonction nécessite l'installation de QuickLook ou de SeerPro."
    },
    tags: {
      title: "Étiqueter des fichiers et des dossiers",
      description: "Organisez et classez vos fichiers et dossiers grâce à des étiquettes colorées."
    },
    tabs: {
      title: "Multitâche avec les onglets",
      description: "Évitez les fenêtres multiples et gardez un bureau sans encombrement grâce aux onglets."
    },
    columns: {
      title: "Affichage en colonne",
      description: "Naviguez rapidement à travers les différents niveaux du système de fichiers en utilisant la disposition en colonnes."
    },
    archives: {
      title: "Affichez et modifiez vos archives",
      description: "Créez et extrayez des archives, y compris les formats zip, WinRar et 7zip."
    },
    git: {
      title: "Intégration Git",
      description: "Gérez facilement vos projets Git. Créez de nouvelles branches, passez de l'une à l'autre et synchronisez vos modifications, le tout sans quitter Files."
    },
    "dual-pane": {
      title: "Double panneau",
      description: "Affichez et gérez deux dossiers côte à côte grâce à la fonctionnalité Double Panneau."
    },
    hashes: {
      title: "Hachages",
      description: "Affichez et comparez les hachages de fichiers à partir de la fenêtre des propriétés."
    },
    "command-palette": {
      title: "Palette de commandes",
      description: "Accédez rapidement aux commandes, aux fonctionnalités et aux paramètres depuis la palette de commandes."
    },
    "remap-key-bindings": {
      title: "Remapper les raccourcis clavier",
      description: "Simplifiez votre flux de travail en créant des raccourcis clavier personnalisés."
    }
  },
  themes: {
    chip: "Thèmes",
    title: "Hautement personnel.",
    description: "Faites ce qu'il vous plait. {FilesName} dispose d'une interface utilisateur totalement personnalisable, jusqu'à la moindre couleur et texture. Essayez les thèmes personnalisés intégrés dans {FilesName} ou plongez dans la documentation et créez les vôtres.",
    grey_blue: "Gris Foncé • Bleu Clair",
    grey_green: "Gris Bleu • Vert Fluo",
    purple: "Violet",
    yellow_white: "Jaune • Blanc",
    white_teal: "Blanc Froid • Bleu Foncé",
    sky_blue: "Bleu Ciel",
    select_theme: "Choisir le thème #{index}"
  }
};
const blog$p = {
  coming_soon: "De nouveaux articles bientôt !",
  read_more: "En savoir plus",
  share: {
    "default": "Partage natif",
    url: "Copier l'URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Flux RSS"
  }
};
const docs$p = {
  autocomplete_empty: "Aucun résultat",
  edit_page: "Modifier cette page",
  search_docs: "Rechercher dans la documentation"
};
const footer$p = {
  home: "Accueil",
  docs: "Documentation",
  news: "Actualités",
  download: "Téléchargement",
  contribute: "Contribuer à {FilesName}",
  feedback: "Donner votre avis",
  style_guide: "Guide de style",
  translations: "Traductions",
  support: "Soutien",
  privacy: "Confidentialité"
};
const navbar$p = {
  home: "Accueil",
  docs: "Documentation",
  news: "Actualités",
  download: "Téléchargement",
  themes: "Thèmes",
  discord: "Discord",
  github: "GitHub"
};
const download$p = {
  title: "Télécharger {FilesName}",
  donation_description: "{FilesName} est un projet conduit par sa communauté, qui dépend de votre soutien pour se développer et s'améliorer. Nous vous invitons à considérer l'achat de {FilesName} via le Microsoft Store ou de nous soutenir sur GitHub si vous utilisez l'installateur classique.",
  donation_button: "Faire un don",
  microsoft_store: {
    title: "Télécharger Files",
    description: "Acheter {FilesName} via le Microsoft Store soutient les développeurs et nous permet de continuer à mettre à jour l'application avec de nouvelles fonctionnalités et améliorations."
  },
  preview: {
    title: "Insider Preview",
    description: "La version d'aperçu peut être installée parallèlement à la version stable et fournit un accès rapide aux nouvelles fonctionnalités et améliorations."
  },
  self_signed: {
    link_text: "installateur classique",
    description: "Vous n'avez pas accès au Microsoft Store ? Essayez notre "
  }
};
const __vite_glob_0_11 = {
  metadata: metadata$p,
  home: home$p,
  blog: blog$p,
  docs: docs$p,
  footer: footer$p,
  navbar: navbar$p,
  download: download$p
};
const metadata$o = {
  name: "{FilesName}",
  home: "{FilesName} • בית",
  docs_home: "{FilesName} • תיעוד",
  docs_page: "{FilesName} • תיעוד - {title}",
  blog_home: "{FilesName} • בלוג",
  blog_page: "{FilesName} • {title}",
  description: "בונים את מנהל הקבצים הטוב ביותר לווינדוס."
};
const home$o = {
  community: {
    chip: "קהילה",
    title: "מעוצב ומפותח על ידיכם.",
    description: "{FilesName} היא תוכנה חופשית עם קוד פתוח, המתוחזקת ומעוצבת על ידי אוסף של מאות תורמים.",
    discord: "הצטרף לדיון",
    docs: "הצטרף לתרומה",
    contributions: "{amount, plural, =0 {אף תרומות} one {# תרומה} two {# תרומות} many {# תרומות} other {# תרומות}}"
  },
  design: {
    chip: "עיצוב",
    title: "כוח פוגש יופי.",
    description: "גלה עיצוב יפהפה עבור ווינדוס. נהל את כל הקבצים שלך עם פרודקטיביות מוגברת. עבוד לאורך תיקיות רבות עם כרטיסיות. וכל כך הרבה יותר.",
    download: "הורדה",
    learn_more: "ללמוד עוד"
  },
  features: {
    chip: "תכונות",
    title: "זה כבר עושה את זה.",
    description: "שילוב עם שירותי ענן? כרטיסיות ומערכים שונים? תצוגות מקדימות של קבצים? ל{FilesName} יש את זה, עם תכונות שאתם מצפים להן ממנהל קבצים מודרני.",
    unknown: "לא ידוע",
    cloud: {
      title: "חיבור חלק עם הענן",
      description: "תמיכה מובנית בשירותי ענן כמו OneDrive, Google Drive ו-iCloud."
    },
    preview: {
      title: "חלונית תצוגה מקדימה",
      description: "הצג תמונות, סרטונים ומסמכים בתצוגה מקדימה, מבלי לפתוח אותם."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "תצוגה מקדימה של קבצי Office, מסמכים וסוגי קבצים אחרים על ידי לחיצה על מקש הרווח. תכונה זו דורשת התקנת QuickLook או SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "ארגן ומיין את הקבצים והתיקיות שלך עם תגים צבעוניים."
    },
    tabs: {
      title: "עבוד במקביל עם כרטיסיות",
      description: "הימנע מחלונות מרובים ושמור על שולחן העבודה שלך נקי עם כרטיסיות."
    },
    columns: {
      title: "תצוגת טורים",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "צפו וערכו קבצי ארכיון",
      description: "צור וחלץ ארכיונים, כולל zip, WinRar ו-7zip."
    },
    git: {
      title: "חיבור לגיט",
      description: "נהלו בקלות את הפרוייקטים שלכם עם גיט. צרו ענפים חדשים, החליפו ביניהם, וסנכרנו את השינויים שלכם, והכל מבלי לעזוב את 'קבצים'."
    },
    "dual-pane": {
      title: "כפל חלוניות",
      description: "הצג ונהל שתי תיקיות זו לצד זו עם תכונת כפל חלוניות."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "ערכות נושא",
    title: "אישי וייחודי.",
    description: "עשו את זה בדרככם. {FilesName} מציג ממשק משתמש הניתן להתאמה אישית מוחלטת, עד לצבעים והחומרים. נסו ערכות נושא שבאות עם {FilesName} או צללו אל תוך התיעוד וצרו ערכות משלכם.",
    grey_blue: "אפור כהה • תכלת",
    grey_green: "אפור כחלחל • ירוק נאון",
    purple: "סגול",
    yellow_white: "צהוב • לבן",
    white_teal: "לבן צונן • כחלחל כהה",
    sky_blue: "כחול שמיים",
    select_theme: "בחר ערכת נושא #{index}"
  }
};
const blog$o = {
  coming_soon: "עוד הודעות בקרוב!",
  read_more: "קרא עוד",
  share: {
    "default": "שיתוף מובנה",
    url: "העתקת כתובת URL",
    tweet: "X",
    facebook: "פייסבוק",
    rss: "פיד RSS"
  }
};
const docs$o = {
  autocomplete_empty: "לא נמצאו תוצאות",
  edit_page: "ערוך דף זה",
  search_docs: "Search Documentation"
};
const footer$o = {
  home: "בית",
  docs: "תיעוד",
  news: "חדשות",
  download: "הורדה",
  contribute: "תרמו ל{FilesName}",
  feedback: "תן משוב",
  style_guide: "מדריך עיצוב",
  translations: "תרגום",
  support: "Support",
  privacy: "Privacy"
};
const navbar$o = {
  home: "בית",
  docs: "תיעוד",
  news: "חדשות",
  download: "הורדה",
  themes: "ערכות נושא",
  discord: "דיסקורד",
  github: "GitHub"
};
const download$o = {
  title: "הורידו את {FilesName}",
  donation_description: "{FilesName} הוא פרוייקט המונע על ידי הקהילה שזקוק לתמיכה שלכם כדי לגדול ולהשתפר. בבקשה תשקלו לקנות את {FilesName} דרך החנות של Microsoft או תתמוך בנו בGitHub אם אתם משתמשים במתקין הקלאסי.",
  donation_button: "תרומה",
  microsoft_store: {
    title: "Download Files",
    description: "רכישת {FilesName} דרך הMicrosoft Store עוזרת לתמוך במפתחים ומאפשרת לנו להמשיך לעדכן את האפליקציה עם תכונות ושיפורים חדשים."
  },
  preview: {
    title: "Insider Preview",
    description: "הגרסה המוקדמת ניתנת להתקנה לצד הגרסה היציבה ומספקת גישה מוקדמת לתכונות ושיפורים חדשים."
  },
  self_signed: {
    link_text: "המתקין הקלאסי",
    description: "אין גישה לMicrosoft Store? נסו את "
  }
};
const __vite_glob_0_12 = {
  metadata: metadata$o,
  home: home$o,
  blog: blog$o,
  docs: docs$o,
  footer: footer$o,
  navbar: navbar$o,
  download: download$o
};
const metadata$n = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$n = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$n = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$n = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$n = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$n = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$n = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_13 = {
  metadata: metadata$n,
  home: home$n,
  blog: blog$n,
  docs: docs$n,
  footer: footer$n,
  navbar: navbar$n,
  download: download$n
};
const metadata$m = {
  name: "{FilesName}",
  home: "{FilesName} • Kezdőlap",
  docs_home: "{FilesName} • Dokumentáció",
  docs_page: "{FilesName} • Dokumentáció - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$m = {
  community: {
    chip: "Közösség",
    title: "Tervezte és fejlesztette: te.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Csatlakozz a beszélgetéshez",
    docs: "Legyél közreműködő",
    contributions: "{amount, plural, =0 {Közreműködés nélkül} one {# közreműködés} other {# közreműködés}}"
  },
  design: {
    chip: "Design",
    title: "Gyors és szép.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Letöltés",
    learn_more: "További információk"
  },
  features: {
    chip: "Funkciók",
    title: "Már ezt is tudja.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Ismeretlen",
    cloud: {
      title: "Felhő integráció",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitaszking lapokkal",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Témák",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Sötétszürke • Világoskék",
    grey_green: "Kékesszürke • Neonzöld",
    purple: "Lila",
    yellow_white: "Sárga • Fehér",
    white_teal: "Fehér • Pávakék",
    sky_blue: "Égszínkék",
    select_theme: "{index}. téma kiválasztása"
  }
};
const blog$m = {
  coming_soon: "Több bejegyzés hamarosan!",
  read_more: "Bővebben",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$m = {
  autocomplete_empty: "Nincs találat",
  edit_page: "Oldal módosítása",
  search_docs: "Search Documentation"
};
const footer$m = {
  home: "Kezdőlap",
  docs: "Dokumentáció",
  news: "Hírek",
  download: "Letöltés",
  contribute: "Contribute to {FilesName}",
  feedback: "Küldj visszajelzést",
  style_guide: "Kódstílus",
  translations: "Fordítások",
  support: "Support",
  privacy: "Privacy"
};
const navbar$m = {
  home: "Kezdőlap",
  docs: "Dokumentáció",
  news: "Hírek",
  download: "Letöltés",
  themes: "Témák",
  discord: "Discord",
  github: "GitHub"
};
const download$m = {
  title: "{FilesName} letöltése",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Támogatás",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_14 = {
  metadata: metadata$m,
  home: home$m,
  blog: blog$m,
  docs: docs$m,
  footer: footer$m,
  navbar: navbar$m,
  download: download$m
};
const metadata$l = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Documentazione",
  docs_page: "{FilesName} • Documentazione - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Creando il miglior file manager per Windows."
};
const home$l = {
  community: {
    chip: "Comunità",
    title: "Progettato e sviluppato da voi.",
    description: "{FilesName} è un software open source gratuito, mantenuto e progettato da centinaia di collaboratori.",
    discord: "Partecipa alla discussione",
    docs: "Diventa un contributore",
    contributions: "{amount, plural, =0 {Nessuna contribuzione} one {# contribuzione} other {# contribuzioni}}"
  },
  design: {
    chip: "Design",
    title: "La potenza incontra la bellezza.",
    description: "Esplora un design stupendo pensato per Windows. Gestisci i file in modo più produttivo. Lavora tra più cartelle usando le schede. E molto altro ancora.",
    download: "Scarica",
    learn_more: "Scopri di più"
  },
  features: {
    chip: "Funzionalità",
    title: "Questo lo fa di già.",
    description: "Integrazione con il Cloud? Schede e più layout? Anteprime complete dei file? {FilesName} offre tutte queste funzionalità come ci si aspetterebbe da un file manager moderno.",
    unknown: "Sconosciuto",
    cloud: {
      title: "Integrazione fluida del Cloud",
      description: "Supporto integrato per unità cloud come OneDrive, Google Drive e iCloud."
    },
    preview: {
      title: "Pannello di anteprima",
      description: "Visualizza l'anteprima di foto, video e documenti senza aprirli."
    },
    "popup-preview": {
      title: "Supporto per QuickLook & SeerPro",
      description: "Visualizza l'anteprima di file di Office e di altri tipi premendo la barra spaziatrice. Questa funzione richiede l'installazione di QuickLook o SeerPro."
    },
    tags: {
      title: "Etichetta file e cartelle",
      description: "Organizza e ordina i tuoi file e cartelle usando etichette colorate."
    },
    tabs: {
      title: "Sfrutta il multitasking grazie alle schede",
      description: "Evita di usare più finestre e mantieni il tuo desktop ordinato grazie alle schede."
    },
    columns: {
      title: "Vista a colonne",
      description: "Naviga rapidamente attraverso diversi livelli del file system usando il layout a colonne."
    },
    archives: {
      title: "Visualizza e modifica gli archivi",
      description: "Crea ed estrai archivi tra cui zip, WinRar e 7zip."
    },
    git: {
      title: "Integrazione con Git",
      description: "Gestisci facilmente i tuoi progetti che usano Git. Crea nuovi branch, passa tra di loro e sincronizza le tue modifiche, tutto senza lasciare Files."
    },
    "dual-pane": {
      title: "Doppio pannello",
      description: "Visualizza e gestisci due cartelle fianco a fianco con la funzione Doppio Pannello."
    },
    hashes: {
      title: "Hash",
      description: "Visualizza e confronta gli hash dei file dalla finestra delle proprietà."
    },
    "command-palette": {
      title: "Palette dei Comandi",
      description: "Accedi rapidamente a comandi, funzioni e impostazioni dalla Palette dei Comandi."
    },
    "remap-key-bindings": {
      title: "Associazioni a tasti Remap",
      description: "Semplifica il flusso di lavoro creando combinazioni di tasti personalizzate."
    }
  },
  themes: {
    chip: "Temi",
    title: "Profondamente personale.",
    description: "Rendilo tuo. {FilesName} dispone di un'interfaccia utente completamente personalizzabile, persino nei colori e nei materiali. Prova i temi personalizzati disponibili in {FilesName} oppure esprimi la tua creatività creandone uno unico.",
    grey_blue: "Grigio Scuro • Azzurro",
    grey_green: "Grigio Blu • Verde Neon",
    purple: "Viola",
    yellow_white: "Giallo • Bianco",
    white_teal: "Bianco Glaciale • Verde Petrolio",
    sky_blue: "Azzurro Cielo",
    select_theme: "Seleziona il tema #{index}"
  }
};
const blog$l = {
  coming_soon: "Altri post in arrivo!",
  read_more: "Maggiori dettagli",
  share: {
    "default": "Condivisione nativa",
    url: "Copia URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Feed RSS"
  }
};
const docs$l = {
  autocomplete_empty: "Nessun risultato trovato",
  edit_page: "Modifica questa pagina",
  search_docs: "Cerca Documentazione"
};
const footer$l = {
  home: "Home",
  docs: "Documentazione",
  news: "Novità",
  download: "Scarica",
  contribute: "Contribuisci a {FilesName}",
  feedback: "Facci sapere la tua opinione",
  style_guide: "Guida allo Stile",
  translations: "Traduzioni",
  support: "Supporto",
  privacy: "Privacy"
};
const navbar$l = {
  home: "Home",
  docs: "Documentazione",
  news: "Novità",
  download: "Scarica",
  themes: "Temi",
  discord: "Discord",
  github: "Github"
};
const download$l = {
  title: "Scarica {FilesName}",
  donation_description: "{FilesName} è un progetto guidato dalla community che dipende dal tuo supporto per crescere e migliorare. Per favore, considera di comprare {FilesName} attraverso il Microsoft Store oppure di supportarci su GitHub se usi l'installer classico.",
  donation_button: "Dona",
  microsoft_store: {
    title: "Scarica Files",
    description: "L'acquisto di {FilesName} attraverso il Microsoft Store aiuta a supportare gli sviluppatori e ci permette di continuare ad aggiornare l'app con nuove funzionalità e miglioramenti."
  },
  preview: {
    title: "Scarica Anteprima Insider",
    description: "La versione in anteprima può essere installata insieme alla versione stabile e fornisce un accesso anticipato alle nuove funzionalità e miglioramenti."
  },
  self_signed: {
    link_text: "installatore classico",
    description: "Non hai accesso al Microsoft Store? Prova il nostro "
  }
};
const __vite_glob_0_15 = {
  metadata: metadata$l,
  home: home$l,
  blog: blog$l,
  docs: docs$l,
  footer: footer$l,
  navbar: navbar$l,
  download: download$l
};
const metadata$k = {
  name: "{FilesName}",
  home: "{FilesName} • ホーム",
  docs_home: "{FilesName} • ドキュメント",
  docs_page: "{FilesName} • ドキュメント - {title}",
  blog_home: "{FilesName} • ブログ",
  blog_page: "{FilesName} • {title}",
  description: "Windows のための最高のファイル マネージャーを作る"
};
const home$k = {
  community: {
    chip: "コミュニティ",
    title: "デザインと開発はあなたの手で",
    description: "{FilesName} はフリーでオープン ソースのソフトウェアです。何百人もの貢献者の共同作業によってメンテナンスおよびデザインされています。",
    discord: "議論に参加する",
    docs: "開発に貢献する",
    contributions: "{amount, plural, =0 {貢献なし} one {# 回の貢献} other {# 回の貢献}}"
  },
  design: {
    chip: "デザイン",
    title: "機能性と美しさの融合",
    description: "Windows ファーストの美しいデザインをあなたに。高い生産性で、あなたのファイルを管理。複数のタブを使い、フォルダーを行き来して作業。その他にも魅力はたくさん。",
    download: "ダウンロード",
    learn_more: "もっと詳しく"
  },
  features: {
    chip: "機能",
    title: "欲しい機能はもうあります",
    description: "クラウド ドライブとの統合、タブ切り替え、画面分割機能、頼れるファイル プレビュー。{FilesName} は、現代のファイル マネージャーに期待される強力な機能を兼ね備えています。",
    unknown: "不明",
    cloud: {
      title: "シームレスなクラウド連携",
      description: "OneDrive、Google Drive、iCloudなどのクラウドドライブに対応しています。"
    },
    preview: {
      title: "プレビュー ウィンドウ",
      description: "写真、ビデオ、ドキュメントを開かずにプレビューできます。"
    },
    "popup-preview": {
      title: "QuickLook と SeerPro のサポート",
      description: "スペース バーを押して Office ファイル、ドキュメント、およびその他のファイル タイプをプレビューできます。この機能を利用するには QuickLook または SeerPro のインストールが必要です。"
    },
    tags: {
      title: "ファイルとフォルダーにタグ付け",
      description: "色付きタグでファイルやフォルダーを整理し、並べ替えることができます。"
    },
    tabs: {
      title: "複数のタブでマルチタスク",
      description: "タブで複数のウインドウをまとめて、デスクトップをスッキリさせることができます。"
    },
    columns: {
      title: "カラム ビュー",
      description: "カラム レイアウトを使用して、異なる階層のファイルにすばやくアクセスできます。"
    },
    archives: {
      title: "アーカイブの表示と編集",
      description: "zip、rar、7-zip を含むアーカイブの作成と展開ができます。"
    },
    git: {
      title: "Git との統合",
      description: "Git プロジェクトを簡単に管理できます。ブランチの作成や切り替え、変更の同期がすべて Files 上で行えます。"
    },
    "dual-pane": {
      title: "デュアル ペイン",
      description: "デュアル ペインを使用することで、2つのフォルダーを並べて表示、管理できます。"
    },
    hashes: {
      title: "ハッシュ値",
      description: "プロパティ ウィンドウからファイルのハッシュ値を表示して比較することができます。"
    },
    "command-palette": {
      title: "コマンド パレット",
      description: "コマンド パレットからコマンド、機能、設定にすばやくアクセスできます。"
    },
    "remap-key-bindings": {
      title: "ショートカット キーのカスタマイズ",
      description: "あなた専用のショートカット キーを定義して作業を効率化しましょう。"
    }
  },
  themes: {
    chip: "テーマ",
    title: "個性を出そう",
    description: "あなたの思い通りにしましょう。{FilesName} は色から細かい見た目まで、さまざまにカスタマイズできます。{FilesName} に標準搭載されたテーマを試したり、ドキュメントを参照してカスタム テーマを作ったり、自由自在にカスタマイズしてみましょう。",
    grey_blue: "ダーク グレー • ライト ブルー",
    grey_green: "ブルー グレー • ネオン グリーン",
    purple: "パープル",
    yellow_white: "イエロー・ホワイト",
    white_teal: "クール ホワイト • ダーク ティール",
    sky_blue: "スカイ ブルー",
    select_theme: "テーマ #{index} を選択"
  }
};
const blog$k = {
  coming_soon: "その他の投稿は近日公開予定です!",
  read_more: "もっと読む",
  share: {
    "default": "システムの共有機能",
    url: "URL をコピー",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS フィード"
  }
};
const docs$k = {
  autocomplete_empty: "結果が見つかりません",
  edit_page: "このページを編集",
  search_docs: "ドキュメントの検索"
};
const footer$k = {
  home: "ホーム",
  docs: "ドキュメント",
  news: "ニュース",
  download: "ダウンロード",
  contribute: "{FilesName} に貢献する",
  feedback: "フィードバックを送信",
  style_guide: "コーディング規約",
  translations: "翻訳",
  support: "サポート",
  privacy: "プライバシー ポリシー"
};
const navbar$k = {
  home: "ホーム",
  docs: "ドキュメント",
  news: "ニュース",
  download: "ダウンロード",
  themes: "テーマ",
  discord: "Discord",
  github: "GitHub"
};
const download$k = {
  title: "{FilesName} をダウンロード",
  donation_description: "{FilesName} はコミュニティ主導のプロジェクトであり、成長し改善するためには皆様のサポートが必要です。Microsoft Store から {FilesName} を購入するか、クラシック インストーラーを使用する場合は GitHub でサポートすることをぜひ検討してください。",
  donation_button: "寄付",
  microsoft_store: {
    title: "Files をダウンロード",
    description: "{FilesName} を Microsoft Store 経由で購入することで、開発者をサポートし、新機能の追加やアプリの修正を継続できるようになります。"
  },
  preview: {
    title: "Insider Preview",
    description: "プレビュー版は安定版とともにインストールでき、新機能や改善点への早期アクセスを提供します。"
  },
  self_signed: {
    link_text: "クラシック インストーラーをダウンロード",
    description: "Microsoft Store にアクセスできませんか? "
  }
};
const __vite_glob_0_16 = {
  metadata: metadata$k,
  home: home$k,
  blog: blog$k,
  docs: docs$k,
  footer: footer$k,
  navbar: navbar$k,
  download: download$k
};
const metadata$j = {
  name: "{Fayllar atı}",
  home: "{FilesName} • Bas bet",
  docs_home: "{FilesName} • Hújjetshilik",
  docs_page: "{FilesName} • Hújjetshilik - {title}",
  blog_home: "{FilesName}• Blog",
  blog_page: "{FilesName} • {title}",
  description: "Windows ushın eń jaqsı fayl basqarıwshısın jaratıń."
};
const home$j = {
  community: {
    chip: "Birlespe",
    title: "Siz tárepten islep shıǵılǵan hám islep shıǵılǵan.",
    description: "{FilesName} bul júzlegen qatnasıwshılar jámááti tárepinen basqarılatuǵın biypul Ashıq kodlı programmalıq támiynat.",
    discord: "Dodalawǵa qosılıw",
    docs: "Aǵza bolıw",
    contributions: "{amount, plural,=0 {Úlessiz}one {# Úles} other {# Úlesler}}"
  },
  design: {
    chip: "Dizayn",
    title: "Kúsh gózzallıq penen ushrasadı",
    description: "Windows ushın shıraylı dizaynı ushın jańalıq ashıń. Joqarı ónimdarlıq menen barlıq fayllarıńızdı basqarıń. Jarlıqlar járdeminde bir neshe papkalar menen islew.h.t.b",
    download: "Júklep alıw",
    learn_more: "Tolıǵıraq úyreniw"
  },
  features: {
    chip: "Funciyalar",
    title: "Bul álleqashan islendi.",
    description: "Bultlı fayllar integraciyası? Jarlıqlar hám bir neshe tártipler? Bay fayllardı aldınan kóriwme?{FilesName} zamanagóy fayl basqarıwshısınan kútken kúshli ayrıqshalıqlar menen qamtıp alınǵan.",
    unknown: "Belgisiz",
    cloud: {
      title: "Bultlı xızmetler menen tolıq integraciya",
      description: "OneDrive, Google Drive hám iCloud sıyaqlı bultlı drayerler ushın ornatılǵan qollap-quwatlaw."
    },
    preview: {
      title: "Kórip shıǵıw paneli",
      description: "Súwretler, videolar hám hújjetlerdi ashpastan kóriń."
    },
    "popup-preview": {
      title: "QuickLook hám SeerPro-nı qollap-quwatlaw",
      description: "Bos jay túymesin basıw arqalı Office faylları, hújjetleri hám basqa fayl túrlerin kóriń. Bul ózgeshelik QuickLook yamasa SeerPro-ni ornatıwdı talap etedi."
    },
    tags: {
      title: "Fayl hám papkalarıdı gruppalaw",
      description: "Fayl hám papkalarııńızdı reń menen kodlanǵan tegler menen tártipke salıń hám tártipleń."
    },
    tabs: {
      title: "Jarlıqlar menen kóp wazıypa",
      description: "Kóp kereksiz áyneklerden saqlanıń hám jumıs stolıńıdı jarlıqlar menen tártipke salıń."
    },
    columns: {
      title: "Qatar kórinisi",
      description: "Ústin rejiminen paydalanıp, fayl sistemasınıń túrli dárejeleri boylap tez háreketleniń."
    },
    archives: {
      title: "Arxivlerdi kóriń hám ózgertiń",
      description: "Arxivlardı, sonday-aq zipti jaratıń hám shıǵarıp alın, WinRar, hám 7zip."
    },
    git: {
      title: "Git integraciyası",
      description: "Git joybarlarıńızdı ańsatlıq penen basqarıń. Jańa filiallar ashıń, olar ortasında almasıń hám ózgerislerdi sinxronlastırıń - barlıǵı Fayllardan shıqpastan."
    },
    "dual-pane": {
      title: "Eki panelli rejim",
      description: "Dual Pane funksiyası menen eki betti kóriń hám basqarıń."
    },
    hashes: {
      title: "Keshler",
      description: "Ayrıqshalıqlar aynasınan fayl keshlardi kóriń hám salıstırıń."
    },
    "command-palette": {
      title: "Buyrıqlar palitrası",
      description: "Buyrıqlar palitrasınan buyrıqlar, funksiyalar hám sazlawlarǵa tez kiriń."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Temalar",
    title: "Jeke.",
    description: "Siz aytqan sıyaqlı boladı. {FilesName} reń hám materiallarǵa shekem tolıq maslastırılǵan paydalanıwshı interfeysine iye. {FilesName} ishine ornatılǵan arnawlı temalardı sınap kóriń yamasa tuwrıdan-tuwrı hújjetlerge kirip, ózińizdikini jaratıń.",
    grey_blue: "Qara • Ashıq kók",
    grey_green: "Ashıq kók • Ashıq jasıl",
    purple: "Qızǵılt kók",
    yellow_white: "Sarı • Aq",
    white_teal: "Suwıq aq • Qoyıw piruza",
    sky_blue: "Aqshıl kók",
    select_theme: "#{index} temasın tańlaw"
  }
};
const blog$j = {
  coming_soon: "Kóbirek jańalıqlar jaqın arada!",
  read_more: "Dawamın oqıw",
  share: {
    "default": "Jergilikli jalǵawıshı",
    url: "Siltemeni nusqalaw",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS lentası"
  }
};
const docs$j = {
  autocomplete_empty: "Nátiyjeler tabılmadı",
  edit_page: "Bul betke ózgeris kirgiziw",
  search_docs: "Search Documentation"
};
const footer$j = {
  home: "Bas bet",
  docs: "Hújjetshilik",
  news: "Jańalıqlar",
  download: "Júklep alıw",
  contribute: "{FilesName} rawajlanıwına úles qosıw",
  feedback: "Qayta baylanıs",
  style_guide: "Kod jazıw boyınsha qollanba",
  translations: "Awdarmalar",
  support: "Support",
  privacy: "Privacy"
};
const navbar$j = {
  home: "Bas bet",
  docs: "Hújjetshilik",
  news: "Jańalıqlar",
  download: "Júklep alıw",
  themes: "Temalar",
  discord: "Discord",
  github: "Github"
};
const download$j = {
  title: "{FilesName}dı júklep alıw",
  donation_description: "{FilesName} - bul jámiyetshilik tárepinen basqarılatuǵın joybar bolıp, ósiw hám jetilistiriwde sizdiń járdemińizge mútáj. Eger klassik ornatıshıdan paydalansańız, Microsoft dúkanınan {FilesName} satıp alınǵan zat alıń yamasa GitHub arqalı bizge járdem beriń.",
  donation_button: "Qollap-quwatlaw",
  microsoft_store: {
    title: "Júklenbekte",
    description: "Microsoft dúkanı arqalı {FilesName} satıp alıw islep shıǵıwshılardı qollap - quwatlawǵa járdem beredi hám qosımshanı jańa ózgeshelikler hám jaqsılanıwlar menen jańalawdı dawam ettiriw imkaniyatın beredi."
  },
  preview: {
    title: "Insider Preview",
    description: "Aldınan kóriw versiyası turaqlı versiya menen birge ornatılıwı múmkin hám jańa  jańalıqlar hám jaqsılanıwlarǵa erte kiriń imkaniyatın beredi."
  },
  self_signed: {
    link_text: "klassikalıq ornatıwshı",
    description: "Microsoft Storeǵa kiriw múmkinshiligi joq pa? Sınap kórıń: "
  }
};
const __vite_glob_0_17 = {
  metadata: metadata$j,
  home: home$j,
  blog: blog$j,
  docs: docs$j,
  footer: footer$j,
  navbar: navbar$j,
  download: download$j
};
const metadata$i = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$i = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$i = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$i = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$i = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$i = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$i = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Download Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_18 = {
  metadata: metadata$i,
  home: home$i,
  blog: blog$i,
  docs: docs$i,
  footer: footer$i,
  navbar: navbar$i,
  download: download$i
};
const metadata$h = {
  name: "{FilesName}",
  home: "{FilesName} • 홈",
  docs_home: "{FilesName} • 자습서",
  docs_page: "{FilesName} • 자습서 - {title}",
  blog_home: "{FilesName} • 블로그",
  blog_page: "{FilesName} • {title}",
  description: "Windows용 최고의 파일 관리자 애플리케이션"
};
const home$h = {
  community: {
    chip: "커뮤니티",
    title: "여러분들이 설계하고 개발했어요.",
    description: "{FilesName}는 수백 명의 사람들이 유지, 관리하고 설계한 무료 오픈소스 소프트웨어에요.",
    discord: "토론 참여하기",
    docs: "Files 기여하기",
    contributions: "{amount, plural, =0 {기여 없음} other {#번 기여함}}"
  },
  design: {
    chip: "디자인",
    title: "힘과 아름다움의 조화",
    description: "아름다운 Windows 우선 디자인을 살펴보세요. 더 생산적으로 모든 파일을 관리해보세요. 탭 기능으로 여러 폴더에서 작업해보세요. 이걸로 끝나지 않아요.",
    download: "다운로드",
    learn_more: "더 알아보기"
  },
  features: {
    chip: "특징",
    title: "이미 구현되어 있어요.",
    description: "클라우드 파일 연동? 탭과 다중 레이아웃? 파일 미리 보기? {FilesName}에는 최신 파일 관리자가 제공하는 강력한 기능이 포함되어 있어요.",
    unknown: "알 수 없음",
    cloud: {
      title: "원활한 클라우드 연동",
      description: "OneDrive, Google Drive, iCloud와 같은 클라우드 드라이브와 연동할 수 있어요."
    },
    preview: {
      title: "미리보기 화면",
      description: "사진, 동영상, 문서를 열지 않고 미리 확인해 보세요."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro 지원",
      description: "Microsoft Office 또는 다른 형식의 파일을 스페이스 바로 미리 볼 수 있어요. 이 기능은 QuickLook 또는 SeerPro가 필요해요."
    },
    tags: {
      title: "파일 및 폴더에 태그 지정",
      description: "태그로 파일을 정리하고 분류할 수 있어요. 태그의 이름과 색을 마음대로 바꿀 수 있어요."
    },
    tabs: {
      title: "탭 멀티태스킹",
      description: "탭을 이용해 여러 창을 켜두지 않고 데스크톱을 깨끗하게 유지할 수 있어요."
    },
    columns: {
      title: "열 보기",
      description: "열 보기 레이아웃으로 파일 경로를 빠르게 탐색할 수 있어요."
    },
    archives: {
      title: "압축 파일 보기 및 편집",
      description: "다른 프로그램 없이 Files에서 압축 파일을 만들고, 압축을 해제할 수 있어요. 현재 Zip, WinRAR, 7zip을 지원해요."
    },
    git: {
      title: "Git 연동",
      description: "Git 프로젝트를 쉽게 관리할 수 있어요. 새 분기를 만들고, 분기를 전환하고, 변경 사항을 동기화할 수 있어요. Files에서 모두 가능해요."
    },
    "dual-pane": {
      title: "분할 화면 모드",
      description: "분할 화면 모드로 두 개의 폴더를 함께 보고 편집할 수 있어요."
    },
    hashes: {
      title: "파일 무결성 확인",
      description: "속성 창에서 파일에 대한 해시 값을 보거나 비교할 수 있어요."
    },
    "command-palette": {
      title: "명령 팔레트",
      description: "명령 팔레트에서 명령어, 기능, 설정에 빠르게 접근하세요."
    },
    "remap-key-bindings": {
      title: "단축키 재설정",
      description: "사용자 지정 단축키를 생성하여 워크플로우를 능률화하세요."
    }
  },
  themes: {
    chip: "테마",
    title: "완벽하게 개인적이에요.",
    description: "마음대로 바꿔봐요. {FilesName}는 색상부터 배경 재질까지 사용자가 지정할 수 있어요. {FilesName}에 기본으로 제공되는 사용자 지정 테마를 사용해 보거나 자습서를 살펴보고 사용자 지정 테마를 만들어 보세요.",
    grey_blue: "짙은 회색 • 라이트 블루",
    grey_green: "푸른 회색 • 네온 그린",
    purple: "보라색",
    yellow_white: "노란색 • 하얀색",
    white_teal: "백색 • 짙은 청록색",
    sky_blue: "하늘색",
    select_theme: "테마를 선택해보세요 #{index}"
  }
};
const blog$h = {
  coming_soon: "더 많은 소식이 곧 올라올 거에요!",
  read_more: "더 알아보기",
  share: {
    "default": "네이티브 공유하기",
    url: "URL 복사",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS 피드"
  }
};
const docs$h = {
  autocomplete_empty: "결과 없음",
  edit_page: "이 페이지 편집하기",
  search_docs: "자습서 검색"
};
const footer$h = {
  home: "홈",
  docs: "자습서",
  news: "소식",
  download: "다운로드",
  contribute: "{FilesName}에 기여하기",
  feedback: "피드백 보내기",
  style_guide: "코드 구조",
  translations: "번역하기",
  support: "지원",
  privacy: "개인정보 보호 정책"
};
const navbar$h = {
  home: "홈",
  docs: "자습서",
  news: "소식",
  download: "다운로드",
  themes: "테마",
  discord: "Discord",
  github: "GitHub"
};
const download$h = {
  title: "{FilesName} 다운로드",
  donation_description: "{FilesName}는 여러분들의 지원에 의존하는 커뮤니티 기반 프로젝트에요. Microsoft Store를 통해 {FilesName}를 구입하거나 무료로 사용하는 경우 GitHub에서 기여하는 것을 고려해주세요.",
  donation_button: "후원하기",
  microsoft_store: {
    title: "Files 다운로드",
    description: "Microsoft Store를 통해 {FilesName}를 구입하면 개발자를 지원하고 새로운 기능과 개선 사항을 계속 업데이트 할 수 있어요."
  },
  preview: {
    title: "Insider Preview 다운로드",
    description: "프리뷰 버전은 정식 버전과 함께 설치할 수 있고 새로운 기능과 개선 사항에 대한 빠른 액세스를 제공해요."
  },
  self_signed: {
    link_text: "기존 설치 프로그램",
    description: "Microsoft Store에 접근할 수 없나요?  저희의 "
  }
};
const __vite_glob_0_19 = {
  metadata: metadata$h,
  home: home$h,
  blog: blog$h,
  docs: docs$h,
  footer: footer$h,
  navbar: navbar$h,
  download: download$h
};
const metadata$g = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$g = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$g = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$g = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$g = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$g = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$g = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Download Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_20 = {
  metadata: metadata$g,
  home: home$g,
  blog: blog$g,
  docs: docs$g,
  footer: footer$g,
  navbar: navbar$g,
  download: download$g
};
const metadata$f = {
  name: "{FilesName}",
  home: "{FilesName} • Start",
  docs_home: "{FilesName} • Documentatie",
  docs_page: "{FilesName} • Documenten - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Bouw de beste bestandsbeheerder voor Windows."
};
const home$f = {
  community: {
    chip: "Gemeenschap",
    title: "Door jou ontworpen en ontwikkeld.",
    description: "{FilesName} is gratis en open source software, onderhouden en ontworpen door een collectie van honderden bijdragers.",
    discord: "Deelnemen aan de discussie",
    docs: "Word een bijdrager",
    contributions: "{amount, plural, =0 {Geen bijdrage} one {# contributie} other {# bijdrage}}"
  },
  design: {
    chip: "Ontwerp",
    title: "Kracht ontmoet schoonheid.",
    description: "Ontdek een prachtig Windows-eerste ontwerp. Beheer al je bestanden met een hogere productiviteit. Werk over meerdere mappen met tabbladen. En nog veel meer.",
    download: "downloaden",
    learn_more: "Meer informatie"
  },
  features: {
    chip: "Eigenschappen",
    title: "Dat doet ze al.",
    description: "Cloud bestanden integreren? Tabbladen en meerdere lay-outs? Rich bestand previews? {FilesName} heeft het gedekt met robuuste functies die je verwacht van een moderne bestandsmanager.",
    unknown: "onbekend",
    cloud: {
      title: "Naadloze cloud integratie",
      description: "Ingebouwde ondersteuning voor cloud drives zoals OneDrive, Google Drive en iCloud."
    },
    preview: {
      title: "Preview paneel",
      description: "Bekijk foto's, video's en documenten zonder ze te openen."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro ondersteuning",
      description: "Voorbeeld van Office bestanden, documenten en andere bestandstypen door op de spatiebalk te drukken. Deze functie vereist het installeren van QuickLook of SeerPro."
    },
    tags: {
      title: "Bestanden en mappen taggen",
      description: "Organiseer en sorteer uw bestanden en mappen met gekleurde tags."
    },
    tabs: {
      title: "Multitask met tabbladen",
      description: "Vermijd meerdere vensters en bewaar je desktop clutter-vrij met tabbladen."
    },
    columns: {
      title: "Kolom weergave",
      description: "Navigeer snel door verschillende niveaus van het bestandssysteem met behulp van de kolomopmaak."
    },
    archives: {
      title: "Bekijk en bewerk archieven",
      description: "Maak en haal archieven uit, waaronder zip, WinRar en 7zip."
    },
    git: {
      title: "Git integratie",
      description: "Beheer eenvoudig uw Git projecten. Maak nieuwe filialen, schakel tussen deze over en synchroniseer uw wijzigingen - alles zonder bestanden te verlaten."
    },
    "dual-pane": {
      title: "Dubbel paneel",
      description: "Bekijk en beheer twee mappen naast elkaar met de Dual Pane functie."
    },
    hashes: {
      title: "Hashes",
      description: "Bekijk en vergelijk bestandshashes vanuit het eigenschappen venster."
    },
    "command-palette": {
      title: "Command palet",
      description: "Krijg snel toegang tot de opdrachten, functies en instellingen van het Command Palet."
    },
    "remap-key-bindings": {
      title: "Herkaart toetsbindingen",
      description: "Streamline u workflow door aangepaste sleutelbindingen aan te maken."
    }
  },
  themes: {
    chip: "Thema’s",
    title: "Verschillende persoonlijkheden.",
    description: "Doe het op jouw manier. {FilesName} heeft een volledig aanpasbare gebruikersinterface, tot en met de kleuren en materialen. Probeer aangepaste thema's die zijn ingebouwd in {FilesName} of duik direct in de documentatie en maak uw eigen thema's.",
    grey_blue: "Donker Grijs • Lichtblauw",
    grey_green: "Blauw Grijs • Neon Groen",
    purple: "Paars",
    yellow_white: "Geel • Wit",
    white_teal: "Koel Wit • Donker Groenblauw",
    sky_blue: "Lucht blauw",
    select_theme: "Selecteer thema #{index}"
  }
};
const blog$f = {
  coming_soon: "Binnenkort meer berichten!",
  read_more: "Meer informatie",
  share: {
    "default": "Oorspronkelijk delen",
    url: "URL kopiëren",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS feed"
  }
};
const docs$f = {
  autocomplete_empty: "Geen resultaten gevonden",
  edit_page: "Deze pagina bewerken",
  search_docs: "Documentatie zoeken"
};
const footer$f = {
  home: "Startpagina",
  docs: "Documentatie",
  news: "Nieuws",
  download: "downloaden",
  contribute: "Bijdragen aan {FilesName}",
  feedback: "Feedback geven",
  style_guide: "Style Guide",
  translations: "Vertalen",
  support: "Ondersteuning",
  privacy: "Privacy"
};
const navbar$f = {
  home: "Startpagina",
  docs: "Documentatie",
  news: "Nieuws",
  download: "downloaden",
  themes: "Thema’s",
  discord: "Onenigheid",
  github: "Github"
};
const download$f = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is een door de gemeenschap gedreven project dat afhankelijk is van je steun om te groeien en te verbeteren. Overweeg om {FilesName} te kopen via de Microsoft Store of ons te ondersteunen via GitHub als u het klassieke installatieprogramma gebruikt.",
  donation_button: "Doneren",
  microsoft_store: {
    title: "Download bestanden",
    description: "{FilesName} kopen via de Microsoft Store helpt de ontwikkelaars te ondersteunen en stelt ons in staat de app te blijven updaten met nieuwe functies en verbeteringen."
  },
  preview: {
    title: "Insider Preview",
    description: "De voorbeeldversie kan worden geïnstalleerd naast de stabiele versie en biedt snelle toegang tot nieuwe functies en verbeteringen."
  },
  self_signed: {
    link_text: "klassieke installer",
    description: "Heb je geen toegang tot de Microsoft Store? Probeer onze "
  }
};
const __vite_glob_0_21 = {
  metadata: metadata$f,
  home: home$f,
  blog: blog$f,
  docs: docs$f,
  footer: footer$f,
  navbar: navbar$f,
  download: download$f
};
const metadata$e = {
  name: "{FilesName}",
  home: "{FilesName} • Startside",
  docs_home: "{FilesName} • Dokumentasjon",
  docs_page: "{FilesName} • Dokumentasjon - {title}",
  blog_home: "{FilesName} • Blogg",
  blog_page: "{FilesName} • {title}",
  description: "Bygger den beste filutforskeren for Windows."
};
const home$e = {
  community: {
    chip: "Fellesskap",
    title: "Designet og utviklet av dere.",
    description: "{FilesName} er en gratis og åpen kildekode-programvare, vedlikeholdt og designet av et kollektiv med hundrevis av bidragere.",
    discord: "Bli med i diskusjonen",
    docs: "Bli en bidrager",
    contributions: "{amount, plural, =0 {Ingen bidrag} one {# bidrag} other {# bidrag}}"
  },
  design: {
    chip: "Utforming",
    title: "Makt møter skjønnhet.",
    description: "Utforsk et vakkert Windows design. Administrer alle dine filer med økt produktivitet. Gå mellom flere mapper med faner. Og masse mer.",
    download: "Last ned",
    learn_more: "Finn ut mer"
  },
  features: {
    chip: "Egenskaper",
    title: "Den gjør allerede det.",
    description: "Sky filer integrering? Faner og flere utforminger? Rik fil forhåndsvisning? {FilesName} har den dekket med robuste funksjoner du forventer fra en moderne fil manager.",
    unknown: "Ukjent",
    cloud: {
      title: "Sømløs sky-integrasjon",
      description: "Innebygd støtte for skytjenesten som OneDrive, Google Drive og iCloud."
    },
    preview: {
      title: "Forhåndsvis panel",
      description: "Forhåndsvisning av bilder, videoer og dokumenter uten å åpne dem."
    },
    "popup-preview": {
      title: "QuickLook og SeerPro støtte",
      description: "Forhåndsvis kontorfiler, dokumenter og andre filtyper ved å trykke på mellomrom og denne funksjonen krever installasjon av QuickLook eller SeerPro."
    },
    tags: {
      title: "Tagg filer og mapper",
      description: "Organiser og sorter filene og mappene dine med fargede emneord."
    },
    tabs: {
      title: "Multitask med faner",
      description: "Unngå flere vinduer og hold skrivebordet fritt med faner."
    },
    columns: {
      title: "Kolonne visning",
      description: "Raskt navigerer gjennom forskjellige nivåer av filsystemet med kolonneutformingen."
    },
    archives: {
      title: "Vis og rediger arkiver",
      description: "Opprett og pakk ut arkiv inkludert zip, WinRar, og 7zip."
    },
    git: {
      title: "Git integrasjon",
      description: "Administrere Git prosjektene dine enkelt. Opprett nye avdelinger, bytt mellom dem og synkroniser endringene - alle uten å forlate filer."
    },
    "dual-pane": {
      title: "Dobbel panel",
      description: "Se og administrer to mapper ved side av den dobbelt Pan-funksjonen."
    },
    hashes: {
      title: "Hash",
      description: "Vis og sammenlign filhashes fra egenskapsvinduet."
    },
    "command-palette": {
      title: "Kommandobalett palett",
      description: "Få tilgang til kommandoer, funksjoner og innstillinger fra kommandoens palette."
    },
    "remap-key-bindings": {
      title: "Bindinger til omkamp nøkkel",
      description: "Strøm dine arbeidsflyt ved å lage egendefinerte hurtigtaster"
    }
  },
  themes: {
    chip: "Temaer",
    title: "Distinktivt personlig.",
    description: "Ha som du vil. {FilesName} har et fullt tilpassbart brukergrensesnitt, rett ned til farger og materialer. Prøv tilpassede temaer som er bygget rett inn i {FilesName} eller dykke inn i dokumentasjonen og lag dine egne.",
    grey_blue: "Mørke Grå • Lyseblå",
    grey_green: "Blå grå • Neon Grønn",
    purple: "Lilla",
    yellow_white: "Gul • Hvit",
    white_teal: "Kald hvit • Mørk Blågrønn",
    sky_blue: "Sky Blå",
    select_theme: "Velg tema #{index}"
  }
};
const blog$e = {
  coming_soon: "Flere poster kommer snart!",
  read_more: "Les mer",
  share: {
    "default": "Innebygd deling",
    url: "Kopier URL",
    tweet: "Ti",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$e = {
  autocomplete_empty: "Ingen resultater funnet",
  edit_page: "Rediger denne siden",
  search_docs: "Søk etter dokumentasjon"
};
const footer$e = {
  home: "Startside",
  docs: "Dokumentasjon",
  news: "Nyheter",
  download: "Last ned",
  contribute: "Bidra til {FilesName}",
  feedback: "Gi tilbakemelding",
  style_guide: "Stilguide",
  translations: "Oversettelser",
  support: "Brukerstøtte",
  privacy: "Personvern"
};
const navbar$e = {
  home: "Startside",
  docs: "Dokumentasjon",
  news: "Nyheter",
  download: "Nedlasting",
  themes: "Temaer",
  discord: "Splid",
  github: "GitHub"
};
const download$e = {
  title: "Last ned {FilesName}",
  donation_description: "{FilesName} er et samfunns-drevet prosjekt som avhenger av din støtte til å vokse og bli bedre. Vurder å kjøpe {FilesName} gjennom Microsoft Store eller støtte oss på GitHub dersom du bruker den klassiske installatøren.",
  donation_button: "Doner",
  microsoft_store: {
    title: "Last ned filer",
    description: "Kjøp av {FilesName} gjennom Microsoft Store hjelper oss med å støtte utviklerne og lar oss fortsette å oppdatere appen med nye funksjoner og forbedringer."
  },
  preview: {
    title: "Insider Preview",
    description: "Beta versjonen eller Forhåndsvisningsversjonen kan installeres sammen med den stabile versjonen og gir tidlig tilgang til nye funksjoner og forbedringer."
  },
  self_signed: {
    link_text: "klassiske installasjonsprogram",
    description: "Har du ikke tilgang til Microsoft Store? Prøv vårt "
  }
};
const __vite_glob_0_22 = {
  metadata: metadata$e,
  home: home$e,
  blog: blog$e,
  docs: docs$e,
  footer: footer$e,
  navbar: navbar$e,
  download: download$e
};
const metadata$d = {
  name: "{FilesName}",
  home: "{FilesName} • Strona główna",
  docs_home: "{FilesName} • Dokumentacja",
  docs_page: "{FilesName} • Dokumentacja - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Tworzymy najlepszy menedżer plików dla systemu Windows."
};
const home$d = {
  community: {
    chip: "Społeczność",
    title: "Zaprojektowany i opracowany przez Ciebie.",
    description: "{FilesName} to darmowy i otwartoźródłowy program, zaprojektowany i utrzymywany wspólnie przez setki wspierających.",
    discord: "Dołącz do dyskusji",
    docs: "Zostań współtwórcą",
    contributions: "{amount, plural, =0 {Brak udziałów} one {# udział} few {# udziałów} many {# udziałów} other {# udział}}"
  },
  design: {
    chip: "Wygląd",
    title: "Siła spotyka piękno.",
    description: "Odkrywaj piękny design. Zarządzaj swoimi plikami ze zwiększoną produktywnością. Pracuj na wielu folderach za pomocą kart. I o wiele więcej.",
    download: "Pobierz",
    learn_more: "Dowiedz się więcej"
  },
  features: {
    chip: "Funkcje",
    title: "To już robi.",
    description: "Integracja z chmurą? Karty i wiele widoków? Szczegółowy podgląd plików? {FilesName} potrafi to wszystko dzięki zaawansowanym funkcjonalnościom, których oczekujesz od nowoczesnego menedżera plików.",
    unknown: "Nieznane",
    cloud: {
      title: "Transparentna integracja z chmurą",
      description: "Wbudowane wsparcie dla dysków w chmurze, takich jak OneDrive, Dysk Google oraz iCloud."
    },
    preview: {
      title: "Widok podglądu",
      description: "Podglądaj obrazy, filmy oraz dokumenty bez ich otwierania."
    },
    "popup-preview": {
      title: "Wsparcie dla QuickLook & SeerPro",
      description: "Podglądaj pliki pakietu Office, dokumenty i inne rodzaje plików wciskając przycisk spacji. Ta funkcja wymaga zainstalowanego QuickLook lub SeerPro."
    },
    tags: {
      title: "Taguj pliki i foldery",
      description: "Organizuj i sortuj swoje pliki i foldery za pomocą kolorowych tagów."
    },
    tabs: {
      title: "Wielozadaniowość za pomocą kart",
      description: "Uniknij wielu okien i utrzymuj porządek na pulpicie za pomocą kart."
    },
    columns: {
      title: "Widok kolumn",
      description: "Szybko nawiguj między wieloma poziomami systemu plików za pomocą widoku kolumn."
    },
    archives: {
      title: "Wyświetlaj i edytuj archiwa",
      description: "Twórz i rozpakowuj archiwa, w tym zip, WinRar oraz 7-zip."
    },
    git: {
      title: "Integracja z Git",
      description: "Z łatwością zarządzaj swoimi repozytoriami Git. Twórz nowe gałęzie, przełączaj je i synchronizuj swoje zmiany — to wszystko bez wychodzenia z Files."
    },
    "dual-pane": {
      title: "Podwójny widok",
      description: "Otwórz i zarządzaj dwoma folderami obok siebie z funkcją podwójnego widoku."
    },
    hashes: {
      title: "Skróty",
      description: "Przeglądaj i porównuj skróty plików za pomocą okna właściwości."
    },
    "command-palette": {
      title: "Paleta poleceń",
      description: "Szybki dostęp do komend, funkcji oraz ustawień za pomocą palety poleceń."
    },
    "remap-key-bindings": {
      title: "Remapuj powiązania kluczy",
      description: "Usprawnij workflow, tworząc niestandardowe powiązania z kluczami."
    }
  },
  themes: {
    chip: "Motywy",
    title: "Niezwykle osobisty.",
    description: "Zrób to po swojemu. {FilesName} posiada w pełni konfigurowalny interfejs, włącznie z kolorami i materiałami. Wypróbuj motywy wbudowane w {FilesName} lub sięgnij do dokumentacji i stwórz swój własny.",
    grey_blue: "Ciemnoszary • Jasnoniebieski",
    grey_green: "Niebiesko-szary • Neonowa Zieleń",
    purple: "Fioletowy",
    yellow_white: "Żółty • Biały",
    white_teal: "Zimna biel",
    sky_blue: "Niebieskie Niebo",
    select_theme: "Wybierz motyw #{index}"
  }
};
const blog$d = {
  coming_soon: "Więcej postów już wkrótce!",
  read_more: "Przeczytaj więcej",
  share: {
    "default": "Natywne udostępnianie",
    url: "Skopiuj adres",
    tweet: "X",
    facebook: "Facebook",
    rss: "Aktualności RSS"
  }
};
const docs$d = {
  autocomplete_empty: "Brak wyników",
  edit_page: "Edytuj tę stronę",
  search_docs: "Szukaj dokumentacji"
};
const footer$d = {
  home: "Strona główna",
  docs: "Dokumentacja",
  news: "Aktualności",
  download: "Pobierz",
  contribute: "Przyczyń się do {FilesName}",
  feedback: "Podziel się opinią",
  style_guide: "Siatka styli",
  translations: "Tłumaczenia",
  support: "Wsparcie",
  privacy: "Prywatność"
};
const navbar$d = {
  home: "Strona główna",
  docs: "Dokumentacja",
  news: "Aktualności",
  download: "Pobierz",
  themes: "Motywy",
  discord: "Discord",
  github: "Github"
};
const download$d = {
  title: "Pobierz {FilesName}",
  donation_description: "{FilesName} jest projektem kierowanym przez społeczność, który zależy od Twojego wsparcia, aby rozwijać się i ulepszać. Proszę rozważyć zakup {FilesName} przez Microsoft Store lub wsparcie nas na GitHub, jeśli używasz klasycznego instalatora.",
  donation_button: "Wspomóż nas",
  microsoft_store: {
    title: "Pobrane pliki",
    description: "Zakupy {FilesName} za pośrednictwem Microsoft Store pomagają programistom i pozwalają nam kontynuować aktualizację aplikacji za pomocą nowych funkcji i ulepszeń."
  },
  preview: {
    title: "Insider Preview",
    description: "Wersja podglądowa może być zainstalowana obok stabilnej wersji i zapewnia wczesny dostęp do nowych funkcji i ulepszeń."
  },
  self_signed: {
    link_text: "klasyczny instalator",
    description: "Nie masz dostępu do Microsoft Store? Wypróbuj naszą "
  }
};
const __vite_glob_0_23 = {
  metadata: metadata$d,
  home: home$d,
  blog: blog$d,
  docs: docs$d,
  footer: footer$d,
  navbar: navbar$d,
  download: download$d
};
const metadata$c = {
  name: "{FilesName}",
  home: "{FilesName} • Página inicial",
  docs_home: "{FilesName} • Documentação",
  docs_page: "{FilesName} • Documentação - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Construindo o melhor gerenciador de arquivos para Windows."
};
const home$c = {
  community: {
    chip: "Comunidade",
    title: "Desenvolvido e desenvolvido por você.",
    description: "{FilesName} é um software de código aberto e gratuito, mantido e projetado por um coletivo de centenas de colaboradores.",
    discord: "Participe da discussão",
    docs: "Torne-se um colaborador",
    contributions: "{amount, plural, =0 {Não há contribuições} one {# contribuição} other {# contribuições}}"
  },
  design: {
    chip: "Projetar",
    title: "O poder encontra a beleza.",
    description: "Explore um belo design do Windows. Gerencie todos os seus arquivos com maior produtividade. Trabalhe entre várias pastas com abas. E muito mais.",
    download: "BAIXAR",
    learn_more: "Saiba mais"
  },
  features: {
    chip: "Funcionalidades",
    title: "Já faz isso.",
    description: "Integração von Nuvem-Bateiense? Taba undo mereré Disposições? Bienergia Dateivorschauen? {FilesName} Sala de conversação alis diese sublegenda Funkeiro, die Sie von ei nem moderne Datei “treinador” pertentar.",
    unknown: "Desconhecido",
    cloud: {
      title: "Integração perfeita com a nuvem",
      description: "Suporte integrado para unidades em nuvem como OneDrive, Google Drive e iCloud."
    },
    preview: {
      title: "Painel de pré-visualização",
      description: "Preview photos, videos, and documents without opening them. Please note that some file formats are not currently supported."
    },
    "popup-preview": {
      title: "Suporte ao QuickLook & SeerPro",
      description: "Visualize arquivos do Office, documentos e outros tipos de arquivo pressionando a barra de espaço. Esta funcionalidade requer a instalação do QuickLook ou SeerPro."
    },
    tags: {
      title: "Tags em arquivos e pastas",
      description: "Organize e classifique seus arquivos e pastas com tags coloridas."
    },
    tabs: {
      title: "Multitarefa com abas",
      description: "Evite várias janelas e mantenha sua área de trabalho livre com abas."
    },
    columns: {
      title: "Visualização em coluna",
      description: "Navegue rapidamente através de diferentes níveis do sistema de arquivos usando o layout das colunas."
    },
    archives: {
      title: "Ver e editar arquivos",
      description: "Crie e extraia arquivos incluindo zip, WinRar e 7zip."
    },
    git: {
      title: "Integração Git",
      description: "Gerencie facilmente seus projetos Git. Crie novas branches, alterne entre eles e sincronize suas alterações - tudo sem sair do Files."
    },
    "dual-pane": {
      title: "Painel duplo",
      description: "Visualize e gerencie duas pastas lado a lado com o recurso do painel duplo."
    },
    hashes: {
      title: "Hashes",
      description: "Ver e comparar arquivos com hashes pela janela de propriedades."
    },
    "command-palette": {
      title: "Paleta de comandos",
      description: "Acesso rápido a comandos, recursos, e configurações dentro da Paleta de Comando."
    },
    "remap-key-bindings": {
      title: "Remapar ligações de teclas",
      description: "Agilize seu fluxo de trabalho criando chaves personalizadas."
    }
  },
  themes: {
    chip: "Temas",
    title: "Distintamente pessoal.",
    description: "Faça do seu jeito. {FilesName} possui uma interface de usuário totalmente personalizável, direto às cores e materiais. Experimente os temas personalizados que são incorporados no {FilesName} ou mergulhe diretamente na documentação e crie os seus próprios temas.",
    grey_blue: "Cinza Escuro • Azul Claro",
    grey_green: "Cinza Azul • Verde Neon",
    purple: "Roxo",
    yellow_white: "Amarelo • Branco",
    white_teal: "Branco fresco • Azul-petróleo",
    sky_blue: "Azul celeste",
    select_theme: "Selecionar tema #{index}"
  }
};
const blog$c = {
  coming_soon: "Mais postagens em breve!",
  read_more: "Leia Mais",
  share: {
    "default": "Compartilhamento nativo",
    url: "Copiar URL",
    tweet: "Twitter",
    facebook: "Siga-nos",
    rss: "Feed RSS"
  }
};
const docs$c = {
  autocomplete_empty: "Nenhum resultado encontrado",
  edit_page: "Editar essa página",
  search_docs: "Pesquisar documentação"
};
const footer$c = {
  home: "Página inicial",
  docs: "Documentação",
  news: "Novidades",
  download: "BAIXAR",
  contribute: "Contribua para {FilesName}",
  feedback: "Enviar feedback",
  style_guide: "Guia de Estilos",
  translations: "Traduções",
  support: "SUPORTE",
  privacy: "Privacidade"
};
const navbar$c = {
  home: "Página inicial",
  docs: "Documentação",
  news: "Novidades",
  download: "BAIXAR",
  themes: "Temas",
  discord: "Discord",
  github: "GitHub"
};
const download$c = {
  title: "Baixar {FilesName}",
  donation_description: "{FilesName} é um projeto orientado para a comunidade que depende do seu apoio para crescer e melhorar. Considere comprar {FilesName} através da Microsoft Store ou apoiar-nos no GitHub se você usar o instalador clássico.",
  donation_button: "Faça uma doação",
  microsoft_store: {
    title: "Baixar arquivos",
    description: "Comprar o {FilesName} através da Microsoft Store ajuda a apoiar os desenvolvedores e nos permite continuar atualizando o aplicativo com novos recursos e melhorias."
  },
  preview: {
    title: "Preview",
    description: "A versão de pré-visualização pode ser instalada com o lançamento estável e fornece acesso antecipado a novos recursos e melhorias."
  },
  self_signed: {
    link_text: "instalador clássico",
    description: "Não tem acesso à Microsoft Store? Experimente o nosso "
  }
};
const __vite_glob_0_24 = {
  metadata: metadata$c,
  home: home$c,
  blog: blog$c,
  docs: docs$c,
  footer: footer$c,
  navbar: navbar$c,
  download: download$c
};
const metadata$b = {
  name: "{FilesName}",
  home: "{FilesName} • Página inicial",
  docs_home: "{FilesName} • Documentação",
  docs_page: "{FilesName} • Documentação - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Construindo o melhor gerenciador de arquivos para Windows."
};
const home$b = {
  community: {
    chip: "Comunidade",
    title: "Projetado e desenvolvido por você.",
    description: "{FilesName} é um software de código aberto e gratuito, mantido e projetado por um coletivo de centenas de colaboradores.",
    discord: "Participe da discussão",
    docs: "Torne-se um colaborador",
    contributions: "{amount, plural, =0 {Não há contribuições} one {# contribuição} other {# contribuições}}"
  },
  design: {
    chip: "Projetar",
    title: "O poder encontra beleza.",
    description: "Explore um belo design de Windows. Gerencie todos os seus arquivos com maior produtividade. Trabalhe entre várias pastas com abas. E muito mais.",
    download: "BAIXAR",
    learn_more: "Mais informações"
  },
  features: {
    chip: "Funcionalidades",
    title: "Já faz isso.",
    description: "Integração de arquivos na nuvem? Abas e vários layouts? Pré-visualização de arquivos ricos? {FilesName} possui recursos robustos que você espera de um gerenciador de arquivos moderno.",
    unknown: "Desconhecido",
    cloud: {
      title: "Integração para nuvem ininterrupta",
      description: "Suporte integrado para unidades em nuvem como OneDrive, Google Drive e iCloud."
    },
    preview: {
      title: "Painel de pré-visualização",
      description: "Pré-visualize fotos, vídeos e documentos sem abri-los."
    },
    "popup-preview": {
      title: "Suporte ao QuickLook & SeerPro",
      description: "Visualize arquivos do escritório, documentos e outros tipos de arquivo pressionando a barra de espaço. Esta funcionalidade requer a instalação do QuickLook ou SeerPro."
    },
    tags: {
      title: "Marcar arquivos e pastas",
      description: "Organize e classifique seus arquivos e pastas com tags coloridas."
    },
    tabs: {
      title: "Multitarefa com abas",
      description: "Evite várias janelas e mantenha sua área de trabalho livre com abas."
    },
    columns: {
      title: "Visualização em coluna",
      description: "Navegue rapidamente através de diferentes níveis do sistema de arquivos usando o layout das colunas."
    },
    archives: {
      title: "Ver e editar arquivos",
      description: "Crie e extraia arquivos incluindo zip, WinRar e 7zip."
    },
    git: {
      title: "Integração Git",
      description: "Gerencie facilmente seus projetos Git. Crie novos branches, alterne entre eles e sincronize suas alterações - tudo sem sair dos Arquivos."
    },
    "dual-pane": {
      title: "Painel duplo",
      description: "Visualize e gerencie duas pastas lado a lado com o recurso do painel duplo."
    },
    hashes: {
      title: "Hashes",
      description: "Ver e comparar arquivos com hashes da janela de propriedades."
    },
    "command-palette": {
      title: "Paleta de comando",
      description: "Acesso rápido a comandos, recursos, e configurações da Paleta de Comando."
    },
    "remap-key-bindings": {
      title: "Remapar ligações de teclas",
      description: "Agilize seu fluxo de trabalho criando chaves personalizadas."
    }
  },
  themes: {
    chip: "Temas",
    title: "Distintamente pessoal.",
    description: "Entenda da assim mesmo. {FilesName} possui uma interface de usuário totalmente personalizável, direto às cores e materiais. Experimente os temas personalizados que são incorporados no {FilesName} ou mergulhe diretamente na documentação e crie os seus próprios temas.",
    grey_blue: "Cinza Escuro • Azul Claro",
    grey_green: "Cinza Azul • Néon Green",
    purple: "Roxo",
    yellow_white: "Amarelo • Branco",
    white_teal: "Branco fresco • Azul-petróleo",
    sky_blue: "Azul Céu",
    select_theme: "Selecionar tema #{index}"
  }
};
const blog$b = {
  coming_soon: "Mais postagens em breve!",
  read_more: "Ler Mais",
  share: {
    "default": "Compartilhamento Nativo",
    url: "Copiar URL",
    tweet: "X",
    facebook: "Siga-nos",
    rss: "Feed RSS"
  }
};
const docs$b = {
  autocomplete_empty: "Nenhum resultado encontrado",
  edit_page: "Editar esta página",
  search_docs: "Pesquisar documentação"
};
const footer$b = {
  home: "Residencial",
  docs: "Documentação",
  news: "Notícias",
  download: "BAIXAR",
  contribute: "Contribua para {FilesName}",
  feedback: "Dar feedback",
  style_guide: "Style Guide",
  translations: "Traduções",
  support: "SUPORTE",
  privacy: "Privacidade"
};
const navbar$b = {
  home: "Residencial",
  docs: "Documentação",
  news: "Notícias",
  download: "BAIXAR",
  themes: "Temas",
  discord: "Discord",
  github: "Github"
};
const download$b = {
  title: "Baixar {FilesName}",
  donation_description: "{FilesName} é um projeto orientado para a comunidade que depende do seu apoio para crescer e melhorar. Considere comprar {FilesName} através da Microsoft Store ou apoiar-nos no GitHub se você usar o instalador clássico.",
  donation_button: "Doar",
  microsoft_store: {
    title: "Baixar arquivos",
    description: "Comprar o {FilesName} através da Microsoft Store ajuda a apoiar os desenvolvedores e nos permite continuar atualizando o aplicativo com novos recursos e melhorias."
  },
  preview: {
    title: "Baixar visualização interna",
    description: "A versão de pré-visualização pode ser instalada juntamente com o lançamento estável e fornece acesso antecipado a novos recursos e melhorias."
  },
  self_signed: {
    link_text: "instalador clássico",
    description: "Não tem acesso à Microsoft Store? Experimente nosso "
  }
};
const __vite_glob_0_25 = {
  metadata: metadata$b,
  home: home$b,
  blog: blog$b,
  docs: docs$b,
  footer: footer$b,
  navbar: navbar$b,
  download: download$b
};
const metadata$a = {
  name: "{FilesName}",
  home: "{FilesName} • Pornire",
  docs_home: "{FilesName} • Documentație",
  docs_page: "{FilesName} • Documentație - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Construim cel mai bun manager de fișiere pentru Windows."
};
const home$a = {
  community: {
    chip: "Comunitate",
    title: "Proiectat și dezvoltat de către tine.",
    description: "{FilesName} este gratuit și cu sursă deschisă, întreținut și proiectat de un colectiv de sute de contribuitori.",
    discord: "Alătură-te discuției",
    docs: "Devino un contribuitor",
    contributions: "{amount, plural, =0 {Nici o contribuție} one {# contribuție} few {# contribuții} other {# contribuții}}"
  },
  design: {
    chip: "Design",
    title: "Puterea întâlnește frumusețea.",
    description: "Explorați un design frumos creat pentru Windows. Gestionați-vă toate fișierele cu o productivitate sporită. Lucrați în mai multe foldere cu file. Și multe altele.",
    download: "Descărcare",
    learn_more: "Aflați mai multe"
  },
  features: {
    chip: "Caracteristici",
    title: "Deja face acest lucru.",
    description: "Integrare cu fișiere în Cloud? File și aspecte multiple? Vizualizări bogate de fișiere? {FilesName} deja acoperă astea cu caracteristici robuste pe care le așteptați de la un manager de fișiere modern.",
    unknown: "Necunoscut",
    cloud: {
      title: "Integrare fără întreruperi în cloud",
      description: "Suport încorporat pentru unitățile cloud, cum ar fi OneDrive, Google Drive și iCloud."
    },
    preview: {
      title: "Panou de previzualizare",
      description: "Previzualizați fotografii, videoclipuri și documente fără a le deschide."
    },
    "popup-preview": {
      title: "Suport pentru QuickLook & SeerPro",
      description: "Previzualizați fișiere Office, documente, și alte tipuri de fișiere apăsând tasta spațiu. Această caracteristică necesită instalarea QuickLook sau SeerPro."
    },
    tags: {
      title: "Etichetați fișiere si foldere",
      description: "Organizați și sortați fișierele și dosarele cu etichete colorate."
    },
    tabs: {
      title: "Multitasking cu file",
      description: "Evitați mai multe ferestre și păstrați-vă desktopul curat cu file."
    },
    columns: {
      title: "Vizualizare coloană",
      description: "Navigați rapid prin diferite niveluri ale sistemului de fișiere folosind aspectul coloană."
    },
    archives: {
      title: "Vizualizați și editați arhive",
      description: "Creeați și extrageți arhive inclusiv zip, WinRar și 7zip."
    },
    git: {
      title: "Integrare Git",
      description: "Gestionați cu ușurință proiectele Git. Creați ramuri noi, schimbați între ele și sincronizați modificările - fără a părăsi Files."
    },
    "dual-pane": {
      title: "Panou dublu",
      description: "Vizualizați și gestionați două foldere unul lângă altul cu caracteristica Panou Dublu."
    },
    hashes: {
      title: "Hash-uri",
      description: "Vizualizați și comparați hash-urile din fereastra de proprietăți."
    },
    "command-palette": {
      title: "Paletă de comenzi",
      description: "Accesați rapid comenzi, caracteristici și setări din Paleta de Comenzi."
    },
    "remap-key-bindings": {
      title: "Reamintire legări cheie",
      description: "Streamline you workflow by creating custom key binding. (Automatic Copy)"
    }
  },
  themes: {
    chip: "Teme",
    title: "Distinct personal.",
    description: "Fie ca tine. {FilesName} oferă o interfață de utilizator complet personalizabilă, până la culori și materiale. Încercați teme personalizate care sunt încorporate în {FilesName} sau accesați direct documentația și creați-vă propriile teme.",
    grey_blue: "Gri închis • Albastru deschis",
    grey_green: "Gri albastru • Neon Verde",
    purple: "Mov",
    yellow_white: "Galben • Alb",
    white_teal: "Alb Rece • Albastru Verziu închis",
    sky_blue: "Albastrul cerului",
    select_theme: "Selectați o temă #{index}"
  }
};
const blog$a = {
  coming_soon: "Mai multe postări în curând!",
  read_more: "Citiți mai mult",
  share: {
    "default": "Partajare nativă",
    url: "Copiere URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Flux RSS"
  }
};
const docs$a = {
  autocomplete_empty: "Nu s-au găsit rezultate",
  edit_page: "Editați această pagină",
  search_docs: "Cauta Documentatie"
};
const footer$a = {
  home: "Pornire",
  docs: "Documentație",
  news: "Noutăți",
  download: "Descărcare",
  contribute: "Contribuiți la {FilesName}",
  feedback: "Oferiți feedback",
  style_guide: "Ghid Stil",
  translations: "Traduceri",
  support: "Suport",
  privacy: "Confidențialitate"
};
const navbar$a = {
  home: "Pornire",
  docs: "Documentație",
  news: "Noutăți",
  download: "Descărcare",
  themes: "Teme",
  discord: "Discord",
  github: "GitHub"
};
const download$a = {
  title: "Descărcați {FilesName}",
  donation_description: "{FilesName} este un proiect condus de comunitate care depinde de sprijinul tău pentru a crește și a se îmbunătăți. Vă rugăm să luați în considerare achiziționarea {FilesName} prin Microsoft Store sau sprijiniți-ne pe GitHub dacă folosiți instalarea clasică.",
  donation_button: "Donează",
  microsoft_store: {
    title: "Descărcați Files",
    description: "Achiziționarea {FilesName} prin Microsoft Store ne ajută să sprijinim dezvoltatorii și ne permite să continuăm actualizarea aplicației cu noi caracteristici și îmbunătățiri."
  },
  preview: {
    title: "Descărcați versiunea Insider Preview",
    description: "Versiunea de previzualizare poate fi instalată alături de versiunea stabilă și oferă acces rapid la funcții și îmbunătățiri noi."
  },
  self_signed: {
    link_text: "Instalator clasic",
    description: "Nu aveți acces la Microsoft Store? Încercați "
  }
};
const __vite_glob_0_26 = {
  metadata: metadata$a,
  home: home$a,
  blog: blog$a,
  docs: docs$a,
  footer: footer$a,
  navbar: navbar$a,
  download: download$a
};
const metadata$9 = {
  name: "{FilesName}",
  home: "{FilesName} • Главная",
  docs_home: "{FilesName} • Документация",
  docs_page: "{FilesName} • Документация - {title}",
  blog_home: "{FilesName} • Блог",
  blog_page: "{FilesName} • {title}",
  description: "Создание лучшего файлового менеджера для Windows."
};
const home$9 = {
  community: {
    chip: "Сообщество",
    title: "Спроектировано и разработано вами.",
    description: "{FilesName} является свободным Open-Source программным обеспечением, которое поддерживается коллективом из сотни участников.",
    discord: "Присоединиться к обсуждению",
    docs: "Стать участником",
    contributions: "{amount, plural, =0 {Нет вкладов} one {# вклад} few {# вклада} other {# вкладов}}"
  },
  design: {
    chip: "Дизайн",
    title: "Сила встречается с красотой.",
    description: "Откройте для себя красивый дизайн приложения для Windows. Управляйте всеми своими файлами с повышенной производительностью. Работайте с несколькими папками с помощью вкладок. И многое другое.",
    download: "Скачать",
    learn_more: "Узнать больше"
  },
  features: {
    chip: "Функции",
    title: "Уже сделано это.",
    description: "Интеграция с облачными сервисами? Вкладки и несколько способов расположения? Расширенный предварительный просмотр файлов? {FilesName} обладает надежными функциями, которые вы ожидаете от современного файлового менеджера.",
    unknown: "Неизвестно",
    cloud: {
      title: "Полная интеграция с облачными сервисами",
      description: "Встроенная поддержка таких облачных дисков как OneDrive, Google Drive и iCloud."
    },
    preview: {
      title: "Панель предпросмотра",
      description: "Предпросмотр фотографий, видео и документов, не открывая их."
    },
    "popup-preview": {
      title: "Поддержка QuickLook и SeerPro",
      description: "Предпросмотр файлов Office, документов и других типов файлов по нажатию на клавишу «Пробел». Для этой функции требуется установка QuickLook или SeerPro."
    },
    tags: {
      title: "Группируйте файлы и папки метками",
      description: "Организуйте и сортируйте свои файлы и папки с помощью цветных меток."
    },
    tabs: {
      title: "Многозадачность с вкладками",
      description: "Избегайте множества лишних окон и наведите порядок на своем рабочем столе с помощью вкладок."
    },
    columns: {
      title: 'Разметка "Столбцы"',
      description: "Быстро перемещайтесь по различным уровням файловой системы, используя макет столбцов."
    },
    archives: {
      title: "Просматривайте и редактируйте архивы",
      description: "Создавайте и извлекайте архивы, включая zip, WinRar и 7zip."
    },
    git: {
      title: "Интеграция с Git",
      description: "Легко управляйте своими проектами Git. Создавайте новые ветки, переключайтесь между ними и синхронизируйте изменения — и все это не выходя из Files."
    },
    "dual-pane": {
      title: "Двухпанельный режим",
      description: "Просматривайте и управляйте двумя папками одновременно с помощью двухпанельного режима."
    },
    hashes: {
      title: "Хеши",
      description: "Просматривайте и сравнивайте хеши файлов в окне свойств."
    },
    "command-palette": {
      title: "Палитра команд",
      description: "Быстрый доступ к командам, функциям и настройкам из палитры команд."
    },
    "remap-key-bindings": {
      title: "Запомнить привязки клавиш",
      description: "Создает пользовательские привязки клавиш."
    }
  },
  themes: {
    chip: "Темы",
    title: "Персонализируй.",
    description: "Будет так, как ты скажешь. {FilesName} имеет полностью настраиваемый пользовательский интерфейс, вплоть до цветов и материалов. Попробуйте пользовательские темы, встроенные в {FilesName}, или погрузитесь с головой и создайте свои собственные.",
    grey_blue: "Темно-серый • Голубой",
    grey_green: "Серый синий • Неоново-зеленый",
    purple: "Фиолетовый",
    yellow_white: "Желтый • Белый",
    white_teal: "Холодный белый • Темно-бирюзовый",
    sky_blue: "Лазурный",
    select_theme: "Выбрать тему #{index}"
  }
};
const blog$9 = {
  coming_soon: "Больше новостей совсем скоро!",
  read_more: "Читать далее",
  share: {
    "default": "Поделиться средствами системы",
    url: "Скопировать ссылку",
    tweet: "Х",
    facebook: "Facebook",
    rss: "RSS лента"
  }
};
const docs$9 = {
  autocomplete_empty: "Результаты не найдены",
  edit_page: "Редактировать эту страницу",
  search_docs: "Поиск документации"
};
const footer$9 = {
  home: "Главная",
  docs: "Документация",
  news: "Новости",
  download: "Скачать",
  contribute: "Внести вклад в развитие {FilesName}",
  feedback: "Обратная связь",
  style_guide: "Руководство по стилю кода",
  translations: "Перевод",
  support: "Поддержка",
  privacy: "Приватность"
};
const navbar$9 = {
  home: "Главная",
  docs: "Документация",
  news: "Новости",
  download: "Скачать",
  themes: "Темы",
  discord: "Discord",
  github: "Github"
};
const download$9 = {
  title: "Скачать {FilesName}",
  donation_description: "{FilesName} - это проект сообщества, развитие и улучшение которого зависит от вашей поддержки. Пожалуйста, рассмотрите приобретение {FilesName} через Microsoft Store или поддержите нас на GitHub, если вы используете классический способ установки.",
  donation_button: "Пожертвовать",
  microsoft_store: {
    title: "Скачать Files",
    description: "Приобретение {FilesName} в Microsoft Store помогает поддерживать разработчиков и позволяет нам продолжать обновлять приложение, добавляя новые функции и улучшения."
  },
  preview: {
    title: "Скачать Insider Preview",
    description: "Предварительную версию можно установить вместе со стабильной версией, она обеспечивает ранний доступ к новым функциям и улучшениям."
  },
  self_signed: {
    link_text: "классический установщик",
    description: "У вас нет доступа к Microsoft Store? Попробуйте наш "
  }
};
const __vite_glob_0_27 = {
  metadata: metadata$9,
  home: home$9,
  blog: blog$9,
  docs: docs$9,
  footer: footer$9,
  navbar: navbar$9,
  download: download$9
};
const metadata$8 = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$8 = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$8 = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$8 = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$8 = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$8 = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$8 = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_28 = {
  metadata: metadata$8,
  home: home$8,
  blog: blog$8,
  docs: docs$8,
  footer: footer$8,
  navbar: navbar$8,
  download: download$8
};
const metadata$7 = {
  name: "{FilesName}",
  home: "{FilesName} • Hem",
  docs_home: "{FilesName} • Dokument",
  docs_page: "{FilesName} • Dokument - {title}",
  blog_home: "{FilesName} • Blogg",
  blog_page: "{FilesName} • {title}",
  description: "Bygga den bästa filhanteraren för Windows."
};
const home$7 = {
  community: {
    chip: "Gemenskap",
    title: "Designad och utvecklad av dig.",
    description: "{FilesName} är fri programvara med öppen källkod, underhållen och designad av ett kollektiv på hundratals bidragsgivare.",
    discord: "Gå med i diskussionen",
    docs: "Bli en bidragsgivare",
    contributions: "{amount, plural, =0 {Inga bidrag} one {# bidrag} other {# bidrag}}"
  },
  design: {
    chip: "Design",
    title: "Kraft möter skönhet.",
    description: "Utforska en vacker Windows-första design. Hantera alla dina filer med ökad produktivitet. Arbeta över flera mappar med flikar. Och så mycket mer.",
    download: "Hämta",
    learn_more: "Läs mer"
  },
  features: {
    chip: "Funktioner",
    title: "Det gör man redan.",
    description: "Integration med molnfiler? Flikar och flera layouter? Rika filförhandsvisningar? {FilesName} täcks av robusta funktioner som du förväntar dig av en modern filhanterare.",
    unknown: "Okänd",
    cloud: {
      title: "Sömlös molnintegration",
      description: "Inbyggt stöd för molnenheter som OneDrive, Google Drive och iCloud."
    },
    preview: {
      title: "Förhandsgranska ruta",
      description: "Förhandsgranska foton, videor och dokument utan att öppna dem."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Förhandsgranska Office-filer, dokument och andra filtyper genom att trycka på mellanslagstangenten. Den här funktionen kräver att du installerar QuickLook eller SeerPro."
    },
    tags: {
      title: "Tagga filer och mappar",
      description: "Organisera och sortera dina filer och mappar med färgade taggar."
    },
    tabs: {
      title: "Multitask med flikar",
      description: "Undvik flera fönster och håll skrivbordet rörigt fritt med flikar."
    },
    columns: {
      title: "Kolumnvy",
      description: "Navigera snabbt genom olika nivåer av filsystemet med hjälp av kolumnlayouten."
    },
    archives: {
      title: "Visa och redigera arkiv",
      description: "Skapa och extrahera arkiv inklusive zip, WinRar, och 7zip."
    },
    git: {
      title: "Git integration",
      description: "Hantera dina Git-projekt enkelt. Skapa nya grenar, växla mellan dem och synkronisera dina ändringar - allt utan att lämna Filer."
    },
    "dual-pane": {
      title: "Dubbel ruta",
      description: "Visa och hantera två mappar sida vid sida med Dual Pane funktionen."
    },
    hashes: {
      title: "Hashar",
      description: "Visa och jämför filhashar från fönstret egenskaper."
    },
    "command-palette": {
      title: "Kommando palett",
      description: "Snabbt komma åt kommandon, funktioner och inställningar från kommandot Palette."
    },
    "remap-key-bindings": {
      title: "Remappa nyckelbindningar",
      description: "Effektivisera arbetsflödet genom att skapa anpassade nyckelbindningar."
    }
  },
  themes: {
    chip: "Teman",
    title: "Tydligt personlig.",
    description: "Ha det på ditt sätt. {FilesName} har ett helt anpassningsbart användargränssnitt, ända ner till färger och material. Prova anpassade teman som är inbyggda i {FilesName} eller dyk rakt in i dokumenten och skapa dina egna.",
    grey_blue: "Mörkgrå • ljusblå",
    grey_green: "Blå Grå • Neon Grön",
    purple: "Lila",
    yellow_white: "Gul • Vit",
    white_teal: "Cool White • Mörk Kricka",
    sky_blue: "Himmel blå",
    select_theme: "Välj tema #{index}"
  }
};
const blog$7 = {
  coming_soon: "Fler inlägg kommer snart!",
  read_more: "Läs mer",
  share: {
    "default": "Inhemsk delning",
    url: "Kopiera URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS-flöde"
  }
};
const docs$7 = {
  autocomplete_empty: "Inga resultat hittades",
  edit_page: "Redigera denna sida",
  search_docs: "Sök dokumentation"
};
const footer$7 = {
  home: "Hem",
  docs: "Dokument",
  news: "Nyheter",
  download: "Hämta",
  contribute: "Bidra till {FilesName}",
  feedback: "Ge feedback",
  style_guide: "Style Guide",
  translations: "Översättningar",
  support: "Stöd",
  privacy: "Sekretess"
};
const navbar$7 = {
  home: "Hem",
  docs: "Dokumentation",
  news: "Nyheter",
  download: "Hämta",
  themes: "Teman",
  discord: "Discord",
  github: "Github"
};
const download$7 = {
  title: "Ladda ner {FilesName}",
  donation_description: "{FilesName} är ett samhällsstyrt projekt som beror på ditt stöd för att växa och förbättra. Överväg att köpa {FilesName} via Microsoft Store eller stödja oss på GitHub om du använder det klassiska installationsprogrammet.",
  donation_button: "Donera",
  microsoft_store: {
    title: "Ladda ner filer",
    description: "Köpa {FilesName} via Microsoft Store hjälper till att stödja utvecklarna och tillåter oss att fortsätta uppdatera appen med nya funktioner och förbättringar."
  },
  preview: {
    title: "Insider Preview",
    description: "Förhandsgranskningsversionen kan installeras tillsammans med den stabila utgåvan och ger tidig tillgång till nya funktioner och förbättringar."
  },
  self_signed: {
    link_text: "klassisk installatör",
    description: "Har du inte tillgång till Microsoft Store? Prova vår "
  }
};
const __vite_glob_0_29 = {
  metadata: metadata$7,
  home: home$7,
  blog: blog$7,
  docs: docs$7,
  footer: footer$7,
  navbar: navbar$7,
  download: download$7
};
const metadata$6 = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$6 = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$6 = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$6 = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$6 = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$6 = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$6 = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Download Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_30 = {
  metadata: metadata$6,
  home: home$6,
  blog: blog$6,
  docs: docs$6,
  footer: footer$6,
  navbar: navbar$6,
  download: download$6
};
const metadata$5 = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home$5 = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog$5 = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs$5 = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer$5 = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar$5 = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download$5 = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Download Insider Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_31 = {
  metadata: metadata$5,
  home: home$5,
  blog: blog$5,
  docs: docs$5,
  footer: footer$5,
  navbar: navbar$5,
  download: download$5
};
const metadata$4 = {
  name: "{FilesName}",
  home: "{FilesName} • Anasayfa",
  docs_home: "{FilesName} • Dökümantasyon",
  docs_page: "{FilesName} • Dökümantasyon - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Windows için en iyi dosya yöneticisini oluşturun."
};
const home$4 = {
  community: {
    chip: "Topluluk",
    title: "Sizin tarafınızdan tasarlandı ve geliştirildi.",
    description: "{FilesName}, yüzlerce katılımcı tarafından sağlanan ve tasarlanan ücretsiz ve açık kaynaklı bir yazılımdır.",
    discord: "Tartışmaya Katıl",
    docs: "Katkıda Bulunun",
    contributions: "{amount, plural, =0 {Katkı yok} one {# katkı} other {# katkı}}"
  },
  design: {
    chip: "Dizayn",
    title: "Güç güzellikle tanıştı.",
    description: "Windows'a öncelik veren güzel bir tasarımı keşfedin. Tüm dosyalarınızı daha fazla üretkenlik ile yönetin. Sekmeler ile birden çok klasörde çalışın. Ve çok daha fazlası.",
    download: "İndir",
    learn_more: "Daha Fazla"
  },
  features: {
    chip: "Özellikler",
    title: "Bunu zaten yapıyor.",
    description: "Bulut dosyaları entegrasyonu? Sekmeler ve çoklu düzen? Zengin dosya önizlemeleri? {FilesName}, modern bir dosya yöneticisinden beklediğiniz güçlü özelliklerle kaplıdır.",
    unknown: "Bilinmeyen",
    cloud: {
      title: "Eksiksiz bulut entegrasyonu",
      description: "OneDrive, Google Drive ve iCloud gibi bulut sürücüler için yerleşik destek."
    },
    preview: {
      title: "Önizleme bölmesi",
      description: "Fotoğrafları, videoları ve belgeleri açmadan önizleyin."
    },
    "popup-preview": {
      title: "QuickLook ve SeerPro desteği",
      description: "Boşluk tuşuna basarak Office dosyalarını, belgeleri ve diğer dosya türlerini önizleyin. Bu özellik, QuickLook veya SeerPro yüklemeyi gerektirir."
    },
    tags: {
      title: "Dosyaları ve klasörleri etiketleyin",
      description: "Dosya ve klasörlerinizi renkli etiketlerle düzenleyin ve sıralayın."
    },
    tabs: {
      title: "Sekmelerle çoklu görev",
      description: "Birden fazla pencerelerden kaçının ve masaüstünü sekmeler sayesinde derli toplu tutun."
    },
    columns: {
      title: "Sütun görünümü",
      description: "Sütun düzenini kullanarak dosya sisteminin farklı seviyelerinde kolayca gezinin."
    },
    archives: {
      title: "Arşivleri görüntüleyin ve düzenleyin",
      description: "Zip, WinRar ve 7zip kullanarak arşivler oluşturun ve çıkartın."
    },
    git: {
      title: "Git entegrasyonu",
      description: "Git projelerinizi kolayca yönetin. Yeni dallar açın, aralarında gidip gelin, ve tüm değişiklerinizi eşleyin - hem de Files'tan hiç ayrılmadan."
    },
    "dual-pane": {
      title: "Çift bölme",
      description: "Çift Bölme özelliği ile iki klasörü yan yana görüntüleyin ve düzenleyin."
    },
    hashes: {
      title: "Hashler",
      description: "Özellikler penceresinden dosya hashlerini görüntüleyin ve karşılaştırın."
    },
    "command-palette": {
      title: "Komut Paleti",
      description: "Komut Paleti'nden komutlara, özelliklere ve ayarlara kolayca erişin."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Temalar",
    title: "Kesinlikle kişisel.",
    description: "İstediğiniz gibi düzenleyin. {FilesName}, renklere ve malzemelere kadar tamamen özelleştirilebilir bir kullanıcı arayüzüne sahiptir. {FilesName} içinde yerleşik olan özel temaları deneyin veya doğrudan dokümanlara dalın ve kendi temanızı oluşturun.",
    grey_blue: "Koyu Gri • Açık Mavi",
    grey_green: "Mavi Gri • Neon Yeşili",
    purple: "Mor",
    yellow_white: "Sarı beyaz",
    white_teal: "Soğuk Beyaz • Koyu Deniz Mavisi",
    sky_blue: "Gök mavisi",
    select_theme: "Tema seç #{index}"
  }
};
const blog$4 = {
  coming_soon: "Daha fazla gönderi yakında!",
  read_more: "Daha Fazla",
  share: {
    "default": "Yerel paylaşım",
    url: "Bağlantıyı kopyala",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS akışı"
  }
};
const docs$4 = {
  autocomplete_empty: "Sonuç bulunamadı",
  edit_page: "Bu sayfayı düzenle",
  search_docs: "Search Documentation"
};
const footer$4 = {
  home: "Ana sayfa",
  docs: "Dokümantasyon",
  news: "Haberler",
  download: "İndir",
  contribute: "{FilesName}'a Katkıda Bulunun",
  feedback: "Geri Bildirimde Bulunun",
  style_guide: "Stil Rehberi",
  translations: "Tercümeler",
  support: "Support",
  privacy: "Privacy"
};
const navbar$4 = {
  home: "Ana sayfa",
  docs: "Dökümantasyon",
  news: "Haberler",
  download: "İndir",
  themes: "Temalar",
  discord: "Discord",
  github: "GitHub"
};
const download$4 = {
  title: "{FilesName}'ı İndir",
  donation_description: "{FilesName} büyümek ve gelişmek için sizin desteğinize bağlı olan, topluluk odaklı bir projedir. Klasik yükleyiciyi kullanıyorsanız lütfen Microsoft Mağazası aracılığıyla {FilesName} satın almayı veya GitHub'da bizi desteklemeyi düşünün.",
  donation_button: "Bağış Yap",
  microsoft_store: {
    title: "Files'ı İndir",
    description: "{FilesName}'ı Microsoft Store aracılığıyla satın almak, geliştiricileri desteklemeye yardımcı olur ve uygulamayı yeni özellikler ve geliştirmelerle güncellemeye devam etmemizi sağlar."
  },
  preview: {
    title: "Insider Preview",
    description: "Önizleme sürümü, Kararlı sürümle birlikte kurulabilir ve yeni özelliklere ve iyileştirmelere erken erişim sağlar."
  },
  self_signed: {
    link_text: "klasik yükleyicimizde olabilir",
    description: "Microsoft Store'a erişiminiz yok mu? Çareniz "
  }
};
const __vite_glob_0_32 = {
  metadata: metadata$4,
  home: home$4,
  blog: blog$4,
  docs: docs$4,
  footer: footer$4,
  navbar: navbar$4,
  download: download$4
};
const metadata$3 = {
  name: "{FilesName}",
  home: "{FilesName} • Головна",
  docs_home: "{FilesName} • Документація",
  docs_page: "{FilesName} • Документація - {title}",
  blog_home: "{FilesName} • Блог",
  blog_page: "{FilesName} • {title}",
  description: "Створюємо найкращий файловий менеджер для Windows."
};
const home$3 = {
  community: {
    chip: "Спільнота",
    title: "Спроєктовано та розроблено вами.",
    description: "{FilesName} є вільним Open-Source програмним забезпеченням, яке підтримується колективом із сотні учасників.",
    discord: "Долучитися до обговорення",
    docs: "Стати учасником",
    contributions: "{amount, plural, =0 {Немає вкладів} one {# внесок} few {# вклади} other {# вкладів}}"
  },
  design: {
    chip: "Дизайн",
    title: "Сила зустрічається з красою.",
    description: "Відкрийте для себе вродливий дизайн для Windows. Керуйте всіма файлами з підвищеною продуктивністю. Працюйте з кількома папками за допомогою вкладок. І багато іншого.",
    download: "Завантажити",
    learn_more: "Дізнатися більше"
  },
  features: {
    chip: "Функції",
    title: "Це вже зроблено.",
    description: "Інтеграція з облачними сервісами? Вкладки і кілька способів розташування? Розширений попередній перегляд файлів? {FilesName} володіє надійними функціями, які ви очікуєте від сучасного файлового менеджера.",
    unknown: "Невідомо",
    cloud: {
      title: "Повна інтеграція з хмарними сервісами",
      description: "Підтримка таких хмарних дисків як OneDrive, Google Drive та iCloud."
    },
    preview: {
      title: "Панель попереднього перегляду",
      description: "Попередній перегляд фотографій, відео та документів, не відкриваючи їх."
    },
    "popup-preview": {
      title: "Підтримка QuickLook та Seer Pro",
      description: "Переглядайте файли Office, документи та інші типи файлів, натиснувши клавішу пробілу. Ця функція потребує встановлення QuickLook або SeerPro."
    },
    tags: {
      title: "Теги для файлів і папок",
      description: "Упорядковуйте та сортуйте файли та папки за допомогою кольорових тегів."
    },
    tabs: {
      title: "Багатозадачність з вкладками",
      description: "Уникайте багатьох вікон і звільніть робочий стіл за допомогою вкладок."
    },
    columns: {
      title: 'Макет "Стовпці"',
      description: 'Швидко переходьте між різними рівнями файлової системи за допомогою макета "Стовпці".'
    },
    archives: {
      title: "Перегляд та редагування архівів",
      description: "Створюйте та розпаковуйте архіви, включаючи zip, WinRar та 7zip."
    },
    git: {
      title: "Інтеграція з Git",
      description: "Легко керуйте своїми проектами Git. Створюйте нові гілки, перемикайтеся між ними та синхронізуйте зміни – і все це не виходячи з Files."
    },
    "dual-pane": {
      title: "Режим подвійної панелі",
      description: "Переглядайте та керуйте двома папками одночасно за допомогою функції подвійної панелі."
    },
    hashes: {
      title: "Хеші",
      description: "Переглядайте і порівнюйте хеші файлів у вікні властивостей."
    },
    "command-palette": {
      title: "Палітра Команд",
      description: "Швидкий доступ до команд, функцій і налаштувань за допомогою Палітри Команд."
    },
    "remap-key-bindings": {
      title: "Видалити прив'язки ключів",
      description: "Транслюйте ваш робочий процес, створюючи прив'язки для користувацького ключа."
    }
  },
  themes: {
    chip: "Теми",
    title: "Дуже особисте.",
    description: "Будь по твоєму. {FilesName} має повністю настроюваний інтерфейс користувача, аж до кольорів і матеріалів. Спробуйте теми користувача, вбудовані в {FilesName}, або зануртесь прямо в інтерфейс і створіть свої власні.",
    grey_blue: "Темно-сірий • Світло-блакитний",
    grey_green: "Синій сірий • Неоновий зелений",
    purple: "Фіолетовий",
    yellow_white: "Жовтий • Білий",
    white_teal: "Холодний білий • Темний бірюзовий",
    sky_blue: "Блакитне небо",
    select_theme: "Вибрати тему #{index}"
  }
};
const blog$3 = {
  coming_soon: "Більше публікацій незабаром!",
  read_more: "Читати далі",
  share: {
    "default": "Поділитися засобами системи",
    url: "Скопіювати URL-посилання",
    tweet: "Ікс",
    facebook: "Фейсбук",
    rss: "RSS канал"
  }
};
const docs$3 = {
  autocomplete_empty: "Нічого не знайдено",
  edit_page: "Редагувати цю сторінку",
  search_docs: "Пошук документації"
};
const footer$3 = {
  home: "Головна",
  docs: "Документація",
  news: "Новини",
  download: "Завантажити",
  contribute: "Внести внесок у розвиток {FilesName}",
  feedback: "Надіслати відгук",
  style_guide: "Посібник зі стилю коду",
  translations: "Переклад",
  support: "Підтримка",
  privacy: "Конфіденційність"
};
const navbar$3 = {
  home: "Головна",
  docs: "Документація",
  news: "Новини",
  download: "Завантажити",
  themes: "Теми",
  discord: "Discord",
  github: "Github"
};
const download$3 = {
  title: "Завантажити {FilesName}",
  donation_description: "{FilesName} - це проєкт, керований спільнотою, зростання та вдосконалення якого залежать від вашої підтримки. Будь ласка, подумайте про покупку {FilesName} через Microsoft Store або підтримайте нас на GitHub, якщо ви використовуєте класичний інсталятор.",
  donation_button: "Підтримати",
  microsoft_store: {
    title: "Завантажити Files",
    description: "Придбання {FilesName} через Microsoft Store допомагає підтримувати розробників і дозволяє нам продовжувати оновлення додатку з новими функціями та покращеннями."
  },
  preview: {
    title: "Завантажити Insider Preview",
    description: "Бета-версія може бути встановлена разом зі стабільним випуском і надає ранній доступ до нових функцій і покращень."
  },
  self_signed: {
    link_text: "класичний встановлювач",
    description: "Немає доступу до Microsoft Store? Спробуйте "
  }
};
const __vite_glob_0_33 = {
  metadata: metadata$3,
  home: home$3,
  blog: blog$3,
  docs: docs$3,
  footer: footer$3,
  navbar: navbar$3,
  download: download$3
};
const metadata$2 = {
  name: "{FilesName}",
  home: "{FilesName} • Trang chủ",
  docs_home: "{FilesName} • Tài liệu",
  docs_page: "{FilesName} • Tài liệu - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Xây dựng một trình quản lý tệp tốt nhất cho Windows."
};
const home$2 = {
  community: {
    chip: "Cộng đồng",
    title: "Thiết kế và phát triển bởi những người như bạn.",
    description: "{FilesName} là phần mềm miễn phí và mã nguồn mở, được thiết kế và vận hành bởi hàng trăm cộng tác viên sôi nổi.",
    discord: "Tham gia thảo luận",
    docs: "Bắt đầu đóng góp",
    contributions: "{amount, plural, =0 {Chưa có đóng góp} other {# đóng góp}}"
  },
  design: {
    chip: "Thiết kế",
    title: "Sức mạnh kết hợp với sự hoàn mỹ.",
    description: "Khám phá một thiết kế đẹp thuần Windows. Quản lý các tệp giờ đây trở nên dễ dàng và nhanh chóng. Đơn giản hóa việc xử lý các thư mục với hệ thống thẻ cùng nhiều tính năng khác.",
    download: "Tải xuống",
    learn_more: "Tìm hiểu thêm"
  },
  features: {
    chip: "Tính năng",
    title: "Mọi thứ bạn cần ngay trước mắt.",
    description: "Từ tích hợp lưu trữ đám mây, hệ thống thẻ đến xem trước tệp với đầy đủ thông tin cùng bố cục hiển thị đa dạng. {FilesName} tập hợp mọi tính năng mạnh mẽ mà bạn mong đợi từ một trình quản lý tệp hiện đại.",
    unknown: "Không rõ",
    cloud: {
      title: "Tích hợp đám mây một cách liền mạch",
      description: "Tích hợp hỗ trợ cho các dịch vụ lưu trữ đám mây như OneDrive, Google Drive và iCloud."
    },
    preview: {
      title: "Ngăn xem trước",
      description: "Xem trước ảnh, video và tài liệu mà không cần phải mở một cách thủ công."
    },
    "popup-preview": {
      title: "Hỗ trợ QuickLook & SeerPro",
      description: "Xem trước tệp và tài liệu Office cùng nhiều loại tệp khác chỉ bằng việc nhấn phím cách. Tính năng này yêu cầu cài đặt QuickLook hoặc SeerPro."
    },
    tags: {
      title: "Gắn nhãn cho tệp và thư mục",
      description: "Quản lý và sắp xếp các tệp hoặc thư mục của bạn bằng cách sử dụng các nhãn cùng màu sắc bạn muốn."
    },
    tabs: {
      title: "Đa tác vụ với các thẻ",
      description: "Tránh việc phải mở nhiều cửa sổ cùng một lúc và giữ cho màn hình làm việc của bạn luôn gọn gàng với hệ thống thẻ."
    },
    columns: {
      title: "Hiển thị dạng cột",
      description: "Truy cập sâu vào các phần của hệ thống tệp một cách nhanh chóng với dạng xem cột."
    },
    archives: {
      title: "Xem và chỉnh sửa các tệp nén",
      description: "Tạo và giải nén các tệp nén ở định dạng phổ biến như zip, WinRar và 7zip."
    },
    git: {
      title: "Tích hợp Git",
      description: "Dễ dàng quản lý các dự án Git của bạn. Tạo nhánh mới, chuyển đổi giữa các nhánh và đồng bộ các thay đổi - tất cả mà không cần phải rời khỏi Files."
    },
    "dual-pane": {
      title: "Chế độ hai ngăn",
      description: "Xem và quản lý hai thư mục cùng một lúc với chế độ hai ngăn."
    },
    hashes: {
      title: "Hash",
      description: "Xem và so sánh hash của tệp ngay trong cửa sổ thuộc tính."
    },
    "command-palette": {
      title: "Bảng lệnh",
      description: "Truy cập vào các lệnh, tính năng và cài đặt một cách nhanh chóng từ Bảng lệnh."
    },
    "remap-key-bindings": {
      title: "Phím tắt tùy chỉnh",
      description: "Đồng bộ quy trình làm việc của bạn bằng việc tùy chỉnh tổ hợp phím theo ý muốn."
    }
  },
  themes: {
    chip: "Chủ đề",
    title: "Phong cách riêng biệt.",
    description: "Tùy chỉnh theo sở thích của bạn. {FilesName} tích hợp giao diện hoàn toàn tùy biến, đến tận sắc thái và chất liệu. Hãy thử trải nghiệm các chủ đề có sẵn trong {FilesName} hoặc tham khảo tài liệu hướng dẫn để tự tạo chủ đề cho riêng mình.",
    grey_blue: "Xám Tối • Xanh Nhạt",
    grey_green: "Xám Xanh • Xanh Lá Neon",
    purple: "Tím",
    yellow_white: "Vàng • Trắng",
    white_teal: "Trắng Mát Mẻ • Mòng Két Tối",
    sky_blue: "Xanh Da Trời",
    select_theme: "Chọn chủ đề #{index}"
  }
};
const blog$2 = {
  coming_soon: "Nhiều bài đăng mới sẽ sớm ra mắt!",
  read_more: "Đọc thêm",
  share: {
    "default": "Chia sẻ",
    url: "Sao chép URL",
    tweet: "X",
    facebook: "Facebook",
    rss: "Nguồn cấp dữ liệu RSS"
  }
};
const docs$2 = {
  autocomplete_empty: "Không có kết quả",
  edit_page: "Chỉnh sửa trang này",
  search_docs: "Tìm kiếm tài liệu"
};
const footer$2 = {
  home: "Trang chủ",
  docs: "Tài liệu",
  news: "Tin tức",
  download: "Tải xuống",
  contribute: "Đóng góp cho {FilesName}",
  feedback: "Gửi phản hồi",
  style_guide: "Hướng dẫn thiết kế",
  translations: "Dịch thuật",
  support: "Hỗ trợ",
  privacy: "Chính sách riêng tư"
};
const navbar$2 = {
  home: "Trang chủ",
  docs: "Tài liệu",
  news: "Tin tức",
  download: "Tải xuống",
  themes: "Chủ đề",
  discord: "Discord",
  github: "GitHub"
};
const download$2 = {
  title: "Tải {FilesName}",
  donation_description: "{FilesName} là dự án hướng đến cộng đồng để cải thiện và phát triển. Nếu bạn muốn ủng hộ, hãy mua {FilesName} từ Microsoft Store hoặc ủng hộ qua GitHub nếu bạn sử dụng trình cài đặt thông thường.",
  donation_button: "Ủng hộ",
  microsoft_store: {
    title: "Tải xuống Files",
    description: "Mua {FilesName} từ Microsoft Store để ủng hộ các nhà phát triển và giúp chúng tôi tiếp tục bổ sung các cải thiện và tính năng mới."
  },
  preview: {
    title: "Tải bản Insider Preview",
    description: "Phiên bản xem trước có thể được cài đặt song song với phiên bản ổn định và cung cấp quyền truy cập sớm vào các cải thiện và tính năng mới."
  },
  self_signed: {
    link_text: "trình cài đặt thông thường",
    description: "Không thể truy cập vào Microsoft Store? Hãy sử dụng "
  }
};
const __vite_glob_0_34 = {
  metadata: metadata$2,
  home: home$2,
  blog: blog$2,
  docs: docs$2,
  footer: footer$2,
  navbar: navbar$2,
  download: download$2
};
const metadata$1 = {
  name: "{FilesName}",
  home: "{FilesName} • 主页",
  docs_home: "{FilesName} • 文档",
  docs_page: "{FilesName} • 文档 - {title}",
  blog_home: "{FilesName} • 博客",
  blog_page: "{FilesName} • {title}",
  description: "构建最好的Windows文件管理器。"
};
const home$1 = {
  community: {
    chip: "社区",
    title: "由你来进行的设计与开发。",
    description: "{FilesName} 是自由开放源码软件，由数百个贡献者集体维护和设计。",
    discord: "加入讨论",
    docs: "成为贡献者",
    contributions: "{amount, plural, =0 {无贡献} other {# 贡献}}"
  },
  design: {
    chip: "设计",
    title: "当实用遇上美学。",
    description: "探索美观的窗口设计，高效管理所有文件，在多文件夹标签页中流转。还有更多功能待您体验。",
    download: "下载",
    learn_more: "了解更多"
  },
  features: {
    chip: "特性",
    title: "它已经做到了",
    description: "云盘文件集成、标签页和多种布局、丰富的文件预览……您想要的一切现代文件管理器的强大功能， {FilesName} 都能做到。",
    unknown: "未知",
    cloud: {
      title: "无缝的云端集成",
      description: "内置对 OneDrive、Google Drive 和 iCloud 等云盘的支持。"
    },
    preview: {
      title: "预览面板",
      description: "无需打开即可预览照片、视频和文档。"
    },
    "popup-preview": {
      title: "支持 QuickLook 和 SeerPro",
      description: "按空格键预览 Office 文件、文档和其他文件类型。此功能需要安装 QuickLook 或 SeerPro。"
    },
    tags: {
      title: "为文件和文件夹打上标签",
      description: "用彩色标签对你的文件和文件夹进行组织和分类。"
    },
    tabs: {
      title: "使用标签页进行多任务处理",
      description: "使用标签页避免打开多个窗口，让桌面保持整洁。"
    },
    columns: {
      title: "列表视图",
      description: "使用列式布局快速浏览文件系统的不同层级。"
    },
    archives: {
      title: "查看和编辑档案",
      description: "创建和解压压缩包，包括zip、WinRar和7zip。"
    },
    git: {
      title: "Git 集成",
      description: "轻松地管理你的Git项目。创建新的分支，在它们之间切换，并同步你的变化 - 所有这些都无需离开Files。"
    },
    "dual-pane": {
      title: "双面板",
      description: "利用双面板查看和管理两个并排的文件夹。"
    },
    hashes: {
      title: "哈希值",
      description: "在属性窗口中查看和比较文件的哈希值。"
    },
    "command-palette": {
      title: "命令面板",
      description: "通过命令面板快速访问命令、功能和设置。"
    },
    "remap-key-bindings": {
      title: "重映射键绑定",
      description: "通过创建自定义密钥绑定来简化您的工作流。"
    }
  },
  themes: {
    chip: "主题",
    title: "个性化",
    description: "随心所欲。 {FilesName} 的用户界面可完全自定义，包括颜色和材质。你可以尝试 {FilesName} 内置的自定义主题，也可以查阅文档创建自定义主题。",
    grey_blue: "深灰 • 浅蓝",
    grey_green: "灰蓝 • 荧绿",
    purple: "紫色",
    yellow_white: "黄色 • 白色",
    white_teal: "冷白色 • 深茶色",
    sky_blue: "天蓝",
    select_theme: "选择主题#{index}"
  }
};
const blog$1 = {
  coming_soon: "更多功能即将发布!",
  read_more: "了解更多",
  share: {
    "default": "本地共享",
    url: "复制链接",
    tweet: "X",
    facebook: "Facebook",
    rss: "RSS 订阅源"
  }
};
const docs$1 = {
  autocomplete_empty: "未找到任何结果",
  edit_page: "编辑此页面",
  search_docs: "搜索文档"
};
const footer$1 = {
  home: "主页",
  docs: "文档",
  news: "消息",
  download: "下载",
  contribute: "为 {FilesName} 贡献",
  feedback: "发送反馈",
  style_guide: "风格规范",
  translations: "翻译",
  support: "支持",
  privacy: "隐私"
};
const navbar$1 = {
  home: "主页",
  docs: "文档",
  news: "消息",
  download: "下载",
  themes: "主题",
  discord: "Discord",
  github: "Github"
};
const download$1 = {
  title: "下载 {FilesName}",
  donation_description: "{FilesName} 是一个由社区主导的项目，为了持续成长和改进，我们需要大家的支持。请考虑从 Microsoft Store 购买 {FilesName}，或者如果您选择使用经典安装程序，请务必在 GitHub 上给予支持。",
  donation_button: "捐赠",
  microsoft_store: {
    title: "下载文件",
    description: "通过Microsoft Store购买 {FilesName} 有助于支持开发人员，使我们能够继续更新应用程序的新功能和改进。"
  },
  preview: {
    title: "下载预览版本",
    description: "预览版可以与稳定版同时安装，并提供对新功能和改进的早期访问。"
  },
  self_signed: {
    link_text: "经典安装程序",
    description: "无法通过 Microsoft Store 下载？试试我们 "
  }
};
const __vite_glob_0_35 = {
  metadata: metadata$1,
  home: home$1,
  blog: blog$1,
  docs: docs$1,
  footer: footer$1,
  navbar: navbar$1,
  download: download$1
};
const metadata = {
  name: "{FilesName}",
  home: "{FilesName} • Home",
  docs_home: "{FilesName} • Docs",
  docs_page: "{FilesName} • Docs - {title}",
  blog_home: "{FilesName} • Blog",
  blog_page: "{FilesName} • {title}",
  description: "Building the best file manager for Windows."
};
const home = {
  community: {
    chip: "Community",
    title: "Designed and developed by you.",
    description: "{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
    discord: "Join the discussion",
    docs: "Become a contributor",
    contributions: "{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}"
  },
  design: {
    chip: "Design",
    title: "Power meets beauty.",
    description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
    download: "Download",
    learn_more: "Learn more"
  },
  features: {
    chip: "Features",
    title: "It already does that.",
    description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
    unknown: "Unknown",
    cloud: {
      title: "Seamless cloud integration",
      description: "Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud."
    },
    preview: {
      title: "Preview pane",
      description: "Preview photos, videos, and documents without opening them. Please note that some file formats are not currently supported."
    },
    "popup-preview": {
      title: "QuickLook & SeerPro support",
      description: "Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro."
    },
    tags: {
      title: "Tag files and folders",
      description: "Organize and sort your files and folders with colored tags."
    },
    tabs: {
      title: "Multitask with tabs",
      description: "Avoid multiple windows and keep your desktop clutter-free with tabs."
    },
    columns: {
      title: "Column view",
      description: "Quickly navigate through different levels of the file system using the column layout."
    },
    archives: {
      title: "View and edit archives",
      description: "Create and extract archives including zip, WinRar, and 7zip."
    },
    git: {
      title: "Git integration",
      description: "Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files."
    },
    "dual-pane": {
      title: "Dual pane",
      description: "View and manage two folders side by side with the Dual Pane feature."
    },
    hashes: {
      title: "Hashes",
      description: "View and compare file hashes from the properties window."
    },
    "command-palette": {
      title: "Command Palette",
      description: "Quickly access commands, features, and settings from the Command Palette."
    },
    "remap-key-bindings": {
      title: "Remap key bindings",
      description: "Streamline you workflow by creating custom key bindings."
    }
  },
  themes: {
    chip: "Themes",
    title: "Distinctly personal.",
    description: "Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
    grey_blue: "Dark Grey • Light Blue",
    grey_green: "Blue Grey • Neon Green",
    purple: "Purple",
    yellow_white: "Yellow • White",
    white_teal: "Cool White • Dark Teal",
    sky_blue: "Sky Blue",
    select_theme: "Select theme #{index}"
  }
};
const blog = {
  coming_soon: "More posts coming soon!",
  read_more: "Read More",
  share: {
    "default": "Native sharing",
    url: "Copy URL",
    tweet: "Twitter",
    facebook: "Facebook",
    rss: "RSS Feed"
  }
};
const docs = {
  autocomplete_empty: "No results found",
  edit_page: "Edit this page",
  search_docs: "Search Documentation"
};
const footer = {
  home: "Home",
  docs: "Docs",
  news: "News",
  download: "Download",
  contribute: "Contribute to {FilesName}",
  feedback: "Give Feedback",
  style_guide: "Style Guide",
  translations: "Translations",
  support: "Support",
  privacy: "Privacy"
};
const navbar = {
  home: "Home",
  docs: "Documentation",
  news: "News",
  download: "Download",
  themes: "Themes",
  discord: "Discord",
  github: "Github"
};
const download = {
  title: "Download {FilesName}",
  donation_description: "{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
  donation_button: "Donate",
  microsoft_store: {
    title: "Download Files",
    description: "Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements."
  },
  preview: {
    title: "Preview",
    description: "The preview version can be installed alongside the stable release and provides early access to new features and improvements."
  },
  self_signed: {
    link_text: "classic installer",
    description: "Don't have access to the Microsoft Store? Try our "
  }
};
const __vite_glob_0_36 = {
  metadata,
  home,
  blog,
  docs,
  footer,
  navbar,
  download
};
const locales = Object.fromEntries(
  Object.entries(
    /* @__PURE__ */ Object.assign({
      "./locales/af-ZA.json": __vite_glob_0_0,
      "./locales/ar-SA.json": __vite_glob_0_1,
      "./locales/ca-ES.json": __vite_glob_0_2,
      "./locales/cs-CZ.json": __vite_glob_0_3,
      "./locales/da-DK.json": __vite_glob_0_4,
      "./locales/de-DE.json": __vite_glob_0_5,
      "./locales/el-GR.json": __vite_glob_0_6,
      "./locales/en-GB.json": __vite_glob_0_7,
      "./locales/en.json": __vite_glob_0_8,
      "./locales/es-ES.json": __vite_glob_0_9,
      "./locales/fi-FI.json": __vite_glob_0_10,
      "./locales/fr-FR.json": __vite_glob_0_11,
      "./locales/he-IL.json": __vite_glob_0_12,
      "./locales/hi-IN.json": __vite_glob_0_13,
      "./locales/hu-HU.json": __vite_glob_0_14,
      "./locales/it-IT.json": __vite_glob_0_15,
      "./locales/ja-JP.json": __vite_glob_0_16,
      "./locales/kaa.json": __vite_glob_0_17,
      "./locales/kl-GL.json": __vite_glob_0_18,
      "./locales/ko-KR.json": __vite_glob_0_19,
      "./locales/ms-MY.json": __vite_glob_0_20,
      "./locales/nl-NL.json": __vite_glob_0_21,
      "./locales/no-NO.json": __vite_glob_0_22,
      "./locales/pl-PL.json": __vite_glob_0_23,
      "./locales/pt-BR.json": __vite_glob_0_24,
      "./locales/pt-PT.json": __vite_glob_0_25,
      "./locales/ro-RO.json": __vite_glob_0_26,
      "./locales/ru-RU.json": __vite_glob_0_27,
      "./locales/sr-SP.json": __vite_glob_0_28,
      "./locales/sv-SE.json": __vite_glob_0_29,
      "./locales/ta-IN.json": __vite_glob_0_30,
      "./locales/th-TH.json": __vite_glob_0_31,
      "./locales/tr-TR.json": __vite_glob_0_32,
      "./locales/uk-UA.json": __vite_glob_0_33,
      "./locales/vi-VN.json": __vite_glob_0_34,
      "./locales/zh-CN.json": __vite_glob_0_35,
      "./locales/zh-TW.json": __vite_glob_0_36
    })
  ).map(([locale, values]) => [
    locale.match(/\.\/locales\/([\w-]+)\.json/)?.[1],
    {
      values,
      dir: ["he-IL", "ar-SA"].includes(locale) ? "rtl" : "ltr"
    }
  ])
);
const i18n = () => {
  for (const [locale, localeObject] of Object.entries(locales)) {
    if (Object.keys(localeObject.values).length !== 0)
      addMessages(locale, localeObject.values);
  }
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator()
  });
};
export {
  i18n as i,
  locales as l
};
