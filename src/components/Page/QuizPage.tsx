import { useNavigate, useParams } from "react-router";
import { useState } from "react";

import quizData from "../../data/data.json";
import AnswerOptionCard from "../Feature/AnswerOptionCard";
import Button from "../UI/Button";
import ProgressSlider from "../UI/ProgressSlider";

export default function QuizPage() {
  const { subjectName } = useParams();

  const quizIndex = quizData.quizzes.findIndex(
    (quiz) => quiz.title.toLowerCase() === subjectName?.toLowerCase()
  );

  const quiz = quizIndex !== -1 ? quizData.quizzes[quizIndex] : null;

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

const multipleChoice = ["A", "B", "C", "D"];

function QuestionAnswer({
  currentQuestion,
  currentQuestionIndex,
  selectedOptionIndex,
  answerType,
  handleOptionClick,
  displayCorrectAnswer,
  handleAnswerSubmission,
  handleNextQuestion,
}) {
  return (
    <>
      <p>{currentQuestion.question}</p>
      <ProgressSlider currentQuestionIndex={currentQuestionIndex} />
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
      {!displayCorrectAnswer ? (
        <Button onAnswerSubmission={handleAnswerSubmission}>
          Submit Answer
        </Button>
      ) : (
        <Button onNextQuestion={handleNextQuestion}>Next Question</Button>
      )}
    </>
  );
}
