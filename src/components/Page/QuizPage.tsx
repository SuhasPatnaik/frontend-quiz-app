import { useNavigate, useParams } from "react-router";
import { useState } from "react";

import { getQuizByIndex, getQuizIndex } from "../../utils/quizUtils";
import QuestionAnswer from "../Feature/QuestionAnswer";

export default function QuizPage() {
  const { subjectName } = useParams();

  const quizIndex = getQuizIndex(subjectName);

  const quiz = getQuizByIndex(quizIndex);

  const [currentQuestionIndex, setCurrentQuestionindex] = useState(0);
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

  const currentQuestion = quiz?.questions[currentQuestionIndex];

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleAnswerSubmission = () => {
    if (selectedOptionIndex === null) return;

    const isCorrect =
      currentQuestion.options[selectedOptionIndex] === currentQuestion.answer;

    setAnswerType(isCorrect ? 1 : 0);

    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
    }

    setDisplayCorrectAnswer(true);
  };

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz?.questions.length - 1) {
      setSelectedOptionIndex(null);
      setAnswerType(-1);
      setDisplayCorrectAnswer(false);
      setCurrentQuestionindex(currentQuestionIndex + 1);
    } else {
      navigate(`/subject/${subjectName}/score`, { state: correctAnswersCount });
    }
  };

  return (
    <div className="py-8">
      <h2 className="italic text-light-bluish text-[0.875rem]">
        Question {currentQuestionIndex + 1} of 10
      </h2>
      <QuestionAnswer
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        selectedOptionIndex={selectedOptionIndex}
        answerType={answerType}
        handleOptionClick={handleOptionClick}
        displayCorrectAnswer={displayCorrectAnswer}
        handleAnswerSubmission={handleAnswerSubmission}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
}
