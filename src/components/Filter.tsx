// src/components/Filter.tsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ALL_RULE_IDS, RuleId } from "../data/germanWords";

interface FilterProps {
  currentFilter: RuleId | "all";
  onFilterChange: (filter: RuleId | "all") => void;
}

const Filter: React.FC<FilterProps> = ({ currentFilter, onFilterChange }) => {
  const { t, i18n } = useTranslation(["translation", "rule"]);

  // Пересчитываем и сортируем при смене языка
  const sortedRules = useMemo(() => {
    return [...ALL_RULE_IDS].sort((a, b) =>
      t(`rule:${a}`).localeCompare(t(`rule:${b}`))
    );
  }, [t, i18n.language]);

  return (
    <div className="filter-compact">
      <select
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value as RuleId | "all")}
        className="filter-select-compact"
      >
        <option value="all">{t("filterAll")}</option>
        {sortedRules.map((ruleId) => (
          <option key={ruleId} value={ruleId}>
            {t(`rule:${ruleId}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
