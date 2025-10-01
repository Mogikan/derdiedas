import React from "react";
import { useTranslation } from "react-i18next";
import { RuleId } from "../data/germanWords";

interface RuleInfoProps {
  ruleId: RuleId;
}

const RuleInfo: React.FC<RuleInfoProps> = ({ ruleId }) => {
  const { t } = useTranslation();

  return (
    <div className="rule-info">
      <h4>{t("rule")}: </h4> {/* ← локализуем и заголовок */}
      <p>{t(`rule:${ruleId}`)}</p>
    </div>
  );
};

export default RuleInfo;
