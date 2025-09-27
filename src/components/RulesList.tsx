import React from "react";
import { RuleId, RULES } from "../data/germanWords";
import GERMAN_WORDS_DATA, { GermanWord } from "../data/germanWords";

interface RulesListProps {
  onBack: () => void;
}

const RulesList: React.FC<RulesListProps> = ({ onBack }) => {
  const wordsByRule: Partial<Record<RuleId, GermanWord[]>> = {};

  GERMAN_WORDS_DATA.forEach((word) => {
    const ruleId = word.ruleId as RuleId;
    if (!wordsByRule[ruleId]) {
      wordsByRule[ruleId] = [];
    }
    wordsByRule[ruleId]!.push(word);
  });

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

  const CategorySection = ({
    title,
    ruleIds,
    className,
  }: {
    title: string;
    ruleIds: RuleId[];
    className: string;
  }) => {
    // Безопасная проверка с явной проверкой на undefined
    const rulesWithWords = ruleIds.filter((ruleId) => {
      const words = wordsByRule[ruleId];
      return words && words.length > 0;
    });

    if (rulesWithWords.length === 0) return null;

    return (
      <div className="rule-category">
        <h2 className={`category-title ${className}`}>{title}</h2>
        {rulesWithWords.map((ruleId) => {
          const words = wordsByRule[ruleId];
          if (!words) return null;

          return (
            <div key={ruleId} className="rule-item">
              <h3 className="rule-title">{RULES[ruleId]}</h3>
              <div className="rule-words">
                {words.slice(0, 10).map((word, index) => (
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
                {words.length > 10 && (
                  <div className="more-words">
                    ... и еще {words.length - 10} слов
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
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
          <CategorySection
            title="Женский род (die)"
            ruleIds={ruleCategories.female}
            className="die"
          />

          <CategorySection
            title="Средний род (das)"
            ruleIds={ruleCategories.neutral}
            className="das"
          />

          <CategorySection
            title="Мужской род (der)"
            ruleIds={ruleCategories.male}
            className="der"
          />

          <CategorySection
            title="Другие правила"
            ruleIds={ruleCategories.other}
            className="other"
          />
        </div>
      </main>
    </div>
  );
};

export default RulesList;
