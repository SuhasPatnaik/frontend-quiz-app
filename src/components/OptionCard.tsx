export default function OptionCard({ optionLabel, optionName }) {
  return (
    <div className="flex gap-4 items-center bg-navy h-16 rounded-[0.75rem]">
      <div>
        <img src={optionLabel} alt="Subject icon" />
      </div>
      <div>{optionName}</div>
    </div>
  );
}
