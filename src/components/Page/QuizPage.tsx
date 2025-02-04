import { useParams } from "react-router";
import { useState } from "react";

import quizData from "../../data/data.json";
import AnswerOptionCard from "../Feature/AnswerOptionCard";
import Button from "../UI/Button";

export default function QuizPage() {
  const { subjectName } = useParams();

  const quizIndex = quizData.quizzes.findIndex(
    (quiz) => quiz.title.toLowerCase() === subjectName?.toLowerCase()
  );

  const quiz = quizIndex !== -1 ? quizData.quizzes[quizIndex] : null;

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
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index);
  };

  return (
    <>
      <p>{currentQuestion.question}</p>
      {/* <ProgressSlider /> */}
      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option, index) => (
          <AnswerOptionCard
            key={index}
            optionLabel={multipleChoice[index]}
            optionName={option}
            correctAnswer={currentQuestion.answer}
            isOptionActive={selectedOptionIndex === index}
            onOptionClick={() => handleOptionClick(index)}
          />
        ))}
      </div>
      <Button>Submit Answer</Button>
    </>
  );
}
