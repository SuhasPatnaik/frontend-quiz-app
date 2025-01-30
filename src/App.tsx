import "./App.css";
import Title from "./components/Title";
import ToggleMode from "./components/ToggleMode";

function App() {
  return (
    <>
      <main className="bg-[url('./assets/pattern-background-mobile-dark.svg')] min-h-screen px-6 py-4">
        <div className="flex">
          <ToggleMode />
        </div>
        <Title />
      </main>
    </>
  );
}

export default App;
