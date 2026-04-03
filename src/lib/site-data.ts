import type {
  Brand,
  Bundle,
  EditorialModule,
  Goal,
  JournalEntry,
  Product,
  Routine,
  SiteSettings,
} from "@/lib/types";

export const siteSettings: SiteSettings = {
  name: "Alowvera",
  descriptor: "Wellness Editorial-Commerce Atlas",
  tagline: "שגרות, מוצרים ומותגים שנבחרו בשבילך — במקום אחד שנעים להיכנס אליו.",
  navigation: [
    { href: "/", label: "בית" },
    { href: "/routines", label: "שגרות" },
    { href: "/brands", label: "מותגים" },
    { href: "/bundles", label: "מארזים" },
    { href: "/journal", label: "יומן" },
    { href: "/about", label: "אודות" },
    { href: "/shop", label: "חיפוש" },
    { href: "/cart", label: "עגלה" },
  ],
};

export const brands: Brand[] = [
  {
    slug: "forever",
    name: "Forever",
    eyebrow: "Brand 01",
    strapline: "אלוורה, פרופוליס וסיבים — הבסיס שהגוף מכיר כבר עשרות שנים",
    description:
      "Forever מביא את החומרים שעובדים בשקט. בלי הבטחות גדולות, בלי קסמים — פשוט מוצרים שאנשים חוזרים אליהם כי הם מרגישים את ההבדל.",
    story:
      "התחלנו מ-Forever כי הם עושים דבר אחד ועושים אותו טוב: אלוורה באיכות שאתה מרגיש מהיום הראשון. זה המותג שבנינו סביבו את כל השאר.",
    values: ["אלוורה טהורה כבסיס", "מוצרים פשוטים לשימוש יומי", "אמון של עשרות שנים"],
    collectionLabel: "Aloe-First Essentials",
    commerceStatus: "live",
    palette: ["#1E3A2B", "#D8BE7E", "#F2EDE1"],
    featuredGoalSlugs: ["digestion", "skin", "reset"],
    featuredRoutineSlugs: ["morning-glow", "inner-reset"],
  },
  {
    slug: "alowvera-atelier",
    name: "Alowvera Atelier",
    eyebrow: "Brand 02",
    strapline: "חליטות, מיסטים ודברים שנכנסים בין הבוקר לערב",
    description:
      "Atelier זה הצד הרך: חליטות ערב, מיסט לפנים, ותערובות שנוצרו כדי להשלים את מה ש-Forever מתחיל מבפנים.",
    story:
      "בנינו את Atelier כי שגרה טובה צריכה גם חום, ריח ומגע. לא רק כמוסות וג'לים. הקו הזה מביא את הרגעים שבין המוצרים.",
    values: ["חומרים רכים וטבעיים", "פורמטים שנעים להחזיק", "חוויה שמשלימה את הגוף"],
    collectionLabel: "Studio Ritual Objects",
    commerceStatus: "live",
    palette: ["#5C4A39", "#E8DCC6", "#8BA384"],
    featuredGoalSlugs: ["balance", "energy"],
    featuredRoutineSlugs: ["evening-downshift", "travel-carry"],
  },
];

export const goals: Goal[] = [
  {
    slug: "energy",
    name: "אנרגיה",
    mood: "כשהבוקר מתחיל כבד ואתה צריך בהירות, לא קפאין",
    introduction:
      "לא עוד אנרגיה מלאכותית שנגמרת אחרי שעה. כאן תמצא מוצרים שעוזרים לגוף להתעורר בעצמו — רגוע, חד, מוכן ליום.",
    synopsis: "לימים שמתחילים עם ערפל. משהו שמעיר בלי לטלטל.",
    signals: ["עייפות שלא עוברת עם קפה", "קושי להתניע בבוקר", "תחושת כבדות עד הצהריים"],
    routineSlugs: ["morning-glow", "travel-carry"],
    productSlugs: ["forever-bee-propolis", "atelier-mineral-mist"],
    accent: "#C4A44A",
  },
  {
    slug: "digestion",
    name: "עיכול",
    mood: "כשהבטן לא שקטה ואתה צריך להרגיש קל שוב",
    introduction:
      "הבטן מדברת — ואנחנו מקשיבים. מוצרים שעוזרים לגוף לנקות, להירגע ולחזור לקצב שלו.",
    synopsis: "לאחרי אכילה כבדה, לתחילת שבוע חדש, למי שרוצה להרגיש קל יותר.",
    signals: ["נפיחות אחרי ארוחות", "תחושת כבדות כללית", "חוסר סדירות"],
    routineSlugs: ["inner-reset"],
    productSlugs: ["forever-aloe-gel", "forever-daily-fibre"],
    accent: "#7BA368",
  },
  {
    slug: "skin",
    name: "עור",
    mood: "כשהעור יבש ושום דבר לא באמת עוזר",
    introduction:
      "עור טוב מתחיל מבפנים. שילוב של שתייה, לחות ושגרה קבועה שנותן תוצאות שמרגישים בידיים.",
    synopsis: "ליובש שלא נגמר, לעור עמום, לעור שרוצה שקט, לא עוד מוצרים.",
    signals: ["יובש שחוזר כל חורף", "עור שנראה עייף", "שגרת עור שלא עושה מספיק"],
    routineSlugs: ["morning-glow", "evening-downshift"],
    productSlugs: ["forever-aloe-gel", "atelier-calm-infusion", "forever-radiance-cream"],
    accent: "#D4A088",
  },
  {
    slug: "balance",
    name: "איזון",
    mood: "כשהראש רץ והגוף צריך רגע של שקט באמצע",
    introduction:
      "לא תמיד צריך מוצר חדש. לפעמים צריך חמש דקות שקט באמצע הבלגן.",
    synopsis: "לימים שלא נגמרים.",
    signals: ["ראש עמוס מבוקר", "קשה לעצור לרגע", "מעבר חד בין משימות"],
    routineSlugs: ["evening-downshift", "travel-carry"],
    productSlugs: ["atelier-calm-infusion", "atelier-mineral-mist", "forever-bee-propolis"],
    accent: "#8B9EB0",
  },
  {
    slug: "reset",
    name: "איפוס",
    mood: "בא לך להתחיל שבוע אחרת.",
    introduction:
      "Reset לא חייב להיות דרמטי. שלושה ימים, כמה מוצרים פשוטים, ותחושה של סדר שחוזר לגוף.",
    synopsis: "התחלה מחדש בלי לזרוק הכל. רק לעצור, לנקות, ולבנות מחדש.",
    signals: ["אחרי חופשה עמוסה", "אחרי תקופה לחוצה", "בוקר שרוצים להתחיל נקי"],
    routineSlugs: ["inner-reset", "evening-downshift"],
    productSlugs: ["forever-aloe-gel", "forever-daily-fibre", "atelier-mineral-mist"],
    accent: "#B09880",
  },
];

export const routines: Routine[] = [
  {
    slug: "morning-glow",
    name: "Morning Glow",
    timeOfDay: "morning",
    synopsis: "שבע דקות. בוקר אחר.",
    description:
      "לא צריך שעה של טקסים. כוס אלוורה, קפסולה אחת ומיסט על הפנים — וכבר יצאת מהבית עם תחושה אחרת.",
    heroQuote: "שבע דקות. לא מטלה, לא טקס — פשוט תחילת יום שנותנת לגוף מקום.",
    pace: "7 דקות",
    goalSlugs: ["energy", "skin"],
    productSlugs: ["forever-aloe-gel", "atelier-mineral-mist", "forever-bee-propolis"],
    steps: [
      {
        title: "כוס ראשונה",
        body: "30 מ\"ל אלוורה עם כוס מים. על קיבה ריקה, לפני הקפה. הגוף מרגיש את זה מיד.",
        productSlugs: ["forever-aloe-gel"],
      },
      {
        title: "קפסולה אחת",
        body: "Bee Propolis — תמיכה שמצטברת עם הזמן. לבלוע עם כוס המים, בלי לחשוב על זה יותר מדי.",
        productSlugs: ["forever-bee-propolis"],
      },
      {
        title: "מיסט מהיר",
        body: "ריסוס אחד על הפנים או הצוואר. תחושת רעננות שנשארת איתך עד הצהריים.",
        productSlugs: ["atelier-mineral-mist"],
      },
    ],
  },
  {
    slug: "evening-downshift",
    name: "Evening Downshift",
    timeOfDay: "evening",
    synopsis: "לסגור את היום בשקט. בלי מסכים.",
    description:
      "חליטה חמה, קרם על הפנים, ורגע של שקט ליד החלון. המעבר מהיום לערב לא קורה מעצמו — צריך לתת לו מקום.",
    heroQuote: "12 דקות בין היום לערב. זה כל מה שהגוף צריך כדי לשנות כיוון.",
    pace: "12 דקות",
    goalSlugs: ["skin", "balance", "reset"],
    productSlugs: ["atelier-calm-infusion", "forever-radiance-cream", "atelier-mineral-mist"],
    steps: [
      {
        title: "חליטה חמה",
        body: "קמומיל, מליסה ולבנדר. חמש דקות חליטה, הריח כבר עושה חצי מהעבודה.",
        productSlugs: ["atelier-calm-infusion"],
      },
      {
        title: "שכבת לחות",
        body: "קרם עשיר על עור נקי. לא טיפול פנים שלם — פשוט מגע שאומר לגוף שהיום נגמר.",
        productSlugs: ["forever-radiance-cream"],
      },
      {
        title: "נשימה אחרונה",
        body: "ריסוס מיסט קל ודקה ליד חלון פתוח. לא חובה, אבל שווה כל שנייה.",
        productSlugs: ["atelier-mineral-mist"],
      },
    ],
  },
  {
    slug: "inner-reset",
    name: "Inner Reset",
    timeOfDay: "midday",
    synopsis: "חמש דקות באמצע היום. הבטן נרגעת.",
    description:
      "כוס אלוורה ושקיק סיבים. זה הכל. Reset לא חייב להיות שבוע של דיאטה — לפעמים מספיק בוקר אחד טוב.",
    heroQuote: "Reset טוב מרגיש כמו נשימה עמוקה, לא כמו עונש.",
    pace: "5 דקות",
    goalSlugs: ["digestion", "reset"],
    productSlugs: ["forever-aloe-gel", "forever-daily-fibre"],
    steps: [
      {
        title: "אלוורה על ריק",
        body: "כוס אחת, בוקר, לפני הכל. הג'ל קר וצלול — הגוף מרגיש את הניקיון מהלגימה הראשונה.",
        productSlugs: ["forever-aloe-gel"],
      },
      {
        title: "סיבים לסדר",
        body: "שקיק אחד של Daily Fibre עם מים. קל לבליעה, בלי טעם חזק, ותוך יום-יומיים מרגישים את ההבדל.",
        productSlugs: ["forever-daily-fibre"],
      },
    ],
  },
  {
    slug: "travel-carry",
    name: "Travel Carry",
    timeOfDay: "travel",
    synopsis: "שני מוצרים בתיק ושגרה שעובדת בכל מקום.",
    description:
      "טיסה, יום בחוץ, מלון — לא משנה. מיסט קטן וקפסולות שנכנסים לכל תיק ולא צריכים מטבח.",
    heroQuote: "שגרה שנכנסת לתיק גב. בלי תירוצים, בלי ויתורים.",
    pace: "2 דקות להרכבה",
    goalSlugs: ["energy", "balance"],
    productSlugs: ["atelier-mineral-mist", "forever-bee-propolis"],
    steps: [
      {
        title: "מיסט לדרך",
        body: "80 מ\"ל שנכנסים למזוודת יד. ריסוס אחד בשדה התעופה, אחד בנחיתה — ואתה בנאדם אחר.",
        productSlugs: ["atelier-mineral-mist"],
      },
      {
        title: "קפסולות ליציבות",
        body: "Bee Propolis לא צריך מים, לא צריך מקרר. פשוט לזרוק לתיק ולהמשיך.",
        productSlugs: ["forever-bee-propolis"],
      },
    ],
  },
];

export const products: Product[] = [
  {
    slug: "forever-aloe-gel",
    name: "Aloe Vera Gel",
    brandSlug: "forever",
    subtitle: "ג'ל אלוורה טהור. קר, צלול, טעם נקי מהלגימה הראשונה.",
    description:
      "ליטר של ג'ל אלוורה שנשאר בסיסי בכוונה. בלי תוספות מיותרות, בלי ריח חזק — פשוט אלוורה באיכות שמרגישים בגוף מהיום הראשון.",
    whyItLivesHere:
      "המוצר הכי בסיסי וגם הכי חשוב. מתחילים איתו בבוקר, חוזרים אליו ב-reset, ומשלבים אותו עם כמעט כל שגרה באתר.",
    price: 119,
    compareAtPrice: 132,
    currency: "ILS",
    availability: "in-stock",
    format: "משקה",
    size: "1L",
    image: "/images/Aloveragel1.jpg",
    glowNote: "קר, צלול, מרגיע",
    ingredients: ["אלוורה", "ויטמין C", "מייצבים טבעיים"],
    benefits: ["קלילות שמרגישים בבטן מהיום הראשון", "בסיס לכל שגרת בוקר", "פשוט לשלב עם מוצרים אחרים"],
    usage: ["30-60 מ\"ל בבוקר על קיבה ריקה", "אפשר לערבב עם מים או מיץ", "לשמור בקירור אחרי פתיחה"],
    goalSlugs: ["digestion", "skin", "reset"],
    routineSlugs: ["morning-glow", "inner-reset"],
    pairings: ["forever-daily-fibre", "atelier-mineral-mist"],
    faqs: [
      {
        question: "מה הטעם?",
        answer: "קצת ציטרוסי, קצת צמחי. לא חזק — רוב האנשים מתרגלים אחרי יום-יומיים.",
      },
      {
        question: "בשביל מה זה טוב?",
        answer: "בעיקר עיכול, הרגשה כללית של קלילות, ובסיס טוב לשגרה יומית.",
      },
    ],
    palette: {
      from: "#C5D4AA",
      mid: "#E8E4D4",
      to: "#F0EDE4",
      accent: "#7BA368",
    },
    shopifyVariantId: "gid://shopify/ProductVariant/1001",
  },
  {
    slug: "forever-daily-fibre",
    name: "Daily Fibre",
    brandSlug: "forever",
    subtitle: "שקיק אחד ביום. תוך כמה ימים הבטן פשוט עובדת יותר טוב.",
    description:
      "30 שקיקים בקופסה, אחד ליום. מתמוסס במים, בלי טעם שמפריע, ותוך כמה ימים הבטן מתחילה לעבוד אחרת.",
    whyItLivesHere:
      "השותף הקבוע של האלוורה. ביחד הם שגרת reset שלמה — בוקר אחד, שני מוצרים, ותחושה של סדר פנימי.",
    price: 149,
    compareAtPrice: 165,
    currency: "ILS",
    availability: "low-stock",
    format: "סיבים",
    size: "30 שקיקים",
    image: "/images/Dailyfibre1.jpg",
    glowNote: "סדר, עקביות, קלילות",
    ingredients: ["תערובת סיבים", "שיבולת שועל", "תמיכה פרה-ביוטית"],
    benefits: ["תחושת קלילות תוך ימים", "פורמט שקל לקחת לכל מקום", "משלים את האלוורה בצורה מושלמת"],
    usage: ["שקיק אחד ביום עם כוס מים", "הכי טוב בבוקר", "אפשר לשלב עם כוס האלוורה"],
    goalSlugs: ["digestion", "reset"],
    routineSlugs: ["inner-reset"],
    pairings: ["forever-aloe-gel"],
    faqs: [
      {
        question: "מרגישים משהו?",
        answer: "אחרי שלושה-ארבעה ימים רוב האנשים מרגישים שהבטן רגועה יותר ויש סדירות.",
      },
      {
        question: "חייבים לקחת עם אלוורה?",
        answer: "לא חייבים, אבל ביחד זה עובד הכי טוב. הם משלימים אחד את השני.",
      },
    ],
    palette: {
      from: "#B8C4A0",
      mid: "#D4CDB8",
      to: "#E8E2D4",
      accent: "#8C9A72",
    },
    shopifyVariantId: "gid://shopify/ProductVariant/1002",
  },
  {
    slug: "forever-bee-propolis",
    name: "Bee Propolis",
    brandSlug: "forever",
    subtitle: "קפסולות פרופוליס. חיזוק קטן שעושה את שלו.",
    description:
      "90 קפסולות של פרופוליס דבורים — חומר טבעי שבני אדם משתמשים בו כבר אלפי שנים. לבלוע עם מים, פעם ביום, ולתת לגוף לעשות את שלו.",
    whyItLivesHere:
      "המוצר שהכי קל לקחת לכל מקום. נכנס לתיק, לא צריך קירור, ועובד ברקע בלי שצריך לחשוב על זה.",
    price: 179,
    currency: "ILS",
    availability: "in-stock",
    format: "קפסולות",
    size: "90 קפסולות",
    image: "/images/Beepropolis1.jpg",
    glowNote: "חוסן, יציבות, נוכחות",
    ingredients: ["פרופוליס", "ג׳לטין צמחי", "מינרלים תומכים"],
    benefits: ["תמיכה טבעית במערכת החיסון", "קל לנשיאה — בתיק, במזוודה, בכיס", "לא דורש הכנה או שגרה מסובכת"],
    usage: ["לפי ההוראות שעל האריזה", "הכי נוח לקחת עם ארוחת בוקר", "לשמור במקום קריר ויבש"],
    goalSlugs: ["energy", "balance"],
    routineSlugs: ["morning-glow", "travel-carry"],
    pairings: ["atelier-mineral-mist", "forever-aloe-gel"],
    faqs: [
      {
        question: "מתי מרגישים הבדל?",
        answer: "פרופוליס עובד בצורה מצטברת. אחרי שבועיים-שלושה רוב האנשים מרגישים יותר יציבות.",
      },
      {
        question: "אפשר לקחת בנסיעות?",
        answer: "בדיוק בשביל זה. לא צריך קירור, לא תופס מקום, ולא צריך מים אם אין.",
      },
    ],
    palette: {
      from: "#D4B896",
      mid: "#E4D5BC",
      to: "#EDE7DA",
      accent: "#C4A44A",
    },
    shopifyVariantId: "gid://shopify/ProductVariant/1003",
  },
  {
    slug: "forever-radiance-cream",
    name: "Radiance Cream",
    brandSlug: "forever",
    subtitle: "קרם שלא נשאר על הפנים. בבוקר העור עדיין רך.",
    description:
      "קרם שנכנס לעור בלי לשבת על השטח. טקסטורה עשירה שלא שומנית, ריח עדין, ותחושה של לחות אמיתית שנשארת עד הבוקר.",
    whyItLivesHere:
      "הנקודה שבה הגוף מבחוץ פוגש את השגרה מבפנים. אחרי חליטה ואלוורה — שכבת מגע שסוגרת את היום.",
    price: 209,
    compareAtPrice: 228,
    currency: "ILS",
    availability: "in-stock",
    format: "טיפוח",
    size: "50 מ״ל",
    image: "/images/Radiancecream1.jpg",
    glowNote: "מגע, לחות, שקט",
    ingredients: ["אלוורה", "שמנים בוטניים", "לחות תומכת"],
    benefits: ["לחות עמוקה שנשארת לשעות", "טקסטורה עשירה בלי תחושה שומנית", "ריח עדין שלא מפריע"],
    usage: ["למרוח על עור נקי בערב", "כמות של אגוז קטן מספיקה לכל הפנים", "אפשר להוסיף אחרי ריסוס מיסט"],
    goalSlugs: ["skin"],
    routineSlugs: ["evening-downshift"],
    pairings: ["atelier-mineral-mist", "atelier-calm-infusion"],
    faqs: [
      {
        question: "מתאים גם ליום?",
        answer: "אפשר, אבל הוא עשיר — לערב הוא מושלם כי העור עובד בזמן שאתה ישן.",
      },
      {
        question: "איך המרקם?",
        answer: "עשיר אבל נספג מהר. לא נשאר שומני על הכרית.",
      },
    ],
    palette: {
      from: "#D4A8A0",
      mid: "#E4D0C8",
      to: "#F0E8E4",
      accent: "#B8847A",
    },
    shopifyVariantId: "gid://shopify/ProductVariant/1004",
  },
  {
    slug: "atelier-calm-infusion",
    name: "Calm Infusion",
    brandSlug: "alowvera-atelier",
    subtitle: "חליטה של קמומיל, מליסה ולבנדר. חמש דקות לערב שונה.",
    description:
      "18 שקיקי חליטה שנולדו לרגע אחד מאוד ספציפי: אתה חוזר הביתה, שם קומקום, ומחליט שהיום נגמר כאן. הריח עולה מהכוס עוד לפני הלגימה הראשונה.",
    whyItLivesHere:
      "כי שגרת ערב טובה לא מתחילה בקרם — היא מתחילה ברגע שאתה מאט. החליטה היא האות שהגוף מקבל.",
    price: 89,
    currency: "ILS",
    availability: "in-stock",
    format: "חליטה",
    size: "18 שקיקים",
    image: "/images/Calminfusion1.jpg",
    glowNote: "חום, ריח, האטה",
    ingredients: ["קמומיל", "מליסה", "לבנדר", "קליפת הדר"],
    benefits: ["ריח שמרגיע עוד לפני השתייה", "פורמט שקיק — קל ומהיר", "משלים שגרת ערב עם הקרם והמיסט"],
    usage: ["לחלוט 5-7 דקות במים רותחים", "לשתות בלי סוכר — הטעם עדין ומלא בעצמו", "הכי טוב שעה לפני שינה"],
    goalSlugs: ["skin", "balance"],
    routineSlugs: ["evening-downshift"],
    pairings: ["forever-radiance-cream", "atelier-mineral-mist"],
    faqs: [
      {
        question: "יש בזה קפאין?",
        answer: "אפס. קמומיל, מליסה ולבנדר — הכל בכיוון ההפוך.",
      },
      {
        question: "בשביל מה זה טוב?",
        answer: "לרגע המעבר בין היום לערב. אם אתה מסוג האנשים שקשה להם לעצור — זה בשבילך.",
      },
    ],
    palette: {
      from: "#C8C0B0",
      mid: "#DDD8CC",
      to: "#EBE8E0",
      accent: "#B09880",
    },
  },
  {
    slug: "atelier-mineral-mist",
    name: "Mineral Mist",
    brandSlug: "alowvera-atelier",
    subtitle: "מיסט מינרלי לפנים ולצוואר. רענון מהיר. הפנים מודות.",
    description:
      "בקבוק קטן שנכנס לכל מקום — תיק יד, ארנק, כיס מעיל. ריסוס אחד נותן תחושת רעננות שמפתיעה כל פעם מחדש. מים מינרליים, אלוורה ותמצית מלפפון.",
    whyItLivesHere:
      "המוצר הכי גמיש באתר. עובד בבוקר אחרי שגרת פנים, בערב לפני קרם, ובאמצע היום כשצריך רגע של אוויר.",
    price: 129,
    compareAtPrice: 144,
    currency: "ILS",
    availability: "in-stock",
    format: "מיסט",
    size: "80 מ״ל",
    image: "/images/MineralMist1.jpg",
    glowNote: "רעננות, קלילות, ביניים",
    ingredients: ["מים מינרליים", "אלוורה", "תמצית מלפפון", "מינרלים עדינים"],
    benefits: ["תחושת רעננות מיידית", "גודל מושלם לתיק ולנסיעות", "עובד בכל שלב של היום"],
    usage: ["לרסס ממרחק 15-20 ס\"מ", "על פנים, צוואר או מחשוף", "לשימוש חוזר לאורך כל היום"],
    goalSlugs: ["energy", "balance", "reset"],
    routineSlugs: ["morning-glow", "evening-downshift", "travel-carry"],
    pairings: ["forever-bee-propolis", "forever-radiance-cream"],
    faqs: [
      {
        question: "כמה זה מחזיק?",
        answer: "בשימוש יומי — בערך חודש. בשימוש לנסיעות — שניים-שלושה חודשים.",
      },
      {
        question: "אפשר מעל איפור?",
        answer: "כן, זה ריסוס עדין שלא מורח שום דבר.",
      },
    ],
    palette: {
      from: "#A8B8C4",
      mid: "#D0D4D8",
      to: "#E4E4E0",
      accent: "#8B9EB0",
    },
  },
  {
    slug: "forever-bright-toothgel",
    name: "Forever Bright Toothgel",
    brandSlug: "forever",
    subtitle: "ג'ל שיניים קריר ונקי. הפה מרגיש חלק גם הרבה אחרי.",
    description:
      "שפופרת אחת שנכנסת בקלות לבוקר ולתיק. הטעם מנטי אבל לא צורב, והתחושה נקייה בלי מתיקות כבדה.",
    whyItLivesHere:
      "זה מסוג המוצרים הקטנים שמשנים את הטון של תחילת היום. מהיר, נקי, ולא דורש לחשוב עליו יותר מדי.",
    price: 49,
    currency: "ILS",
    availability: "in-stock",
    format: "ג׳ל",
    size: "130 גרם",
    image: "/images/Foreverbrightoothgel1.jpg",
    glowNote: "קרירות, ניקיון, בוקר",
    ingredients: ["אלוורה", "פרופוליס", "מנטה עדינה"],
    benefits: ["תחושת ניקיון קרובה לעור ולפה", "טעם נקי שלא מכביד", "נוח לשימוש יומי ולקחת לדרך"],
    usage: ["לצחצח כרגיל בוקר וערב", "כמות קטנה מספיקה", "להשאיר קרוב לכיור או בתיק"],
    goalSlugs: ["reset", "balance"],
    routineSlugs: ["morning-glow", "travel-carry"],
    pairings: ["forever-aloe-ever-shield", "forever-aloe-lips"],
    faqs: [
      {
        question: "איך הטעם?",
        answer: "מנטה נקייה ועדינה. קריר, לא חריף מדי, ולא משאיר מתיקות ארוכה.",
      },
      {
        question: "זה טוב גם לנסיעות?",
        answer: "כן. זו בדיוק אחת הסיבות שהוא נכנס לכאן. קטן, פשוט, ותמיד שימושי.",
      },
    ],
    palette: {
      from: "#C8C0B0",
      mid: "#DDD8CC",
      to: "#EBE8E0",
      accent: "#8B9EB0",
    },
  },
  {
    slug: "forever-aloe-ever-shield",
    name: "Aloe Ever-Shield Deodorant",
    brandSlug: "forever",
    subtitle: "סטיק יבש ונקי. יושב קרוב לעור בלי ריח כבד.",
    description:
      "דאודורנט שמרגיש כמעט בלתי מורגש. נמרח חלק, מתייבש מהר, ולא מתנגש עם בושם או עם הסבון של הבוקר.",
    whyItLivesHere:
      "מוצר שקט. לא כזה שחושבים עליו הרבה, אלא כזה ששמח לגלות שהוא פשוט עובד בכל יום מחדש.",
    price: 69,
    currency: "ILS",
    availability: "in-stock",
    format: "סטיק",
    size: "92 גרם",
    image: "/images/EvershieldDeo1.jpg",
    glowNote: "יובש, ניקיון, קלות",
    ingredients: ["אלוורה", "מלחים עדינים", "בסיס נטול אלכוהול"],
    benefits: ["מרגיש קל על העור", "לא משאיר ריח חזק", "עובד טוב גם ביום ארוך וגם בנסיעות"],
    usage: ["למרוח על עור נקי ויבש", "שכבה אחת מספיקה", "נוח לשים אחרי מקלחת או לפני יציאה"],
    goalSlugs: ["balance", "energy"],
    routineSlugs: ["morning-glow", "travel-carry"],
    pairings: ["forever-bright-toothgel", "atelier-mineral-mist"],
    faqs: [
      {
        question: "הוא דביק?",
        answer: "לא. הוא מחליק בהתחלה ואז מתייבש די מהר בלי שכבה כבדה.",
      },
      {
        question: "יש לו ריח חזק?",
        answer: "לא. הריח נקי ועדין, כזה שלא מתיישב על כל שאר היום.",
      },
    ],
    palette: {
      from: "#C8C0B0",
      mid: "#DDD8CC",
      to: "#EBE8E0",
      accent: "#7BA368",
    },
  },
  {
    slug: "forever-aloe-lips",
    name: "Aloe Lips",
    brandSlug: "forever",
    subtitle: "שפתון קטן ושקט. יובש נרגע בלי ברק כבד.",
    description:
      "הוא קטן מספיק לכל כיס, אבל נשאר שימושי לאורך כל היום. המרקם רך, לא דביק, ומחזיר לשפתיים תחושה חלקה כמעט מיד.",
    whyItLivesHere:
      "זה אחד הדברים שנכנסים לתיק ונשארים שם קבוע. לא מוצר דרמטי. פשוט אחד שלא רוצים להיתפס בלעדיו.",
    price: 39,
    currency: "ILS",
    availability: "in-stock",
    format: "שפתון",
    size: "4.25 גרם",
    image: "/images/AloeLips1.jpg",
    glowNote: "רכות, כיס, יומיום",
    ingredients: ["אלוורה", "שמן חוחובה", "שעוות דבורים"],
    benefits: ["מרכך שפתיים יבשות מהר", "לא מרגיש שעווה כבדה", "נוח ליד המיטה, בתיק ובנסיעות"],
    usage: ["למרוח מתי שהשפתיים מרגישות מתוחות", "שכבה דקה מספיקה", "טוב במיוחד ברוח, במזגן ובנסיעה"],
    goalSlugs: ["skin", "balance"],
    routineSlugs: ["travel-carry", "evening-downshift"],
    pairings: ["forever-radiance-cream", "forever-bright-toothgel"],
    faqs: [
      {
        question: "הוא מבריק?",
        answer: "רק מעט. יותר רכות ופחות מראה מבריק.",
      },
      {
        question: "כמה זמן הוא נשאר?",
        answer: "כמה שעות טובות. בדרך כלל צריך חידוש אחרי אוכל או רוח חזקה.",
      },
    ],
    palette: {
      from: "#C8C0B0",
      mid: "#DDD8CC",
      to: "#EBE8E0",
      accent: "#D4A088",
    },
  },
];

export const bundles: Bundle[] = [
  {
    slug: "reset-week-kit",
    name: "Reset Week Kit",
    synopsis: "שלושה בקרים. אחרי זה קל יותר.",
    description:
      "אלוורה לבוקר, סיבים לסדר ומיסט לרעננות. הכל בקופסה אחת — פשוט להתחיל ולתת לגוף שבוע של ניקוי רגוע.",
    productSlugs: ["forever-aloe-gel", "forever-daily-fibre", "atelier-mineral-mist"],
    benefitBullets: ["שלושה בקרים פשוטים", "שלושה מוצרים שעובדים ביחד", "מתנה מצוינת למי שצריך התחלה מחדש"],
    price: 359,
    compareAtPrice: 397,
    palette: {
      from: "#E8DDD0",
      to: "#D4C4B0",
      accent: "#314536",
    },
  },
  {
    slug: "evening-soft-landing",
    name: "Evening Soft Landing",
    synopsis: "ערב שלם בקופסה. חליטה, קרם, ושקט.",
    description:
      "למי שרוצה ערב אחר. החליטה מאטה, הקרם מלטף, והמיסט סוגר. שלושה מוצרים שהופכים חזרה הביתה לרגע שמחכים לו.",
    productSlugs: ["atelier-calm-infusion", "forever-radiance-cream", "atelier-mineral-mist"],
    benefitBullets: ["שגרת ערב שלמה בלי לחשוב", "מתאים כמתנה לכל מי שצריך לנשום", "שלושה מותגים, חוויה אחת"],
    price: 389,
    compareAtPrice: 426,
    palette: {
      from: "#D0D8DC",
      to: "#B8C0C8",
      accent: "#452A20",
    },
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "why-wellness-sites-feel-the-same",
    title: "למה כל אתרי הבריאות נראים אותו דבר (ומה עשינו אחרת)",
    category: "מאחורי הקלעים",
    excerpt:
      "בנינו את Alowvera אחרת: לא קטגוריות ומבצעים, אלא שגרות, צרכים ומותגים שעובדים ביחד.",
    readTime: "4 דקות",
    relatedGoalSlugs: ["balance", "reset"],
    sections: [
      {
        heading: "הבעיה לא בצבעים",
        body: "כשאתר מתחיל ממדף מוצרים ובאנרים של מבצעים, לא משנה איזה פונט תבחר — התחושה תהיה של עוד חנות. התחלנו מהשאלה הפוכה: מה אתה מרגיש, ומה יעזור לך עכשיו.",
      },
      {
        heading: "מכירה שלא צועקת",
        body: "כל המוצרים באתר זמינים לקנייה. אבל במקום לצעוק 'קנה עכשיו', אנחנו מראים לך למה המוצר קיים, מתי להשתמש בו, ועם מה הוא עובד הכי טוב. המעבר לקנייה קורה כשזה נכון — לא כשהבאנר רוצה.",
      },
    ],
  },
  {
    slug: "building-a-ritual-sheet",
    title: "מה זה Ritual Sheet ולמה כל מוצר באתר נראה אחרת",
    category: "מוצרים",
    excerpt:
      "עמוד מוצר שלא רק מוכר — אלא מסביר למה המוצר כאן, מתי להשתמש בו, ועם מה הוא עובד.",
    readTime: "5 דקות",
    relatedGoalSlugs: ["skin", "energy"],
    sections: [
      {
        heading: "לא מפרט — סיפור",
        body: "הדבר הראשון שתראה בעמוד מוצר הוא לא רשימת מרכיבים. זה הרגע שבו המוצר הכי מתאים — הבוקר שבו אתה צריך אותו, השגרה שהוא חלק ממנה, ההרגשה שהוא נותן.",
      },
      {
        heading: "הקשר יוצר אמון",
        body: "כשמוצר מחובר לשגרה, לצורך ולמוצרים שעובדים איתו — לא צריך למכור אותו. הוא פשוט הגיוני. וזה הופך את הקנייה להחלטה קלה.",
      },
    ],
  },
  {
    slug: "the-brand-after-forever",
    title: "למה באתר יש יותר ממותג אחד (ולמה זה חשוב לך)",
    category: "מותגים",
    excerpt:
      "Forever הוא הבסיס, אבל Alowvera נבנה כדי לגדול. ככה אנחנו מוסיפים מותגים בלי לאבד את החוויה.",
    readTime: "6 דקות",
    relatedGoalSlugs: ["reset"],
    sections: [
      {
        heading: "מותג הוא חלק, לא הכל",
        body: "אתרים שבנויים סביב מותג אחד נתקעים ברגע שרוצים להוסיף משהו. אנחנו בנינו את Alowvera ככה שכל מותג חדש נכנס פנימה בלי לשבור שום דבר.",
      },
      {
        heading: "מה זה אומר בשבילך",
        body: "זה אומר שבהמשך תמצא כאן עוד מותגים, עוד מוצרים ועוד שגרות — וכולם ידברו באותה שפה ויעבדו ביחד. שום דבר לא ייראה מוצמד או זרוק לפינה.",
      },
    ],
  },
];

export const editorialModules: EditorialModule[] = [
  {
    id: "system-note",
    title: "נבנה כדי לגדול",
    body: "מה שאתה רואה עכשיו זה רק ההתחלה. המערכת מוכנה למותגים חדשים, שפות נוספות ומוצרים שעוד לא חלמנו עליהם — הכל בתוך אותה חוויה.",
    tone: "earth",
  },
  {
    id: "motion-note",
    title: "עיצוב שנושם, לא צורח",
    body: "כל אנימציה באתר קיימת כי היא עוזרת, לא כי היא מרשימה. תנועה רגועה, מעברים עדינים, ותחושה שנעים להישאר בה.",
    tone: "light",
  },
];
