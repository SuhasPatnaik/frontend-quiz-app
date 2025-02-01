import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./components/Page/LandingPage";
import QuizPage from "./components/Page/QuizPage";
import HeaderLayout from "./components/Layout/HeaderLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subject/:subjectName" element={<QuizPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
