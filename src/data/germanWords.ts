// germanWords.ts

export interface GermanWord {
  word: string;
  article: 'der' | 'die' | 'das';
  translation: string;
  ruleId: RuleId;
  isException: boolean;
  exceptionTo?: RuleId;
}

export type RuleId =
  // === Женский род (die) ===
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

  // === Средний род (das) ===
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

  // === Мужской род (der) ===
  | 'endings-ling'
  | 'endings-or'
  | 'endings-er'
  | 'endings-ist'
  | 'endings-ant-ent'
  | 'endings-ismus'
  | 'endings-loge-soph'
  | 'verb-derived-no-suffix'

  // === Семантические правила ===
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

  // === Исключения ===
  | 'exceptions-die'
  | 'exceptions-das'
  | 'exceptions-der';

export const RULES: Record<RuleId, string> = {
  // Женский род
  'endings-heit-keit': 'Слова на -heit, -keit → die',
  'endings-schaft': 'Слова на -schaft → die',
  'endings-ung': 'Слова на -ung → die',
  'endings-tion': 'Слова на -tion → die',
  'endings-tät': 'Слова на -tät, -ität → die',
  'endings-ik': 'Слова на -ik → die',
  'endings-ur': 'Слова на -ur → die',
  'endings-ei': 'Слова на -ei → die',
  'endings-ie': 'Слова на -ie → die',
  'endings-enz-anz': 'Слова на -enz, -anz → die',
  'endings-age-ade': 'Слова на -age, -ade → die',
  'endings-ion': 'Слова на -ion → die',
  'endings-e': 'Слова на -e → die',
  'endings-t': 'Отглагольные на -t → die',

  // Средний род
  'endings-chen-lein': 'Уменьшительные на -chen, -lein → das',
  'endings-um': 'Слова на -um → das',
  'endings-nis': 'Слова на -nis → das',
  'endings-o': 'Слова на -o → das',
  'endings-ment': 'Слова на -ment → das',
  'endings-tum': 'Слова на -tum → das',
  'substantivized-infinitives': 'Инфинитивы как существительные → das',
  'substantivized-adjectives': 'Субстантивированные прилагательные → das',
  'colors-as-nouns': 'Цвета как существительные → das',
  'languages': 'Языки → das',
  'chemical-elements': 'Химические элементы и металлы → das',
  'fractions': 'Дроби → das',
  'prefix-ge': 'Слова с приставкой Ge- (коллективы, абстракции) → das',

  // Мужской род
  'endings-ling': 'Слова на -ling → der',
  'endings-or': 'Слова на -or → der',
  'endings-er': 'Слова на -er → der',
  'endings-ist': 'Слова на -ist → der',
  'endings-ant-ent': 'Слова на -ant, -ent → der',
  'endings-ismus': 'Слова на -ismus → der',
  'endings-loge-soph': 'Слова на -loge, -soph → der',
  'verb-derived-no-suffix': 'Отглагольные без суффикса → der',

  // Семантика
  'days-months-seasons': 'Дни, месяцы, времена года → der',
  'weather-phenomena': 'Погодные явления → der',
  'alcoholic-drinks': 'Алкогольные напитки → der',
  'cardinal-directions': 'Стороны света → der',
  'car-brands': 'Марки автомобилей → der',
  'motorcycle-brands': 'Марки мотоциклов → die',
  'mountains': 'Горы → der',
  'rivers-inside-germany': 'Реки в Германии → die',
  'rivers-outside-germany': 'Реки вне Германии → die',
  'flowers-fruits-vegetables': 'Цветы, фрукты, овощи → die',
  'male-persons': 'Мужчины → der',
  'female-persons': 'Женщины → die',
  'ships-airplanes': 'Корабли и самолёты → die',
  'cardinal-numbers': 'Числа → die',

  // Исключения
  'exceptions-die': 'Исключения женского рода',
  'exceptions-das': 'Исключения среднего рода',
  'exceptions-der': 'Исключения мужского рода',
};

const GERMAN_WORDS_DATA: GermanWord[] = [
  // === ЖЕНСКИЙ РОД ===

  // -heit, -keit
  { word: "Freiheit", article: "die", translation: "свобода", ruleId: 'endings-heit-keit', isException: false },
  { word: "Gesundheit", article: "die", translation: "здоровье", ruleId: 'endings-heit-keit', isException: false },
  { word: "Möglichkeit", article: "die", translation: "возможность", ruleId: 'endings-heit-keit', isException: false },
  { word: "Schönheit", article: "die", translation: "красота", ruleId: 'endings-heit-keit', isException: false },
  { word: "Einsamkeit", article: "die", translation: "одиночество", ruleId: 'endings-heit-keit', isException: false },

  // -schaft
  { word: "Freundschaft", article: "die", translation: "дружба", ruleId: 'endings-schaft', isException: false },
  { word: "Wissenschaft", article: "die", translation: "наука", ruleId: 'endings-schaft', isException: false },
  { word: "Mannschaft", article: "die", translation: "команда", ruleId: 'endings-schaft', isException: false },
  { word: "Gesellschaft", article: "die", translation: "общество", ruleId: 'endings-schaft', isException: false },
  { word: "Belegschaft", article: "die", translation: "персонал", ruleId: 'endings-schaft', isException: false },

  // -ung
  { word: "Bildung", article: "die", translation: "образование", ruleId: 'endings-ung', isException: false },
  { word: "Zeitung", article: "die", translation: "газета", ruleId: 'endings-ung', isException: false },
  { word: "Wohnung", article: "die", translation: "квартира", ruleId: 'endings-ung', isException: false },
  { word: "Meinung", article: "die", translation: "мнение", ruleId: 'endings-ung', isException: false },
  { word: "Umleitung", article: "die", translation: "объезд", ruleId: 'endings-ung', isException: false },

  // -tion
  { word: "Nation", article: "die", translation: "нация", ruleId: 'endings-tion', isException: false },
  { word: "Revolution", article: "die", translation: "революция", ruleId: 'endings-tion', isException: false },
  { word: "Tradition", article: "die", translation: "традиция", ruleId: 'endings-tion', isException: false },
  { word: "Aktion", article: "die", translation: "акция", ruleId: 'endings-tion', isException: false },
  { word: "Funktion", article: "die", translation: "функция", ruleId: 'endings-tion', isException: false },

  // -tät
  { word: "Universität", article: "die", translation: "университет", ruleId: 'endings-tät', isException: false },
  { word: "Qualität", article: "die", translation: "качество", ruleId: 'endings-tät', isException: false },
  { word: "Realität", article: "die", translation: "реальность", ruleId: 'endings-tät', isException: false },
  { word: "Fakultät", article: "die", translation: "факультет", ruleId: 'endings-tät', isException: false },
  { word: "Aktivität", article: "die", translation: "активность", ruleId: 'endings-tät', isException: false },

  // -ik
  { word: "Musik", article: "die", translation: "музыка", ruleId: 'endings-ik', isException: false },
  { word: "Physik", article: "die", translation: "физика", ruleId: 'endings-ik', isException: false },
  { word: "Politik", article: "die", translation: "политика", ruleId: 'endings-ik', isException: false },
  { word: "Logik", article: "die", translation: "логика", ruleId: 'endings-ik', isException: false },
  { word: "Technik", article: "die", translation: "техника", ruleId: 'endings-ik', isException: false },

  // -ur
  { word: "Natur", article: "die", translation: "природа", ruleId: 'endings-ur', isException: false },
  { word: "Kultur", article: "die", translation: "культура", ruleId: 'endings-ur', isException: false },
  { word: "Agentur", article: "die", translation: "агентство", ruleId: 'endings-ur', isException: false },
  { word: "Manufaktur", article: "die", translation: "мануфактура", ruleId: 'endings-ur', isException: false },
  { word: "Struktur", article: "die", translation: "структура", ruleId: 'endings-ur', isException: false },

  // -ei
  { word: "Bäckerei", article: "die", translation: "пекарня", ruleId: 'endings-ei', isException: false },
  { word: "Partei", article: "die", translation: "партия", ruleId: 'endings-ei', isException: false },
  { word: "Wäscherei", article: "die", translation: "прачечная", ruleId: 'endings-ei', isException: false },
  { word: "Tyrannei", article: "die", translation: "тирания", ruleId: 'endings-ei', isException: false },
  { word: "Schmiederei", article: "die", translation: "кузница", ruleId: 'endings-ei', isException: false },

  // -ie
  { word: "Energie", article: "die", translation: "энергия", ruleId: 'endings-ie', isException: false },
  { word: "Industrie", article: "die", translation: "промышленность", ruleId: 'endings-ie', isException: false },
  { word: "Biologie", article: "die", translation: "биология", ruleId: 'endings-ie', isException: false },
  { word: "Geographie", article: "die", translation: "география", ruleId: 'endings-ie', isException: false },
  { word: "Harmonie", article: "die", translation: "гармония", ruleId: 'endings-ie', isException: false },

  // -enz, -anz
  { word: "Konferenz", article: "die", translation: "конференция", ruleId: 'endings-enz-anz', isException: false },
  { word: "Tendenz", article: "die", translation: "тенденция", ruleId: 'endings-enz-anz', isException: false },
  { word: "Akzeptanz", article: "die", translation: "принятие", ruleId: 'endings-enz-anz', isException: false },
  { word: "Eleganz", article: "die", translation: "элегантность", ruleId: 'endings-enz-anz', isException: false },
  { word: "Ignoranz", article: "die", translation: "игнорирование", ruleId: 'endings-enz-anz', isException: false },

  // -age, -ade
  { word: "Garage", article: "die", translation: "гараж", ruleId: 'endings-age-ade', isException: false },
  { word: "Limonade", article: "die", translation: "лимонад", ruleId: 'endings-age-ade', isException: false },
  { word: "Passage", article: "die", translation: "проход", ruleId: 'endings-age-ade', isException: false },
  { word: "Parade", article: "die", translation: "парад", ruleId: 'endings-age-ade', isException: false },
  { word: "Marmelade", article: "die", translation: "варенье", ruleId: 'endings-age-ade', isException: false },

  // -ion
  { word: "Diskussion", article: "die", translation: "дискуссия", ruleId: 'endings-ion', isException: false },
  { word: "Vision", article: "die", translation: "видение", ruleId: 'endings-ion', isException: false },
  { word: "Explosion", article: "die", translation: "взрыв", ruleId: 'endings-ion', isException: false },
  { word: "Illusion", article: "die", translation: "иллюзия", ruleId: 'endings-ion', isException: false },
  { word: "Mission", article: "die", translation: "миссия", ruleId: 'endings-ion', isException: false },

  // -e
  { word: "Lampe", article: "die", translation: "лампа", ruleId: 'endings-e', isException: false },
  { word: "Tasche", article: "die", translation: "сумка", ruleId: 'endings-e', isException: false },
  { word: "Ente", article: "die", translation: "утка", ruleId: 'endings-e', isException: false },
  { word: "Wunde", article: "die", translation: "рана", ruleId: 'endings-e', isException: false },
  { word: "Brille", article: "die", translation: "очки", ruleId: 'endings-e', isException: false },

  // -t (отглагольные)
  { word: "Fahrt", article: "die", translation: "поездка", ruleId: 'endings-t', isException: false },
  { word: "Tat", article: "die", translation: "действие", ruleId: 'endings-t', isException: false },
  { word: "Nacht", article: "die", translation: "ночь", ruleId: 'endings-t', isException: false },
  { word: "Schlacht", article: "die", translation: "битва", ruleId: 'endings-t', isException: false },
  { word: "Gruft", article: "die", translation: "склеп", ruleId: 'endings-t', isException: false },

  // === СРЕДНИЙ РОД ===

  // -chen, -lein
  { word: "Mädchen", article: "das", translation: "девочка", ruleId: 'endings-chen-lein', isException: false },
  { word: "Hündchen", article: "das", translation: "собачка", ruleId: 'endings-chen-lein', isException: false },
  { word: "Brötchen", article: "das", translation: "булочка", ruleId: 'endings-chen-lein', isException: false },
  { word: "Häuschen", article: "das", translation: "домик", ruleId: 'endings-chen-lein', isException: false },
  { word: "Bäumchen", article: "das", translation: "деревце", ruleId: 'endings-chen-lein', isException: false },

  // -um
  { word: "Museum", article: "das", translation: "музей", ruleId: 'endings-um', isException: false },
  { word: "Stadium", article: "das", translation: "стадион", ruleId: 'endings-um', isException: false },
  { word: "Publikum", article: "das", translation: "публика", ruleId: 'endings-um', isException: false },
  { word: "Zentrum", article: "das", translation: "центр", ruleId: 'endings-um', isException: false },
  { word: "Konservatorium", article: "das", translation: "консерватория", ruleId: 'endings-um', isException: false },

  // -nis
  { word: "Ergebnis", article: "das", translation: "результат", ruleId: 'endings-nis', isException: false },
  { word: "Geheimnis", article: "das", translation: "секрет", ruleId: 'endings-nis', isException: false },
  { word: "Ereignis", article: "das", translation: "событие", ruleId: 'endings-nis', isException: false },
  { word: "Wagnis", article: "das", translation: "рискованное предприятие", ruleId: 'endings-nis', isException: false },
  { word: "Verständnis", article: "das", translation: "понимание", ruleId: 'endings-nis', isException: false },

  // -o
  { word: "Auto", article: "das", translation: "автомобиль", ruleId: 'endings-o', isException: false },
  { word: "Kino", article: "das", translation: "кинотеатр", ruleId: 'endings-o', isException: false },
  { word: "Radio", article: "das", translation: "радио", ruleId: 'endings-o', isException: false },
  { word: "Foto", article: "das", translation: "фотография", ruleId: 'endings-o', isException: false },
  { word: "Moto", article: "das", translation: "девиз", ruleId: 'endings-o', isException: false },

  // -ment
  { word: "Instrument", article: "das", translation: "инструмент", ruleId: 'endings-ment', isException: false },
  { word: "Parlament", article: "das", translation: "парламент", ruleId: 'endings-ment', isException: false },
  { word: "Medikament", article: "das", translation: "лекарство", ruleId: 'endings-ment', isException: false },
  { word: "Dokument", article: "das", translation: "документ", ruleId: 'endings-ment', isException: false },
  { word: "Fundament", article: "das", translation: "фундамент", ruleId: 'endings-ment', isException: false },

  // -tum
  { word: "Datum", article: "das", translation: "дата", ruleId: 'endings-tum', isException: false },
  { word: "Museum", article: "das", translation: "музей", ruleId: 'endings-tum', isException: false },
  { word: "Christentum", article: "das", translation: "христианство", ruleId: 'endings-tum', isException: false },
  { word: "Eigentum", article: "das", translation: "собственность", ruleId: 'endings-tum', isException: false },
  { word: "Reichtum", article: "das", translation: "богатство", ruleId: 'endings-tum', isException: false },

  // Инфинитивы
  { word: "Lesen", article: "das", translation: "чтение", ruleId: 'substantivized-infinitives', isException: false },
  { word: "Schwimmen", article: "das", translation: "плавание", ruleId: 'substantivized-infinitives', isException: false },
  { word: "Schreiben", article: "das", translation: "письмо", ruleId: 'substantivized-infinitives', isException: false },
  { word: "Tanzen", article: "das", translation: "танцы", ruleId: 'substantivized-infinitives', isException: false },
  { word: "Essen", article: "das", translation: "еда", ruleId: 'substantivized-infinitives', isException: false },

  // Прилагательные
  { word: "Gute", article: "das", translation: "хорошее", ruleId: 'substantivized-adjectives', isException: false },
  { word: "Schöne", article: "das", translation: "красивое", ruleId: 'substantivized-adjectives', isException: false },
  { word: "Neue", article: "das", translation: "новое", ruleId: 'substantivized-adjectives', isException: false },
  { word: "Alte", article: "das", translation: "старое", ruleId: 'substantivized-adjectives', isException: false },
  { word: "Wahre", article: "das", translation: "истинное", ruleId: 'substantivized-adjectives', isException: false },

  // Цвета
  { word: "Rot", article: "das", translation: "красный", ruleId: 'colors-as-nouns', isException: false },
  { word: "Blau", article: "das", translation: "синий", ruleId: 'colors-as-nouns', isException: false },
  { word: "Grün", article: "das", translation: "зелёный", ruleId: 'colors-as-nouns', isException: false },
  { word: "Gelb", article: "das", translation: "жёлтый", ruleId: 'colors-as-nouns', isException: false },
  { word: "Schwarz", article: "das", translation: "чёрный", ruleId: 'colors-as-nouns', isException: false },

  // Языки
  { word: "Deutsch", article: "das", translation: "немецкий язык", ruleId: 'languages', isException: false },
  { word: "Englisch", article: "das", translation: "английский язык", ruleId: 'languages', isException: false },
  { word: "Französisch", article: "das", translation: "французский язык", ruleId: 'languages', isException: false },
  { word: "Spanisch", article: "das", translation: "испанский язык", ruleId: 'languages', isException: false },
  { word: "Russisch", article: "das", translation: "русский язык", ruleId: 'languages', isException: false },

  // Хим. элементы
  { word: "Gold", article: "das", translation: "золото", ruleId: 'chemical-elements', isException: false },
  { word: "Eisen", article: "das", translation: "железо", ruleId: 'chemical-elements', isException: false },
  { word: "Silber", article: "das", translation: "серебро", ruleId: 'chemical-elements', isException: false },
  { word: "Uran", article: "das", translation: "уран", ruleId: 'chemical-elements', isException: false },
  { word: "Helium", article: "das", translation: "гелий", ruleId: 'chemical-elements', isException: false },

  // Дроби
  { word: "Viertel", article: "das", translation: "четверть", ruleId: 'fractions', isException: false },
  { word: "Drittel", article: "das", translation: "треть", ruleId: 'fractions', isException: false },
  { word: "Zehntel", article: "das", translation: "десятая часть", ruleId: 'fractions', isException: false },
  { word: "Hundertstel", article: "das", translation: "сотая часть", ruleId: 'fractions', isException: false },
  { word: "Tausendstel", article: "das", translation: "тысячная часть", ruleId: 'fractions', isException: false },

  // Ge-
  { word: "Gebäude", article: "das", translation: "здание", ruleId: 'prefix-ge', isException: false },
  { word: "Gesicht", article: "das", translation: "лицо", ruleId: 'prefix-ge', isException: false },
  { word: "Geflügel", article: "das", translation: "птица (мясо)", ruleId: 'prefix-ge', isException: false },
  { word: "Gemüse", article: "das", translation: "овощи", ruleId: 'prefix-ge', isException: false },
  { word: "Gebet", article: "das", translation: "молитва", ruleId: 'prefix-ge', isException: false },

  // === МУЖСКОЙ РОД ===

  // -ling
  { word: "Flüchtling", article: "der", translation: "беженец", ruleId: 'endings-ling', isException: false },
  { word: "Lehrling", article: "der", translation: "ученик", ruleId: 'endings-ling', isException: false },
  { word: "Frühling", article: "der", translation: "весна", ruleId: 'endings-ling', isException: false },
  { word: "Schmetterling", article: "der", translation: "бабочка", ruleId: 'endings-ling', isException: false },
  { word: "Liebling", article: "der", translation: "любимец", ruleId: 'endings-ling', isException: false },

  // -or
  { word: "Professor", article: "der", translation: "профессор", ruleId: 'endings-or', isException: false },
  { word: "Motor", article: "der", translation: "мотор", ruleId: 'endings-or', isException: false },
  { word: "Reaktor", article: "der", translation: "реактор", ruleId: 'endings-or', isException: false },
  { word: "Doktor", article: "der", translation: "доктор", ruleId: 'endings-or', isException: false },
  { word: "Traktor", article: "der", translation: "трактор", ruleId: 'endings-or', isException: false },

  // -er
  { word: "Lehrer", article: "der", translation: "учитель", ruleId: 'endings-er', isException: false },
  { word: "Computer", article: "der", translation: "компьютер", ruleId: 'endings-er', isException: false },
  { word: "Sommer", article: "der", translation: "лето", ruleId: 'endings-er', isException: false },
  { word: "Drucker", article: "der", translation: "принтер", ruleId: 'endings-er', isException: false },
  { word: "Fahrer", article: "der", translation: "водитель", ruleId: 'endings-er', isException: false },

  // -ist
  { word: "Journalist", article: "der", translation: "журналист", ruleId: 'endings-ist', isException: false },
  { word: "Tourist", article: "der", translation: "турист", ruleId: 'endings-ist', isException: false },
  { word: "Pianist", article: "der", translation: "пианист", ruleId: 'endings-ist', isException: false },
  { word: "Optimist", article: "der", translation: "оптимист", ruleId: 'endings-ist', isException: false },
  { word: "Spezialist", article: "der", translation: "специалист", ruleId: 'endings-ist', isException: false },

  // -ant, -ent
  { word: "Student", article: "der", translation: "студент", ruleId: 'endings-ant-ent', isException: false },
  { word: "Präsident", article: "der", translation: "президент", ruleId: 'endings-ant-ent', isException: false },
  { word: "Assistent", article: "der", translation: "ассистент", ruleId: 'endings-ant-ent', isException: false },
  { word: "Konkurrent", article: "der", translation: "конкурент", ruleId: 'endings-ant-ent', isException: false },
  { word: "Lieferant", article: "der", translation: "поставщик", ruleId: 'endings-ant-ent', isException: false },

  // -ismus
  { word: "Kapitalismus", article: "der", translation: "капитализм", ruleId: 'endings-ismus', isException: false },
  { word: "Sozialismus", article: "der", translation: "социализм", ruleId: 'endings-ismus', isException: false },
  { word: "Tourismus", article: "der", translation: "туризм", ruleId: 'endings-ismus', isException: false },
  { word: "Optimismus", article: "der", translation: "оптимизм", ruleId: 'endings-ismus', isException: false },
  { word: "Realismus", article: "der", translation: "реализм", ruleId: 'endings-ismus', isException: false },

  // -loge, -soph
  { word: "Biologe", article: "der", translation: "биолог", ruleId: 'endings-loge-soph', isException: false },
  { word: "Psychologe", article: "der", translation: "психолог", ruleId: 'endings-loge-soph', isException: false },
  { word: "Philosoph", article: "der", translation: "философ", ruleId: 'endings-loge-soph', isException: false },
  { word: "Theologe", article: "der", translation: "теолог", ruleId: 'endings-loge-soph', isException: false },
  { word: "Geologe", article: "der", translation: "геолог", ruleId: 'endings-loge-soph', isException: false },

  // Отглагольные без суффикса
  { word: "Lauf", article: "der", translation: "бег", ruleId: 'verb-derived-no-suffix', isException: false },
  { word: "Sprung", article: "der", translation: "прыжок", ruleId: 'verb-derived-no-suffix', isException: false },
  { word: "Gang", article: "der", translation: "ходьба", ruleId: 'verb-derived-no-suffix', isException: false },
  { word: "Fall", article: "der", translation: "падение", ruleId: 'verb-derived-no-suffix', isException: false },
  { word: "Ruf", article: "der", translation: "зов", ruleId: 'verb-derived-no-suffix', isException: false },

  // === СЕМАНТИЧЕСКИЕ ПРАВИЛА ===

  // Дни, месяцы, сезоны
  { word: "Montag", article: "der", translation: "понедельник", ruleId: 'days-months-seasons', isException: false },
  { word: "Juli", article: "der", translation: "июль", ruleId: 'days-months-seasons', isException: false },
  { word: "Sommer", article: "der", translation: "лето", ruleId: 'days-months-seasons', isException: false },
  { word: "Dezember", article: "der", translation: "декабрь", ruleId: 'days-months-seasons', isException: false },
  { word: "Herbst", article: "der", translation: "осень", ruleId: 'days-months-seasons', isException: false },

  // Погода
  { word: "Regen", article: "der", translation: "дождь", ruleId: 'weather-phenomena', isException: false },
  { word: "Schnee", article: "der", translation: "снег", ruleId: 'weather-phenomena', isException: false },
  { word: "Wind", article: "der", translation: "ветер", ruleId: 'weather-phenomena', isException: false },
  { word: "Blitz", article: "der", translation: "молния", ruleId: 'weather-phenomena', isException: false },
  { word: "Nebel", article: "der", translation: "туман", ruleId: 'weather-phenomena', isException: false },

  // Алкоголь
  { word: "Wein", article: "der", translation: "вино", ruleId: 'alcoholic-drinks', isException: false },
  { word: "Whisky", article: "der", translation: "виски", ruleId: 'alcoholic-drinks', isException: false },
  { word: "Wodka", article: "der", translation: "водка", ruleId: 'alcoholic-drinks', isException: false },
  { word: "Sekt", article: "der", translation: "игристое", ruleId: 'alcoholic-drinks', isException: false },
  { word: "Rum", article: "der", translation: "ром", ruleId: 'alcoholic-drinks', isException: false },

  // Стороны света
  { word: "Norden", article: "der", translation: "север", ruleId: 'cardinal-directions', isException: false },
  { word: "Süden", article: "der", translation: "юг", ruleId: 'cardinal-directions', isException: false },
  { word: "Osten", article: "der", translation: "восток", ruleId: 'cardinal-directions', isException: false },
  { word: "Westen", article: "der", translation: "запад", ruleId: 'cardinal-directions', isException: false },
  { word: "Nordwesten", article: "der", translation: "северо-запад", ruleId: 'cardinal-directions', isException: false },

  // Машины
  { word: "BMW", article: "der", translation: "БМВ", ruleId: 'car-brands', isException: false },
  { word: "Mercedes", article: "der", translation: "Мерседес", ruleId: 'car-brands', isException: false },
  { word: "Toyota", article: "der", translation: "Тойота", ruleId: 'car-brands', isException: false },
  { word: "Volkswagen", article: "der", translation: "Фольксваген", ruleId: 'car-brands', isException: false },
  { word: "Audi", article: "der", translation: "Ауди", ruleId: 'car-brands', isException: false },

  // Мотоциклы
  { word: "Harley Davidson", article: "die", translation: "Харлей Дэвидсон", ruleId: 'motorcycle-brands', isException: false },
  { word: "Suzuki", article: "die", translation: "Сузуки", ruleId: 'motorcycle-brands', isException: false },
  { word: "Triumph", article: "die", translation: "Триумф", ruleId: 'motorcycle-brands', isException: false },
  { word: "Yamaha", article: "die", translation: "Ямаха", ruleId: 'motorcycle-brands', isException: false },
  { word: "Ducati", article: "die", translation: "Дукати", ruleId: 'motorcycle-brands', isException: false },

  // Горы
  { word: "Everest", article: "der", translation: "Эверест", ruleId: 'mountains', isException: false },
  { word: "Himalaya", article: "der", translation: "Гималаи", ruleId: 'mountains', isException: false },
  { word: "Harz", article: "der", translation: "Гарц", ruleId: 'mountains', isException: false },
  { word: "Kilimandscharo", article: "der", translation: "Килиманджаро", ruleId: 'mountains', isException: false },
  { word: "Fuji", article: "der", translation: "Фудзияма", ruleId: 'mountains', isException: false },

  // Реки в Германии
  { word: "Donau", article: "die", translation: "Дунай", ruleId: 'rivers-inside-germany', isException: false },
  { word: "Mosel", article: "die", translation: "Мозель", ruleId: 'rivers-inside-germany', isException: false },
  { word: "Spree", article: "die", translation: "Шпрее", ruleId: 'rivers-inside-germany', isException: false },
  { word: "Elbe", article: "die", translation: "Эльба", ruleId: 'rivers-inside-germany', isException: false },
  { word: "Oder", article: "die", translation: "Одер", ruleId: 'rivers-inside-germany', isException: false },

  // Реки вне Германии
  { word: "Newa", article: "die", translation: "Нева", ruleId: 'rivers-outside-germany', isException: false },
  { word: "Seine", article: "die", translation: "Сена", ruleId: 'rivers-outside-germany', isException: false },
  { word: "Themse", article: "die", translation: "Темза", ruleId: 'rivers-outside-germany', isException: false },
  { word: "Don", article: "der", translation: "Дон", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-outside-germany' },

  // Цветы, фрукты, овощи
  { word: "Tomate", article: "die", translation: "помидор", ruleId: 'flowers-fruits-vegetables', isException: false },
  { word: "Gurke", article: "die", translation: "огурец", ruleId: 'flowers-fruits-vegetables', isException: false },
  { word: "Rose", article: "die", translation: "роза", ruleId: 'flowers-fruits-vegetables', isException: false },
  { word: "Apfelsine", article: "die", translation: "апельсин", ruleId: 'flowers-fruits-vegetables', isException: false },
  { word: "Zeder", article: "die", translation: "кедр", ruleId: 'flowers-fruits-vegetables', isException: false },

  // Люди (муж.)
  { word: "Mann", article: "der", translation: "мужчина", ruleId: 'male-persons', isException: false },
  { word: "Vater", article: "der", translation: "отец", ruleId: 'male-persons', isException: false },
  { word: "Arzt", article: "der", translation: "врач", ruleId: 'male-persons', isException: false },
  { word: "Ingenieur", article: "der", translation: "инженер", ruleId: 'male-persons', isException: false },
  { word: "Bruder", article: "der", translation: "брат", ruleId: 'male-persons', isException: false },

  // Люди (жен.)
  { word: "Frau", article: "die", translation: "женщина", ruleId: 'female-persons', isException: false },
  { word: "Mutter", article: "die", translation: "мать", ruleId: 'female-persons', isException: false },
  { word: "Ärztin", article: "die", translation: "врач (жен.)", ruleId: 'female-persons', isException: false },
  { word: "Lehrerin", article: "die", translation: "учительница", ruleId: 'female-persons', isException: false },
  { word: "Schwester", article: "die", translation: "сестра", ruleId: 'female-persons', isException: false },

  // Корабли и самолёты
  { word: "Boeing", article: "die", translation: "Боинг", ruleId: 'ships-airplanes', isException: false },
  { word: "Concorde", article: "die", translation: "Конкорд", ruleId: 'ships-airplanes', isException: false },
  { word: "Titanic", article: "die", translation: "Титаник", ruleId: 'ships-airplanes', isException: false },
  { word: "Gorch Fock", article: "die", translation: "Горх Фок", ruleId: 'ships-airplanes', isException: false },
  { word: "Queen Mary", article: "die", translation: "Куин Мэри", ruleId: 'ships-airplanes', isException: false },

  // Числа
  { word: "Eins", article: "die", translation: "один", ruleId: 'cardinal-numbers', isException: false },
  { word: "Drei", article: "die", translation: "три", ruleId: 'cardinal-numbers', isException: false },
  { word: "Sieben", article: "die", translation: "семь", ruleId: 'cardinal-numbers', isException: false },
  { word: "Neun", article: "die", translation: "девять", ruleId: 'cardinal-numbers', isException: false },
  { word: "Million", article: "die", translation: "миллион", ruleId: 'cardinal-numbers', isException: false },

  // === ИСКЛЮЧЕНИЯ ===

  // Исключения женского рода
  { word: "Sonne", article: "die", translation: "солнце", ruleId: 'exceptions-die', isException: true },
  { word: "Erde", article: "die", translation: "земля", ruleId: 'exceptions-die', isException: true },
  { word: "Butter", article: "die", translation: "масло", ruleId: 'exceptions-die', isException: true, exceptionTo: 'endings-er' },
  { word: "Mutter", article: "die", translation: "мать", ruleId: 'exceptions-die', isException: true, exceptionTo: 'endings-er' },
  { word: "Tochter", article: "die", translation: "дочь", ruleId: 'exceptions-die', isException: true },
  { word: "Woche", article: "die", translation: "неделя", ruleId: 'exceptions-die', isException: true, exceptionTo: 'days-months-seasons' },
  { word: "Alpen", article: "die", translation: "Альпы", ruleId: 'exceptions-die', isException: true, exceptionTo: 'mountains' },
  { word: "Anden", article: "die", translation: "Анды", ruleId: 'exceptions-die', isException: true, exceptionTo: 'mountains' },
  { word: "Pyrenäen", article: "die", translation: "Пиренеи", ruleId: 'exceptions-die', isException: true, exceptionTo: 'mountains' },
  { word: "Kordilleren", article: "die", translation: "Кордильеры", ruleId: 'exceptions-die', isException: true, exceptionTo: 'mountains' },
  { word: "Hälfte", article: "die", translation: "половина", ruleId: 'exceptions-die', isException: true, exceptionTo: 'fractions' },

  // Исключения среднего рода
  { word: "Fenster", article: "das", translation: "окно", ruleId: 'exceptions-das', isException: true, exceptionTo: 'endings-er' },
  { word: "Wasser", article: "das", translation: "вода", ruleId: 'exceptions-das', isException: true, exceptionTo: 'endings-er' },
  { word: "Messer", article: "das", translation: "нож", ruleId: 'exceptions-das', isException: true, exceptionTo: 'endings-er' },
  { word: "Bier", article: "das", translation: "пиво", ruleId: 'exceptions-das', isException: true, exceptionTo: 'alcoholic-drinks' },
  { word: "Kind", article: "das", translation: "ребёнок", ruleId: 'exceptions-das', isException: true },
  { word: "Attentat", article: "das", translation: "покушение", ruleId: 'exceptions-das', isException: true, exceptionTo: 'endings-t' },
  { word: "Jahr", article: "das", translation: "год", ruleId: 'exceptions-das', isException: true, exceptionTo: 'days-months-seasons' },
  { word: "Hundert", article: "das", translation: "сто", ruleId: 'exceptions-das', isException: true, exceptionTo: 'cardinal-numbers' },
  { word: "Tausend", article: "das", translation: "тысяча", ruleId: 'exceptions-das', isException: true, exceptionTo: 'cardinal-numbers' },
  { word: "Dutzend", article: "das", translation: "дюжина", ruleId: 'exceptions-das', isException: true, exceptionTo: 'cardinal-numbers' },
  { word: "Veilchen", article: "das", translation: "фиалка", ruleId: 'exceptions-das', isException: true, exceptionTo: 'flowers-fruits-vegetables' },
  { word: "Vergissmeinnicht", article: "das", translation: "незабудка", ruleId: 'exceptions-das', isException: true, exceptionTo: 'flowers-fruits-vegetables' },
  { word: "Stiefmütterchen", article: "das", translation: "фиалка трёхцветная", ruleId: 'exceptions-das', isException: true, exceptionTo: 'flowers-fruits-vegetables' },

  // Исключения мужского рода
  { word: "Kaffee", article: "der", translation: "кофе", ruleId: 'exceptions-der', isException: true },
  { word: "Tee", article: "der", translation: "чай", ruleId: 'exceptions-der', isException: true },
  { word: "Joghurt", article: "der", translation: "йогурт", ruleId: 'exceptions-der', isException: true },
  { word: "Meter", article: "der", translation: "метр", ruleId: 'exceptions-der', isException: true },
  { word: "Saft", article: "der", translation: "сок", ruleId: 'exceptions-der', isException: true },
  { word: "Ahorn", article: "der", translation: "клён", ruleId: 'exceptions-der', isException: true, exceptionTo: 'flowers-fruits-vegetables' },
  { word: "Mohn", article: "der", translation: "мак", ruleId: 'exceptions-der', isException: true, exceptionTo: 'flowers-fruits-vegetables' },
  { word: "Kürbis", article: "der", translation: "тыква", ruleId: 'exceptions-der', isException: true, exceptionTo: 'flowers-fruits-vegetables' },
  { word: "Rhein", article: "der", translation: "Рейн", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-inside-germany' },
  { word: "Nil", article: "der", translation: "Нил", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-outside-germany' },
  { word: "Amazonas", article: "der", translation: "Амазонка", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-outside-germany' },
  { word: "Ganges", article: "der", translation: "Ганг", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-outside-germany' },
  { word: "Main", article: "der", translation: "Майн", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-inside-germany' },
  { word: "Neckar", article: "der", translation: "Неккар", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-inside-germany' },
  { word: "Jordan", article: "der", translation: "Иордан", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-outside-germany' },
  { word: "Jangtse", article: "der", translation: "Янцзы", ruleId: 'exceptions-der', isException: true, exceptionTo: 'rivers-outside-germany' },
  { word: "Stahl", article: "der", translation: "сталь", ruleId: 'exceptions-der', isException: true, exceptionTo: 'chemical-elements' },
  { word: "Phosphor", article: "der", translation: "фосфор", ruleId: 'exceptions-der', isException: true, exceptionTo: 'chemical-elements' },
  { word: "Schwefel", article: "der", translation: "сера", ruleId: 'exceptions-der', isException: true, exceptionTo: 'chemical-elements' },
  { word: "Atlantik", article: "der", translation: "Атлантический океан", ruleId: 'exceptions-der', isException: true, exceptionTo: 'endings-ik' },
  { word: "Pazifik", article: "der", translation: "Тихий океан", ruleId: 'exceptions-der', isException: true, exceptionTo: 'endings-ik' },
  { word: "Reichtum", article: "der", translation: "богатство", ruleId: 'exceptions-der', isException: true, exceptionTo: 'endings-um' },
  { word: "Irrtum", article: "der", translation: "ошибка", ruleId: 'exceptions-der', isException: true, exceptionTo: 'endings-um' },
  { word: "Gedanke", article: "der", translation: "мысль", ruleId: 'exceptions-der', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Gesang", article: "der", translation: "пение", ruleId: 'exceptions-der', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Geruch", article: "der", translation: "запах", ruleId: 'exceptions-der', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Geschmack", article: "der", translation: "вкус", ruleId: 'exceptions-der', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Gestank", article: "der", translation: "вонь", ruleId: 'exceptions-der', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Gebrauch", article: "der", translation: "употребление", ruleId: 'exceptions-der', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Gewalt", article: "die", translation: "насилие", ruleId: 'exceptions-die', isException: true, exceptionTo: 'prefix-ge' },
  { word: "Geduld", article: "die", translation: "терпение", ruleId: 'exceptions-die', isException: true, exceptionTo: 'prefix-ge' },
];

export default GERMAN_WORDS_DATA;