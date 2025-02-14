export default function ProgressSlider({ currentQuestionIndex }) {
  return (
    <div className="relative w-full h-3 bg-[var(--color-navy)] rounded-lg">
      <div
        className="absolute top-0.75 left-[0.5rem] h-1.5 bg-[var(--color-purple)] rounded-lg transition-all"
        style={{
          width: `calc(${(currentQuestionIndex / 9) * 100}% - 1rem)`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={9}
        value={currentQuestionIndex}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
}
