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
  const [answerType, setAnswerType] = useState(-1);
  const [displayCorrectAnswer, setDisplayCorrectAnswer] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index);
    setAnswerType(-1);
    setDisplayCorrectAnswer(false);
  };

  const handleAnswerSubmission = () => {
    if (selectedOptionIndex === null) return;
    setAnswerType(
      currentQuestion.options[selectedOptionIndex] === currentQuestion.answer
        ? 1
        : 0
    );
    setDisplayCorrectAnswer(true);
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
            answerType={selectedOptionIndex === index ? answerType : -1}
            onOptionClick={() => handleOptionClick(index)}
            displayCorrectAnswer={displayCorrectAnswer}
          />
        ))}
      </div>
      <Button onAnswerSubmission={handleAnswerSubmission}>Submit Answer</Button>
    </>
  );
}
