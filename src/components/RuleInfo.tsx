import React from "react";
import { RuleId, RULES } from "../data/germanWords";

interface RuleInfoProps {
  ruleId: RuleId;
}

const RuleInfo: React.FC<RuleInfoProps> = ({ ruleId }) => {
  return (
    <div className="rule-info">
      <h4>Правило:</h4>
      <p>{RULES[ruleId]}</p>
    </div>
  );
};

export default RuleInfo;
