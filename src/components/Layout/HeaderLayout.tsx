import { Outlet, useParams } from "react-router";

import ToggleMode from "../UI/ToggleMode";
import OptionPair from "../Feature/OptionPair";

import quizData from "../../data/data.json";

const optionsBgColor = ["#FFF1E9", "#E0FDEF", "#EBF0FF", "#F6E7FF"];

export default function HeaderLayout() {
  const { subjectName } = useParams();
  const quizIndex = quizData.quizzes.findIndex(
    (quiz) => quiz.title.toLowerCase() === subjectName?.toLowerCase()
  );
  const quiz = quizIndex !== -1 ? quizData.quizzes[quizIndex] : null;

  return (
    <main className="bg-[url('/images/pattern-background-mobile-dark.svg')] min-h-screen px-6 py-4">
      <div className="flex items-center gap-4">
        {subjectName && (
          <OptionPair
            optionLabel={quiz.icon}
            optionName={subjectName}
            optionBg={optionsBgColor[quizIndex]}
          />
        )}
        <ToggleMode />
      </div>
      <Outlet />
    </main>
  );
}
