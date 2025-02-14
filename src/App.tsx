import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HeaderLayout from "./components/Layout/HeaderLayout";
import LandingPage from "./components/Page/LandingPage";
import QuizPage from "./components/Page/QuizPage";
import ScorePage from "./components/Page/ScorePage";
import PageNotFound from "./components/NotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subject/:subjectName" element={<QuizPage />} />
          <Route path="/subject/:subjectName/score" element={<ScorePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
