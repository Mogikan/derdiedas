import React from "react";
import { RuleId, RULES } from "../data/germanWords";

interface FilterProps {
  currentFilter: RuleId | "all";
  onFilterChange: (filter: RuleId | "all") => void;
}

const Filter: React.FC<FilterProps> = ({ currentFilter, onFilterChange }) => {
  const allRules = (Object.entries(RULES) as [RuleId, string][]).sort(
    ([a], [b]) => RULES[a].localeCompare(RULES[b])
  );

  return (
    <div className="filter-compact">
      <select
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value as RuleId | "all")}
        className="filter-select-compact"
      >
        <option value="all">Все правила</option>
        {allRules.map(([ruleId, ruleText]) => (
          <option key={ruleId} value={ruleId}>
            {ruleText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
