import OptionPair from "./OptionPair";

interface AnswerOptionCardProps {
  optionLabel: string;
  optionName: string;
  optionBg?: string;
  correctAnswer: string;
}

function verifyAnswerChoice(optionName) {
  if(optionName === correctAnswer)
}

export default function AnswerOptionCard({
  optionLabel,
  optionName,
  optionBg,
  correctAnswer
}: AnswerOptionCardProps) {
  return (
    <button
      className="btn border-0 shadow-none flex gap-4 items-center justify-start bg-navy h-18 rounded-[0.75rem] px-3 w-full"
      onClick={() => verifyAnswerChoice(optionName)}
    >
      <OptionPair
        optionLabel={optionLabel}
        optionName={optionName}
        optionBg={optionBg} 
      />
    </button>
  );
}
