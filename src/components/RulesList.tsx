import React from "react";
import { RuleId, RULES } from "../data/germanWords";
import GERMAN_WORDS_DATA, { GermanWord } from "../data/germanWords";

interface RulesListProps {
  onBack: () => void;
}

const RulesList: React.FC<RulesListProps> = ({ onBack }) => {
  // Группируем слова по правилам с правильной типизацией
  const wordsByRule: Partial<Record<RuleId, GermanWord[]>> = {};

  GERMAN_WORDS_DATA.forEach((word) => {
    const ruleId = word.ruleId as RuleId;
    if (!wordsByRule[ruleId]) {
      wordsByRule[ruleId] = [];
    }
    wordsByRule[ruleId]!.push(word);
  });

  // Сортируем правила по категориям с правильной типизацией
  const allRuleIds = Object.keys(RULES) as RuleId[];

  const ruleCategories = {
    female: allRuleIds.filter((ruleId) => RULES[ruleId].includes("→ die")),
    neutral: allRuleIds.filter((ruleId) => RULES[ruleId].includes("→ das")),
    male: allRuleIds.filter((ruleId) => RULES[ruleId].includes("→ der")),
    other: allRuleIds.filter(
      (ruleId) =>
        !RULES[ruleId].includes("→ die") &&
        !RULES[ruleId].includes("→ das") &&
        !RULES[ruleId].includes("→ der")
    ),
  };

  return (
    <div className="rules-list-container">
      <header className="header">
        <div className="header-top">
          <h1>Все правила и слова</h1>
          <button className="back-btn" onClick={onBack}>
            ← Назад к обучению
          </button>
        </div>
      </header>

      <main className="rules-main">
        <div className="rules-categories">
          {/* Женский род */}
          <div className="rule-category">
            <h2 className="category-title die">Женский род (die)</h2>
            {ruleCategories.female.map((ruleId) => (
              <div key={ruleId} className="rule-item">
                <h3 className="rule-title">{RULES[ruleId]}</h3>
                <div className="rule-words">
                  {wordsByRule[ruleId]?.slice(0, 10).map((word, index) => (
                    <div key={index} className="word-example">
                      <span className={`article ${word.article}`}>
                        {word.article}
                      </span>
                      <span className="word-text">{word.word}</span>
                      <span className="word-translation">
                        {" "}
                        - {word.translation}
                      </span>
                      {word.isException && (
                        <span className="exception-badge">искл.</span>
                      )}
                    </div>
                  ))}
                  {wordsByRule[ruleId] && wordsByRule[ruleId]!.length > 10 && (
                    <div className="more-words">
                      ... и еще {wordsByRule[ruleId]!.length - 10} слов
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Средний род */}
          <div className="rule-category">
            <h2 className="category-title das">Средний род (das)</h2>
            {ruleCategories.neutral.map((ruleId) => (
              <div key={ruleId} className="rule-item">
                <h3 className="rule-title">{RULES[ruleId]}</h3>
                <div className="rule-words">
                  {wordsByRule[ruleId]?.slice(0, 10).map((word, index) => (
                    <div key={index} className="word-example">
                      <span className={`article ${word.article}`}>
                        {word.article}
                      </span>
                      <span className="word-text">{word.word}</span>
                      <span className="word-translation">
                        {" "}
                        - {word.translation}
                      </span>
                      {word.isException && (
                        <span className="exception-badge">искл.</span>
                      )}
                    </div>
                  ))}
                  {wordsByRule[ruleId] && wordsByRule[ruleId]!.length > 10 && (
                    <div className="more-words">
                      ... и еще {wordsByRule[ruleId]!.length - 10} слов
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Мужской род */}
          <div className="rule-category">
            <h2 className="category-title der">Мужской род (der)</h2>
            {ruleCategories.male.map((ruleId) => (
              <div key={ruleId} className="rule-item">
                <h3 className="rule-title">{RULES[ruleId]}</h3>
                <div className="rule-words">
                  {wordsByRule[ruleId]?.slice(0, 10).map((word, index) => (
                    <div key={index} className="word-example">
                      <span className={`article ${word.article}`}>
                        {word.article}
                      </span>
                      <span className="word-text">{word.word}</span>
                      <span className="word-translation">
                        {" "}
                        - {word.translation}
                      </span>
                      {word.isException && (
                        <span className="exception-badge">искл.</span>
                      )}
                    </div>
                  ))}
                  {wordsByRule[ruleId] && wordsByRule[ruleId]!.length > 10 && (
                    <div className="more-words">
                      ... и еще {wordsByRule[ruleId]!.length - 10} слов
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Другие правила */}
          <div className="rule-category">
            <h2 className="category-title">Другие правила</h2>
            {ruleCategories.other.map((ruleId) => (
              <div key={ruleId} className="rule-item">
                <h3 className="rule-title">{RULES[ruleId]}</h3>
                <div className="rule-words">
                  {wordsByRule[ruleId]?.slice(0, 10).map((word, index) => (
                    <div key={index} className="word-example">
                      <span className={`article ${word.article}`}>
                        {word.article}
                      </span>
                      <span className="word-text">{word.word}</span>
                      <span className="word-translation">
                        {" "}
                        - {word.translation}
                      </span>
                      {word.isException && (
                        <span className="exception-badge">искл.</span>
                      )}
                    </div>
                  ))}
                  {wordsByRule[ruleId] && wordsByRule[ruleId]!.length > 10 && (
                    <div className="more-words">
                      ... и еще {wordsByRule[ruleId]!.length - 10} слов
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RulesList;
