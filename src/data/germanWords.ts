export interface GermanWord {
  word: string;
  article: 'der' | 'die' | 'das';
  translation: string;
  ruleId: RuleId;
  isException: boolean; // Новое поле: является ли исключением
  exceptionTo?: RuleId; // К какому правилу исключение
}

export type RuleId = 
  // Основные правила по окончаниям
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
  | 'endings-ät'
  | 'endings-chen-lein'
  | 'endings-um'
  | 'endings-nis'
  | 'endings-us'
  | 'endings-ling'
  | 'endings-ig'
  | 'endings-ich'
  | 'endings-or'
  | 'endings-er'
  | 'endings-ist'
  | 'endings-ant'
  | 'endings-ent'
  | 'endings-loge'
  | 'endings-e'
  | 'endings-ismus' // Новое правило
  
  // Правила по началу слова
  | 'prefix-ge'
  | 'prefix-un'
  | 'prefix-ur'
  | 'prefix-miss'
  
  // Семантические правила
  | 'days-months-seasons'
  | 'weather-phenomena'
  | 'alcoholic-drinks'
  | 'colors-as-nouns'
  | 'cardinal-points'
  | 'minerals-stones'
  | 'car-brands'
  | 'ships'
  | 'rivers-outside-germany'
  | 'rivers-inside-germany'
  | 'lakes'
  | 'mountains'
  | 'islands'
  | 'male-professions'
  | 'female-professions'
  
  // Правила для глаголов
  | 'verb-derived-without-en'
  | 'verb-derived-without-n'
  | 'verb-derived-infinitives'
  
  // Исключения
  | 'exceptions-male'
  | 'exceptions-female'
  | 'exceptions-neutral';

export const RULES: Record<RuleId, string> = {
  // Окончания женского рода
  'endings-heit-keit': 'Слова на -heit, -keit → die (качество, возможность)',
  'endings-schaft': 'Слова на -schaft → die (дружба, общество)',
  'endings-ung': 'Слова на -ung → die (образование, информация)',
  'endings-tion': 'Слова на -tion → die (нация, революция)',
  'endings-tät': 'Слова на -tät → die (университет, качество)',
  'endings-ik': 'Слова на -ik → die (музыка, политика)',
  'endings-ur': 'Слова на -ur → die (природа, культура)',
  'endings-ei': 'Слова на -ei → die (пекарня, часть)',
  'endings-ie': 'Слова на -ie → die (энергия, индустрия)',
  'endings-enz-anz': 'Слова на -enz, -anz → die (конференция, элегантность)',
  'endings-age-ade': 'Слова на -age, -ade → die (гараж, лимонад)',
  'endings-ät': 'Слова на -ät → die (университет, качество)',
  
  // Окончания среднего рода
  'endings-chen-lein': 'Уменьшительные на -chen, -lein → das (девочка, кошечка)',
  'endings-um': 'Слова на -um → das (музей, стадион)',
  'endings-nis': 'Слова на -nis → das (результат, понимание)',
  'endings-us': 'Слова на -us → das (автобус, кампус)',
  
  // Окончания мужского рода
  'endings-ling': 'Слова на -ling → der (беженец, юноша)',
  'endings-ig': 'Слова на -ig → der (король, уксус)',
  'endings-ich': 'Слова на -ich → der (ковер, стол)',
  'endings-or': 'Слова на -or → der (доктор, директор)',
  'endings-er': 'Слова на -er → der (учитель, инженер)',
  'endings-ist': 'Слова на -ist → der (журналист, турист)',
  'endings-ant': 'Слова на -ant → der (демонстрант, ассистент)',
  'endings-ent': 'Слова на -ent → der (студент, президент)',
  'endings-loge': 'Слова на -loge → der (биолог, психолог)',
  'endings-e': 'Слова на -e → der (учитель, сосед)',
  'endings-ismus': 'Слова на -ismus → der (капитализм, туризм)',
  
  // Приставки
  'prefix-ge': 'Слова на Ge- → das (здание, чувство)',
  'prefix-un': 'Слова на Un- → das (несчастье, беспокойство)',
  'prefix-ur': 'Слова на Ur- → der (дедушка, праотец)',
  'prefix-miss': 'Слова на Miss- → die (неудача, непонимание)',
  
  // Семантические правила
  'days-months-seasons': 'Дни, месяцы, времена года → der (понедельник, январь, лето)',
  'weather-phenomena': 'Погодные явления → der (дождь, снег, ветер)',
  'alcoholic-drinks': 'Алкогольные напитки → der (вино, водка, виски)',
  'colors-as-nouns': 'Цвета как существительные → das (красный, синий)',
  'cardinal-points': 'Стороны света → der (север, юг, восток, запад)',
  'minerals-stones': 'Минералы и камни → der (алмаз, рубин, гранит)',
  'car-brands': 'Марки автомобилей → der (Мерседес, БМВ, Ауди)',
  'ships': 'Корабли → die (Титаник, Ямато)',
  'rivers-outside-germany': 'Реки вне Германии → der (Нил, Амазонка)',
  'rivers-inside-germany': 'Реки в Германии → die (Эльба, Одер)',
  'lakes': 'Озера → der (Боденское озеро, Женевское озеро)',
  'mountains': 'Горы → der (Эверест, Маттерхорн)',
  'islands': 'Острова → die (Сицилия, Крит)',
  'male-professions': 'Профессии (мужской род) → der (врач, учитель, инженер)',
  'female-professions': 'Профессии (женский род) → die (врачиха, учительница, инженерша)',
  
  // Глаголы
  'verb-derived-without-en': 'Отглагольные существительные (без -en) → der (начало, письмо)',
  'verb-derived-without-n': 'Отглагольные существительные (без -n) → das (бегство, знание)',
  'verb-derived-infinitives': 'Инфинитивы как существительные → das (плавание, чтение)',
  
  // Исключения
  'exceptions-male': 'Исключения мужского рода → der (кофе, чай, сок)',
  'exceptions-female': 'Исключения женского рода → die (солнце, земля, музыка)',
  'exceptions-neutral': 'Исключения среднего рода → das (девочка, ребенок, автомобиль)'
};

const GERMAN_WORDS_DATA: GermanWord[] = [
  // === ЖЕНСКИЙ РОД (die) ===
  
  // -heit, -keit
  { word: "Freiheit", article: "die", translation: "свобода", ruleId: 'endings-heit-keit', isException: false },
  { word: "Gesundheit", article: "die", translation: "здоровье", ruleId: 'endings-heit-keit', isException: false },
  { word: "Möglichkeit", article: "die", translation: "возможность", ruleId: 'endings-heit-keit', isException: false },
  
  // -schaft
  { word: "Freundschaft", article: "die", translation: "дружба", ruleId: 'endings-schaft', isException: false },
  { word: "Wissenschaft", article: "die", translation: "наука", ruleId: 'endings-schaft', isException: false },
  
  // -ung
  { word: "Bildung", article: "die", translation: "образование", ruleId: 'endings-ung', isException: false },
  { word: "Zeitung", article: "die", translation: "газета", ruleId: 'endings-ung', isException: false },
  { word: "Wohnung", article: "die", translation: "квартира", ruleId: 'endings-ung', isException: false },
  
  // -tion
  { word: "Nation", article: "die", translation: "нация", ruleId: 'endings-tion', isException: false },
  { word: "Revolution", article: "die", translation: "революция", ruleId: 'endings-tion', isException: false },
  
  // -tät
  { word: "Universität", article: "die", translation: "университет", ruleId: 'endings-tät', isException: false },
  { word: "Qualität", article: "die", translation: "качество", ruleId: 'endings-tät', isException: false },

// -ät
{ word: "Universit\u00E4t", article: "die", translation: "университет", ruleId: 'endings-ät', isException: false },
{ word: "Qualit\u00E4t", article: "die", translation: "качество", ruleId: 'endings-ät', isException: false },
{ word: "Quantit\u00E4t", article: "die", translation: "количество", ruleId: 'endings-ät', isException: false },
{ word: "Identit\u00E4t", article: "die", translation: "идентичность", ruleId: 'endings-ät', isException: false },
{ word: "Aktivit\u00E4t", article: "die", translation: "активность", ruleId: 'endings-ät', isException: false },
{ word: "Realit\u00E4t", article: "die", translation: "реальность", ruleId: 'endings-ät', isException: false },
{ word: "Moralit\u00E4t", article: "die", translation: "мораль", ruleId: 'endings-ät', isException: false },
{ word: "Nationalit\u00E4t", article: "die", translation: "национальность", ruleId: 'endings-ät', isException: false },
{ word: "Brutalit\u00E4t", article: "die", translation: "жестокость", ruleId: 'endings-ät', isException: false },
{ word: "Totalit\u00E4t", article: "die", translation: "тотальность", ruleId: 'endings-ät', isException: false },

// И исключение для этого правила (если есть):
{ word: "Dat\u00E4t", article: "der", translation: "дата", ruleId: 'exceptions-male', isException: true, exceptionTo: 'endings-ät' },
  
  // -ik
  { word: "Musik", article: "die", translation: "музыка", ruleId: 'endings-ik', isException: false },
  { word: "Politik", article: "die", translation: "политика", ruleId: 'endings-ik', isException: false },
  
  // -ur
  { word: "Natur", article: "die", translation: "природа", ruleId: 'endings-ur', isException: false },
  { word: "Kultur", article: "die", translation: "культура", ruleId: 'endings-ur', isException: false },
  
  // -ei
  { word: "Bäckerei", article: "die", translation: "пекарня", ruleId: 'endings-ei', isException: false },
  { word: "Partei", article: "die", translation: "партия", ruleId: 'endings-ei', isException: false },
  
  // -ie
  { word: "Energie", article: "die", translation: "энергия", ruleId: 'endings-ie', isException: false },
  { word: "Industrie", article: "die", translation: "промышленность", ruleId: 'endings-ie', isException: false },
  
  // -age, -ade
  { word: "Garage", article: "die", translation: "гараж", ruleId: 'endings-age-ade', isException: false },
  { word: "Limonade", article: "die", translation: "лимонад", ruleId: 'endings-age-ade', isException: false },

  // === СРЕДНИЙ РОД (das) ===
  
  // -chen, -lein
  { word: "Mädchen", article: "das", translation: "девочка", ruleId: 'endings-chen-lein', isException: false },
  { word: "Hündchen", article: "das", translation: "собачка", ruleId: 'endings-chen-lein', isException: false },
  
  // -um
  { word: "Museum", article: "das", translation: "музей", ruleId: 'endings-um', isException: false },
  { word: "Stadium", article: "das", translation: "стадион", ruleId: 'endings-um', isException: false },
  
  // -nis
  { word: "Ergebnis", article: "das", translation: "результат", ruleId: 'endings-nis', isException: false },
  { word: "Geheimnis", article: "das", translation: "секрет", ruleId: 'endings-nis', isException: false },
  
  // Ge-
  { word: "Gebäude", article: "das", translation: "здание", ruleId: 'prefix-ge', isException: false },
  { word: "Gesicht", article: "das", translation: "лицо", ruleId: 'prefix-ge', isException: false },

  // === МУЖСКОЙ РОД (der) ===

   { word: "Kapitalismus", article: "der", translation: "капитализм", ruleId: 'endings-ismus', isException: false },
  { word: "Sozialismus", article: "der", translation: "социализм", ruleId: 'endings-ismus', isException: false },
  { word: "Kommunismus", article: "der", translation: "коммунизм", ruleId: 'endings-ismus', isException: false },
  { word: "Tourismus", article: "der", translation: "туризм", ruleId: 'endings-ismus', isException: false },
  { word: "Optimismus", article: "der", translation: "оптимизм", ruleId: 'endings-ismus', isException: false },
  { word: "Pessimismus", article: "der", translation: "пессимизм", ruleId: 'endings-ismus', isException: false },
  { word: "Realismus", article: "der", translation: "реализм", ruleId: 'endings-ismus', isException: false },

// -er (правильные слова, оканчивающиеся на -er)
{ word: "Lehrer", article: "der", translation: "учитель", ruleId: 'endings-er', isException: false },
{ word: "Arbeiter", article: "der", translation: "работник", ruleId: 'endings-er', isException: false },
{ word: "Fahrer", article: "der", translation: "водитель", ruleId: 'endings-er', isException: false },
{ word: "Sportler", article: "der", translation: "спортсмен", ruleId: 'endings-er', isException: false },
{ word: "Künstler", article: "der", translation: "художник", ruleId: 'endings-er', isException: false },
{ word: "Schriftsteller", article: "der", translation: "писатель", ruleId: 'endings-er', isException: false },
{ word: "Forscher", article: "der", translation: "исследователь", ruleId: 'endings-er', isException: false },
{ word: "Sänger", article: "der", translation: "певец", ruleId: 'endings-er', isException: false },
{ word: "Tänzer", article: "der", translation: "танцор", ruleId: 'endings-er', isException: false },
{ word: "Maler", article: "der", translation: "художник (живописец)", ruleId: 'endings-er', isException: false },

// -er (предметы и инструменты, оканчивающиеся на -er)
{ word: "Computer", article: "der", translation: "компьютер", ruleId: 'endings-er', isException: false },
{ word: "Fernseher", article: "der", translation: "телевизор", ruleId: 'endings-er', isException: false },
{ word: "Wecker", article: "der", translation: "будильник", ruleId: 'endings-er', isException: false },
{ word: "Schraubendreher", article: "der", translation: "отвертка", ruleId: 'endings-er', isException: false },
{ word: "Bohrer", article: "der", translation: "дрель", ruleId: 'endings-er', isException: false },
{ word: "Mixer", article: "der", translation: "миксер", ruleId: 'endings-er', isException: false },
{ word: "Toaster", article: "der", translation: "тостер", ruleId: 'endings-er', isException: false },
{ word: "Scanner", article: "der", translation: "сканер", ruleId: 'endings-er', isException: false },
{ word: "Drucker", article: "der", translation: "принтер", ruleId: 'endings-er', isException: false },
{ word: "Player", article: "der", translation: "плеер", ruleId: 'endings-er', isException: false },

// -er (другие слова, оканчивающиеся на -er)
{ word: "Sommer", article: "der", translation: "лето", ruleId: 'endings-er', isException: false },
{ word: "Winter", article: "der", translation: "зима", ruleId: 'endings-er', isException: false },
{ word: "Meter", article: "der", translation: "метр", ruleId: 'endings-er', isException: false },
{ word: "Liter", article: "der", translation: "литр", ruleId: 'endings-er', isException: false },
{ word: "Koffer", article: "der", translation: "чемодан", ruleId: 'endings-er', isException: false },

// Исключения для -er (слова среднего и женского рода, оканчивающиеся на -er)
{ word: "Fenster", article: "das", translation: "окно", ruleId: 'exceptions-neutral', isException: true, exceptionTo: 'endings-er' },
{ word: "Wasser", article: "das", translation: "вода", ruleId: 'exceptions-neutral', isException: true, exceptionTo: 'endings-er' },
{ word: "Messer", article: "das", translation: "нож", ruleId: 'exceptions-neutral', isException: true, exceptionTo: 'endings-er' },
{ word: "Butter", article: "die", translation: "масло", ruleId: 'exceptions-female', isException: true, exceptionTo: 'endings-er' },
{ word: "Mutter", article: "die", translation: "мать", ruleId: 'exceptions-female', isException: true, exceptionTo: 'endings-er' },
{ word: "Tochter", article: "die", translation: "дочь", ruleId: 'exceptions-female', isException: true, exceptionTo: 'endings-er' },
{ word: "Schwester", article: "die", translation: "сестра", ruleId: 'exceptions-female', isException: true, exceptionTo: 'endings-er' },
  
  // -ling
  { word: "Flüchtling", article: "der", translation: "беженец", ruleId: 'endings-ling', isException: false },
  { word: "Lehrling", article: "der", translation: "ученик", ruleId: 'endings-ling', isException: false },
  
  // -ig
  { word: "Honig", article: "der", translation: "мед", ruleId: 'endings-ig', isException: false },
  { word: "König", article: "der", translation: "король", ruleId: 'endings-ig', isException: false },
  
  // -or
  { word: "Doktor", article: "der", translation: "доктор", ruleId: 'endings-or', isException: false },
  { word: "Professor", article: "der", translation: "профессор", ruleId: 'endings-or', isException: false },
  
  // -ist
  { word: "Journalist", article: "der", translation: "журналист", ruleId: 'endings-ist', isException: false },
  { word: "Tourist", article: "der", translation: "турист", ruleId: 'endings-ist', isException: false },

  // === ПОГОДНЫЕ ЯВЛЕНИЯ (der) ===
  { word: "Regen", article: "der", translation: "дождь", ruleId: 'weather-phenomena', isException: false },
  { word: "Schnee", article: "der", translation: "снег", ruleId: 'weather-phenomena', isException: false },
  { word: "Wind", article: "der", translation: "ветер", ruleId: 'weather-phenomena', isException: false },
  { word: "Nebel", article: "der", translation: "туман", ruleId: 'weather-phenomena', isException: false },

  // === ИСКЛЮЧЕНИЯ ===
  
  // Исключения женского рода
  { word: "Sonne", article: "die", translation: "солнце", ruleId: 'exceptions-female', isException: true, exceptionTo: 'weather-phenomena' },
  { word: "Erde", article: "die", translation: "земля", ruleId: 'exceptions-female', isException: true },
  
  // Исключения среднего рода
  { word: "Mädchen", article: "das", translation: "девочка", ruleId: 'exceptions-neutral', isException: true },
  { word: "Museum", article: "das", translation: "музей", ruleId: 'exceptions-neutral', isException: true },
  
  // Исключения мужского рода
  { word: "Kaffee", article: "der", translation: "кофе", ruleId: 'exceptions-male', isException: true },
  { word: "Tee", article: "der", translation: "чай", ruleId: 'exceptions-male', isException: true },

  // === ОТГЛАГОЛЬНЫЕ СУЩЕСТВИТЕЛЬНЫЕ ===
  
  // Без -en (мужской род)
  { word: "Anfang", article: "der", translation: "начало", ruleId: 'verb-derived-without-en', isException: false },
  { word: "Beitrag", article: "der", translation: "вклад", ruleId: 'verb-derived-without-en', isException: false },
  
  // Без -n (средний род)
  { word: "Wissen", article: "das", translation: "знание", ruleId: 'verb-derived-without-n', isException: false },
  { word: "Leben", article: "das", translation: "жизнь", ruleId: 'verb-derived-without-n', isException: false },
  
  // Инфинитивы (средний род)
  { word: "Schwimmen", article: "das", translation: "плавание", ruleId: 'verb-derived-infinitives', isException: false },
  { word: "Lesen", article: "das", translation: "чтение", ruleId: 'verb-derived-infinitives', isException: false },

];

export default GERMAN_WORDS_DATA;
// // germanWords.ts





// const GERMAN_WORDS_DATA: GermanWord[] = [
//   // Слова с окончаниями -heit, -keit, -schaft, -ung, -tion → ЖЕНСКИЙ РОД (die)
//   { word: "Freiheit", article: "die", translation: "свобода", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Gesundheit", article: "die", translation: "здоровье", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Schönheit", article: "die", translation: "красота", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Freundlichkeit", article: "die", translation: "дружелюбие", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Möglichkeit", article: "die", translation: "возможность", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Gesellschaft", article: "die", translation: "общество", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Freundschaft", article: "die", translation: "дружба", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Wissenschaft", article: "die", translation: "наука", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Bildung", article: "die", translation: "образование", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Information", article: "die", translation: "информация", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Kommunikation", article: "die", translation: "коммуникация", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Tradition", article: "die", translation: "традиция", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Revolution", article: "die", translation: "революция", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Nation", article: "die", translation: "нация", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Situation", article: "die", translation: "ситуация", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Aktion", article: "die", translation: "акция", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Produktion", article: "die", translation: "продукция", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Funktion", article: "die", translation: "функция", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Reaktion", article: "die", translation: "реакция", ruleId: 'heit-keit-schaft-ung-tion' },
//   { word: "Korrektion", article: "die", translation: "исправление", ruleId: 'heit-keit-schaft-ung-tion' },

//   // Слова с окончаниями -chen, -lein → СРЕДНИЙ РОД (das)
//   { word: "Mädchen", article: "das", translation: "девочка", ruleId: 'chen-lein' },
//   { word: "Brötchen", article: "das", translation: "булочка", ruleId: 'chen-lein' },
//   { word: "Kätzchen", article: "das", translation: "котенок", ruleId: 'chen-lein' },
//   { word: "Hündchen", article: "das", translation: "собачка", ruleId: 'chen-lein' },
//   { word: "Tischchen", article: "das", translation: "столик", ruleId: 'chen-lein' },
//   { word: "Häuschen", article: "das", translation: "домик", ruleId: 'chen-lein' },
//   { word: "Bäumchen", article: "das", translation: "деревце", ruleId: 'chen-lein' },
//   { word: "Blümchen", article: "das", translation: "цветочек", ruleId: 'chen-lein' },
//   { word: "Männchen", article: "das", translation: "мужичок", ruleId: 'chen-lein' },
//   { word: "Weibchen", article: "das", translation: "женщина (биол.)", ruleId: 'chen-lein' },
//   { word: "Töchterlein", article: "das", translation: "дочурка", ruleId: 'chen-lein' },
//   { word: "Mütterlein", article: "das", translation: "мамочка", ruleId: 'chen-lein' },
//   { word: "Väterlein", article: "das", translation: "папочка", ruleId: 'chen-lein' },
//   { word: "Hündlein", article: "das", translation: "собачка", ruleId: 'chen-lein' },
//   { word: "Kätzlein", article: "das", translation: "кошечка", ruleId: 'chen-lein' },
//   { word: "Bäumlein", article: "das", translation: "деревце", ruleId: 'chen-lein' },
//   { word: "Häuslein", article: "das", translation: "домик", ruleId: 'chen-lein' },
//   { word: "Schlösschen", article: "das", translation: "замок (маленький)", ruleId: 'chen-lein' },
//   { word: "Stühlchen", article: "das", translation: "стульчик", ruleId: 'chen-lein' },
//   { word: "Söhnchen", article: "das", translation: "сыночек", ruleId: 'chen-lein' },

//   // Слова с окончаниями -ig, -ling, -en, -ich → МУЖСКОЙ РОД (der)
//   { word: "Jüngling", article: "der", translation: "юноша", ruleId: 'ig-ling-en-ich' },
//   { word: "Flüchtling", article: "der", translation: "беженец", ruleId: 'ig-ling-en-ich' },
//   { word: "Schmetterling", article: "der", translation: "бабочка", ruleId: 'ig-ling-en-ich' },
//   { word: "Lehrling", article: "der", translation: "ученик", ruleId: 'ig-ling-en-ich' },
//   { word: "Frühling", article: "der", translation: "весна", ruleId: 'ig-ling-en-ich' },
//   { word: "Zeitung", article: "die", translation: "газета", ruleId: 'ig-ling-en-ich' },
//   { word: "König", article: "der", translation: "король", ruleId: 'ig-ling-en-ich' },
//   { word: "Essig", article: "der", translation: "уксус", ruleId: 'ig-ling-en-ich' },
//   { word: "Teppich", article: "der", translation: "ковер", ruleId: 'ig-ling-en-ich' },
//   { word: "Tisch", article: "der", translation: "стол", ruleId: 'ig-ling-en-ich' },
//   { word: "Fisch", article: "der", translation: "рыба", ruleId: 'ig-ling-en-ich' },
//   { word: "Kirsch", article: "die", translation: "вишня", ruleId: 'ig-ling-en-ich' },
//   { word: "Fels", article: "der", translation: "скала", ruleId: 'ig-ling-en-ich' },
//   { word: "Sarg", article: "der", translation: "гроб", ruleId: 'ig-ling-en-ich' },
//   { word: "Erz", article: "das", translation: "руда", ruleId: 'ig-ling-en-ich' },
//   { word: "Käfig", article: "der", translation: "клетка", ruleId: 'ig-ling-en-ich' },
//   { word: "Zweig", article: "der", translation: "ветвь", ruleId: 'ig-ling-en-ich' },
//   { word: "Honig", article: "der", translation: "мед", ruleId: 'ig-ling-en-ich' },
//   { word: "Siedlung", article: "die", translation: "поселение", ruleId: 'ig-ling-en-ich' },
//   { word: "Herbstling", article: "der", translation: "осень", ruleId: 'ig-ling-en-ich' },

//   // Дни недели, месяцы, времена года → МУЖСКОЙ РОД (der)
//   { word: "Montag", article: "der", translation: "понедельник", ruleId: 'days-months-seasons' },
//   { word: "Dienstag", article: "der", translation: "вторник", ruleId: 'days-months-seasons' },
//   { word: "Mittwoch", article: "der", translation: "среда", ruleId: 'days-months-seasons' },
//   { word: "Donnerstag", article: "der", translation: "четверг", ruleId: 'days-months-seasons' },
//   { word: "Freitag", article: "der", translation: "пятница", ruleId: 'days-months-seasons' },
//   { word: "Samstag", article: "der", translation: "суббота", ruleId: 'days-months-seasons' },
//   { word: "Sonntag", article: "der", translation: "воскресенье", ruleId: 'days-months-seasons' },
//   { word: "Januar", article: "der", translation: "январь", ruleId: 'days-months-seasons' },
//   { word: "Februar", article: "der", translation: "февраль", ruleId: 'days-months-seasons' },
//   { word: "März", article: "der", translation: "март", ruleId: 'days-months-seasons' },
//   { word: "April", article: "der", translation: "апрель", ruleId: 'days-months-seasons' },
//   { word: "Mai", article: "der", translation: "май", ruleId: 'days-months-seasons' },
//   { word: "Juni", article: "der", translation: "июнь", ruleId: 'days-months-seasons' },
//   { word: "Juli", article: "der", translation: "июль", ruleId: 'days-months-seasons' },
//   { word: "August", article: "der", translation: "август", ruleId: 'days-months-seasons' },
//   { word: "September", article: "der", translation: "сентябрь", ruleId: 'days-months-seasons' },
//   { word: "Oktober", article: "der", translation: "октябрь", ruleId: 'days-months-seasons' },
//   { word: "November", article: "der", translation: "ноябрь", ruleId: 'days-months-seasons' },
//   { word: "Dezember", article: "der", translation: "декабрь", ruleId: 'days-months-seasons' },
//   { word: "Frühling", article: "der", translation: "весна", ruleId: 'days-months-seasons' },
//   { word: "Sommer", article: "der", translation: "лето", ruleId: 'days-months-seasons' },
//   { word: "Herbst", article: "der", translation: "осень", ruleId: 'days-months-seasons' },
//   { word: "Winter", article: "der", translation: "зима", ruleId: 'days-months-seasons' },

//   // Погодные явления → МУЖСКОЙ РОД (der)
//   { word: "Regen", article: "der", translation: "дождь", ruleId: 'weather' },
//   { word: "Schnee", article: "der", translation: "снег", ruleId: 'weather' },
//   { word: "Nebel", article: "der", translation: "туман", ruleId: 'weather' },
//   { word: "Wind", article: "der", translation: "ветер", ruleId: 'weather' },
//   { word: "Sturm", article: "der", translation: "буря", ruleId: 'weather' },
//   { word: "Donner", article: "der", translation: "гром", ruleId: 'weather' },
//   { word: "Blitz", article: "der", translation: "молния", ruleId: 'weather' },
//   { word: "Hagel", article: "der", translation: "град", ruleId: 'weather' },
//   { word: "Frost", article: "der", translation: "мороз", ruleId: 'weather' },
//   { word: "Tau", article: "der", translation: "роса", ruleId: 'weather' },
//   { word: "Dunst", article: "der", translation: "дымка", ruleId: 'weather' },
//   { word: "Staub", article: "der", translation: "пыль", ruleId: 'weather' },
//   { word: "Rauch", article: "der", translation: "дым", ruleId: 'weather' },
//   { word: "Durst", article: "der", translation: "жажда", ruleId: 'weather' },
//   { word: "Hunger", article: "der", translation: "голод", ruleId: 'weather' },
//   { word: "Schmutz", article: "der", translation: "грязь", ruleId: 'weather' },
//   { word: "Müll", article: "der", translation: "мусор", ruleId: 'weather' },
//   { word: "Abfall", article: "der", translation: "отходы", ruleId: 'weather' },
//   { word: "Schrott", article: "der", translation: "хлам", ruleId: 'weather' },
//   { word: "Trubel", article: "der", translation: "суета", ruleId: 'weather' },

//   // Алкогольные напитки → МУЖСКОЙ РОД (der)
//   { word: "Wein", article: "der", translation: "вино", ruleId: 'alcohol' },
//   { word: "Bier", article: "das", translation: "пиво", ruleId: 'alcohol' },
//   { word: "Sekt", article: "der", translation: "шампанское", ruleId: 'alcohol' },
//   { word: "Champagner", article: "der", translation: "шампанское", ruleId: 'alcohol' },
//   { word: "Whisky", article: "der", translation: "виски", ruleId: 'alcohol' },
//   { word: "Rum", article: "der", translation: "ром", ruleId: 'alcohol' },
//   { word: "Wodka", article: "der", translation: "водка", ruleId: 'alcohol' },
//   { word: "Likör", article: "der", translation: "ликер", ruleId: 'alcohol' },
//   { word: "Cognac", article: "der", translation: "коньяк", ruleId: 'alcohol' },
//   { word: "Brandy", article: "der", translation: "бренди", ruleId: 'alcohol' },
//   { word: "Gin", article: "der", translation: "джин", ruleId: 'alcohol' },
//   { word: "Tequila", article: "der", translation: "текила", ruleId: 'alcohol' },
//   { word: "Absinth", article: "der", translation: "абсент", ruleId: 'alcohol' },
//   { word: "Obstler", article: "der", translation: "фруктовая водка", ruleId: 'alcohol' },
//   { word: "Schnaps", article: "der", translation: "настойка", ruleId: 'alcohol' },
//   { word: "Korn", article: "der", translation: "зерновой спирт", ruleId: 'alcohol' },
//   { word: "Met", article: "der", translation: "медовуха", ruleId: 'alcohol' },
//   { word: "Most", article: "der", translation: "сусло", ruleId: 'alcohol' },
//   { word: "Cider", article: "der", translation: "сидр", ruleId: 'alcohol' },
//   { word: "Punsch", article: "der", translation: "пунш", ruleId: 'alcohol' },

//   // Цвета → МУЖСКОЙ РОД (der)
//   { word: "Rot", article: "die", translation: "красный", ruleId: 'colors' },
//   { word: "Blau", article: "das", translation: "синий", ruleId: 'colors' },
//   { word: "Grün", article: "das", translation: "зеленый", ruleId: 'colors' },
//   { word: "Gelb", article: "das", translation: "желтый", ruleId: 'colors' },
//   { word: "Schwarz", article: "das", translation: "черный", ruleId: 'colors' },
//   { word: "Weiß", article: "das", translation: "белый", ruleId: 'colors' },
//   { word: "Braun", article: "das", translation: "коричневый", ruleId: 'colors' },
//   { word: "Grau", article: "das", translation: "серый", ruleId: 'colors' },
//   { word: "Lila", article: "das", translation: "лиловый", ruleId: 'colors' },
//   { word: "Pink", article: "das", translation: "розовый", ruleId: 'colors' },
//   { word: "Orange", article: "die", translation: "оранжевый", ruleId: 'colors' },
//   { word: "Türkis", article: "das", translation: "бирюзовый", ruleId: 'colors' },
//   { word: "Violett", article: "das", translation: "фиолетовый", ruleId: 'colors' },
//   { word: "Beige", article: "das", translation: "бежевый", ruleId: 'colors' },
//   { word: "Silber", article: "das", translation: "серебряный", ruleId: 'colors' },
//   { word: "Gold", article: "das", translation: "золотой", ruleId: 'colors' },
//   { word: "Bronze", article: "die", translation: "бронзовый", ruleId: 'colors' },
//   { word: "Kupfer", article: "das", translation: "медный", ruleId: 'colors' },
//   { word: "Ocker", article: "das", translation: "охра", ruleId: 'colors' },
//   { word: "Elfenbein", article: "das", translation: "слоновая кость", ruleId: 'colors' },

//   // Исключения - ЖЕНСКИЙ РОД (die)
//   { word: "Sonne", article: "die", translation: "солнце", ruleId: 'female-exceptions' },
//   { word: "Erde", article: "die", translation: "земля", ruleId: 'female-exceptions' },
//   { word: "Luft", article: "die", translation: "воздух", ruleId: 'female-exceptions' },
//   { word: "Musik", article: "die", translation: "музыка", ruleId: 'female-exceptions' },
//   { word: "Kunst", article: "die", translation: "искусство", ruleId: 'female-exceptions' },
//   { word: "Politik", article: "die", translation: "политика", ruleId: 'female-exceptions' },
//   { word: "Mathematik", article: "die", translation: "математика", ruleId: 'female-exceptions' },
//   { word: "Physik", article: "die", translation: "физика", ruleId: 'female-exceptions' },
//   { word: "Chemie", article: "die", translation: "химия", ruleId: 'female-exceptions' },
//   { word: "Biologie", article: "die", translation: "биология", ruleId: 'female-exceptions' },
//   { word: "Geschichte", article: "die", translation: "история", ruleId: 'female-exceptions' },
//   { word: "Geographie", article: "die", translation: "география", ruleId: 'female-exceptions' },
//   { word: "Sprache", article: "die", translation: "язык", ruleId: 'female-exceptions' },
//   { word: "Natur", article: "die", translation: "природа", ruleId: 'female-exceptions' },
//   { word: "Zukunft", article: "die", translation: "будущее", ruleId: 'female-exceptions' },
//   { word: "Vergangenheit", article: "die", translation: "прошлое", ruleId: 'female-exceptions' },
//   { word: "Gegenwart", article: "die", translation: "настоящее", ruleId: 'female-exceptions' },
//   { word: "Wahrheit", article: "die", translation: "правда", ruleId: 'female-exceptions' },
//   { word: "Lüge", article: "die", translation: "ложь", ruleId: 'female-exceptions' },
//   { word: "Liebe", article: "die", translation: "любовь", ruleId: 'female-exceptions' },

//   // Исключения - СРЕДНИЙ РОД (das)
//   { word: "Mädchen", article: "das", translation: "девочка", ruleId: 'neutral-exceptions' },
//   { word: "Kind", article: "das", translation: "ребенок", ruleId: 'neutral-exceptions' },
//   { word: "Auto", article: "das", translation: "автомобиль", ruleId: 'neutral-exceptions' },
//   { word: "Buch", article: "das", translation: "книга", ruleId: 'neutral-exceptions' },
//   { word: "Wasser", article: "das", translation: "вода", ruleId: 'neutral-exceptions' },
//   { word: "Feuer", article: "das", translation: "огонь", ruleId: 'neutral-exceptions' },
//   { word: "Eis", article: "das", translation: "лед", ruleId: 'neutral-exceptions' },
//   { word: "Brot", article: "das", translation: "хлеб", ruleId: 'neutral-exceptions' },
//   { word: "Fleisch", article: "das", translation: "мясо", ruleId: 'neutral-exceptions' },
//   { word: "Gemüse", article: "das", translation: "овощи", ruleId: 'neutral-exceptions' },
//   { word: "Obst", article: "das", translation: "фрукты", ruleId: 'neutral-exceptions' },
//   { word: "Salz", article: "das", translation: "соль", ruleId: 'neutral-exceptions' },
//   { word: "Zucker", article: "der", translation: "сахар", ruleId: 'neutral-exceptions' },
//   { word: "Öl", article: "das", translation: "масло", ruleId: 'neutral-exceptions' },
//   { word: "Bild", article: "das", translation: "картина", ruleId: 'neutral-exceptions' },
//   { word: "Foto", article: "das", translation: "фото", ruleId: 'neutral-exceptions' },
//   { word: "Geld", article: "das", translation: "деньги", ruleId: 'neutral-exceptions' },
//   { word: "Spiel", article: "das", translation: "игра", ruleId: 'neutral-exceptions' },
//   { word: "Lied", article: "das", translation: "песня", ruleId: 'neutral-exceptions' },
//   { word: "Wort", article: "das", translation: "слово", ruleId: 'neutral-exceptions' },

//   // Исключения - МУЖСКОЙ РОД (der)
//   { word: "Kaffee", article: "der", translation: "кофе", ruleId: 'male-exceptions' },
//   { word: "Tee", article: "der", translation: "чай", ruleId: 'male-exceptions' },
//   { word: "Saft", article: "der", translation: "сок", ruleId: 'male-exceptions' },
//   { word: "Tabak", article: "der", translation: "табак", ruleId: 'male-exceptions' },
//   { word: "Raum", article: "der", translation: "комната", ruleId: 'male-exceptions' },
//   { word: "Tag", article: "der", translation: "день", ruleId: 'male-exceptions' },
//   { word: "Abend", article: "der", translation: "вечер", ruleId: 'male-exceptions' },
//   { word: "Morgen", article: "der", translation: "утро", ruleId: 'male-exceptions' },
//   { word: "Nachmittag", article: "der", translation: "после полудня", ruleId: 'male-exceptions' },
//   { word: "Vormittag", article: "der", translation: "до полудня", ruleId: 'male-exceptions' },
//   { word: "Urlaub", article: "der", translation: "отпуск", ruleId: 'male-exceptions' },
//   { word: "Ferien", article: "die", translation: "каникулы", ruleId: 'male-exceptions' },
//   { word: "Krieg", article: "der", translation: "война", ruleId: 'male-exceptions' },
//   { word: "Frieden", article: "der", translation: "мир", ruleId: 'male-exceptions' },
//   { word: "Tod", article: "der", translation: "смерть", ruleId: 'male-exceptions' },
//   { word: "Leben", article: "das", translation: "жизнь", ruleId: 'male-exceptions' },
//   { word: "Name", article: "der", translation: "имя", ruleId: 'male-exceptions' },
//   { word: "Beruf", article: "der", translation: "профессия", ruleId: 'male-exceptions' },
//   { word: "Job", article: "der", translation: "работа", ruleId: 'male-exceptions' },
//   { word: "Staat", article: "der", translation: "государство", ruleId: 'male-exceptions' }
// ];

// export default GERMAN_WORDS_DATA;