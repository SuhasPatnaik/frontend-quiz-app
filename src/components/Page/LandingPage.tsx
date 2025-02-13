import StartMenu from "../Feature/StartMenu";
import Title from "../Feature/Title";

export default function LandingPage() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:mx-[5vw] lg:justify-self-center lg:max-w-[70vw] lg:pt-16">
        <div className="pt-8 pb-10 flex flex-col gap-4 lg:pt-0">
          <Title />
        </div>
        <div className="flex flex-col gap-4">
          <StartMenu />
        </div>
      </div>
    </>
  );
}
