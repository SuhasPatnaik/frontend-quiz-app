import { useNavigate, useParams } from "react-router";
import { useState } from "react";

import { getQuizByIndex, getQuizIndex } from "../../utils/quizUtils";
import QuestionAnswer from "../Feature/QuestionAnswer";
import QuizNotFound from "../NotFound/QuizNotFound";

export default function QuizPage() {
  const { subjectName } = useParams();
  const navigate = useNavigate();

  const quizIndex = getQuizIndex(subjectName);

  const quiz = getQuizByIndex(quizIndex);

  const [currentQuestionIndex, setCurrentQuestionindex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [answerType, setAnswerType] = useState(-1);
  const [displayCorrectAnswer, setDisplayCorrectAnswer] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  if (!quiz) {
    return <QuizNotFound />;
  }

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index);
    setAnswerType(-1);
    setDisplayCorrectAnswer(false);
  };

  const currentQuestion = quiz?.questions[currentQuestionIndex];

  const handleAnswerSubmission = () => {
    if (!currentQuestion || selectedOptionIndex === null) return;

    if (selectedOptionIndex === null) return;

    const isCorrect =
      currentQuestion.options[selectedOptionIndex] === currentQuestion.answer;

    setAnswerType(isCorrect ? 1 : 0);

    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
    }

    setDisplayCorrectAnswer(true);
  };

  const handleNextQuestion = () => {
    if (!quiz || !currentQuestion) return;

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
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-32 lg:justify-self-center lg:w-[80vw] lg:pt-16 lg:grid-rows-[auto_1fr]">
      <h2 className="italic text-light-bluish text-[0.875rem] col-start-1 row-start-1 lg:text-[1.125rem] pb-4">
        Question {currentQuestionIndex + 1} of 10
      </h2>
      {!currentQuestion ? (
        <p className="text-red-500">No question found for this quiz.</p>
      ) : (
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
      )}
    </div>
  );
}
