import React from "react";
import { Statistics } from "../types";
import { useTranslation } from "react-i18next";
interface StatisticsViewProps {
  statistics: Statistics & { accuracy?: number };
  onBack: () => void;
  onClearMistakes: () => void;
}

const StatisticsView: React.FC<StatisticsViewProps> = ({
  statistics,
  onBack,
  onClearMistakes,
}) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const currentLang = i18n.language;

  const accuracy =
    statistics.accuracy ||
    (statistics.totalAttempts > 0
      ? Math.round((statistics.correctAnswers / statistics.totalAttempts) * 100)
      : 0);

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <h1>{t("statistics")}</h1>
          <button className="back-btn" onClick={onBack}>
            {t("backToLearning")}
          </button>
        </div>
      </header>

      <main className="statistics-main">
        <div className="statistics-container">
          <div className="stats-overview">
            <div className="stat-card">
              <h3>{t("answeredQuestions")}</h3>
              <div className="stat-number">{statistics.totalAttempts}</div>
            </div>
            <div className="stat-card">
              <h3>{t("correctAnswers")}</h3>
              <div className="stat-number correct">
                {statistics.correctAnswers}
              </div>
            </div>
            <div className="stat-card">
              <h3>{t("accuracy")}</h3>
              <div className="stat-number">{accuracy}%</div>
            </div>
          </div>

          {statistics.mistakes.length > 0 && (
            <div className="mistakes-section">
              <div className="section-header">
                <h2>
                  {t("mistakeWords", { count: statistics.mistakes.length })}
                </h2>
                <button className="clear-btn" onClick={onClearMistakes}>
                  {t("clearAll")}
                </button>
              </div>

              <div className="mistakes-list">
                {statistics.mistakes
                  .sort((a, b) => b.count - a.count)
                  .map((mistake, index) => (
                    <div key={index} className="mistake-item">
                      <div className="mistake-word">
                        <span className={mistake.article}>
                          {mistake.article}
                        </span>{" "}
                        {mistake.word}
                      </div>
                      <div className="mistake-translation">
                        {mistake.translations[currentLang] ||
                          mistake.translations["en"] ||
                          mistake.word}
                      </div>
                      <div className="mistake-count">
                        {t("mistakesCount")} {mistake.count}
                      </div>

                      <div className="mistake-rule">
                        {t(`rule:${mistake.ruleId}`)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="rules-section">
            <h2>{t("ruleStats")}</h2>
            <div className="rules-list">
              {Object.entries(statistics.byRule)
                .sort(([, a], [, b]) => b.mistakes - a.mistakes)
                .map(([ruleId, stats]) => {
                  const ruleAccuracy =
                    stats.attempts > 0
                      ? Math.round(
                          ((stats.attempts - stats.mistakes) / stats.attempts) *
                            100
                        )
                      : 0;
                  return (
                    <div key={ruleId} className="rule-stat-item">
                      <div className="rule-header">
                        <h4>{t(`rule:${ruleId}`)}</h4>
                        <span
                          className={`accuracy ${
                            ruleAccuracy < 70 ? "low" : ""
                          }`}
                        >
                          {ruleAccuracy}%
                        </span>
                      </div>
                      <div className="rule-details">
                        <span>
                          {t("attempts")} {stats.attempts}
                        </span>
                        <span>
                          {t("mistakesCount")} {stats.mistakes}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatisticsView;
