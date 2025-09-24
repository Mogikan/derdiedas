import React, { useState } from "react";
import { GermanWord, RULES } from "../data/germanWords";

interface WordCardProps {
  word: GermanWord;
  onAnswer: (isCorrect: boolean) => void;
  onNextWord: () => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onAnswer, onNextWord }) => {
  const [userArticle, setUserArticle] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [showRule, setShowRule] = useState(false);

  const handleArticleClick = (article: string) => {
    if (showResult) return;

    setUserArticle(article);
    const isCorrect = article === word.article;
    onAnswer(isCorrect);
    setShowResult(true);
    setShowRule(true);
  };

  const handleNext = () => {
    setUserArticle("");
    setShowResult(false);
    setShowRule(false);
    onNextWord();
  };

  const isCorrect = userArticle === word.article;

  return (
    <div className="card">
      <div className="word">{word.word}</div>
      <div className="translation">{word.translation}</div>

      {!showResult ? (
        <div className="articles">
          {(["der", "die", "das"] as const).map((article) => (
            <button
              key={article}
              className={`article-btn ${article}`}
              onClick={() => handleArticleClick(article)}
            >
              {article}
            </button>
          ))}
        </div>
      ) : (
        <div className="result">
          <div
            className={`result-message ${isCorrect ? "correct" : "incorrect"}`}
          >
            {isCorrect ? "Правильно! ✓" : "Неправильно! ✗"}
          </div>

          <div className="correct-answer">
            Правильный ответ:{" "}
            <span className={word.article}>{word.article}</span> {word.word}
          </div>

          <button className="next-btn" onClick={handleNext}>
            Следующее слово
          </button>
        </div>
      )}

      {/* Правило всегда внизу, но скрыто до ответа */}
      {showRule && (
        <div className="rule-info">
          <h4>
            {word.isException ? "Исключение! " : "Правило: "}
            {RULES[word.ruleId]}
          </h4>
          {word.isException && word.exceptionTo && (
            <p className="exception-note">
              ⚠️ Исключение из правила: {RULES[word.exceptionTo]}
            </p>
          )}
          <p>{RULES[word.ruleId]}</p>
        </div>
      )}
    </div>
  );
};

export default WordCard;
