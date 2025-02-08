export default function ProgressSlider({ currentQuestionIndex }) {
  return (
    <input
      type="range"
      min={0}
      max={9}
      className="w-full"
      value={currentQuestionIndex}
    />
  );
}
