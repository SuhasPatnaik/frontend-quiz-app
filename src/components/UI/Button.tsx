export default function Button({
  children,
  onAnswerSubmission,
  onNextQuestion,
  onPlayAgain,
}) {
  return (
    <button
      className="btn bg-purple font-medium w-full text-center border-0 shadow-none rounded-lg"
      onClick={onAnswerSubmission || onNextQuestion || onPlayAgain}
    >
      {children}
    </button>
  );
}
