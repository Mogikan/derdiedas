import React, { useState, useEffect, useCallback } from "react";
import WordCard from "./components/WordCard";
import Filter from "./components/Filter";
import StatisticsView from "./components/StatisticsView";
import GERMAN_WORDS_DATA from "./data/germanWords";
import { RuleId, GermanWord } from "./data/germanWords";
import { Statistics, Mistake, ViewMode } from "./types";
import "./App.css";
import RulesList from "./components/RulesList";

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

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [filter, setFilter] = useState<RuleId | "all">("all");
  const [shuffledWords, setShuffledWords] = useState<GermanWord[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("learning");
  const [statistics, setStatistics] = useState<Statistics>({
    totalAttempts: 0,
    correctAnswers: 0,
    mistakes: [],
    byRule: {},
  });

  // Загрузка статистики из localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem("german-articles-statistics");
    if (savedStats) {
      setStatistics(JSON.parse(savedStats));
    }
  }, []);

  // Сохранение статистики в localStorage
  useEffect(() => {
    localStorage.setItem(
      "german-articles-statistics",
      JSON.stringify(statistics)
    );
  }, [statistics]);

  // Фильтрация и перемешивание слов
  useEffect(() => {
    let wordsToUse: GermanWord[] = [];

    if (viewMode === "mistakes") {
      wordsToUse = GERMAN_WORDS_DATA.filter((word) =>
        statistics.mistakes.some((mistake) => mistake.word === word.word)
      );
    } else {
      wordsToUse =
        filter === "all"
          ? GERMAN_WORDS_DATA
          : GERMAN_WORDS_DATA.filter((word) => word.ruleId === filter);
    }

    setShuffledWords(getBalancedShuffle(wordsToUse));
    setCurrentWordIndex(0);
    setScore(0);
    setTotalAnswered(0);
  }, [filter, viewMode, statistics.mistakes]);

  const currentWord = shuffledWords[currentWordIndex];

  const updateStatistics = useCallback(
    (word: GermanWord, isCorrect: boolean) => {
      setStatistics((prev) => {
        const newStats = { ...prev };
        newStats.totalAttempts++;

        if (isCorrect) {
          newStats.correctAnswers++;
        } else {
          // Обновляем ошибки
          const mistakeIndex = newStats.mistakes.findIndex(
            (m) => m.word === word.word
          );
          if (mistakeIndex >= 0) {
            newStats.mistakes[mistakeIndex] = {
              ...newStats.mistakes[mistakeIndex],
              count: newStats.mistakes[mistakeIndex].count + 1,
              lastAttempt: new Date(),
            };
          } else {
            newStats.mistakes.push({
              word: word.word,
              article: word.article,
              translation: word.translation,
              ruleId: word.ruleId,
              count: 1,
              lastAttempt: new Date(),
            });
          }
        }

        // Обновляем статистику по правилам
        if (!newStats.byRule[word.ruleId]) {
          newStats.byRule[word.ruleId] = { attempts: 0, mistakes: 0 };
        }
        newStats.byRule[word.ruleId].attempts++;
        if (!isCorrect) {
          newStats.byRule[word.ruleId].mistakes++;
        }

        return newStats;
      });
    },
    []
  );

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      setTotalAnswered((prev) => prev + 1);

      if (currentWord) {
        updateStatistics(currentWord, isCorrect);
      }
    },
    [currentWord, updateStatistics]
  );

  const handleNextWord = useCallback(() => {
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
    setScore(0);
    setTotalAnswered(0);
  };

  const clearMistakes = () => {
    setStatistics((prev) => ({
      ...prev,
      mistakes: [],
    }));
  };

  if (viewMode === "statistics") {
    return (
      <StatisticsView
        statistics={statistics}
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
            <h1>Изучение немецких артиклей</h1>
            <div className="stats">
              Правильно: {score} из {totalAnswered}
            </div>
          </div>
        </header>
        <main className="main">
          <div className="no-words-message">
            {viewMode === "mistakes" ? (
              <>
                <h3>Нет слов с ошибками!</h3>
                <p>Вы пока не сделали ни одной ошибки или очистили историю.</p>
                <button
                  className="mode-btn"
                  onClick={() => setViewMode("learning")}
                >
                  Вернуться к обучению
                </button>
              </>
            ) : (
              <p>Нет слов для изучения по выбранному фильтру</p>
            )}
          </div>
        </main>
      </div>
    );
  }

  if (!currentWord) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <h1>Изучение немецких артиклей</h1>
          <div className="stats">
            Правильно: {score} из {totalAnswered}
          </div>
        </div>

        <div className="header-controls">
          <Filter currentFilter={filter} onFilterChange={handleFilterChange} />

          <div className="view-mode-buttons">
            <button
              className={`mode-btn ${viewMode === "learning" ? "active" : ""}`}
              onClick={() => setViewMode("learning")}
            >
              Обучение
            </button>
            <button
              className={`mode-btn ${viewMode === "mistakes" ? "active" : ""}`}
              onClick={() => setViewMode("mistakes")}
              disabled={statistics.mistakes.length === 0}
            >
              Ошибки ({statistics.mistakes.length})
            </button>
            <button
              className="mode-btn"
              onClick={() => setViewMode("statistics")}
            >
              Статистика
            </button>
            <button className="mode-btn" onClick={() => setViewMode("rules")}>
              Правила
            </button>
          </div>
        </div>

        <div className="progress-indicator">
          {viewMode === "mistakes" ? "Повторение ошибок: " : "Слово "}
          {currentWordIndex + 1} из {shuffledWords.length}
        </div>
      </header>

      <main className="main">
        <WordCard
          word={currentWord}
          onAnswer={handleAnswer}
          onNextWord={handleNextWord}
        />
      </main>

      <footer className="footer">
        <button className="reset-btn" onClick={handleReset}>
          Сбросить прогресс
        </button>
        {viewMode === "mistakes" && (
          <button className="clear-btn" onClick={clearMistakes}>
            Очистить ошибки
          </button>
        )}
      </footer>
    </div>
  );
}

export default App;
