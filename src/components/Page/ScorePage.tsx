import { useLocation, useNavigate, useParams } from "react-router";
import OptionPair from "../Feature/OptionPair";

import Button from "../UI/Button";

import { SUBJECT_BG_COLORS } from "../../lib/constants";
import { getQuizByIndex, getQuizIndex } from "../../utils/quizUtils";
import ScoreNotFound from "../NotFound/ScoreNotFound";

export default function ScorePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const quizScore = location.state;
  localStorage.setItem("finalScore", JSON.stringify(quizScore));

  const { subjectName } = useParams();

  const quizIndex = getQuizIndex(subjectName);

  const quiz = getQuizByIndex(quizIndex);

  if (!quiz) {
    return <ScoreNotFound />;
  }

  const handlePlayAgain = () => {
    navigate("/");
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-32 lg:justify-self-center lg:w-[80vw] lg:pt-12 lg:grid-rows-[auto_1fr]">
      <h1 className="text-[2.5rem] font-light">
        Quiz completed <br />
        <span className="font-medium">You scored...</span>
      </h1>
      <div className="flex flex-col bg-navy py-8 items-center rounded-lg">
        <div className="flex gap-4 items-center">
          <OptionPair
            optionLabel={quiz.icon}
            optionName={subjectName}
            optionBg={SUBJECT_BG_COLORS[quizIndex]}
          />
        </div>
        <p className="font-medium text-[5.5rem]">
          {Number(localStorage.getItem("finalScore")) || 0}
        </p>
        <p className="text-light-bluish">out of 10</p>
      </div>
      <div className="col-start-2 mt-6">
        <Button onPlayAgain={handlePlayAgain}>Play Again</Button>
      </div>
    </div>
  );
}
