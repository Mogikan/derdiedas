import React from "react";
import { RuleId } from "../data/germanWords";
import {
  ALL_RULE_IDS,
  FEMALE_RULES,
  NEUTRAL_RULES,
  MALE_RULES,
} from "../data/germanWords";
import GERMAN_WORDS_DATA, { GermanWord } from "../data/germanWords";
import { useTranslation } from "react-i18next";
interface RulesListProps {
  onBack: () => void;
}

const RulesList: React.FC<RulesListProps> = ({ onBack }) => {
  const wordsByRule: Partial<Record<RuleId, GermanWord[]>> = {};
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const currentLang = i18n.language;
  GERMAN_WORDS_DATA.forEach((word) => {
    const ruleId = word.ruleId as RuleId;
    if (!wordsByRule[ruleId]) {
      wordsByRule[ruleId] = [];
    }
    wordsByRule[ruleId]!.push(word);
  });

  const allRuleIds = ALL_RULE_IDS;

  const ruleCategories = {
    female: ALL_RULE_IDS.filter((ruleId) => FEMALE_RULES.has(ruleId)),
    neutral: ALL_RULE_IDS.filter((ruleId) => NEUTRAL_RULES.has(ruleId)),
    male: ALL_RULE_IDS.filter((ruleId) => MALE_RULES.has(ruleId)),
    other: ALL_RULE_IDS.filter(
      (ruleId) =>
        !FEMALE_RULES.has(ruleId) &&
        !NEUTRAL_RULES.has(ruleId) &&
        !MALE_RULES.has(ruleId)
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
              <h3 className="rule-title">{t(`rule:${ruleId}`)}</h3>
              <div className="rule-words">
                {words.map((word, index) => (
                  <div key={index} className="word-example">
                    <span className={`article ${word.article}`}>
                      {word.article}
                    </span>
                    <span className="word-text">{word.word}</span>
                    <span className="word-translation">
                      {" - "}
                      {word.translations[currentLang] ||
                        word.translations["en"] ||
                        word.word}
                    </span>
                    {word.isException && (
                      <span className="exception-badge">искл.</span>
                    )}
                  </div>
                ))}
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
          <h1>{t("allRules")}</h1>
          <button className="back-btn" onClick={onBack}>
            {t("backToLearning")}
          </button>
        </div>
      </header>

      <main className="rules-main">
        <div className="rules-categories">
          <CategorySection
            title={t("female")}
            ruleIds={ruleCategories.female}
            className="die"
          />

          <CategorySection
            title={t("neutral")}
            ruleIds={ruleCategories.neutral}
            className="das"
          />

          <CategorySection
            title={t("male")}
            ruleIds={ruleCategories.male}
            className="der"
          />

          <CategorySection
            title={t("otherRules")}
            ruleIds={ruleCategories.other}
            className="other"
          />
        </div>
      </main>
    </div>
  );
};

export default RulesList;
