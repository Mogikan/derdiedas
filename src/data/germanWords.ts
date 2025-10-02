// src/data/germanWords.ts

export interface GermanWord {
  word: string;
  article: 'der' | 'die' | 'das';
  translations: Record<string, string>; // ← ключевое изменение
  ruleId: RuleId;
  isException: boolean;
  exceptionTo?: RuleId;
}

export type RuleId =
  // === Feminine (die) ===
  | 'endings-heit-keit'
  | 'endings-schaft'
  | 'endings-ung'
  | 'endings-tion'
  | 'endings-tät'
  | 'endings-ik'
  | 'endings-ur'
  | 'endings-ei'
  | 'endings-ie'
  | 'endings-enz-anz'
  | 'endings-age-ade'
  | 'endings-ion'
  | 'endings-e'
  | 'endings-t'
  // === Neuter (das) ===
  | 'endings-chen-lein'
  | 'endings-um'
  | 'endings-nis'
  | 'endings-o'
  | 'endings-ment'
  | 'endings-tum'
  | 'substantivized-infinitives'
  | 'substantivized-adjectives'
  | 'colors-as-nouns'
  | 'languages'
  | 'chemical-elements'
  | 'fractions'
  | 'prefix-ge'
  // === Masculine (der) ===
  | 'endings-ling'
  | 'endings-or'
  | 'endings-er'
  | 'endings-ist'
  | 'endings-ant-ent'
  | 'endings-ismus'
  | 'endings-loge-soph'
  | 'verb-derived-no-suffix'
  // === Semantic rules ===
  | 'days-months-seasons'
  | 'weather-phenomena'
  | 'alcoholic-drinks'
  | 'cardinal-directions'
  | 'car-brands'
  | 'motorcycle-brands'
  | 'mountains'
  | 'rivers-inside-germany'
  | 'rivers-outside-germany'
  | 'flowers-fruits-vegetables'
  | 'male-persons'
  | 'female-persons'
  | 'ships-airplanes'
  | 'cardinal-numbers'
  // === Exceptions ===
  | 'exceptions-die'
  | 'exceptions-das'
  | 'exceptions-der';

  // Список всех правил (для фильтрации и отображения)
export const ALL_RULE_IDS: RuleId[] = [
  // Женский род
  'endings-heit-keit',
  'endings-schaft',
  'endings-ung',
  'endings-tion',
  'endings-tät',
  'endings-ik',
  'endings-ur',
  'endings-ei',
  'endings-ie',
  'endings-enz-anz',
  'endings-age-ade',
  'endings-ion',
  'endings-e',
  'endings-t',
  // Средний род
  'endings-chen-lein',
  'endings-um',
  'endings-nis',
  'endings-o',
  'endings-ment',
  'endings-tum',
  'substantivized-infinitives',
  'substantivized-adjectives',
  'colors-as-nouns',
  'languages',
  'chemical-elements',
  'fractions',
  'prefix-ge',
  // Мужской род
  'endings-ling',
  'endings-or',
  'endings-er',
  'endings-ist',
  'endings-ant-ent',
  'endings-ismus',
  'endings-loge-soph',
  'verb-derived-no-suffix',
  // Семантика
  'days-months-seasons',
  'weather-phenomena',
  'alcoholic-drinks',
  'cardinal-directions',
  'car-brands',
  'motorcycle-brands',
  'mountains',
  'rivers-inside-germany',
  'rivers-outside-germany',
  'flowers-fruits-vegetables',
  'male-persons',
  'female-persons',
  'ships-airplanes',
  'cardinal-numbers',
  // Исключения
  'exceptions-die',
  'exceptions-das',
  'exceptions-der',
];

// Классификация правил по роду (для RulesList)
export const FEMALE_RULES = new Set<RuleId>([
  'endings-heit-keit',
  'endings-schaft',
  'endings-ung',
  'endings-tion',
  'endings-tät',
  'endings-ik',
  'endings-ur',
  'endings-ei',
  'endings-ie',
  'endings-enz-anz',
  'endings-age-ade',
  'endings-ion',
  'endings-e',
  'endings-t',
  'exceptions-die',
  'female-persons',
  'flowers-fruits-vegetables',
  'motorcycle-brands',
  'rivers-inside-germany',
  'rivers-outside-germany',
  'ships-airplanes',
  'cardinal-numbers',
]);

export const NEUTRAL_RULES = new Set<RuleId>([
  'endings-chen-lein',
  'endings-um',
  'endings-nis',
  'endings-o',
  'endings-ment',
  'endings-tum',
  'substantivized-infinitives',
  'substantivized-adjectives',
  'colors-as-nouns',
  'languages',
  'chemical-elements',
  'fractions',
  'prefix-ge',
  'exceptions-das',
]);

export const MALE_RULES = new Set<RuleId>([
  'endings-ling',
  'endings-or',
  'endings-er',
  'endings-ist',
  'endings-ant-ent',
  'endings-ismus',
  'endings-loge-soph',
  'verb-derived-no-suffix',
  'days-months-seasons',
  'weather-phenomena',
  'alcoholic-drinks',
  'cardinal-directions',
  'car-brands',
  'mountains',
  'male-persons',
  'exceptions-der',
]);


const GERMAN_WORDS_DATA: GermanWord[] = [
  // === FEMININE (die) ===
  // -heit, -keit
  {
    word: "Freiheit",
    article: "die",
    translations: {
      en: "freedom",
      ru: "свобода",
      de: "Freiheit",
      es: "libertad",
      fr: "liberté",
      ja: "自由",
      zh: "自由",
      pt: "liberdade",
      ko: "자유",
      ar: "حرية",
      hi: "स्वतंत्रता"
    },
    ruleId: 'endings-heit-keit',
    isException: false
  },
  {
    word: "Gesundheit",
    article: "die",
    translations: {
      en: "health",
      ru: "здоровье",
      de: "Gesundheit",
      es: "salud",
      fr: "santé",
      ja: "健康",
      zh: "健康",
      pt: "saúde",
      ko: "건강",
      ar: "صحة",
      hi: "स्वास्थ्य"
    },
    ruleId: 'endings-heit-keit',
    isException: false
  },
  {
    word: "Möglichkeit",
    article: "die",
    translations: {
      en: "possibility",
      ru: "возможность",
      de: "Möglichkeit",
      es: "posibilidad",
      fr: "possibilité",
      ja: "可能性",
      zh: "可能性",
      pt: "possibilidade",
      ko: "가능성",
      ar: "إمكانية",
      hi: "संभावना"
    },
    ruleId: 'endings-heit-keit',
    isException: false
  },
  {
    word: "Schönheit",
    article: "die",
    translations: {
      en: "beauty",
      ru: "красота",
      de: "Schönheit",
      es: "belleza",
      fr: "beauté",
      ja: "美しさ",
      zh: "美丽",
      pt: "beleza",
      ko: "아름다움",
      ar: "جمال",
      hi: "सौंदर्य"
    },
    ruleId: 'endings-heit-keit',
    isException: false
  },
  {
    word: "Einsamkeit",
    article: "die",
    translations: {
      en: "loneliness",
      ru: "одиночество",
      de: "Einsamkeit",
      es: "soledad",
      fr: "solitude",
      ja: "孤独",
      zh: "孤独",
      pt: "solidão",
      ko: "고독",
      ar: "وحدة",
      hi: "अकेलापन"
    },
    ruleId: 'endings-heit-keit',
    isException: false
  },
  // -schaft
  {
    word: "Freundschaft",
    article: "die",
    translations: {
      en: "friendship",
      ru: "дружба",
      de: "Freundschaft",
      es: "amistad",
      fr: "amitié",
      ja: "友情",
      zh: "友谊",
      pt: "amizade",
      ko: "우정",
      ar: "صداقة",
      hi: "मित्रता"
    },
    ruleId: 'endings-schaft',
    isException: false
  },
  {
    word: "Wissenschaft",
    article: "die",
    translations: {
      en: "science",
      ru: "наука",
      de: "Wissenschaft",
      es: "ciencia",
      fr: "science",
      ja: "科学",
      zh: "科学",
      pt: "ciência",
      ko: "과학",
      ar: "علم",
      hi: "विज्ञान"
    },
    ruleId: 'endings-schaft',
    isException: false
  },
  {
    word: "Mannschaft",
    article: "die",
    translations: {
      en: "team",
      ru: "команда",
      de: "Mannschaft",
      es: "equipo",
      fr: "équipe",
      ja: "チーム",
      zh: "团队",
      pt: "equipe",
      ko: "팀",
      ar: "فريق",
      hi: "टीम"
    },
    ruleId: 'endings-schaft',
    isException: false
  },
  {
    word: "Gesellschaft",
    article: "die",
    translations: {
      en: "society",
      ru: "общество",
      de: "Gesellschaft",
      es: "sociedad",
      fr: "société",
      ja: "社会",
      zh: "社会",
      pt: "sociedade",
      ko: "사회",
      ar: "مجتمع",
      hi: "समाज"
    },
    ruleId: 'endings-schaft',
    isException: false
  },
  {
    word: "Belegschaft",
    article: "die",
    translations: {
      en: "staff",
      ru: "персонал",
      de: "Belegschaft",
      es: "personal",
      fr: "personnel",
      ja: "スタッフ",
      zh: "员工",
      pt: "equipe",
      ko: "직원",
      ar: "طاقم",
      hi: "कर्मचारी"
    },
    ruleId: 'endings-schaft',
    isException: false
  },
  // -ung
  {
    word: "Bildung",
    article: "die",
    translations: {
      en: "education",
      ru: "образование",
      de: "Bildung",
      es: "educación",
      fr: "éducation",
      ja: "教育",
      zh: "教育",
      pt: "educação",
      ko: "교육",
      ar: "تعليم",
      hi: "शिक्षा"
    },
    ruleId: 'endings-ung',
    isException: false
  },
  {
    word: "Zeitung",
    article: "die",
    translations: {
      en: "newspaper",
      ru: "газета",
      de: "Zeitung",
      es: "periódico",
      fr: "journal",
      ja: "新聞",
      zh: "报纸",
      pt: "jornal",
      ko: "신문",
      ar: "جريدة",
      hi: "अखबार"
    },
    ruleId: 'endings-ung',
    isException: false
  },
  {
    word: "Wohnung",
    article: "die",
    translations: {
      en: "apartment",
      ru: "квартира",
      de: "Wohnung",
      es: "apartamento",
      fr: "appartement",
      ja: "アパート",
      zh: "公寓",
      pt: "apartamento",
      ko: "아파트",
      ar: "شقة",
      hi: "अपार्टमेंट"
    },
    ruleId: 'endings-ung',
    isException: false
  },
  {
    word: "Meinung",
    article: "die",
    translations: {
      en: "opinion",
      ru: "мнение",
      de: "Meinung",
      es: "opinión",
      fr: "opinion",
      ja: "意見",
      zh: "意见",
      pt: "opinião",
      ko: "의견",
      ar: "رأي",
      hi: "राय"
    },
    ruleId: 'endings-ung',
    isException: false
  },
  {
    word: "Umleitung",
    article: "die",
    translations: {
      en: "detour",
      ru: "объезд",
      de: "Umleitung",
      es: "desvío",
      fr: "détour",
      ja: "迂回路",
      zh: "绕行",
      pt: "desvio",
      ko: "우회로",
      ar: "التفاف",
      hi: "मार्ग परिवर्तन"
    },
    ruleId: 'endings-ung',
    isException: false
  },
  // -tion
  {
    word: "Nation",
    article: "die",
    translations: {
      en: "nation",
      ru: "нация",
      de: "Nation",
      es: "nación",
      fr: "nation",
      ja: "国家",
      zh: "国家",
      pt: "nação",
      ko: "국가",
      ar: "أمة",
      hi: "राष्ट्र"
    },
    ruleId: 'endings-tion',
    isException: false
  },
  {
    word: "Revolution",
    article: "die",
    translations: {
      en: "revolution",
      ru: "революция",
      de: "Revolution",
      es: "revolución",
      fr: "révolution",
      ja: "革命",
      zh: "革命",
      pt: "revolução",
      ko: "혁명",
      ar: "ثورة",
      hi: "क्रांति"
    },
    ruleId: 'endings-tion',
    isException: false
  },
  {
    word: "Tradition",
    article: "die",
    translations: {
      en: "tradition",
      ru: "традиция",
      de: "Tradition",
      es: "tradición",
      fr: "tradition",
      ja: "伝統",
      zh: "传统",
      pt: "tradição",
      ko: "전통",
      ar: "تقليد",
      hi: "परंपरा"
    },
    ruleId: 'endings-tion',
    isException: false
  },
  {
    word: "Aktion",
    article: "die",
    translations: {
      en: "action",
      ru: "акция",
      de: "Aktion",
      es: "acción",
      fr: "action",
      ja: "行動",
      zh: "行动",
      pt: "ação",
      ko: "행동",
      ar: "عمل",
      hi: "कार्रवाई"
    },
    ruleId: 'endings-tion',
    isException: false
  },
  {
    word: "Funktion",
    article: "die",
    translations: {
      en: "function",
      ru: "функция",
      de: "Funktion",
      es: "función",
      fr: "fonction",
      ja: "機能",
      zh: "功能",
      pt: "função",
      ko: "기능",
      ar: "وظيفة",
      hi: "कार्य"
    },
    ruleId: 'endings-tion',
    isException: false
  },
    // -tät
  {
    word: "Universität",
    article: "die",
    translations: {
      en: "university",
      ru: "университет",
      de: "Universität",
      es: "universidad",
      fr: "université",
      ja: "大学",
      zh: "大学",
      pt: "universidade",
      ko: "대학교",
      ar: "جامعة",
      hi: "विश्वविद्यालय"
    },
    ruleId: 'endings-tät',
    isException: false
  },
  {
    word: "Qualität",
    article: "die",
    translations: {
      en: "quality",
      ru: "качество",
      de: "Qualität",
      es: "calidad",
      fr: "qualité",
      ja: "品質",
      zh: "质量",
      pt: "qualidade",
      ko: "품질",
      ar: "جودة",
      hi: "गुणवत्ता"
    },
    ruleId: 'endings-tät',
    isException: false
  },
  {
    word: "Realität",
    article: "die",
    translations: {
      en: "reality",
      ru: "реальность",
      de: "Realität",
      es: "realidad",
      fr: "réalité",
      ja: "現実",
      zh: "现实",
      pt: "realidade",
      ko: "현실",
      ar: "واقع",
      hi: "वास्तविकता"
    },
    ruleId: 'endings-tät',
    isException: false
  },
  {
    word: "Fakultät",
    article: "die",
    translations: {
      en: "faculty",
      ru: "факультет",
      de: "Fakultät",
      es: "facultad",
      fr: "faculté",
      ja: "学部",
      zh: "学院",
      pt: "faculdade",
      ko: "학부",
      ar: "كلية",
      hi: "संकाय"
    },
    ruleId: 'endings-tät',
    isException: false
  },
  {
    word: "Aktivität",
    article: "die",
    translations: {
      en: "activity",
      ru: "активность",
      de: "Aktivität",
      es: "actividad",
      fr: "activité",
      ja: "活動",
      zh: "活动",
      pt: "atividade",
      ko: "활동",
      ar: "نشاط",
      hi: "गतिविधि"
    },
    ruleId: 'endings-tät',
    isException: false
  },
  // -ik
  {
    word: "Musik",
    article: "die",
    translations: {
      en: "music",
      ru: "музыка",
      de: "Musik",
      es: "música",
      fr: "musique",
      ja: "音楽",
      zh: "音乐",
      pt: "música",
      ko: "음악",
      ar: "موسيقى",
      hi: "संगीत"
    },
    ruleId: 'endings-ik',
    isException: false
  },
  {
    word: "Physik",
    article: "die",
    translations: {
      en: "physics",
      ru: "физика",
      de: "Physik",
      es: "física",
      fr: "physique",
      ja: "物理学",
      zh: "物理",
      pt: "física",
      ko: "물리학",
      ar: "فيزياء",
      hi: "भौतिकी"
    },
    ruleId: 'endings-ik',
    isException: false
  },
  {
    word: "Politik",
    article: "die",
    translations: {
      en: "politics",
      ru: "политика",
      de: "Politik",
      es: "política",
      fr: "politique",
      ja: "政治",
      zh: "政治",
      pt: "política",
      ko: "정치",
      ar: "سياسة",
      hi: "राजनीति"
    },
    ruleId: 'endings-ik',
    isException: false
  },
  {
    word: "Logik",
    article: "die",
    translations: {
      en: "logic",
      ru: "логика",
      de: "Logik",
      es: "lógica",
      fr: "logique",
      ja: "論理",
      zh: "逻辑",
      pt: "lógica",
      ko: "논리",
      ar: "منطق",
      hi: "तर्क"
    },
    ruleId: 'endings-ik',
    isException: false
  },
  {
    word: "Technik",
    article: "die",
    translations: {
      en: "technology",
      ru: "техника",
      de: "Technik",
      es: "técnica",
      fr: "technique",
      ja: "技術",
      zh: "技术",
      pt: "técnica",
      ko: "기술",
      ar: "تقنية",
      hi: "तकनीक"
    },
    ruleId: 'endings-ik',
    isException: false
  },
  // -ur
  {
    word: "Natur",
    article: "die",
    translations: {
      en: "nature",
      ru: "природа",
      de: "Natur",
      es: "naturaleza",
      fr: "nature",
      ja: "自然",
      zh: "自然",
      pt: "natureza",
      ko: "자연",
      ar: "طبيعة",
      hi: "प्रकृति"
    },
    ruleId: 'endings-ur',
    isException: false
  },
  {
    word: "Kultur",
    article: "die",
    translations: {
      en: "culture",
      ru: "культура",
      de: "Kultur",
      es: "cultura",
      fr: "culture",
      ja: "文化",
      zh: "文化",
      pt: "cultura",
      ko: "문화",
      ar: "ثقافة",
      hi: "संस्कृति"
    },
    ruleId: 'endings-ur',
    isException: false
  },
  {
    word: "Agentur",
    article: "die",
    translations: {
      en: "agency",
      ru: "агентство",
      de: "Agentur",
      es: "agencia",
      fr: "agence",
      ja: "代理店",
      zh: "代理机构",
      pt: "agência",
      ko: "에이전시",
      ar: "وكالة",
      hi: "एजेंसी"
    },
    ruleId: 'endings-ur',
    isException: false
  },
  {
    word: "Manufaktur",
    article: "die",
    translations: {
      en: "manufactory",
      ru: "мануфактура",
      de: "Manufaktur",
      es: "manufactura",
      fr: "manufacture",
      ja: "工場",
      zh: "制造厂",
      pt: "manufatura",
      ko: "공장",
      ar: "مصنع",
      hi: "कारखाना"
    },
    ruleId: 'endings-ur',
    isException: false
  },
  {
    word: "Struktur",
    article: "die",
    translations: {
      en: "structure",
      ru: "структура",
      de: "Struktur",
      es: "estructura",
      fr: "structure",
      ja: "構造",
      zh: "结构",
      pt: "estrutura",
      ko: "구조",
      ar: "هيكل",
      hi: "संरचना"
    },
    ruleId: 'endings-ur',
    isException: false
  },
  // -ei
  {
    word: "Bäckerei",
    article: "die",
    translations: {
      en: "bakery",
      ru: "пекарня",
      de: "Bäckerei",
      es: "panadería",
      fr: "boulangerie",
      ja: "パン屋",
      zh: "面包店",
      pt: "padaria",
      ko: "제과점",
      ar: "مخبز",
      hi: "बेकरी"
    },
    ruleId: 'endings-ei',
    isException: false
  },
  {
    word: "Partei",
    article: "die",
    translations: {
      en: "party",
      ru: "партия",
      de: "Partei",
      es: "partido",
      fr: "parti",
      ja: "政党",
      zh: "政党",
      pt: "partido",
      ko: "정당",
      ar: "حزب",
      hi: "पार्टी"
    },
    ruleId: 'endings-ei',
    isException: false
  },
  {
    word: "Wäscherei",
    article: "die",
    translations: {
      en: "laundry",
      ru: "прачечная",
      de: "Wäscherei",
      es: "lavandería",
      fr: "laverie",
      ja: "クリーニング店",
      zh: "洗衣店",
      pt: "lavanderia",
      ko: "세탁소",
      ar: "مغسلة",
      hi: "धोबीघाट"
    },
    ruleId: 'endings-ei',
    isException: false
  },
  {
    word: "Tyrannei",
    article: "die",
    translations: {
      en: "tyranny",
      ru: "тирания",
      de: "Tyrannei",
      es: "tiranía",
      fr: "tyrannie",
      ja: "専制政治",
      zh: "暴政",
      pt: "tirania",
      ko: "폭정",
      ar: "طغيان",
      hi: "अत्याचार"
    },
    ruleId: 'endings-ei',
    isException: false
  },
  {
    word: "Schmiederei",
    article: "die",
    translations: {
      en: "forge",
      ru: "кузница",
      de: "Schmiederei",
      es: "herrería",
      fr: "forge",
      ja: "鍛冶屋",
      zh: "铁匠铺",
      pt: "forja",
      ko: "대장간",
      ar: "حدادة",
      hi: "लोहार की दुकान"
    },
    ruleId: 'endings-ei',
    isException: false
  },
  // -ie
  {
    word: "Energie",
    article: "die",
    translations: {
      en: "energy",
      ru: "энергия",
      de: "Energie",
      es: "energía",
      fr: "énergie",
      ja: "エネルギー",
      zh: "能量",
      pt: "energia",
      ko: "에너지",
      ar: "طاقة",
      hi: "ऊर्जा"
    },
    ruleId: 'endings-ie',
    isException: false
  },
  {
    word: "Industrie",
    article: "die",
    translations: {
      en: "industry",
      ru: "промышленность",
      de: "Industrie",
      es: "industria",
      fr: "industrie",
      ja: "産業",
      zh: "工业",
      pt: "indústria",
      ko: "산업",
      ar: "صناعة",
      hi: "उद्योग"
    },
    ruleId: 'endings-ie',
    isException: false
  },
  {
    word: "Biologie",
    article: "die",
    translations: {
      en: "biology",
      ru: "биология",
      de: "Biologie",
      es: "biología",
      fr: "biologie",
      ja: "生物学",
      zh: "生物学",
      pt: "biologia",
      ko: "생물학",
      ar: "بيولوجيا",
      hi: "जीव विज्ञान"
    },
    ruleId: 'endings-ie',
    isException: false
  },
  {
    word: "Geographie",
    article: "die",
    translations: {
      en: "geography",
      ru: "география",
      de: "Geographie",
      es: "geografía",
      fr: "géographie",
      ja: "地理学",
      zh: "地理",
      pt: "geografia",
      ko: "지리학",
      ar: "جغرافيا",
      hi: "भूगोल"
    },
    ruleId: 'endings-ie',
    isException: false
  },
  {
    word: "Harmonie",
    article: "die",
    translations: {
      en: "harmony",
      ru: "гармония",
      de: "Harmonie",
      es: "armonía",
      fr: "harmonie",
      ja: "調和",
      zh: "和谐",
      pt: "harmonia",
      ko: "조화",
      ar: "انسجام",
      hi: "सामंजस्य"
    },
    ruleId: 'endings-ie',
    isException: false
  },
  // -enz, -anz
  {
    word: "Konferenz",
    article: "die",
    translations: {
      en: "conference",
      ru: "конференция",
      de: "Konferenz",
      es: "conferencia",
      fr: "conférence",
      ja: "会議",
      zh: "会议",
      pt: "conferência",
      ko: "회의",
      ar: "مؤتمر",
      hi: "सम्मेलन"
    },
    ruleId: 'endings-enz-anz',
    isException: false
  },
  {
    word: "Tendenz",
    article: "die",
    translations: {
      en: "tendency",
      ru: "тенденция",
      de: "Tendenz",
      es: "tendencia",
      fr: "tendance",
      ja: "傾向",
      zh: "趋势",
      pt: "tendência",
      ko: "경향",
      ar: "اتجاه",
      hi: "प्रवृत्ति"
    },
    ruleId: 'endings-enz-anz',
    isException: false
  },
  {
    word: "Akzeptanz",
    article: "die",
    translations: {
      en: "acceptance",
      ru: "принятие",
      de: "Akzeptanz",
      es: "aceptación",
      fr: "acceptation",
      ja: "受容",
      zh: "接受",
      pt: "aceitação",
      ko: "수용",
      ar: "قبول",
      hi: "स्वीकृति"
    },
    ruleId: 'endings-enz-anz',
    isException: false
  },
  {
    word: "Eleganz",
    article: "die",
    translations: {
      en: "elegance",
      ru: "элегантность",
      de: "Eleganz",
      es: "elegancia",
      fr: "élégance",
      ja: "優雅さ",
      zh: "优雅",
      pt: "elegância",
      ko: "우아함",
      ar: "أناقة",
      hi: "शालीनता"
    },
    ruleId: 'endings-enz-anz',
    isException: false
  },
  {
    word: "Ignoranz",
    article: "die",
    translations: {
      en: "ignorance",
      ru: "игнорирование",
      de: "Ignoranz",
      es: "ignorancia",
      fr: "ignorance",
      ja: "無知",
      zh: "无知",
      pt: "ignorância",
      ko: "무지",
      ar: "جهل",
      hi: "अज्ञानता"
    },
    ruleId: 'endings-enz-anz',
    isException: false
  },
    // -age, -ade
  {
    word: "Garage",
    article: "die",
    translations: {
      en: "garage",
      ru: "гараж",
      de: "Garage",
      es: "garaje",
      fr: "garage",
      ja: "ガレージ",
      zh: "车库",
      pt: "garagem",
      ko: "차고",
      ar: "مرآب",
      hi: "गैराज"
    },
    ruleId: 'endings-age-ade',
    isException: false
  },
  {
    word: "Limonade",
    article: "die",
    translations: {
      en: "lemonade",
      ru: "лимонад",
      de: "Limonade",
      es: "limonada",
      fr: "limonade",
      ja: "レモネード",
      zh: "柠檬水",
      pt: "limonada",
      ko: "레모네이드",
      ar: "لیمونادة",
      hi: "नींबू पानी"
    },
    ruleId: 'endings-age-ade',
    isException: false
  },
  {
    word: "Passage",
    article: "die",
    translations: {
      en: "passage",
      ru: "проход",
      de: "Passage",
      es: "pasaje",
      fr: "passage",
      ja: "通路",
      zh: "通道",
      pt: "passagem",
      ko: "통로",
      ar: "ممر",
      hi: "गली"
    },
    ruleId: 'endings-age-ade',
    isException: false
  },
  {
    word: "Parade",
    article: "die",
    translations: {
      en: "parade",
      ru: "парад",
      de: "Parade",
      es: "desfile",
      fr: "parade",
      ja: "パレード",
      zh: "游行",
      pt: "desfile",
      ko: "퍼레이드",
      ar: "استعراض",
      hi: "परेड"
    },
    ruleId: 'endings-age-ade',
    isException: false
  },
  {
    word: "Marmelade",
    article: "die",
    translations: {
      en: "jam",
      ru: "варенье",
      de: "Marmelade",
      es: "mermelada",
      fr: "confiture",
      ja: "ジャム",
      zh: "果酱",
      pt: "geléia",
      ko: "잼",
      ar: "مربى",
      hi: "जैम"
    },
    ruleId: 'endings-age-ade',
    isException: false
  },
  // -ion
  {
    word: "Diskussion",
    article: "die",
    translations: {
      en: "discussion",
      ru: "дискуссия",
      de: "Diskussion",
      es: "discusión",
      fr: "discussion",
      ja: "議論",
      zh: "讨论",
      pt: "discussão",
      ko: "토론",
      ar: "مناقشة",
      hi: "चर्चा"
    },
    ruleId: 'endings-ion',
    isException: false
  },
  {
    word: "Vision",
    article: "die",
    translations: {
      en: "vision",
      ru: "видение",
      de: "Vision",
      es: "visión",
      fr: "vision",
      ja: "ビジョン",
      zh: "愿景",
      pt: "visão",
      ko: "비전",
      ar: "رؤية",
      hi: "दृष्टि"
    },
    ruleId: 'endings-ion',
    isException: false
  },
  {
    word: "Explosion",
    article: "die",
    translations: {
      en: "explosion",
      ru: "взрыв",
      de: "Explosion",
      es: "explosión",
      fr: "explosion",
      ja: "爆発",
      zh: "爆炸",
      pt: "explosão",
      ko: "폭발",
      ar: "انفجار",
      hi: "विस्फोट"
    },
    ruleId: 'endings-ion',
    isException: false
  },
  {
    word: "Illusion",
    article: "die",
    translations: {
      en: "illusion",
      ru: "иллюзия",
      de: "Illusion",
      es: "ilusión",
      fr: "illusion",
      ja: "幻覚",
      zh: "幻觉",
      pt: "ilusão",
      ko: "환상",
      ar: "وهم",
      hi: "भ्रम"
    },
    ruleId: 'endings-ion',
    isException: false
  },
  {
    word: "Mission",
    article: "die",
    translations: {
      en: "mission",
      ru: "миссия",
      de: "Mission",
      es: "misión",
      fr: "mission",
      ja: "使命",
      zh: "任务",
      pt: "missão",
      ko: "미션",
      ar: "مهمة",
      hi: "मिशन"
    },
    ruleId: 'endings-ion',
    isException: false
  },
  // -e
  {
    word: "Lampe",
    article: "die",
    translations: {
      en: "lamp",
      ru: "лампа",
      de: "Lampe",
      es: "lámpara",
      fr: "lampe",
      ja: "ランプ",
      zh: "灯",
      pt: "lâmpada",
      ko: "램프",
      ar: "مصباح",
      hi: "लैंप"
    },
    ruleId: 'endings-e',
    isException: false
  },
  {
    word: "Tasche",
    article: "die",
    translations: {
      en: "bag",
      ru: "сумка",
      de: "Tasche",
      es: "bolsa",
      fr: "sac",
      ja: "バッグ",
      zh: "包",
      pt: "bolsa",
      ko: "가방",
      ar: "حقيبة",
      hi: "बैग"
    },
    ruleId: 'endings-e',
    isException: false
  },
  {
    word: "Ente",
    article: "die",
    translations: {
      en: "duck",
      ru: "утка",
      de: "Ente",
      es: "pato",
      fr: "canard",
      ja: "アヒル",
      zh: "鸭子",
      pt: "pato",
      ko: "오리",
      ar: "بطة",
      hi: "बत्तख"
    },
    ruleId: 'endings-e',
    isException: false
  },
  {
    word: "Wunde",
    article: "die",
    translations: {
      en: "wound",
      ru: "рана",
      de: "Wunde",
      es: "herida",
      fr: "blessure",
      ja: "傷",
      zh: "伤口",
      pt: "ferida",
      ko: "상처",
      ar: "جرح",
      hi: "घाव"
    },
    ruleId: 'endings-e',
    isException: false
  },
  {
    word: "Brille",
    article: "die",
    translations: {
      en: "glasses",
      ru: "очки",
      de: "Brille",
      es: "gafas",
      fr: "lunettes",
      ja: "眼鏡",
      zh: "眼镜",
      pt: "óculos",
      ko: "안경",
      ar: "نظارات",
      hi: "चश्मा"
    },
    ruleId: 'endings-e',
    isException: false
  },
  // -t (отглагольные)
  {
    word: "Fahrt",
    article: "die",
    translations: {
      en: "trip",
      ru: "поездка",
      de: "Fahrt",
      es: "viaje",
      fr: "voyage",
      ja: "旅行",
      zh: "旅行",
      pt: "viagem",
      ko: "여행",
      ar: "رحلة",
      hi: "यात्रा"
    },
    ruleId: 'endings-t',
    isException: false
  },
  {
    word: "Tat",
    article: "die",
    translations: {
      en: "deed",
      ru: "действие",
      de: "Tat",
      es: "acto",
      fr: "acte",
      ja: "行為",
      zh: "行为",
      pt: "ato",
      ko: "행위",
      ar: "فعل",
      hi: "कृत्य"
    },
    ruleId: 'endings-t',
    isException: false
  },
  {
    word: "Schlacht",
    article: "die",
    translations: {
      en: "battle",
      ru: "битва",
      de: "Schlacht",
      es: "batalla",
      fr: "bataille",
      ja: "戦い",
      zh: "战役",
      pt: "batalha",
      ko: "전투",
      ar: "معركة",
      hi: "युद्ध"
    },
    ruleId: 'endings-t',
    isException: false
  },
  {
    word: "Gruft",
    article: "die",
    translations: {
      en: "crypt",
      ru: "склеп",
      de: "Gruft",
      es: "cripta",
      fr: "crypte",
      ja: "地下墓室",
      zh: "地窖",
      pt: "cripta",
      ko: "지하 납골당",
      ar: "قبو",
      hi: "तहखाना"
    },
    ruleId: 'endings-t',
    isException: false
  },
  // === СРЕДНИЙ РОД ===
  // -chen, -lein
  {
    word: "Mädchen",
    article: "das",
    translations: {
      en: "girl",
      ru: "девочка",
      de: "Mädchen",
      es: "niña",
      fr: "fille",
      ja: "少女",
      zh: "女孩",
      pt: "menina",
      ko: "소녀",
      ar: "فتاة",
      hi: "लड़की"
    },
    ruleId: 'endings-chen-lein',
    isException: false
  },
  {
    word: "Hündchen",
    article: "das",
    translations: {
      en: "little dog",
      ru: "собачка",
      de: "Hündchen",
      es: "perrito",
      fr: "petit chien",
      ja: "子犬",
      zh: "小狗",
      pt: "cachorrinho",
      ko: "강아지",
      ar: "كلب صغير",
      hi: "छोटा कुत्ता"
    },
    ruleId: 'endings-chen-lein',
    isException: false
  },
  {
    word: "Brötchen",
    article: "das",
    translations: {
      en: "roll",
      ru: "булочка",
      de: "Brötchen",
      es: "panecillo",
      fr: "petit pain",
      ja: "パン",
      zh: "小面包",
      pt: "pãozinho",
      ko: "빵",
      ar: "خبز صغير",
      hi: "रोटी"
    },
    ruleId: 'endings-chen-lein',
    isException: false
  },
  {
    word: "Häuschen",
    article: "das",
    translations: {
      en: "little house",
      ru: "домик",
      de: "Häuschen",
      es: "casita",
      fr: "petite maison",
      ja: "小さな家",
      zh: "小房子",
      pt: "casinha",
      ko: "작은 집",
      ar: "منزل صغير",
      hi: "छोटा घर"
    },
    ruleId: 'endings-chen-lein',
    isException: false
  },
  {
    word: "Bäumchen",
    article: "das",
    translations: {
      en: "little tree",
      ru: "деревце",
      de: "Bäumchen",
      es: "arbolito",
      fr: "petit arbre",
      ja: "小さな木",
      zh: "小树",
      pt: "arvorezinha",
      ko: "작은 나무",
      ar: "شجرة صغيرة",
      hi: "छोटा पेड़"
    },
    ruleId: 'endings-chen-lein',
    isException: false
  },
    // -um
  {
    word: "Museum",
    article: "das",
    translations: {
      en: "museum",
      ru: "музей",
      de: "Museum",
      es: "museo",
      fr: "musée",
      ja: "美術館",
      zh: "博物馆",
      pt: "museu",
      ko: "박물관",
      ar: "متحف",
      hi: "संग्रहालय"
    },
    ruleId: 'endings-um',
    isException: false
  },
  {
    word: "Stadium",
    article: "das",
    translations: {
      en: "stadium",
      ru: "стадион",
      de: "Stadium",
      es: "estadio",
      fr: "stade",
      ja: "スタジアム",
      zh: "体育场",
      pt: "estádio",
      ko: "경기장",
      ar: "ملعب",
      hi: "स्टेडियम"
    },
    ruleId: 'endings-um',
    isException: false
  },
  {
    word: "Publikum",
    article: "das",
    translations: {
      en: "audience",
      ru: "публика",
      de: "Publikum",
      es: "público",
      fr: "public",
      ja: "観客",
      zh: "观众",
      pt: "público",
      ko: "관중",
      ar: "جمهور",
      hi: "दर्शक"
    },
    ruleId: 'endings-um',
    isException: false
  },
  {
    word: "Zentrum",
    article: "das",
    translations: {
      en: "center",
      ru: "центр",
      de: "Zentrum",
      es: "centro",
      fr: "centre",
      ja: "センター",
      zh: "中心",
      pt: "centro",
      ko: "센터",
      ar: "مركز",
      hi: "केंद्र"
    },
    ruleId: 'endings-um',
    isException: false
  },
  {
    word: "Konservatorium",
    article: "das",
    translations: {
      en: "conservatory",
      ru: "консерватория",
      de: "Konservatorium",
      es: "conservatorio",
      fr: "conservatoire",
      ja: "音楽院",
      zh: "音乐学院",
      pt: "conservatório",
      ko: "음악대학",
      ar: "معهد موسيقى",
      hi: "संगीत महाविद्यालय"
    },
    ruleId: 'endings-um',
    isException: false
  },
  // -nis
  {
    word: "Ergebnis",
    article: "das",
    translations: {
      en: "result",
      ru: "результат",
      de: "Ergebnis",
      es: "resultado",
      fr: "résultat",
      ja: "結果",
      zh: "结果",
      pt: "resultado",
      ko: "결과",
      ar: "نتيجة",
      hi: "परिणाम"
    },
    ruleId: 'endings-nis',
    isException: false
  },
  {
    word: "Geheimnis",
    article: "das",
    translations: {
      en: "secret",
      ru: "секрет",
      de: "Geheimnis",
      es: "secreto",
      fr: "secret",
      ja: "秘密",
      zh: "秘密",
      pt: "segredo",
      ko: "비밀",
      ar: "سر",
      hi: "रहस्य"
    },
    ruleId: 'endings-nis',
    isException: false
  },
  {
    word: "Ereignis",
    article: "das",
    translations: {
      en: "event",
      ru: "событие",
      de: "Ereignis",
      es: "evento",
      fr: "événement",
      ja: "出来事",
      zh: "事件",
      pt: "evento",
      ko: "사건",
      ar: "حدث",
      hi: "घटना"
    },
    ruleId: 'endings-nis',
    isException: false
  },
  {
    word: "Wagnis",
    article: "das",
    translations: {
      en: "venture",
      ru: "рискованное предприятие",
      de: "Wagnis",
      es: "aventura",
      fr: "aventure",
      ja: "冒険",
      zh: "冒险",
      pt: "empreendimento",
      ko: "모험",
      ar: "مخاطرة",
      hi: "साहसिक कार्य"
    },
    ruleId: 'endings-nis',
    isException: false
  },
  {
    word: "Verständnis",
    article: "das",
    translations: {
      en: "understanding",
      ru: "понимание",
      de: "Verständnis",
      es: "comprensión",
      fr: "compréhension",
      ja: "理解",
      zh: "理解",
      pt: "compreensão",
      ko: "이해",
      ar: "فهم",
      hi: "समझ"
    },
    ruleId: 'endings-nis',
    isException: false
  },
  // -o
  {
    word: "Auto",
    article: "das",
    translations: {
      en: "car",
      ru: "автомобиль",
      de: "Auto",
      es: "coche",
      fr: "voiture",
      ja: "車",
      zh: "汽车",
      pt: "carro",
      ko: "자동차",
      ar: "سيارة",
      hi: "कार"
    },
    ruleId: 'endings-o',
    isException: false
  },
  {
    word: "Kino",
    article: "das",
    translations: {
      en: "cinema",
      ru: "кинотеатр",
      de: "Kino",
      es: "cine",
      fr: "cinéma",
      ja: "映画館",
      zh: "电影院",
      pt: "cinema",
      ko: "영화관",
      ar: "سينما",
      hi: "सिनेमा"
    },
    ruleId: 'endings-o',
    isException: false
  },
  {
    word: "Radio",
    article: "das",
    translations: {
      en: "radio",
      ru: "радио",
      de: "Radio",
      es: "radio",
      fr: "radio",
      ja: "ラジオ",
      zh: "收音机",
      pt: "rádio",
      ko: "라디오",
      ar: "راديو",
      hi: "रेडियो"
    },
    ruleId: 'endings-o',
    isException: false
  },
  {
    word: "Foto",
    article: "das",
    translations: {
      en: "photo",
      ru: "фотография",
      de: "Foto",
      es: "foto",
      fr: "photo",
      ja: "写真",
      zh: "照片",
      pt: "foto",
      ko: "사진",
      ar: "صورة",
      hi: "फोटो"
    },
    ruleId: 'endings-o',
    isException: false
  },
  {
    word: "Moto",
    article: "das",
    translations: {
      en: "motto",
      ru: "девиз",
      de: "Moto",
      es: "lema",
      fr: "devise",
      ja: "モットー",
      zh: "座右铭",
      pt: "lema",
      ko: "표어",
      ar: "شعار",
      hi: "नारा"
    },
    ruleId: 'endings-o',
    isException: false
  },
  // -ment
  {
    word: "Instrument",
    article: "das",
    translations: {
      en: "instrument",
      ru: "инструмент",
      de: "Instrument",
      es: "instrumento",
      fr: "instrument",
      ja: "楽器",
      zh: "乐器",
      pt: "instrumento",
      ko: "악기",
      ar: "آلة",
      hi: "यंत्र"
    },
    ruleId: 'endings-ment',
    isException: false
  },
  {
    word: "Parlament",
    article: "das",
    translations: {
      en: "parliament",
      ru: "парламент",
      de: "Parlament",
      es: "parlamento",
      fr: "parlement",
      ja: "議会",
      zh: "议会",
      pt: "parlamento",
      ko: "의회",
      ar: "برلمان",
      hi: "संसद"
    },
    ruleId: 'endings-ment',
    isException: false
  },
  {
    word: "Medikament",
    article: "das",
    translations: {
      en: "medicine",
      ru: "лекарство",
      de: "Medikament",
      es: "medicamento",
      fr: "médicament",
      ja: "薬",
      zh: "药物",
      pt: "medicamento",
      ko: "약",
      ar: "دواء",
      hi: "दवा"
    },
    ruleId: 'endings-ment',
    isException: false
  },
  {
    word: "Dokument",
    article: "das",
    translations: {
      en: "document",
      ru: "документ",
      de: "Dokument",
      es: "documento",
      fr: "document",
      ja: "文書",
      zh: "文件",
      pt: "documento",
      ko: "문서",
      ar: "وثيقة",
      hi: "दस्तावेज़"
    },
    ruleId: 'endings-ment',
    isException: false
  },
  {
    word: "Fundament",
    article: "das",
    translations: {
      en: "foundation",
      ru: "фундамент",
      de: "Fundament",
      es: "fundamento",
      fr: "fondement",
      ja: "基礎",
      zh: "基础",
      pt: "fundamento",
      ko: "기초",
      ar: "أساس",
      hi: "नींव"
    },
    ruleId: 'endings-ment',
    isException: false
  },
  // -tum
  {
    word: "Datum",
    article: "das",
    translations: {
      en: "date",
      ru: "дата",
      de: "Datum",
      es: "fecha",
      fr: "date",
      ja: "日付",
      zh: "日期",
      pt: "data",
      ko: "날짜",
      ar: "تاريخ",
      hi: "तारीख"
    },
    ruleId: 'endings-tum',
    isException: false
  },
  {
    word: "Christentum",
    article: "das",
    translations: {
      en: "Christianity",
      ru: "христианство",
      de: "Christentum",
      es: "cristianismo",
      fr: "christianisme",
      ja: "キリスト教",
      zh: "基督教",
      pt: "cristianismo",
      ko: "기독교",
      ar: "مسيحية",
      hi: "ईसाई धर्म"
    },
    ruleId: 'endings-tum',
    isException: false
  },
  {
    word: "Eigentum",
    article: "das",
    translations: {
      en: "property",
      ru: "собственность",
      de: "Eigentum",
      es: "propiedad",
      fr: "propriété",
      ja: "所有権",
      zh: "财产",
      pt: "propriedade",
      ko: "재산",
      ar: "ملكية",
      hi: "संपत्ति"
    },
    ruleId: 'endings-tum',
    isException: false
  },
  {
    word: "Reichtum",
    article: "das",
    translations: {
      en: "wealth",
      ru: "богатство",
      de: "Reichtum",
      es: "riqueza",
      fr: "richesse",
      ja: "富",
      zh: "财富",
      pt: "riqueza",
      ko: "부",
      ar: "ثروة",
      hi: "धन"
    },
    ruleId: 'endings-tum',
    isException: false
  },
  // Инфинитивы
  {
    word: "Lesen",
    article: "das",
    translations: {
      en: "reading",
      ru: "чтение",
      de: "Lesen",
      es: "lectura",
      fr: "lecture",
      ja: "読書",
      zh: "阅读",
      pt: "leitura",
      ko: "읽기",
      ar: "قراءة",
      hi: "पढ़ना"
    },
    ruleId: 'substantivized-infinitives',
    isException: false
  },
  {
    word: "Schwimmen",
    article: "das",
    translations: {
      en: "swimming",
      ru: "плавание",
      de: "Schwimmen",
      es: "natación",
      fr: "natation",
      ja: "水泳",
      zh: "游泳",
      pt: "natação",
      ko: "수영",
      ar: "سباحة",
      hi: "तैराकी"
    },
    ruleId: 'substantivized-infinitives',
    isException: false
  },
  {
    word: "Schreiben",
    article: "das",
    translations: {
      en: "writing",
      ru: "письмо",
      de: "Schreiben",
      es: "escritura",
      fr: "écriture",
      ja: "書くこと",
      zh: "写作",
      pt: "escrita",
      ko: "쓰기",
      ar: "كتابة",
      hi: "लेखन"
    },
    ruleId: 'substantivized-infinitives',
    isException: false
  },
  {
    word: "Tanzen",
    article: "das",
    translations: {
      en: "dancing",
      ru: "танцы",
      de: "Tanzen",
      es: "baile",
      fr: "danse",
      ja: "踊り",
      zh: "跳舞",
      pt: "dança",
      ko: "춤",
      ar: "رقص",
      hi: "नृत्य"
    },
    ruleId: 'substantivized-infinitives',
    isException: false
  },
  {
    word: "Essen",
    article: "das",
    translations: {
      en: "food",
      ru: "еда",
      de: "Essen",
      es: "comida",
      fr: "nourriture",
      ja: "食べ物",
      zh: "食物",
      pt: "comida",
      ko: "음식",
      ar: "طعام",
      hi: "भोजन"
    },
    ruleId: 'substantivized-infinitives',
    isException: false
  },
    // Прилагательные
  {
    word: "Gute",
    article: "das",
    translations: {
      en: "the good (thing)",
      ru: "хорошее",
      de: "Gute",
      es: "lo bueno",
      fr: "le bon",
      ja: "良いもの",
      zh: "好的事物",
      pt: "o bom",
      ko: "좋은 것",
      ar: "الجيد",
      hi: "अच्छा"
    },
    ruleId: 'substantivized-adjectives',
    isException: false
  },
  {
    word: "Schöne",
    article: "das",
    translations: {
      en: "the beautiful (thing)",
      ru: "красивое",
      de: "Schöne",
      es: "lo hermoso",
      fr: "le beau",
      ja: "美しいもの",
      zh: "美丽的事物",
      pt: "o belo",
      ko: "아름다운 것",
      ar: "الجميل",
      hi: "सुंदर"
    },
    ruleId: 'substantivized-adjectives',
    isException: false
  },
  {
    word: "Neue",
    article: "das",
    translations: {
      en: "the new (thing)",
      ru: "новое",
      de: "Neue",
      es: "lo nuevo",
      fr: "le nouveau",
      ja: "新しいもの",
      zh: "新的事物",
      pt: "o novo",
      ko: "새로운 것",
      ar: "الجديد",
      hi: "नया"
    },
    ruleId: 'substantivized-adjectives',
    isException: false
  },
  {
    word: "Alte",
    article: "das",
    translations: {
      en: "the old (thing)",
      ru: "старое",
      de: "Alte",
      es: "lo viejo",
      fr: "le vieux",
      ja: "古いもの",
      zh: "旧的事物",
      pt: "o velho",
      ko: "오래된 것",
      ar: "القديم",
      hi: "पुराना"
    },
    ruleId: 'substantivized-adjectives',
    isException: false
  },
  {
    word: "Wahre",
    article: "das",
    translations: {
      en: "the true (thing)",
      ru: "истинное",
      de: "Wahre",
      es: "lo verdadero",
      fr: "le vrai",
      ja: "真実",
      zh: "真实",
      pt: "o verdadeiro",
      ko: "진실",
      ar: "الحقيقي",
      hi: "सच्चाई"
    },
    ruleId: 'substantivized-adjectives',
    isException: false
  },
  // Цвета
  {
    word: "Rot",
    article: "das",
    translations: {
      en: "red",
      ru: "красный",
      de: "Rot",
      es: "rojo",
      fr: "rouge",
      ja: "赤",
      zh: "红色",
      pt: "vermelho",
      ko: "빨강",
      ar: "أحمر",
      hi: "लाल"
    },
    ruleId: 'colors-as-nouns',
    isException: false
  },
  {
    word: "Blau",
    article: "das",
    translations: {
      en: "blue",
      ru: "синий",
      de: "Blau",
      es: "azul",
      fr: "bleu",
      ja: "青",
      zh: "蓝色",
      pt: "azul",
      ko: "파랑",
      ar: "أزرق",
      hi: "नीला"
    },
    ruleId: 'colors-as-nouns',
    isException: false
  },
  {
    word: "Grün",
    article: "das",
    translations: {
      en: "green",
      ru: "зелёный",
      de: "Grün",
      es: "verde",
      fr: "vert",
      ja: "緑",
      zh: "绿色",
      pt: "verde",
      ko: "초록",
      ar: "أخضر",
      hi: "हरा"
    },
    ruleId: 'colors-as-nouns',
    isException: false
  },
  {
    word: "Gelb",
    article: "das",
    translations: {
      en: "yellow",
      ru: "жёлтый",
      de: "Gelb",
      es: "amarillo",
      fr: "jaune",
      ja: "黄色",
      zh: "黄色",
      pt: "amarelo",
      ko: "노랑",
      ar: "أصفر",
      hi: "पीला"
    },
    ruleId: 'colors-as-nouns',
    isException: false
  },
  {
    word: "Schwarz",
    article: "das",
    translations: {
      en: "black",
      ru: "чёрный",
      de: "Schwarz",
      es: "negro",
      fr: "noir",
      ja: "黒",
      zh: "黑色",
      pt: "preto",
      ko: "검정",
      ar: "أسود",
      hi: "काला"
    },
    ruleId: 'colors-as-nouns',
    isException: false
  },
  // Языки
  {
    word: "Deutsch",
    article: "das",
    translations: {
      en: "German",
      ru: "немецкий язык",
      de: "Deutsch",
      es: "alemán",
      fr: "allemand",
      ja: "ドイツ語",
      zh: "德语",
      pt: "alemão",
      ko: "독일어",
      ar: "الألمانية",
      hi: "जर्मन"
    },
    ruleId: 'languages',
    isException: false
  },
  {
    word: "Englisch",
    article: "das",
    translations: {
      en: "English",
      ru: "английский язык",
      de: "Englisch",
      es: "inglés",
      fr: "anglais",
      ja: "英語",
      zh: "英语",
      pt: "inglês",
      ko: "영어",
      ar: "الإنجليزية",
      hi: "अंग्रेज़ी"
    },
    ruleId: 'languages',
    isException: false
  },
  {
    word: "Französisch",
    article: "das",
    translations: {
      en: "French",
      ru: "французский язык",
      de: "Französisch",
      es: "francés",
      fr: "français",
      ja: "フランス語",
      zh: "法语",
      pt: "francês",
      ko: "프랑스어",
      ar: "الفرنسية",
      hi: "फ्रेंच"
    },
    ruleId: 'languages',
    isException: false
  },
  {
    word: "Spanisch",
    article: "das",
    translations: {
      en: "Spanish",
      ru: "испанский язык",
      de: "Spanisch",
      es: "español",
      fr: "espagnol",
      ja: "スペイン語",
      zh: "西班牙语",
      pt: "espanhol",
      ko: "스페인어",
      ar: "الإسبانية",
      hi: "स्पेनिश"
    },
    ruleId: 'languages',
    isException: false
  },
  {
    word: "Russisch",
    article: "das",
    translations: {
      en: "Russian",
      ru: "русский язык",
      de: "Russisch",
      es: "ruso",
      fr: "russe",
      ja: "ロシア語",
      zh: "俄语",
      pt: "russo",
      ko: "러시아어",
      ar: "الروسية",
      hi: "रूसी"
    },
    ruleId: 'languages',
    isException: false
  },
  // Хим. элементы
  {
    word: "Gold",
    article: "das",
    translations: {
      en: "gold",
      ru: "золото",
      de: "Gold",
      es: "oro",
      fr: "or",
      ja: "金",
      zh: "金",
      pt: "ouro",
      ko: "금",
      ar: "ذهب",
      hi: "सोना"
    },
    ruleId: 'chemical-elements',
    isException: false
  },
  {
    word: "Eisen",
    article: "das",
    translations: {
      en: "iron",
      ru: "железо",
      de: "Eisen",
      es: "hierro",
      fr: "fer",
      ja: "鉄",
      zh: "铁",
      pt: "ferro",
      ko: "철",
      ar: "حديد",
      hi: "लोहा"
    },
    ruleId: 'chemical-elements',
    isException: false
  },
  {
    word: "Silber",
    article: "das",
    translations: {
      en: "silver",
      ru: "серебро",
      de: "Silber",
      es: "plata",
      fr: "argent",
      ja: "銀",
      zh: "银",
      pt: "prata",
      ko: "은",
      ar: "فضة",
      hi: "चाँदी"
    },
    ruleId: 'chemical-elements',
    isException: false
  },
  {
    word: "Uran",
    article: "das",
    translations: {
      en: "uranium",
      ru: "уран",
      de: "Uran",
      es: "uranio",
      fr: "uranium",
      ja: "ウラン",
      zh: "铀",
      pt: "urânio",
      ko: "우라늄",
      ar: "يورانيوم",
      hi: "यूरेनियम"
    },
    ruleId: 'chemical-elements',
    isException: false
  },
  {
    word: "Helium",
    article: "das",
    translations: {
      en: "helium",
      ru: "гелий",
      de: "Helium",
      es: "helio",
      fr: "hélium",
      ja: "ヘリウム",
      zh: "氦",
      pt: "hélio",
      ko: "헬륨",
      ar: "هيليوم",
      hi: "हीलियम"
    },
    ruleId: 'chemical-elements',
    isException: false
  },
  // Дроби
  {
    word: "Viertel",
    article: "das",
    translations: {
      en: "quarter",
      ru: "четверть",
      de: "Viertel",
      es: "cuarto",
      fr: "quart",
      ja: "4分の1",
      zh: "四分之一",
      pt: "quarto",
      ko: "사분의 일",
      ar: "ربع",
      hi: "चौथाई"
    },
    ruleId: 'fractions',
    isException: false
  },
  {
    word: "Drittel",
    article: "das",
    translations: {
      en: "third",
      ru: "треть",
      de: "Drittel",
      es: "tercio",
      fr: "tiers",
      ja: "3分の1",
      zh: "三分之一",
      pt: "terço",
      ko: "삼분의 일",
      ar: "ثلث",
      hi: "तिहाई"
    },
    ruleId: 'fractions',
    isException: false
  },
  {
    word: "Zehntel",
    article: "das",
    translations: {
      en: "tenth",
      ru: "десятая часть",
      de: "Zehntel",
      es: "décimo",
      fr: "dixième",
      ja: "10分の1",
      zh: "十分之一",
      pt: "décimo",
      ko: "십분의 일",
      ar: "عُشر",
      hi: "दसवां हिस्सा"
    },
    ruleId: 'fractions',
    isException: false
  },
  {
    word: "Hundertstel",
    article: "das",
    translations: {
      en: "hundredth",
      ru: "сотая часть",
      de: "Hundertstel",
      es: "centésimo",
      fr: "centième",
      ja: "100分の1",
      zh: "百分之一",
      pt: "centésimo",
      ko: "백분의 일",
      ar: "جزء من مائة",
      hi: "सौवां हिस्सा"
    },
    ruleId: 'fractions',
    isException: false
  },
  {
    word: "Tausendstel",
    article: "das",
    translations: {
      en: "thousandth",
      ru: "тысячная часть",
      de: "Tausendstel",
      es: "milésimo",
      fr: "millième",
      ja: "1000分の1",
      zh: "千分之一",
      pt: "milésimo",
      ko: "천분의 일",
      ar: "جزء من ألف",
      hi: "हज़ारवां हिस्सा"
    },
    ruleId: 'fractions',
    isException: false
  },
    // Ge-
  {
    word: "Gebäude",
    article: "das",
    translations: {
      en: "building",
      ru: "здание",
      de: "Gebäude",
      es: "edificio",
      fr: "bâtiment",
      ja: "建物",
      zh: "建筑物",
      pt: "edifício",
      ko: "건물",
      ar: "مبنى",
      hi: "इमारत"
    },
    ruleId: 'prefix-ge',
    isException: false
  },
  {
    word: "Gesicht",
    article: "das",
    translations: {
      en: "face",
      ru: "лицо",
      de: "Gesicht",
      es: "cara",
      fr: "visage",
      ja: "顔",
      zh: "脸",
      pt: "rosto",
      ko: "얼굴",
      ar: "وجه",
      hi: "चेहरा"
    },
    ruleId: 'prefix-ge',
    isException: false
  },
  {
    word: "Geflügel",
    article: "das",
    translations: {
      en: "poultry",
      ru: "птица (мясо)",
      de: "Geflügel",
      es: "aves de corral",
      fr: "volaille",
      ja: "鶏肉",
      zh: "家禽",
      pt: "aves",
      ko: "가금류",
      ar: "دواجن",
      hi: "मुर्गा"
    },
    ruleId: 'prefix-ge',
    isException: false
  },
  {
    word: "Gemüse",
    article: "das",
    translations: {
      en: "vegetables",
      ru: "овощи",
      de: "Gemüse",
      es: "verduras",
      fr: "légumes",
      ja: "野菜",
      zh: "蔬菜",
      pt: "legumes",
      ko: "야채",
      ar: "خضروات",
      hi: "सब्ज़ियाँ"
    },
    ruleId: 'prefix-ge',
    isException: false
  },
  {
    word: "Gebet",
    article: "das",
    translations: {
      en: "prayer",
      ru: "молитва",
      de: "Gebet",
      es: "oración",
      fr: "prière",
      ja: "祈り",
      zh: "祈祷",
      pt: "oração",
      ko: "기도",
      ar: "صلاة",
      hi: "प्रार्थना"
    },
    ruleId: 'prefix-ge',
    isException: false
  },
  // === МУЖСКОЙ РОД ===
  // -ling
  {
    word: "Flüchtling",
    article: "der",
    translations: {
      en: "refugee",
      ru: "беженец",
      de: "Flüchtling",
      es: "refugiado",
      fr: "réfugié",
      ja: "難民",
      zh: "难民",
      pt: "refugiado",
      ko: "난민",
      ar: "لاجئ",
      hi: "शरणार्थी"
    },
    ruleId: 'endings-ling',
    isException: false
  },
  {
    word: "Lehrling",
    article: "der",
    translations: {
      en: "apprentice",
      ru: "ученик",
      de: "Lehrling",
      es: "aprendiz",
      fr: "apprenti",
      ja: "見習い",
      zh: "学徒",
      pt: "aprendiz",
      ko: "견습생",
      ar: "متدرب",
      hi: "शिक्षु"
    },
    ruleId: 'endings-ling',
    isException: false
  },
  {
    word: "Frühling",
    article: "der",
    translations: {
      en: "spring",
      ru: "весна",
      de: "Frühling",
      es: "primavera",
      fr: "printemps",
      ja: "春",
      zh: "春天",
      pt: "primavera",
      ko: "봄",
      ar: "ربيع",
      hi: "वसंत"
    },
    ruleId: 'endings-ling',
    isException: false
  },
  {
    word: "Schmetterling",
    article: "der",
    translations: {
      en: "butterfly",
      ru: "бабочка",
      de: "Schmetterling",
      es: "mariposa",
      fr: "papillon",
      ja: "蝶",
      zh: "蝴蝶",
      pt: "borboleta",
      ko: "나비",
      ar: "فراشة",
      hi: "तितली"
    },
    ruleId: 'endings-ling',
    isException: false
  },
  {
    word: "Liebling",
    article: "der",
    translations: {
      en: "darling",
      ru: "любимец",
      de: "Liebling",
      es: "favorito",
      fr: "chéri",
      ja: "お気に入り",
      zh: "宠儿",
      pt: "querido",
      ko: "애인",
      ar: "حبيب",
      hi: "प्रिय"
    },
    ruleId: 'endings-ling',
    isException: false
  },
  // -or
  {
    word: "Professor",
    article: "der",
    translations: {
      en: "professor",
      ru: "профессор",
      de: "Professor",
      es: "profesor",
      fr: "professeur",
      ja: "教授",
      zh: "教授",
      pt: "professor",
      ko: "교수",
      ar: "أستاذ",
      hi: "प्रोफेसर"
    },
    ruleId: 'endings-or',
    isException: false
  },
  {
    word: "Motor",
    article: "der",
    translations: {
      en: "motor",
      ru: "мотор",
      de: "Motor",
      es: "motor",
      fr: "moteur",
      ja: "モーター",
      zh: "马达",
      pt: "motor",
      ko: "모터",
      ar: "محرك",
      hi: "मोटर"
    },
    ruleId: 'endings-or',
    isException: false
  },
  {
    word: "Reaktor",
    article: "der",
    translations: {
      en: "reactor",
      ru: "реактор",
      de: "Reaktor",
      es: "reactor",
      fr: "réacteur",
      ja: "原子炉",
      zh: "反应堆",
      pt: "reator",
      ko: "원자로",
      ar: "مفاعل",
      hi: "रिएक्टर"
    },
    ruleId: 'endings-or',
    isException: false
  },
  {
    word: "Doktor",
    article: "der",
    translations: {
      en: "doctor",
      ru: "доктор",
      de: "Doktor",
      es: "doctor",
      fr: "docteur",
      ja: "博士",
      zh: "博士",
      pt: "doutor",
      ko: "박사",
      ar: "دكتور",
      hi: "डॉक्टर"
    },
    ruleId: 'endings-or',
    isException: false
  },
  {
    word: "Traktor",
    article: "der",
    translations: {
      en: "tractor",
      ru: "трактор",
      de: "Traktor",
      es: "tractor",
      fr: "tracteur",
      ja: "トラクター",
      zh: "拖拉机",
      pt: "trator",
      ko: "트랙터",
      ar: "جرار",
      hi: "ट्रैक्टर"
    },
    ruleId: 'endings-or',
    isException: false
  },
  // -er
  {
    word: "Lehrer",
    article: "der",
    translations: {
      en: "teacher",
      ru: "учитель",
      de: "Lehrer",
      es: "maestro",
      fr: "enseignant",
      ja: "先生",
      zh: "老师",
      pt: "professor",
      ko: "선생님",
      ar: "معلم",
      hi: "शिक्षक"
    },
    ruleId: 'endings-er',
    isException: false
  },
  {
    word: "Computer",
    article: "der",
    translations: {
      en: "computer",
      ru: "компьютер",
      de: "Computer",
      es: "ordenador",
      fr: "ordinateur",
      ja: "コンピューター",
      zh: "计算机",
      pt: "computador",
      ko: "컴퓨터",
      ar: "حاسوب",
      hi: "कंप्यूटर"
    },
    ruleId: 'endings-er',
    isException: false
  },
  {
    word: "Sommer",
    article: "der",
    translations: {
      en: "summer",
      ru: "лето",
      de: "Sommer",
      es: "verano",
      fr: "été",
      ja: "夏",
      zh: "夏天",
      pt: "verão",
      ko: "여름",
      ar: "صيف",
      hi: "गर्मी"
    },
    ruleId: 'endings-er',
    isException: false
  },
  {
    word: "Drucker",
    article: "der",
    translations: {
      en: "printer",
      ru: "принтер",
      de: "Drucker",
      es: "impresora",
      fr: "imprimante",
      ja: "プリンター",
      zh: "打印机",
      pt: "impressora",
      ko: "프린터",
      ar: "طابعة",
      hi: "प्रिंटर"
    },
    ruleId: 'endings-er',
    isException: false
  },
  {
    word: "Fahrer",
    article: "der",
    translations: {
      en: "driver",
      ru: "водитель",
      de: "Fahrer",
      es: "conductor",
      fr: "chauffeur",
      ja: "運転手",
      zh: "司机",
      pt: "motorista",
      ko: "운전자",
      ar: "سائق",
      hi: "चालक"
    },
    ruleId: 'endings-er',
    isException: false
  },
  // -ist
  {
    word: "Journalist",
    article: "der",
    translations: {
      en: "journalist",
      ru: "журналист",
      de: "Journalist",
      es: "periodista",
      fr: "journaliste",
      ja: "ジャーナリスト",
      zh: "记者",
      pt: "jornalista",
      ko: "기자",
      ar: "صحفي",
      hi: "पत्रकार"
    },
    ruleId: 'endings-ist',
    isException: false
  },
  {
    word: "Tourist",
    article: "der",
    translations: {
      en: "tourist",
      ru: "турист",
      de: "Tourist",
      es: "turista",
      fr: "touriste",
      ja: "観光客",
      zh: "游客",
      pt: "turista",
      ko: "관광객",
      ar: "سائح",
      hi: "पर्यटक"
    },
    ruleId: 'endings-ist',
    isException: false
  },
  {
    word: "Pianist",
    article: "der",
    translations: {
      en: "pianist",
      ru: "пианист",
      de: "Pianist",
      es: "pianista",
      fr: "pianiste",
      ja: "ピアニスト",
      zh: "钢琴家",
      pt: "pianista",
      ko: "피아니스트",
      ar: "عازف بيانو",
      hi: "पियानो वादक"
    },
    ruleId: 'endings-ist',
    isException: false
  },
  {
    word: "Optimist",
    article: "der",
    translations: {
      en: "optimist",
      ru: "оптимист",
      de: "Optimist",
      es: "optimista",
      fr: "optimiste",
      ja: "楽観主義者",
      zh: "乐观主义者",
      pt: "otimista",
      ko: "낙관론자",
      ar: "متفائل",
      hi: "आशावादी"
    },
    ruleId: 'endings-ist',
    isException: false
  },
  {
    word: "Spezialist",
    article: "der",
    translations: {
      en: "specialist",
      ru: "специалист",
      de: "Spezialist",
      es: "especialista",
      fr: "spécialiste",
      ja: "専門家",
      zh: "专家",
      pt: "especialista",
      ko: "전문가",
      ar: "متخصص",
      hi: "विशेषज्ञ"
    },
    ruleId: 'endings-ist',
    isException: false
  },
    // -ant, -ent
  {
    word: "Student",
    article: "der",
    translations: {
      en: "student",
      ru: "студент",
      de: "Student",
      es: "estudiante",
      fr: "étudiant",
      ja: "学生",
      zh: "学生",
      pt: "estudante",
      ko: "학생",
      ar: "طالب",
      hi: "छात्र"
    },
    ruleId: 'endings-ant-ent',
    isException: false
  },
  {
    word: "Präsident",
    article: "der",
    translations: {
      en: "president",
      ru: "президент",
      de: "Präsident",
      es: "presidente",
      fr: "président",
      ja: "大統領",
      zh: "总统",
      pt: "presidente",
      ko: "대통령",
      ar: "رئيس",
      hi: "राष्ट्रपति"
    },
    ruleId: 'endings-ant-ent',
    isException: false
  },
  {
    word: "Assistent",
    article: "der",
    translations: {
      en: "assistant",
      ru: "ассистент",
      de: "Assistent",
      es: "asistente",
      fr: "assistant",
      ja: "アシスタント",
      zh: "助手",
      pt: "assistente",
      ko: "조수",
      ar: "مساعد",
      hi: "सहायक"
    },
    ruleId: 'endings-ant-ent',
    isException: false
  },
  {
    word: "Konkurrent",
    article: "der",
    translations: {
      en: "competitor",
      ru: "конкурент",
      de: "Konkurrent",
      es: "competidor",
      fr: "concurrent",
      ja: "競合",
      zh: "竞争对手",
      pt: "concorrente",
      ko: "경쟁자",
      ar: "منافس",
      hi: "प्रतियोगी"
    },
    ruleId: 'endings-ant-ent',
    isException: false
  },
  {
    word: "Lieferant",
    article: "der",
    translations: {
      en: "supplier",
      ru: "поставщик",
      de: "Lieferant",
      es: "proveedor",
      fr: "fournisseur",
      ja: "サプライヤー",
      zh: "供应商",
      pt: "fornecedor",
      ko: "공급업체",
      ar: "مورد",
      hi: "आपूर्तिकर्ता"
    },
    ruleId: 'endings-ant-ent',
    isException: false
  },
  // -ismus
  {
    word: "Kapitalismus",
    article: "der",
    translations: {
      en: "capitalism",
      ru: "капитализм",
      de: "Kapitalismus",
      es: "capitalismo",
      fr: "capitalisme",
      ja: "資本主義",
      zh: "资本主义",
      pt: "capitalismo",
      ko: "자본주의",
      ar: "رأسمالية",
      hi: "पूंजीवाद"
    },
    ruleId: 'endings-ismus',
    isException: false
  },
  {
    word: "Sozialismus",
    article: "der",
    translations: {
      en: "socialism",
      ru: "социализм",
      de: "Sozialismus",
      es: "socialismo",
      fr: "socialisme",
      ja: "社会主義",
      zh: "社会主义",
      pt: "socialismo",
      ko: "사회주의",
      ar: "اشتراكية",
      hi: "समाजवाद"
    },
    ruleId: 'endings-ismus',
    isException: false
  },
  {
    word: "Tourismus",
    article: "der",
    translations: {
      en: "tourism",
      ru: "туризм",
      de: "Tourismus",
      es: "turismo",
      fr: "tourisme",
      ja: "観光",
      zh: "旅游",
      pt: "turismo",
      ko: "관광",
      ar: "سياحة",
      hi: "पर्यटन"
    },
    ruleId: 'endings-ismus',
    isException: false
  },
  {
    word: "Optimismus",
    article: "der",
    translations: {
      en: "optimism",
      ru: "оптимизм",
      de: "Optimismus",
      es: "optimismo",
      fr: "optimisme",
      ja: "楽観主義",
      zh: "乐观主义",
      pt: "otimismo",
      ko: "낙관주의",
      ar: "تفاؤل",
      hi: "आशावाद"
    },
    ruleId: 'endings-ismus',
    isException: false
  },
  {
    word: "Realismus",
    article: "der",
    translations: {
      en: "realism",
      ru: "реализм",
      de: "Realismus",
      es: "realismo",
      fr: "réalisme",
      ja: "現実主義",
      zh: "现实主义",
      pt: "realismo",
      ko: "현실주의",
      ar: "واقعية",
      hi: "यथार्थवाद"
    },
    ruleId: 'endings-ismus',
    isException: false
  },
  // -loge, -soph
  {
    word: "Biologe",
    article: "der",
    translations: {
      en: "biologist",
      ru: "биолог",
      de: "Biologe",
      es: "biólogo",
      fr: "biologiste",
      ja: "生物学者",
      zh: "生物学家",
      pt: "biólogo",
      ko: "생물학자",
      ar: "عالم أحياء",
      hi: "जीव विज्ञानी"
    },
    ruleId: 'endings-loge-soph',
    isException: false
  },
  {
    word: "Psychologe",
    article: "der",
    translations: {
      en: "psychologist",
      ru: "психолог",
      de: "Psychologe",
      es: "psicólogo",
      fr: "psychologue",
      ja: "心理学者",
      zh: "心理学家",
      pt: "psicólogo",
      ko: "심리학자",
      ar: "عالم نفس",
      hi: "मनोवैज्ञानिक"
    },
    ruleId: 'endings-loge-soph',
    isException: false
  },
  {
    word: "Philosoph",
    article: "der",
    translations: {
      en: "philosopher",
      ru: "философ",
      de: "Philosoph",
      es: "filósofo",
      fr: "philosophe",
      ja: "哲学者",
      zh: "哲学家",
      pt: "filósofo",
      ko: "철학자",
      ar: "فيلسوف",
      hi: "दार्शनिक"
    },
    ruleId: 'endings-loge-soph',
    isException: false
  },
  {
    word: "Theologe",
    article: "der",
    translations: {
      en: "theologian",
      ru: "теолог",
      de: "Theologe",
      es: "teólogo",
      fr: "théologien",
      ja: "神学者",
      zh: "神学家",
      pt: "teólogo",
      ko: "신학자",
      ar: "لاهوتي",
      hi: "धर्मशास्त्री"
    },
    ruleId: 'endings-loge-soph',
    isException: false
  },
  {
    word: "Geologe",
    article: "der",
    translations: {
      en: "geologist",
      ru: "геолог",
      de: "Geologe",
      es: "geólogo",
      fr: "géologue",
      ja: "地質学者",
      zh: "地质学家",
      pt: "geólogo",
      ko: "지질학자",
      ar: "جيولوجي",
      hi: "भूवैज्ञानिक"
    },
    ruleId: 'endings-loge-soph',
    isException: false
  },
  // Отглагольные без суффикса
  {
    word: "Lauf",
    article: "der",
    translations: {
      en: "run",
      ru: "бег",
      de: "Lauf",
      es: "carrera",
      fr: "course",
      ja: "走り",
      zh: "跑步",
      pt: "corrida",
      ko: "달리기",
      ar: "ركض",
      hi: "दौड़"
    },
    ruleId: 'verb-derived-no-suffix',
    isException: false
  },
  {
    word: "Sprung",
    article: "der",
    translations: {
      en: "jump",
      ru: "прыжок",
      de: "Sprung",
      es: "salto",
      fr: "saut",
      ja: "ジャンプ",
      zh: "跳跃",
      pt: "salto",
      ko: "점프",
      ar: "قفزة",
      hi: "कूद"
    },
    ruleId: 'verb-derived-no-suffix',
    isException: false
  },
  {
    word: "Gang",
    article: "der",
    translations: {
      en: "walk",
      ru: "ходьба",
      de: "Gang",
      es: "paseo",
      fr: "marche",
      ja: "歩行",
      zh: "行走",
      pt: "caminhada",
      ko: "걷기",
      ar: "مشي",
      hi: "चलना"
    },
    ruleId: 'verb-derived-no-suffix',
    isException: false
  },
  {
    word: "Fall",
    article: "der",
    translations: {
      en: "fall",
      ru: "падение",
      de: "Fall",
      es: "caída",
      fr: "chute",
      ja: "落下",
      zh: "坠落",
      pt: "queda",
      ko: "낙하",
      ar: "سقوط",
      hi: "गिरावट"
    },
    ruleId: 'verb-derived-no-suffix',
    isException: false
  },
  {
    word: "Ruf",
    article: "der",
    translations: {
      en: "call",
      ru: "зов",
      de: "Ruf",
      es: "llamada",
      fr: "appel",
      ja: "呼び声",
      zh: "呼唤",
      pt: "chamado",
      ko: "부름",
      ar: "نداء",
      hi: "आवाहन"
    },
    ruleId: 'verb-derived-no-suffix',
    isException: false
  },
  {
  word: "Montag",
  article: "der",
  translations: {
    en: "Monday",
    ru: "понедельник",
    de: "Montag",
    es: "lunes",
    fr: "lundi",
    ja: "月曜日",
    zh: "星期一",
    pt: "segunda-feira",
    ko: "월요일",
    ar: "الاثنين",
    hi: "सोमवार"
  },
  ruleId: 'days-months-seasons',
  isException: false
},
{
  word: "Juli",
  article: "der",
  translations: {
    en: "July",
    ru: "июль",
    de: "Juli",
    es: "julio",
    fr: "juillet",
    ja: "7月",
    zh: "七月",
    pt: "julho",
    ko: "7월",
    ar: "يوليو",
    hi: "जुलाई"
  },
  ruleId: 'days-months-seasons',
  isException: false
},
{
  word: "Dezember",
  article: "der",
  translations: {
    en: "December",
    ru: "декабрь",
    de: "Dezember",
    es: "diciembre",
    fr: "décembre",
    ja: "12月",
    zh: "十二月",
    pt: "dezembro",
    ko: "12월",
    ar: "ديسمبر",
    hi: "दिसंबर"
  },
  ruleId: 'days-months-seasons',
  isException: false
},
{
  word: "Herbst",
  article: "der",
  translations: {
    en: "autumn",
    ru: "осень",
    de: "Herbst",
    es: "otoño",
    fr: "automne",
    ja: "秋",
    zh: "秋天",
    pt: "outono",
    ko: "가을",
    ar: "خريف",
    hi: "पतझड़"
  },
  ruleId: 'days-months-seasons',
  isException: false
},
{
  word: "Regen",
  article: "der",
  translations: {
    en: "rain",
    ru: "дождь",
    de: "Regen",
    es: "lluvia",
    fr: "pluie",
    ja: "雨",
    zh: "雨",
    pt: "chuva",
    ko: "비",
    ar: "مطر",
    hi: "बारिश"
  },
  ruleId: 'weather-phenomena',
  isException: false
},
{
  word: "Schnee",
  article: "der",
  translations: {
    en: "snow",
    ru: "снег",
    de: "Schnee",
    es: "nieve",
    fr: "neige",
    ja: "雪",
    zh: "雪",
    pt: "neve",
    ko: "눈",
    ar: "ثلج",
    hi: "बर्फ"
  },
  ruleId: 'weather-phenomena',
  isException: false
},
{
  word: "Wind",
  article: "der",
  translations: {
    en: "wind",
    ru: "ветер",
    de: "Wind",
    es: "viento",
    fr: "vent",
    ja: "風",
    zh: "风",
    pt: "vento",
    ko: "바람",
    ar: "رياح",
    hi: "हवा"
  },
  ruleId: 'weather-phenomena',
  isException: false
},
{
  word: "Blitz",
  article: "der",
  translations: {
    en: "lightning",
    ru: "молния",
    de: "Blitz",
    es: "relámpago",
    fr: "éclair",
    ja: "稲妻",
    zh: "闪电",
    pt: "relâmpago",
    ko: "번개",
    ar: "برق",
    hi: "बिजली"
  },
  ruleId: 'weather-phenomena',
  isException: false
},
{
  word: "Nebel",
  article: "der",
  translations: {
    en: "fog",
    ru: "туман",
    de: "Nebel",
    es: "niebla",
    fr: "brouillard",
    ja: "霧",
    zh: "雾",
    pt: "nevoeiro",
    ko: "안개",
    ar: "ضباب",
    hi: "कोहरा"
  },
  ruleId: 'weather-phenomena',
  isException: false
},
{
  word: "Wein",
  article: "der",
  translations: {
    en: "wine",
    ru: "вино",
    de: "Wein",
    es: "vino",
    fr: "vin",
    ja: "ワイン",
    zh: "葡萄酒",
    pt: "vinho",
    ko: "와인",
    ar: "نبيذ",
    hi: "शराब"
  },
  ruleId: 'alcoholic-drinks',
  isException: false
},
{
  word: "Whisky",
  article: "der",
  translations: {
    en: "whisky",
    ru: "виски",
    de: "Whisky",
    es: "whisky",
    fr: "whisky",
    ja: "ウイスキー",
    zh: "威士忌",
    pt: "uísque",
    ko: "위스키",
    ar: "ويسكي",
    hi: "व्हिस्की"
  },
  ruleId: 'alcoholic-drinks',
  isException: false
},
{
  word: "Wodka",
  article: "der",
  translations: {
    en: "vodka",
    ru: "водка",
    de: "Wodka",
    es: "vodka",
    fr: "vodka",
    ja: "ウォッカ",
    zh: "伏特加",
    pt: "vodka",
    ko: "보드카",
    ar: "فودكا",
    hi: "वोदका"
  },
  ruleId: 'alcoholic-drinks',
  isException: false
},
{
  word: "Sekt",
  article: "der",
  translations: {
    en: "sparkling wine",
    ru: "игристое",
    de: "Sekt",
    es: "vino espumoso",
    fr: "vin mousseux",
    ja: "スパークリングワイン",
    zh: "起泡酒",
    pt: "vinho espumante",
    ko: "스파클링 와인",
    ar: "نبيذ فوار",
    hi: "स्पार्कलिंग वाइन"
  },
  ruleId: 'alcoholic-drinks',
  isException: false
},
{
  word: "Rum",
  article: "der",
  translations: {
    en: "rum",
    ru: "ром",
    de: "Rum",
    es: "ron",
    fr: "rhum",
    ja: "ラム",
    zh: "朗姆酒",
    pt: "rum",
    ko: "럼",
    ar: "رم",
    hi: "रम"
  },
  ruleId: 'alcoholic-drinks',
  isException: false
},
{
  word: "Norden",
  article: "der",
  translations: {
    en: "north",
    ru: "север",
    de: "Norden",
    es: "norte",
    fr: "nord",
    ja: "北",
    zh: "北",
    pt: "norte",
    ko: "북쪽",
    ar: "شمال",
    hi: "उत्तर"
  },
  ruleId: 'cardinal-directions',
  isException: false
},
{
  word: "Süden",
  article: "der",
  translations: {
    en: "south",
    ru: "юг",
    de: "Süden",
    es: "sur",
    fr: "sud",
    ja: "南",
    zh: "南",
    pt: "sul",
    ko: "남쪽",
    ar: "جنوب",
    hi: "दक्षिण"
  },
  ruleId: 'cardinal-directions',
  isException: false
},
{
  word: "Osten",
  article: "der",
  translations: {
    en: "east",
    ru: "восток",
    de: "Osten",
    es: "este",
    fr: "est",
    ja: "東",
    zh: "东",
    pt: "leste",
    ko: "동쪽",
    ar: "شرق",
    hi: "पूर्व"
  },
  ruleId: 'cardinal-directions',
  isException: false
},
{
  word: "Westen",
  article: "der",
  translations: {
    en: "west",
    ru: "запад",
    de: "Westen",
    es: "oeste",
    fr: "ouest",
    ja: "西",
    zh: "西",
    pt: "oeste",
    ko: "서쪽",
    ar: "غرب",
    hi: "पश्चिम"
  },
  ruleId: 'cardinal-directions',
  isException: false
},
{
  word: "Nordwesten",
  article: "der",
  translations: {
    en: "northwest",
    ru: "северо-запад",
    de: "Nordwesten",
    es: "noroeste",
    fr: "nord-ouest",
    ja: "北西",
    zh: "西北",
    pt: "noroeste",
    ko: "북서쪽",
    ar: "شمال غرب",
    hi: "उत्तर पश्चिम"
  },
  ruleId: 'cardinal-directions',
  isException: false
},
{
  word: "BMW",
  article: "der",
  translations: {
    en: "BMW",
    ru: "БМВ",
    de: "BMW",
    es: "BMW",
    fr: "BMW",
    ja: "BMW",
    zh: "宝马",
    pt: "BMW",
    ko: "BMW",
    ar: "بي إم دبليو",
    hi: "बीएमडब्ल्यू"
  },
  ruleId: 'car-brands',
  isException: false
},
{
  word: "Mercedes",
  article: "der",
  translations: {
    en: "Mercedes",
    ru: "Мерседес",
    de: "Mercedes",
    es: "Mercedes",
    fr: "Mercedes",
    ja: "メルセデス",
    zh: "梅赛德斯",
    pt: "Mercedes",
    ko: "메르세데스",
    ar: "مرسيدس",
    hi: "मर्सिडीज़"
  },
  ruleId: 'car-brands',
  isException: false
},
{
  word: "Toyota",
  article: "der",
  translations: {
    en: "Toyota",
    ru: "Тойота",
    de: "Toyota",
    es: "Toyota",
    fr: "Toyota",
    ja: "トヨタ",
    zh: "丰田",
    pt: "Toyota",
    ko: "도요타",
    ar: "تويوتا",
    hi: "टोयोटा"
  },
  ruleId: 'car-brands',
  isException: false
},
{
  word: "Volkswagen",
  article: "der",
  translations: {
    en: "Volkswagen",
    ru: "Фольксваген",
    de: "Volkswagen",
    es: "Volkswagen",
    fr: "Volkswagen",
    ja: "フォルクスワーゲン",
    zh: "大众",
    pt: "Volkswagen",
    ko: "폭스바겐",
    ar: "فولكس فاجن",
    hi: "फोल्क्सवैगन"
  },
  ruleId: 'car-brands',
  isException: false
},
{
  word: "Audi",
  article: "der",
  translations: {
    en: "Audi",
    ru: "Ауди",
    de: "Audi",
    es: "Audi",
    fr: "Audi",
    ja: "アウディ",
    zh: "奥迪",
    pt: "Audi",
    ko: "아우디",
    ar: "أودي",
    hi: "ऑडी"
  },
  ruleId: 'car-brands',
  isException: false
},
{
  word: "Harley Davidson",
  article: "die",
  translations: {
    en: "Harley Davidson",
    ru: "Харлей Дэвидсон",
    de: "Harley Davidson",
    es: "Harley Davidson",
    fr: "Harley Davidson",
    ja: "ハーレーダビッドソン",
    zh: "哈雷戴维森",
    pt: "Harley Davidson",
    ko: "할리데이비슨",
    ar: "هارلي ديفيدسون",
    hi: "हार्ले डेविडसन"
  },
  ruleId: 'motorcycle-brands',
  isException: false
},
{
  word: "Suzuki",
  article: "die",
  translations: {
    en: "Suzuki",
    ru: "Сузуки",
    de: "Suzuki",
    es: "Suzuki",
    fr: "Suzuki",
    ja: "スズキ",
    zh: "铃木",
    pt: "Suzuki",
    ko: "스즈키",
    ar: "سوزوكي",
    hi: "सुज़ुकी"
  },
  ruleId: 'motorcycle-brands',
  isException: false
},
{
  word: "Triumph",
  article: "die",
  translations: {
    en: "Triumph",
    ru: "Триумф",
    de: "Triumph",
    es: "Triumph",
    fr: "Triumph",
    ja: "トライアンフ",
    zh: "凯旋",
    pt: "Triumph",
    ko: "트라이엄프",
    ar: "تريومف",
    hi: "ट्रायम्फ"
  },
  ruleId: 'motorcycle-brands',
  isException: false
},
{
  word: "Yamaha",
  article: "die",
  translations: {
    en: "Yamaha",
    ru: "Ямаха",
    de: "Yamaha",
    es: "Yamaha",
    fr: "Yamaha",
    ja: "ヤマハ",
    zh: "雅马哈",
    pt: "Yamaha",
    ko: "야마하",
    ar: "ياماها",
    hi: "यामाहा"
  },
  ruleId: 'motorcycle-brands',
  isException: false
},
{
  word: "Ducati",
  article: "die",
  translations: {
    en: "Ducati",
    ru: "Дукати",
    de: "Ducati",
    es: "Ducati",
    fr: "Ducati",
    ja: "ドゥカティ",
    zh: "杜卡迪",
    pt: "Ducati",
    ko: "두카티",
    ar: "دوكاتي",
    hi: "डुकाटी"
  },
  ruleId: 'motorcycle-brands',
  isException: false
},
{
  word: "Everest",
  article: "der",
  translations: {
    en: "Everest",
    ru: "Эверест",
    de: "Everest",
    es: "Everest",
    fr: "Everest",
    ja: "エベレスト",
    zh: "珠穆朗玛峰",
    pt: "Everest",
    ko: "에베레스트",
    ar: "إيفرست",
    hi: "एवरेस्ट"
  },
  ruleId: 'mountains',
  isException: false
},
{
  word: "Himalaya",
  article: "der",
  translations: {
    en: "Himalayas",
    ru: "Гималаи",
    de: "Himalaya",
    es: "Himalaya",
    fr: "Himalaya",
    ja: "ヒマラヤ",
    zh: "喜马拉雅山",
    pt: "Himalaia",
    ko: "히말라야",
    ar: "الهيمالايا",
    hi: "हिमालय"
  },
  ruleId: 'mountains',
  isException: false
},
{
  word: "Harz",
  article: "der",
  translations: {
    en: "Harz",
    ru: "Гарц",
    de: "Harz",
    es: "Harz",
    fr: "Harz",
    ja: "ハルツ",
    zh: "哈尔茨",
    pt: "Harz",
    ko: "하르츠",
    ar: "هارز",
    hi: "हार्ज़"
  },
  ruleId: 'mountains',
  isException: false
},
{
  word: "Kilimandscharo",
  article: "der",
  translations: {
    en: "Kilimanjaro",
    ru: "Килиманджаро",
    de: "Kilimandscharo",
    es: "Kilimanjaro",
    fr: "Kilimandjaro",
    ja: "キリマンジャロ",
    zh: "乞力马扎罗山",
    pt: "Kilimanjaro",
    ko: "킬리만자로",
    ar: "كليمنجارو",
    hi: "किलिमंजारो"
  },
  ruleId: 'mountains',
  isException: false
},
{
  word: "Fuji",
  article: "der",
  translations: {
    en: "Fuji",
    ru: "Фудзияма",
    de: "Fuji",
    es: "Fuji",
    fr: "Fuji",
    ja: "富士山",
    zh: "富士山",
    pt: "Fuji",
    ko: "후지산",
    ar: "فوجي",
    hi: "फ़ुजी"
  },
  ruleId: 'mountains',
  isException: false
},
{
  word: "Donau",
  article: "die",
  translations: {
    en: "Danube",
    ru: "Дунай",
    de: "Donau",
    es: "Danubio",
    fr: "Danube",
    ja: "ドナウ川",
    zh: "多瑙河",
    pt: "Danúbio",
    ko: "도나우강",
    ar: "دانوب",
    hi: "डैन्यूब"
  },
  ruleId: 'rivers-inside-germany',
  isException: false
},
{
  word: "Mosel",
  article: "die",
  translations: {
    en: "Moselle",
    ru: "Мозель",
    de: "Mosel",
    es: "Mosela",
    fr: "Moselle",
    ja: "モーゼル川",
    zh: "摩泽尔河",
    pt: "Mosela",
    ko: "모젤강",
    ar: "موزل",
    hi: "मोसेल"
  },
  ruleId: 'rivers-inside-germany',
  isException: false
},
{
  word: "Spree",
  article: "die",
  translations: {
    en: "Spree",
    ru: "Шпрее",
    de: "Spree",
    es: "Spree",
    fr: "Spree",
    ja: "シュプレー川",
    zh: "施普雷河",
    pt: "Spree",
    ko: "슈프레강",
    ar: "شبريه",
    hi: "स्प्री"
  },
  ruleId: 'rivers-inside-germany',
  isException: false
},
{
  word: "Elbe",
  article: "die",
  translations: {
    en: "Elbe",
    ru: "Эльба",
    de: "Elbe",
    es: "Elba",
    fr: "Elbe",
    ja: "エルベ川",
    zh: "易北河",
    pt: "Elba",
    ko: "엘베강",
    ar: "إلبه",
    hi: "एल्बे"
  },
  ruleId: 'rivers-inside-germany',
  isException: false
},
{
  word: "Oder",
  article: "die",
  translations: {
    en: "Oder",
    ru: "Одер",
    de: "Oder",
    es: "Oder",
    fr: "Oder",
    ja: "オーデル川",
    zh: "奥得河",
    pt: "Oder",
    ko: "오데르강",
    ar: "أودر",
    hi: "ओदेर"
  },
  ruleId: 'rivers-inside-germany',
  isException: false
},
{
  word: "Newa",
  article: "die",
  translations: {
    en: "Neva",
    ru: "Нева",
    de: "Newa",
    es: "Neva",
    fr: "Neva",
    ja: "ネヴァ川",
    zh: "涅瓦河",
    pt: "Neva",
    ko: "네파강",
    ar: "نيفا",
    hi: "नेवा"
  },
  ruleId: 'rivers-outside-germany',
  isException: false
},
{
  word: "Seine",
  article: "die",
  translations: {
    en: "Seine",
    ru: "Сена",
    de: "Seine",
    es: "Sena",
    fr: "Seine",
    ja: "セーヌ川",
    zh: "塞纳河",
    pt: "Sena",
    ko: "센강",
    ar: "السين",
    hi: "सेन"
  },
  ruleId: 'rivers-outside-germany',
  isException: false
},
{
  word: "Themse",
  article: "die",
  translations: {
    en: "Thames",
    ru: "Темза",
    de: "Themse",
    es: "Támesis",
    fr: "Tamise",
    ja: "テムズ川",
    zh: "泰晤士河",
    pt: "Tamisa",
    ko: "템스강",
    ar: "التايمز",
    hi: "थेम्स"
  },
  ruleId: 'rivers-outside-germany',
  isException: false
},
{
  word: "Don",
  article: "der",
  translations: {
    en: "Don",
    ru: "Дон",
    de: "Don",
    es: "Don",
    fr: "Don",
    ja: "ドン川",
    zh: "顿河",
    pt: "Don",
    ko: "돈강",
    ar: "دون",
    hi: "डॉन"
  },
  ruleId: 'rivers-outside-germany',
  isException: true
},
{
  word: "Tomate",
  article: "die",
  translations: {
    en: "tomato",
    ru: "помидор",
    de: "Tomate",
    es: "tomate",
    fr: "tomate",
    ja: "トマト",
    zh: "番茄",
    pt: "tomate",
    ko: "토마토",
    ar: "طماطم",
    hi: "टमाटर"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: false
},
{
  word: "Gurke",
  article: "die",
  translations: {
    en: "cucumber",
    ru: "огурец",
    de: "Gurke",
    es: "pepino",
    fr: "concombre",
    ja: "キュウリ",
    zh: "黄瓜",
    pt: "pepino",
    ko: "오이",
    ar: "خيار",
    hi: "खीरा"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: false
},
{
  word: "Rose",
  article: "die",
  translations: {
    en: "rose",
    ru: "роза",
    de: "Rose",
    es: "rosa",
    fr: "rose",
    ja: "バラ",
    zh: "玫瑰",
    pt: "rosa",
    ko: "장미",
    ar: "وردة",
    hi: "गुलाब"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: false
},
{
  word: "Apfelsine",
  article: "die",
  translations: {
    en: "orange",
    ru: "апельсин",
    de: "Apfelsine",
    es: "naranja",
    fr: "orange",
    ja: "オレンジ",
    zh: "橙子",
    pt: "laranja",
    ko: "오렌지",
    ar: "برتقال",
    hi: "संतरा"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: false
},
{
  word: "Zeder",
  article: "die",
  translations: {
    en: "cedar",
    ru: "кедр",
    de: "Zeder",
    es: "cedro",
    fr: "cèdre",
    ja: "杉",
    zh: "雪松",
    pt: "cedro",
    ko: "삼나무",
    ar: "أرز",
    hi: "देवदार"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: false
},
{
  word: "Mann",
  article: "der",
  translations: {
    en: "man",
    ru: "мужчина",
    de: "Mann",
    es: "hombre",
    fr: "homme",
    ja: "男",
    zh: "男人",
    pt: "homem",
    ko: "남자",
    ar: "رجل",
    hi: "आदमी"
  },
  ruleId: 'male-persons',
  isException: false
},
{
  word: "Vater",
  article: "der",
  translations: {
    en: "father",
    ru: "отец",
    de: "Vater",
    es: "padre",
    fr: "père",
    ja: "父",
    zh: "父亲",
    pt: "pai",
    ko: "아버지",
    ar: "أب",
    hi: "पिता"
  },
  ruleId: 'male-persons',
  isException: false
},
{
  word: "Arzt",
  article: "der",
  translations: {
    en: "doctor",
    ru: "врач",
    de: "Arzt",
    es: "médico",
    fr: "médecin",
    ja: "医者",
    zh: "医生",
    pt: "médico",
    ko: "의사",
    ar: "طبيب",
    hi: "डॉक्टर"
  },
  ruleId: 'male-persons',
  isException: false
},
{
  word: "Ingenieur",
  article: "der",
  translations: {
    en: "engineer",
    ru: "инженер",
    de: "Ingenieur",
    es: "ingeniero",
    fr: "ingénieur",
    ja: "エンジニア",
    zh: "工程师",
    pt: "engenheiro",
    ko: "엔지니어",
    ar: "مهندس",
    hi: "इंजीनियर"
  },
  ruleId: 'male-persons',
  isException: false
},
{
  word: "Bruder",
  article: "der",
  translations: {
    en: "brother",
    ru: "брат",
    de: "Bruder",
    es: "hermano",
    fr: "frère",
    ja: "兄弟",
    zh: "兄弟",
    pt: "irmão",
    ko: "형제",
    ar: "أخ",
    hi: "भाई"
  },
  ruleId: 'male-persons',
  isException: false
},
{
  word: "Frau",
  article: "die",
  translations: {
    en: "woman",
    ru: "женщина",
    de: "Frau",
    es: "mujer",
    fr: "femme",
    ja: "女性",
    zh: "女人",
    pt: "mulher",
    ko: "여자",
    ar: "امرأة",
    hi: "महिला"
  },
  ruleId: 'female-persons',
  isException: false
},
{
  word: "Mutter",
  article: "die",
  translations: {
    en: "mother",
    ru: "мать",
    de: "Mutter",
    es: "madre",
    fr: "mère",
    ja: "母",
    zh: "母亲",
    pt: "mãe",
    ko: "어머니",
    ar: "أم",
    hi: "माँ"
  },
  ruleId: 'female-persons',
  isException: false
},
{
  word: "Ärztin",
  article: "die",
  translations: {
    en: "female doctor",
    ru: "врач (жен.)",
    de: "Ärztin",
    es: "médica",
    fr: "médecin femme",
    ja: "女医",
    zh: "女医生",
    pt: "médica",
    ko: "여의사",
    ar: "طبيبة",
    hi: "महिला डॉक्टर"
  },
  ruleId: 'female-persons',
  isException: false
},
{
  word: "Lehrerin",
  article: "die",
  translations: {
    en: "female teacher",
    ru: "учительница",
    de: "Lehrerin",
    es: "profesora",
    fr: "enseignante",
    ja: "女性教師",
    zh: "女教师",
    pt: "professora",
    ko: "여선생님",
    ar: "مدرسة",
    hi: "शिक्षिका"
  },
  ruleId: 'female-persons',
  isException: false
},
{
  word: "Schwester",
  article: "die",
  translations: {
    en: "sister",
    ru: "сестра",
    de: "Schwester",
    es: "hermana",
    fr: "sœur",
    ja: "姉妹",
    zh: "姐妹",
    pt: "irmã",
    ko: "자매",
    ar: "أخت",
    hi: "बहन"
  },
  ruleId: 'female-persons',
  isException: false
},
{
  word: "Boeing",
  article: "die",
  translations: {
    en: "Boeing",
    ru: "Боинг",
    de: "Boeing",
    es: "Boeing",
    fr: "Boeing",
    ja: "ボーイング",
    zh: "波音",
    pt: "Boeing",
    ko: "보잉",
    ar: "بوينغ",
    hi: "बोइंग"
  },
  ruleId: 'ships-airplanes',
  isException: false
},
{
  word: "Concorde",
  article: "die",
  translations: {
    en: "Concorde",
    ru: "Конкорд",
    de: "Concorde",
    es: "Concorde",
    fr: "Concorde",
    ja: "コンコルド",
    zh: "协和式飞机",
    pt: "Concorde",
    ko: "콘코르드",
    ar: "كونكورد",
    hi: "कॉन्कॉर्ड"
  },
  ruleId: 'ships-airplanes',
  isException: false
},
{
  word: "Titanic",
  article: "die",
  translations: {
    en: "Titanic",
    ru: "Титаник",
    de: "Titanic",
    es: "Titanic",
    fr: "Titanic",
    ja: "タイタニック",
    zh: "泰坦尼克号",
    pt: "Titanic",
    ko: "타이타닉",
    ar: "تايتانيك",
    hi: "टाइटैनिक"
  },
  ruleId: 'ships-airplanes',
  isException: false
},
{
  word: "Gorch Fock",
  article: "die",
  translations: {
    en: "Gorch Fock",
    ru: "Горх Фок",
    de: "Gorch Fock",
    es: "Gorch Fock",
    fr: "Gorch Fock",
    ja: "ゴルヒ・フォック",
    zh: "戈尔希·福克号",
    pt: "Gorch Fock",
    ko: "고르히 포크",
    ar: "غورش فوك",
    hi: "गोर्च फॉक"
  },
  ruleId: 'ships-airplanes',
  isException: false
},
{
  word: "Queen Mary",
  article: "die",
  translations: {
    en: "Queen Mary",
    ru: "Куин Мэри",
    de: "Queen Mary",
    es: "Queen Mary",
    fr: "Queen Mary",
    ja: "クイーン・メリー",
    zh: "玛丽皇后号",
    pt: "Queen Mary",
    ko: "퀸 메리",
    ar: "كوين ماري",
    hi: "क्वीन मैरी"
  },
  ruleId: 'ships-airplanes',
  isException: false
},
{
  word: "Eins",
  article: "die",
  translations: {
    en: "one",
    ru: "один",
    de: "Eins",
    es: "uno",
    fr: "un",
    ja: "一",
    zh: "一",
    pt: "um",
    ko: "하나",
    ar: "واحد",
    hi: "एक"
  },
  ruleId: 'cardinal-numbers',
  isException: false
},
{
  word: "Drei",
  article: "die",
  translations: {
    en: "three",
    ru: "три",
    de: "Drei",
    es: "tres",
    fr: "trois",
    ja: "三",
    zh: "三",
    pt: "três",
    ko: "셋",
    ar: "ثلاثة",
    hi: "तीन"
  },
  ruleId: 'cardinal-numbers',
  isException: false
},
{
  word: "Sieben",
  article: "die",
  translations: {
    en: "seven",
    ru: "семь",
    de: "Sieben",
    es: "siete",
    fr: "sept",
    ja: "七",
    zh: "七",
    pt: "sete",
    ko: "일곱",
    ar: "سبعة",
    hi: "सात"
  },
  ruleId: 'cardinal-numbers',
  isException: false
},
{
  word: "Neun",
  article: "die",
  translations: {
    en: "nine",
    ru: "девять",
    de: "Neun",
    es: "nueve",
    fr: "neuf",
    ja: "九",
    zh: "九",
    pt: "nove",
    ko: "아홉",
    ar: "تسعة",
    hi: "नौ"
  },
  ruleId: 'cardinal-numbers',
  isException: false
},
{
  word: "Million",
  article: "die",
  translations: {
    en: "million",
    ru: "миллион",
    de: "Million",
    es: "millón",
    fr: "million",
    ja: "百万",
    zh: "百万",
    pt: "milhão",
    ko: "백만",
    ar: "مليون",
    hi: "मिलियन"
  },
  ruleId: 'cardinal-numbers',
  isException: false
},
{
  word: "Sonne",
  article: "die",
  translations: {
    en: "sun",
    ru: "солнце",
    de: "Sonne",
    es: "sol",
    fr: "soleil",
    ja: "太陽",
    zh: "太阳",
    pt: "sol",
    ko: "태양",
    ar: "شمس",
    hi: "सूरज"
  },
  ruleId: 'exceptions-die',
  isException: true
},
{
  word: "Erde",
  article: "die",
  translations: {
    en: "earth",
    ru: "земля",
    de: "Erde",
    es: "tierra",
    fr: "terre",
    ja: "地球",
    zh: "地球",
    pt: "terra",
    ko: "지구",
    ar: "أرض",
    hi: "पृथ्वी"
  },
  ruleId: 'exceptions-die',
  isException: true
},
{
  word: "Butter",
  article: "die",
  translations: {
    en: "butter",
    ru: "масло",
    de: "Butter",
    es: "mantequilla",
    fr: "beurre",
    ja: "バター",
    zh: "黄油",
    pt: "manteiga",
    ko: "버터",
    ar: "زبدة",
    hi: "मक्खन"
  },
  ruleId: 'endings-er',
  isException: true,
},
{
  word: "Tochter",
  article: "die",
  translations: {
    en: "daughter",
    ru: "дочь",
    de: "Tochter",
    es: "hija",
    fr: "fille",
    ja: "娘",
    zh: "女儿",
    pt: "filha",
    ko: "딸",
    ar: "ابنة",
    hi: "बेटी"
  },
  ruleId: 'exceptions-die',
  isException: true
},
{
  word: "Woche",
  article: "die",
  translations: {
    en: "week",
    ru: "неделя",
    de: "Woche",
    es: "semana",
    fr: "semaine",
    ja: "週間",
    zh: "周",
    pt: "semana",
    ko: "주",
    ar: "أسبوع",
    hi: "सप्ताह"
  },
  ruleId: 'days-months-seasons',
  isException: true,
},
{
  word: "Alpen",
  article: "die",
  translations: {
    en: "Alps",
    ru: "Альпы",
    de: "Alpen",
    es: "Alpes",
    fr: "Alpes",
    ja: "アルプス",
    zh: "阿尔卑斯山",
    pt: "Alpes",
    ko: "알프스",
    ar: "الألب",
    hi: "एल्प्स"
  },
  ruleId: 'mountains',
  isException: true
},
{
  word: "Anden",
  article: "die",
  translations: {
    en: "Andes",
    ru: "Анды",
    de: "Anden",
    es: "Andes",
    fr: "Andes",
    ja: "アンデス",
    zh: "安第斯山脉",
    pt: "Andes",
    ko: "안데스",
    ar: "أنديز",
    hi: "एंडीज़"
  },
  ruleId: 'mountains',
  isException: true
},
{
  word: "Pyrenäen",
  article: "die",
  translations: {
    en: "Pyrenees",
    ru: "Пиренеи",
    de: "Pyrenäen",
    es: "Pirineos",
    fr: "Pyrénées",
    ja: "ピレネー山脈",
    zh: "比利牛斯山脉",
    pt: "Pirineus",
    ko: "피레네 산맥",
    ar: "البيرينيه",
    hi: "पिरेनीज़"
  },
  ruleId: 'mountains',
  isException: true
},
{
  word: "Kordilleren",
  article: "die",
  translations: {
    en: "Cordilleras",
    ru: "Кордильеры",
    de: "Kordilleren",
    es: "Cordilleras",
    fr: "Cordillères",
    ja: "コルディリェラ山脈",
    zh: "科迪勒拉山系",
    pt: "Cordilheiras",
    ko: "코디예라",
    ar: "كورديليرا",
    hi: "कॉर्डिलेरा"
  },
  ruleId: 'mountains',
  isException: true,
},
{
  word: "Hälfte",
  article: "die",
  translations: {
    en: "half",
    ru: "половина",
    de: "Hälfte",
    es: "mitad",
    fr: "moitié",
    ja: "半分",
    zh: "一半",
    pt: "metade",
    ko: "절반",
    ar: "نصف",
    hi: "आधा"
  },
  ruleId: 'fractions',
  isException: true
},
{
  word: "Fenster",
  article: "das",
  translations: {
    en: "window",
    ru: "окно",
    de: "Fenster",
    es: "ventana",
    fr: "fenêtre",
    ja: "窓",
    zh: "窗户",
    pt: "janela",
    ko: "창문",
    ar: "نافذة",
    hi: "खिड़की"
  },
  ruleId: 'endings-er',
  isException: true
},
{
  word: "Wasser",
  article: "das",
  translations: {
    en: "water",
    ru: "вода",
    de: "Wasser",
    es: "agua",
    fr: "eau",
    ja: "水",
    zh: "水",
    pt: "água",
    ko: "물",
    ar: "ماء",
    hi: "पानी"
  },
  ruleId: 'endings-er',
  isException: true
},
{
  word: "Messer",
  article: "das",
  translations: {
    en: "knife",
    ru: "нож",
    de: "Messer",
    es: "cuchillo",
    fr: "couteau",
    ja: "ナイフ",
    zh: "刀",
    pt: "faca",
    ko: "칼",
    ar: "سكين",
    hi: "चाकू"
  },
  ruleId: 'endings-er',
  isException: true
},
{
  word: "Bier",
  article: "das",
  translations: {
    en: "beer",
    ru: "пиво",
    de: "Bier",
    es: "cerveza",
    fr: "bière",
    ja: "ビール",
    zh: "啤酒",
    pt: "cerveja",
    ko: "맥주",
    ar: "بيرة",
    hi: "बीयर"
  },
  ruleId: 'alcoholic-drinks',
  isException: true
},
{
  word: "Kind",
  article: "das",
  translations: {
    en: "child",
    ru: "ребёнок",
    de: "Kind",
    es: "niño",
    fr: "enfant",
    ja: "子供",
    zh: "孩子",
    pt: "criança",
    ko: "아이",
    ar: "طفل",
    hi: "बच्चा"
  },
  ruleId: 'exceptions-das',
  isException: true
},
{
  word: "Attentat",
  article: "das",
  translations: {
    en: "assassination",
    ru: "покушение",
    de: "Attentat",
    es: "atentado",
    fr: "attentat",
    ja: "暗殺",
    zh: "暗杀",
    pt: "atentado",
    ko: "암살",
    ar: "اغتيال",
    hi: "हत्या"
  },
  ruleId: 'endings-t',
  isException: true
},
{
  word: "Jahr",
  article: "das",
  translations: {
    en: "year",
    ru: "год",
    de: "Jahr",
    es: "año",
    fr: "année",
    ja: "年",
    zh: "年",
    pt: "ano",
    ko: "년",
    ar: "سنة",
    hi: "साल"
  },
  ruleId: 'days-months-seasons',
  isException: true
},
{
  word: "Hundert",
  article: "das",
  translations: {
    en: "hundred",
    ru: "сто",
    de: "Hundert",
    es: "cien",
    fr: "cent",
    ja: "百",
    zh: "百",
    pt: "cem",
    ko: "백",
    ar: "مائة",
    hi: "सौ"
  },
  ruleId: 'cardinal-numbers',
  isException: true
},
{
  word: "Tausend",
  article: "das",
  translations: {
    en: "thousand",
    ru: "тысяча",
    de: "Tausend",
    es: "mil",
    fr: "mille",
    ja: "千",
    zh: "千",
    pt: "mil",
    ko: "천",
    ar: "ألف",
    hi: "हज़ार"
  },
  ruleId: 'cardinal-numbers',
  isException: true
},
{
  word: "Dutzend",
  article: "das",
  translations: {
    en: "dozen",
    ru: "дюжина",
    de: "Dutzend",
    es: "docena",
    fr: "douzaine",
    ja: "ダース",
    zh: "打",
    pt: "dúzia",
    ko: "다스",
    ar: "دزينة",
    hi: "दर्जन"
  },
  ruleId: 'cardinal-numbers',
  isException: true
},
{
  word: "Veilchen",
  article: "das",
  translations: {
    en: "violet",
    ru: "фиалка",
    de: "Veilchen",
    es: "violeta",
    fr: "violette",
    ja: "スミレ",
    zh: "紫罗兰",
    pt: "violeta",
    ko: "제비꽃",
    ar: "بنفسج",
    hi: "बैंगनी"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: true
},
{
  word: "Vergissmeinnicht",
  article: "das",
  translations: {
    en: "forget-me-not",
    ru: "незабудка",
    de: "Vergissmeinnicht",
    es: "nomeolvides",
    fr: "myosotis",
    ja: "ワスレナグサ",
    zh: "勿忘我",
    pt: "não-me-esqueças",
    ko: "물망초",
    ar: "لا تنساني",
    hi: "फॉरगेट-मी-नॉट"
  },
  ruleId: 'exceptions-das',
  isException: true,
  exceptionTo: 'flowers-fruits-vegetables'
},
{
  word: "Stiefmütterchen",
  article: "das",
  translations: {
    en: "pansy",
    ru: "фиалка трёхцветная",
    de: "Stiefmütterchen",
    es: "pensamiento",
    fr: "pensée",
    ja: "パンジー",
    zh: "三色堇",
    pt: "amor-perfeito",
    ko: "팬지",
    ar: "بنفسج ثلاثي الألوان",
    hi: "पैंसी"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: true
},
{
  word: "Kaffee",
  article: "der",
  translations: {
    en: "coffee",
    ru: "кофе",
    de: "Kaffee",
    es: "café",
    fr: "café",
    ja: "コーヒー",
    zh: "咖啡",
    pt: "café",
    ko: "커피",
    ar: "قهوة",
    hi: "कॉफी"
  },
  ruleId: 'exceptions-der',
  isException: true
},
{
  word: "Tee",
  article: "der",
  translations: {
    en: "tea",
    ru: "чай",
    de: "Tee",
    es: "té",
    fr: "thé",
    ja: "お茶",
    zh: "茶",
    pt: "chá",
    ko: "차",
    ar: "شاي",
    hi: "चाय"
  },
  ruleId: 'exceptions-der',
  isException: true
},
{
  word: "Joghurt",
  article: "der",
  translations: {
    en: "yogurt",
    ru: "йогурт",
    de: "Joghurt",
    es: "yogur",
    fr: "yaourt",
    ja: "ヨーグルト",
    zh: "酸奶",
    pt: "iogurte",
    ko: "요거트",
    ar: "لبن زبادي",
    hi: "दही"
  },
  ruleId: 'exceptions-der',
  isException: true
},
{
  word: "Meter",
  article: "der",
  translations: {
    en: "meter",
    ru: "метр",
    de: "Meter",
    es: "metro",
    fr: "mètre",
    ja: "メートル",
    zh: "米",
    pt: "metro",
    ko: "미터",
    ar: "متر",
    hi: "मीटर"
  },
  ruleId: 'exceptions-der',
  isException: true
},
{
  word: "Saft",
  article: "der",
  translations: {
    en: "juice",
    ru: "сок",
    de: "Saft",
    es: "zumo",
    fr: "jus",
    ja: "ジュース",
    zh: "果汁",
    pt: "suco",
    ko: "주스",
    ar: "عصير",
    hi: "रस"
  },
  ruleId: 'exceptions-der',
  isException: true
},
{
  word: "Ahorn",
  article: "der",
  translations: {
    en: "maple",
    ru: "клён",
    de: "Ahorn",
    es: "arce",
    fr: "érable",
    ja: "カエデ",
    zh: "枫树",
    pt: "bordo",
    ko: "단풍나무",
    ar: "قيقب",
    hi: "मेपल"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: true
},
{
  word: "Mohn",
  article: "der",
  translations: {
    en: "poppy",
    ru: "мак",
    de: "Mohn",
    es: "amapola",
    fr: "coquelicot",
    ja: "ケシ",
    zh: "罂粟",
    pt: "papoula",
    ko: "양귀비",
    ar: "خشخاش",
    hi: "खसखस"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: true
},
{
  word: "Kürbis",
  article: "der",
  translations: {
    en: "pumpkin",
    ru: "тыква",
    de: "Kürbis",
    es: "calabaza",
    fr: "citrouille",
    ja: "カボチャ",
    zh: "南瓜",
    pt: "abóbora",
    ko: "호박",
    ar: "يقطين",
    hi: "कद्दू"
  },
  ruleId: 'flowers-fruits-vegetables',
  isException: true
},
{
  word: "Rhein",
  article: "der",
  translations: {
    en: "Rhine",
    ru: "Рейн",
    de: "Rhein",
    es: "Rin",
    fr: "Rhin",
    ja: "ライン川",
    zh: "莱茵河",
    pt: "Reno",
    ko: "라인강",
    ar: "راين",
    hi: "राइन"
  },
  ruleId: 'rivers-inside-germany',
  isException: true
},
{
  word: "Nil",
  article: "der",
  translations: {
    en: "Nile",
    ru: "Нил",
    de: "Nil",
    es: "Nilo",
    fr: "Nil",
    ja: "ナイル川",
    zh: "尼罗河",
    pt: "Nilo",
    ko: "나일강",
    ar: "نيل",
    hi: "नील"
  },
  ruleId: 'rivers-outside-germany',
  isException: true
},
{
  word: "Amazonas",
  article: "der",
  translations: {
    en: "Amazon",
    ru: "Амазонка",
    de: "Amazonas",
    es: "Amazonas",
    fr: "Amazone",
    ja: "アマゾン川",
    zh: "亚马逊河",
    pt: "Amazonas",
    ko: "아마존강",
    ar: "أمازون",
    hi: "अमेज़न"
  },
  ruleId: 'rivers-outside-germany',
  isException: true
},
{
  word: "Ganges",
  article: "der",
  translations: {
    en: "Ganges",
    ru: "Ганг",
    de: "Ganges",
    es: "Ganges",
    fr: "Gange",
    ja: "ガンジス川",
    zh: "恒河",
    pt: "Ganges",
    ko: "간지스강",
    ar: "غانج",
    hi: "गंगा"
  },
  ruleId: 'rivers-outside-germany',
  isException: true
},
{
  word: "Main",
  article: "der",
  translations: {
    en: "Main",
    ru: "Майн",
    de: "Main",
    es: "Main",
    fr: "Main",
    ja: "マイン川",
    zh: "美因河",
    pt: "Main",
    ko: "마인강",
    ar: "ماين",
    hi: "मेन"
  },
  ruleId: 'rivers-inside-germany',
  isException: true
},
{
  word: "Neckar",
  article: "der",
  translations: {
    en: "Neckar",
    ru: "Неккар",
    de: "Neckar",
    es: "Neckar",
    fr: "Neckar",
    ja: "ネッカー川",
    zh: "内卡河",
    pt: "Neckar",
    ko: "네크카르강",
    ar: "نكّار",
    hi: "नेकर"
  },
  ruleId: 'rivers-inside-germany',
  isException: true
},
{
  word: "Jordan",
  article: "der",
  translations: {
    en: "Jordan",
    ru: "Иордан",
    de: "Jordan",
    es: "Jordán",
    fr: "Jourdain",
    ja: "ヨルダン川",
    zh: "约旦河",
    pt: "Jordão",
    ko: "요르단강",
    ar: "الأردن",
    hi: "जॉर्डन"
  },
  ruleId: 'rivers-outside-germany',
  isException: true
},
{
  word: "Jangtse",
  article: "der",
  translations: {
    en: "Yangtze",
    ru: "Янцзы",
    de: "Jangtse",
    es: "Yangtsé",
    fr: "Yangtsé",
    ja: "揚子江",
    zh: "长江",
    pt: "Yangtzé",
    ko: "양쯔강",
    ar: "يانغتسي",
    hi: "यांग्त्ज़ी"
  },
  ruleId: 'rivers-outside-germany',
  isException: true
},
{
  word: "Stahl",
  article: "der",
  translations: {
    en: "steel",
    ru: "сталь",
    de: "Stahl",
    es: "acero",
    fr: "acier",
    ja: "鋼",
    zh: "钢",
    pt: "aço",
    ko: "강철",
    ar: "فولاذ",
    hi: "इस्पात"
  },
  ruleId: 'chemical-elements',
  isException: true
},
{
  word: "Phosphor",
  article: "der",
  translations: {
    en: "phosphorus",
    ru: "фосфор",
    de: "Phosphor",
    es: "fósforo",
    fr: "phosphore",
    ja: "リン",
    zh: "磷",
    pt: "fósforo",
    ko: "인",
    ar: "فوسفور",
    hi: "फॉस्फोरस"
  },
  ruleId: 'chemical-elements',
  isException: true
},
{
  word: "Schwefel",
  article: "der",
  translations: {
    en: "sulfur",
    ru: "сера",
    de: "Schwefel",
    es: "azufre",
    fr: "soufre",
    ja: "硫黄",
    zh: "硫",
    pt: "enxofre",
    ko: "황",
    ar: "كبريت",
    hi: "गंधक"
  },
  ruleId: 'chemical-elements',
  isException: true
},
{
  word: "Atlantik",
  article: "der",
  translations: {
    en: "Atlantic",
    ru: "Атлантический океан",
    de: "Atlantik",
    es: "Atlántico",
    fr: "Atlantique",
    ja: "大西洋",
    zh: "大西洋",
    pt: "Atlântico",
    ko: "대서양",
    ar: "أطلسي",
    hi: "अटलांटिक"
  },
  ruleId: 'endings-ik',
  isException: true
},
{
  word: "Pazifik",
  article: "der",
  translations: {
    en: "Pacific",
    ru: "Тихий океан",
    de: "Pazifik",
    es: "Pacífico",
    fr: "Pacifique",
    ja: "太平洋",
    zh: "太平洋",
    pt: "Pacífico",
    ko: "태평양",
    ar: "هادئ",
    hi: "प्रशांत"
  },
  ruleId: 'endings-ik',
  isException: true
},
{
  word: "Irrtum",
  article: "der",
  translations: {
    en: "error",
    ru: "ошибка",
    de: "Irrtum",
    es: "error",
    fr: "erreur",
    ja: "誤り",
    zh: "错误",
    pt: "erro",
    ko: "오류",
    ar: "خطأ",
    hi: "भूल"
  },
  ruleId: 'endings-um',
  isException: true
},
{
  word: "Gedanke",
  article: "der",
  translations: {
    en: "thought",
    ru: "мысль",
    de: "Gedanke",
    es: "pensamiento",
    fr: "pensée",
    ja: "考え",
    zh: "思想",
    pt: "pensamento",
    ko: "생각",
    ar: "فكرة",
    hi: "विचार"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Gesang",
  article: "der",
  translations: {
    en: "singing",
    ru: "пение",
    de: "Gesang",
    es: "canto",
    fr: "chant",
    ja: "歌",
    zh: "歌唱",
    pt: "canto",
    ko: "노래",
    ar: "غناء",
    hi: "गायन"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Geruch",
  article: "der",
  translations: {
    en: "smell",
    ru: "запах",
    de: "Geruch",
    es: "olor",
    fr: "odeur",
    ja: "匂い",
    zh: "气味",
    pt: "cheiro",
    ko: "냄새",
    ar: "رائحة",
    hi: "गंध"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Geschmack",
  article: "der",
  translations: {
    en: "taste",
    ru: "вкус",
    de: "Geschmack",
    es: "sabor",
    fr: "goût",
    ja: "味",
    zh: "味道",
    pt: "sabor",
    ko: "맛",
    ar: "طعم",
    hi: "स्वाद"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Gestank",
  article: "der",
  translations: {
    en: "stench",
    ru: "вонь",
    de: "Gestank",
    es: "hedor",
    fr: "puanteur",
    ja: "悪臭",
    zh: "恶臭",
    pt: "fedorento",
    ko: "악취",
    ar: "نتن",
    hi: "दुर्गंध"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Gebrauch",
  article: "der",
  translations: {
    en: "use",
    ru: "употребление",
    de: "Gebrauch",
    es: "uso",
    fr: "usage",
    ja: "使用",
    zh: "使用",
    pt: "uso",
    ko: "사용",
    ar: "استخدام",
    hi: "उपयोग"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Gewalt",
  article: "die",
  translations: {
    en: "violence",
    ru: "насилие",
    de: "Gewalt",
    es: "violencia",
    fr: "violence",
    ja: "暴力",
    zh: "暴力",
    pt: "violência",
    ko: "폭력",
    ar: "عنف",
    hi: "हिंसा"
  },
  ruleId: 'prefix-ge',
  isException: true
},
{
  word: "Geduld",
  article: "die",
  translations: {
    en: "patience",
    ru: "терпение",
    de: "Geduld",
    es: "paciencia",
    fr: "patience",
    ja: "忍耐",
    zh: "耐心",
    pt: "paciência",
    ko: "인내",
    ar: "صبر",
    hi: "धैर्य"
  },
  ruleId: 'prefix-ge',
  isException: true
}
];


export default GERMAN_WORDS_DATA;