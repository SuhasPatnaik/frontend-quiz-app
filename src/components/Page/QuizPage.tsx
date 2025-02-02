import { useParams } from "react-router";
import { useState } from "react";

import quizData from "../../data/data.json";
import OptionCard from "../Feature/OptionCard";

export default function QuizPage() {
  const { subjectName } = useParams();

  const quizIndex = quizData.quizzes.findIndex(
    (quiz) => quiz.title.toLowerCase() === subjectName?.toLowerCase()
  );

  const quiz = quizIndex !== -1 ? quizData.quizzes[quizIndex] : null;

  console.log(quiz);

  const [currentQuestionIndex, setCurrentQuestionindex] = useState(0);

  return (
    <div className="py-8">
      <h2 className="italic text-light-bluish text-[0.875rem]">
        Question {currentQuestionIndex + 1} of 10
      </h2>
      <QuestionAnswer currentQuestion={quiz?.questions[currentQuestionIndex]} />
    </div>
  );
}

const multipleChoice = ["A", "B", "C", "D"];

function QuestionAnswer({ currentQuestion }) {
  console.log(currentQuestion);
  return (
    <>
      <p>{currentQuestion.question}</p>
      {/* <ProgressSlider /> */}
      {currentQuestion.options.map((option, index) => (
        <OptionCard
          key={index}
          optionLabel={multipleChoice[index]}
          optionName={option}
        />
      ))}
    </>
  );
}
