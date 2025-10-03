import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useRef,
} from "react";
import WordCard from "./components/WordCard";
import Filter from "./components/Filter";
import StatisticsView from "./components/StatisticsView";
import RulesList from "./components/RulesList";
import GERMAN_WORDS_DATA, { GermanWord, RuleId } from "./data/germanWords";
import { Statistics, ViewMode } from "./types";
import "./App.css";
import { useTranslation } from "react-i18next";

const getBalancedShuffle = (words: GermanWord[]): GermanWord[] => {
  if (words.length === 0) return [];

  const derWords = words.filter((word) => word.article === "der");
  const dieWords = words.filter((word) => word.article === "die");
  const dasWords = words.filter((word) => word.article === "das");

  const shuffleGroup = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const shuffledDer = shuffleGroup(derWords);
  const shuffledDie = shuffleGroup(dieWords);
  const shuffledDas = shuffleGroup(dasWords);

  const result: GermanWord[] = [];
  const maxLength = Math.max(
    shuffledDer.length,
    shuffledDie.length,
    shuffledDas.length
  );

  for (let i = 0; i < maxLength; i++) {
    if (i < shuffledDer.length) result.push(shuffledDer[i]);
    if (i < shuffledDie.length) result.push(shuffledDie[i]);
    if (i < shuffledDas.length) result.push(shuffledDas[i]);
  }

  return result.sort(() => Math.random() - 0.5);
};

const restoreDates = (statistics: any): Statistics => {
  if (!statistics)
    return {
      totalAttempts: 0,
      correctAnswers: 0,
      mistakes: [],
      byRule: {},
    };

  return {
    totalAttempts: statistics.totalAttempts || 0,
    correctAnswers: statistics.correctAnswers || 0,
    mistakes: (statistics.mistakes || []).map((mistake: any) => ({
      ...mistake,
      lastAttempt: new Date(mistake.lastAttempt),
    })),
    byRule: statistics.byRule || {},
  };
};

type StatisticsAction =
  | { type: "ANSWER"; payload: { word: GermanWord; isCorrect: boolean } }
  | { type: "RESET" }
  | { type: "CLEAR_MISTAKES" }
  | { type: "LOAD_STATISTICS"; payload: Statistics };

const statisticsReducer = (
  state: Statistics,
  action: StatisticsAction
): Statistics => {
  switch (action.type) {
    case "ANSWER": {
      const { word, isCorrect } = action.payload;

      const newState = {
        ...state,
        mistakes: [...state.mistakes],
        byRule: { ...state.byRule },
      };

      newState.totalAttempts = state.totalAttempts + 1;
      if (isCorrect) {
        newState.correctAnswers = state.correctAnswers + 1;
      }

      if (!isCorrect) {
        const mistakeIndex = state.mistakes.findIndex(
          (m) => m.word === word.word
        );

        if (mistakeIndex >= 0) {
          newState.mistakes = [...state.mistakes];
          newState.mistakes[mistakeIndex] = {
            ...state.mistakes[mistakeIndex],
            count: state.mistakes[mistakeIndex].count + 1,
            lastAttempt: new Date(),
          };
        } else {
          newState.mistakes = [
            ...state.mistakes,
            {
              word: word.word,
              article: word.article,
              translations: word.translations,
              ruleId: word.ruleId,
              count: 1,
              lastAttempt: new Date(),
            },
          ];
        }
      }

      if (!newState.byRule[word.ruleId]) {
        newState.byRule[word.ruleId] = { attempts: 0, mistakes: 0 };
      } else {
        newState.byRule[word.ruleId] = { ...newState.byRule[word.ruleId] };
      }

      newState.byRule[word.ruleId].attempts =
        (state.byRule[word.ruleId]?.attempts || 0) + 1;

      if (!isCorrect) {
        newState.byRule[word.ruleId].mistakes =
          (state.byRule[word.ruleId]?.mistakes || 0) + 1;
      }

      return newState;
    }

    case "RESET":
      return {
        totalAttempts: 0,
        correctAnswers: 0,
        mistakes: [],
        byRule: {},
      };

    case "CLEAR_MISTAKES":
      return {
        ...state,
        mistakes: [],
      };

    case "LOAD_STATISTICS":
      return action.payload;

    default:
      return state;
  }
};

const initialState: Statistics = {
  totalAttempts: 0,
  correctAnswers: 0,
  mistakes: [],
  byRule: {},
};

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [filter, setFilter] = useState<RuleId | "all">("all");
  const [shuffledWords, setShuffledWords] = useState<GermanWord[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("learning");

  const [statistics, dispatch] = useReducer(statisticsReducer, initialState);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(
    null
  );
  const { i18n, t } = useTranslation();
  const languages = [
    { code: "en", name: "EN" },
    { code: "ru", name: "RU" },
    { code: "de", name: "DE" },
    { code: "es", name: "ES" },
    { code: "fr", name: "FR" },
    { code: "ja", name: "JA" },
    { code: "zh", name: "ZH" },
    { code: "pt", name: "PT" },
    { code: "ko", name: "KO" },
    { code: "ar", name: "AR" },
    { code: "hi", name: "HI" },
  ];
  // Используем ref для хранения текущего слова
  const currentWordRef = useRef<GermanWord | null>(null);

  // Обновляем ref при изменении текущего слова
  useEffect(() => {
    currentWordRef.current = shuffledWords[currentWordIndex] || null;
  }, [shuffledWords, currentWordIndex]);

  useEffect(() => {
    const savedStats = localStorage.getItem("german-articles-statistics");
    if (savedStats) {
      try {
        const parsedStats = JSON.parse(savedStats);
        const restoredStats = restoreDates(parsedStats);
        dispatch({ type: "LOAD_STATISTICS", payload: restoredStats });
      } catch (error) {
        console.error("Error loading statistics:", error);
        dispatch({ type: "RESET" });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "german-articles-statistics",
      JSON.stringify(statistics)
    );
  }, [statistics]);

  useEffect(() => {
    if (viewMode === "learning") {
      const wordsToUse =
        filter === "all"
          ? GERMAN_WORDS_DATA
          : GERMAN_WORDS_DATA.filter((word) => word.ruleId === filter);

      setShuffledWords(getBalancedShuffle(wordsToUse));
      setCurrentWordIndex(0);
    }
  }, [filter, viewMode]);

  // Обновляем слова при изменении списка ошибок или переходе в режим ошибок
  useEffect(() => {
    if (viewMode === "mistakes") {
      const wordsToUse = GERMAN_WORDS_DATA.filter((word) =>
        statistics.mistakes.some((mistake) => mistake.word === word.word)
      );

      setShuffledWords(getBalancedShuffle(wordsToUse));
      setCurrentWordIndex(0);
    }
  }, [viewMode]);

  const currentWord = shuffledWords[currentWordIndex];

  const handleAnswer = useCallback((word: GermanWord, isCorrect: boolean) => {
    console.log("Processing answer for:", word.word, "isCorrect:", isCorrect);

    dispatch({
      type: "ANSWER",
      payload: { word, isCorrect },
    });

    setAnsweredCorrectly(isCorrect);
    setShowResult(true);
  }, []);

  // В handleNextWord
  const handleNextWord = useCallback(() => {
    setShowResult(false);
    setAnsweredCorrectly(null);

    if (currentWordIndex < shuffledWords.length - 1) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      setShuffledWords((prev) => getBalancedShuffle(prev));
      setCurrentWordIndex(0);
    }
  }, [currentWordIndex, shuffledWords.length]);

  const handleFilterChange = (newFilter: RuleId | "all") => {
    setFilter(newFilter);
  };

  const handleReset = () => {
    setShuffledWords((prev) => getBalancedShuffle(prev));
    setCurrentWordIndex(0);
    dispatch({ type: "RESET" });
  };

  const clearMistakes = () => {
    dispatch({ type: "CLEAR_MISTAKES" });
    // Принудительно обновить список ошибок (он станет пустым)
    if (viewMode === "mistakes") {
      setShuffledWords([]);
      setCurrentWordIndex(0);
    }
  };

  const accuracy =
    statistics.totalAttempts > 0
      ? Math.round((statistics.correctAnswers / statistics.totalAttempts) * 100)
      : 0;

  if (viewMode === "statistics") {
    return (
      <StatisticsView
        statistics={{ ...statistics, accuracy }}
        onBack={() => setViewMode("learning")}
        onClearMistakes={clearMistakes}
      />
    );
  }

  if (viewMode === "rules") {
    return <RulesList onBack={() => setViewMode("learning")} />;
  }

  if (shuffledWords.length === 0) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-top">
            <h1>{t("appTitle")}</h1>
            <div className="stats">
              {t("correctAnswers")} : {statistics.correctAnswers} {t("from")}{" "}
              {statistics.totalAttempts}
            </div>
          </div>
        </header>
        <main className="main">
          <div className="no-words-message">
            {viewMode === "mistakes" ? (
              <>
                <h3>{t("noMistakes")}</h3>
                <p>{t("noMistakesDesc")}</p>
                <button
                  className="mode-btn"
                  onClick={() => setViewMode("learning")}
                >
                  {t("returnToLearning")}
                </button>
              </>
            ) : (
              <p>{t("noWordsForFilter")}</p>
            )}
          </div>
        </main>
      </div>
    );
  }

  if (!currentWord) {
    return (
      <div className="app">
        <header className="header">
          <h1>{t("appTitle")}</h1>
        </header>
        <main className="main">
          <div className="loading">{t("loading")}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        {/* --- НАЧАЛО ЗАМЕНЫ --- */}
        <div className="header-row">
          <h1 className="app-title">{t("appTitle")}</h1>
          <div className="language-select-container">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="lang-select"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="header-row">
          <div className="view-mode-buttons">
            <button
              className={`mode-btn ${viewMode === "learning" ? "active" : ""}`}
              onClick={() => setViewMode("learning")}
            >
              {t("learning")}
            </button>
            <button
              className={`mode-btn ${viewMode === "mistakes" ? "active" : ""}`}
              onClick={() => setViewMode("mistakes")}
              disabled={statistics.mistakes.length === 0}
            >
              {t("mistakes", { count: statistics.mistakes.length })}
            </button>
            <button
              className="mode-btn"
              onClick={() => setViewMode("statistics")}
            >
              {t("statistics")}
            </button>
            <button className="mode-btn" onClick={() => setViewMode("rules")}>
              {t("allRules")}
            </button>
          </div>
        </div>
        <div className="filter-container">
          <Filter currentFilter={filter} onFilterChange={handleFilterChange} />
        </div>

        <div className="header-row sub-info">
          <div className="stats">
            {statistics.correctAnswers} / {statistics.totalAttempts}
            {statistics.totalAttempts > 0 && (
              <span className="accuracy"> ({accuracy}%)</span>
            )}
          </div>
          <div className="progress-indicator">
            {viewMode === "mistakes" ? t("reviewingMistakes") : t("word")}{" "}
            {currentWordIndex + 1} / {shuffledWords.length}
          </div>
        </div>
        {/* --- КОНЕЦ ЗАМЕНЫ --- */}
      </header>

      <main className="main">
        <WordCard
          word={currentWord}
          onAnswer={handleAnswer}
          onNextWord={handleNextWord}
          showResult={showResult}
          answeredCorrectly={answeredCorrectly}
        />
      </main>

      <footer className="footer">
        <button className="reset-btn" onClick={handleReset}>
          {t("resetProgress")}
        </button>
        {viewMode === "mistakes" && (
          <button className="clear-btn" onClick={clearMistakes}>
            {t("clearMistakes")}
          </button>
        )}
      </footer>
    </div>
  );
}

export default App;
