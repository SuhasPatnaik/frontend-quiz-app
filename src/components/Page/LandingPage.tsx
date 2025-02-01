import StartMenu from "../Feature/StartMenu";
import Title from "../Feature/Title";

export default function LandingPage() {
  return (
    <>
      <div className="pt-8 pb-10 flex flex-col gap-4">
        <Title />
      </div>
      <div className="flex flex-col gap-4">
        <StartMenu />
      </div>
    </>
  );
}
