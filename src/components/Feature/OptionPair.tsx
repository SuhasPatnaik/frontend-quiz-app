export default function OptionPair({ optionLabel, optionName, optionBg }) {
  return (
    <>
      <div
        className="h-fit p-2 rounded-md"
        style={{ backgroundColor: optionBg || "bg-gray-300" }}
      >
        <img src={optionLabel} alt="Subject icon" className="h-8" />
      </div>
      <div className="font-medium text-[1.125rem]">{optionName}</div>
    </>
  );
}
