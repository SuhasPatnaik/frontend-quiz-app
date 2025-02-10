import { useLocation, useNavigate, useParams } from "react-router";
import OptionPair from "../Feature/OptionPair";

import quizData from "../../data/data.json";
import Button from "../UI/Button";

import { SUBJECT_BG_COLORS } from "../../lib/constants";

export default function ScorePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const quizScore = location.state;
  localStorage.setItem("finalScore", JSON.stringify(quizScore));

  const { subjectName } = useParams();

  const quizIndex = quizData.quizzes.findIndex(
    (quiz) => quiz.title.toLowerCase() === subjectName?.toLowerCase()
  );

  const quiz = quizIndex !== -1 ? quizData.quizzes[quizIndex] : null;

  const handlePlayAgain = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-[2.5rem] font-light">
        Quiz completed <span className="font-medium">You scored...</span>
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
      <Button onPlayAgain={handlePlayAgain}>Play Again</Button>
    </div>
  );
}
