interface OptionPairProps {
  optionLabel: string;
  optionName: string;
  optionBg?: string;
  isOptionActive?: boolean;
}

export default function OptionPair({
  optionLabel,
  optionName,
  optionBg,
  isOptionActive,
}: OptionPairProps) {
  return (
    <>
      <div
        className="h-fit p-2 rounded-md"
        style={{ backgroundColor: optionBg || "bg-gray-300" }}
      >
        {optionBg ? (
          <img src={optionLabel} alt="Subject icon" className="h-8" />
        ) : (
          <div
            className={`bg-light-grey py-2 px-4 rounded-md ${
              isOptionActive ? "bg-purple" : ""
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
    </>
  );
}
