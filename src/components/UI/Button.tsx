export default function Button({ children, onAnswerSubmission }) {
  return (
    <button
      className="btn bg-purple font-medium w-full text-center border-0 shadow-none"
      onClick={onAnswerSubmission}
    >
      {children}
    </button>
  );
}
