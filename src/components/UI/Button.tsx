interface ButtonProps {
  children: React.ReactNode;
  onAnswerSubmission?: () => void;
  onNextQuestion?: () => void;
  onPlayAgain?: () => void;
}

export default function Button({
  children,
  onAnswerSubmission,
  onNextQuestion,
  onPlayAgain,
}: ButtonProps) {
  return (
    <button
      className="btn bg-purple font-medium w-full text-center border-0 shadow-none rounded-lg"
      onClick={onAnswerSubmission || onNextQuestion || onPlayAgain}
    >
      {children}
    </button>
  );
}
