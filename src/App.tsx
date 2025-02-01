import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./components/Page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
