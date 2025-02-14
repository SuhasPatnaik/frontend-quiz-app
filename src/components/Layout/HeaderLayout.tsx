import { Outlet, useParams } from "react-router";

import ToggleMode from "../UI/ToggleMode";
import OptionPair from "../Feature/OptionPair";

import { getQuizByIndex, getQuizIndex } from "../../utils/quizUtils";
import { SUBJECT_BG_COLORS } from "../../lib/constants";

export default function HeaderLayout() {
  const { subjectName } = useParams();

  const quizIndex = getQuizIndex(subjectName);

  const quiz = getQuizByIndex(quizIndex);

  return (
    <main className="bg-[url('/images/pattern-background-mobile-dark.svg')] min-h-screen bg-no-repeat bg-cover px-6 py-4 md:bg-[url('/images/pattern-background-tablet-dark.svg')] lg:bg-[url('/images/pattern-background-desktop-dark.svg')] lg:py-0 ">
      <div className="flex items-center gap-4 lg:h-[20vh] lg:justify-self-center lg:w-[80vw]">
        {subjectName && quiz && (
          <OptionPair
            optionLabel={quiz.icon}
            optionName={subjectName}
            optionBg={SUBJECT_BG_COLORS[quizIndex]}
          />
        )}
        <ToggleMode />
      </div>
      <Outlet />
    </main>
  );
}
