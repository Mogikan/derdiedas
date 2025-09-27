import { useState } from "react";
import { GermanWord, RULES } from "../data/germanWords";

interface WordCardProps {
  word: GermanWord;
  onAnswer: (word: GermanWord, isCorrect: boolean) => void;
  onNextWord: () => void;
  showResult: boolean;
  answeredCorrectly: boolean | null;
}

const WordCard: React.FC<WordCardProps> = ({
  word,
  onAnswer,
  onNextWord,
  showResult,
  answeredCorrectly,
}) => {
  const [userArticle, setUserArticle] = useState<string>("");

  const handleArticleClick = (article: string) => {
    if (showResult) return;

    const isCorrect = article === word.article;
    setUserArticle(article);
    onAnswer(word, isCorrect);
  };

  const handleNext = () => {
    setUserArticle("");
    onNextWord();
  };

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
            className={`result-message ${
              answeredCorrectly ? "correct" : "incorrect"
            }`}
          >
            {answeredCorrectly ? "Правильно! ✓" : "Неправильно! ✗"}
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

      <div className={`rule-container ${showResult ? "visible" : "hidden"}`}>
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
        </div>
      </div>
    </div>
  );
};

export default WordCard;
