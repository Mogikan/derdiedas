import React from "react";
import { ALL_RULE_IDS, RuleId } from "../data/germanWords";
import { useTranslation } from "react-i18next";
interface FilterProps {
  currentFilter: RuleId | "all";
  onFilterChange: (filter: RuleId | "all") => void;
}

const Filter: React.FC<FilterProps> = ({ currentFilter, onFilterChange }) => {
  const { t } = useTranslation();
  const sortedRuleIds = [...ALL_RULE_IDS].sort((a, b) =>
    t(`rule:${a}`).localeCompare(t(`rule:${b}`))
  );

  return (
    <div className="filter-compact">
      <select
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value as RuleId | "all")}
        className="filter-select-compact"
      >
        <option value="all">{t("filterAll")}</option>
        {sortedRuleIds.map((ruleId) => (
          <option key={ruleId} value={ruleId}>
            {t(`rule:${ruleId}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
