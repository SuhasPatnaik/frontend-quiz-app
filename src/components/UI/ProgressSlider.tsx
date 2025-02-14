export default function ProgressSlider({ currentQuestionIndex }) {
  return (
    <div className="relative w-full h-6 bg-[var(--color-navy)] rounded-xl">
      <div
        className="absolute top-1 left-[0.5rem] h-4 bg-[var(--color-purple)] rounded-lg transition-all"
        style={{
          width: `calc(${(currentQuestionIndex / 9) * 100}% - 1rem)`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={9}
        value={currentQuestionIndex}
        className="absolute inset-0 w-full h-full opacity-0"
      />
    </div>
  );
}
