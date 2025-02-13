import { useNavigate } from "react-router";

interface Error404Props {
  children: React.ReactNode;
}

export default function Error404({ children }: Error404Props) {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center h-[80vh]">
      <div className="flex flex-col gap-12 items-center">
        <p className="font-medium text-3xl">{children}</p>
        <button
          className="bg-red p-4 rounded-lg w-fit cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go To Home
        </button>
      </div>
    </div>
  );
}
