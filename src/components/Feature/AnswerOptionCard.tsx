import { useState } from "react";
import OptionPair from "./OptionPair";

interface AnswerOptionCardProps {
  optionLabel: string;
  optionName: string;
  optionBg?: string;
  correctAnswer: string;
  isOptionActive: boolean;
  onOptionClick: () => void;
}

// function verifyAnswerChoice(
//   optionName,
//   correctAnswer,
//   setAnswerType,
//   setIsOptionActive
// ) {
//   console.log(optionName);
//   console.log(correctAnswer);
//   console.log(optionName === correctAnswer);
//   if (optionName === correctAnswer) setAnswerType(1);
//   else setAnswerType(0);
// }

export default function AnswerOptionCard({
  optionLabel,
  optionName,
  optionBg,
  correctAnswer,
  isOptionActive,
  onOptionClick,
}: AnswerOptionCardProps) {
  console.log(correctAnswer);

  // const [answerType, setAnswerType] = useState(-1);
  // console.log("Answer not selected: " + answerType);

  return (
    <button
      className={`btn border-0 shadow-none flex gap-4 items-center justify-start bg-navy h-18 rounded-[0.75rem] px-3 w-full ${
        isOptionActive ? "border-2 border-purple" : ""
      }`}
      onClick={() =>
        // verifyAnswerChoice(optionName, correctAnswer, setAnswerType)
        onOptionClick()
      }
    >
      <OptionPair
        optionLabel={optionLabel}
        optionName={optionName}
        optionBg={optionBg}
        isOptionActive={isOptionActive}
      />
    </button>
  );
}
