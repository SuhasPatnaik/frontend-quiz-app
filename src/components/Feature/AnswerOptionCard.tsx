import OptionPair from "./OptionPair";

interface AnswerOptionCardProps {
  optionLabel: string;
  optionName: string;
  optionBg?: string;
  correctAnswer: string;
  isOptionActive: boolean;
  answerType: number;
  onOptionClick: () => void;
}

export default function AnswerOptionCard({
  optionLabel,
  optionName,
  correctAnswer,
  isOptionActive,
  answerType,
  onOptionClick,
}: AnswerOptionCardProps) {
  const getBorderStyle = () => {
    if (answerType === -1)
      return isOptionActive ? "border-4 border-purple" : ""; // Normal selection
    if (answerType === 1) return "border-4 border-green"; // Correct answer
    if (answerType === 0) return "border-4 border-red"; // Wrong answer
    return "";
  };

  return (
    <button
      className={`btn border-0 shadow-none flex gap-4 items-center justify-start bg-navy h-18 rounded-[0.75rem] px-3 w-full ${getBorderStyle()}`}
      onClick={onOptionClick}
    >
      <OptionPair
        optionLabel={optionLabel}
        optionName={optionName}
        isOptionActive={isOptionActive}
      />
    </button>
  );
}
