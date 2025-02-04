export default function Button({ children }) {
  return (
    <button className="btn bg-purple font-medium w-full text-center border-0 shadow-none">
      {children}
    </button>
  );
}
