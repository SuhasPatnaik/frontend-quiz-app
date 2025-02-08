interface OptionPairProps {
  optionLabel: string;
  optionName?: string;
  optionBg?: string;
  isOptionActive?: boolean;
  answerType?: number;
  correctAnswer?: string;
  displayCorrectAnswer?: boolean;
}

export default function OptionPair({
  optionLabel,
  optionName,
  optionBg,
  isOptionActive,
  answerType,
  correctAnswer,
  displayCorrectAnswer,
}: OptionPairProps) {
  const isCorrectOption = optionName === correctAnswer;

  return (
    <>
      <div
        className="h-fit p-2 rounded-lg"
        style={{ backgroundColor: optionBg || "bg-gray-300" }}
      >
        {optionBg ? (
          <img src={optionLabel} alt="Subject icon" className="h-8" />
        ) : (
          <div
            className={`py-2 px-4 rounded-lg ${
              answerType === 1
                ? "bg-green"
                : answerType === 0
                ? "bg-red"
                : isOptionActive
                ? "bg-purple"
                : "bg-light-grey"
            }`}
          >
            <p
              className={`text-dark-navy font-medium text-[1.125rem] ${
                isOptionActive ? "text-white" : ""
              }`}
            >
              {optionLabel}
            </p>
          </div>
        )}
      </div>
      <div className="font-medium text-[1.125rem]">{optionName}</div>
      {displayCorrectAnswer && isCorrectOption && (
        <div className="ml-auto mr-4">
          <img src="/images/icon-correct.svg" alt="Correct" />
        </div>
      )}
      {answerType === 0 && (
        <div className="ml-auto mr-4">
          <img src="/images/icon-incorrect.svg" alt="Incorrect" />
        </div>
      )}
    </>
  );
}
