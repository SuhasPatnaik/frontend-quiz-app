import "./App.css";
import StartMenu from "./components/StartMenu";
import Title from "./components/Title";
import ToggleMode from "./components/ToggleMode";

function App() {
  return (
    <>
      <main className="bg-[url('/images/pattern-background-mobile-dark.svg')] min-h-screen px-6 py-4">
        <div className="flex">
          <ToggleMode />
        </div>
        <div className="pt-8 pb-10 flex flex-col gap-4">
          <Title />
        </div>
        <div className="flex flex-col gap-4">
          <StartMenu />
        </div>
      </main>
    </>
  );
}

export default App;
