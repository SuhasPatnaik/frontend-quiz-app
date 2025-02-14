import AnswerOptionCard from "../Feature/AnswerOptionCard";
import Button from "../UI/Button";
import ProgressSlider from "../UI/ProgressSlider";

import { MULTIPLE_CHOICE_OPTIONS } from "../../lib/constants";

interface QuestionAnswerProps {
  currentQuestion: {
    question: string;
    options: string[];
    answer: string;
  };
  currentQuestionIndex: number;
  selectedOptionIndex: number | null;
  answerType: number;
  displayCorrectAnswer: boolean;
  handleOptionClick: (index: number) => void;
  handleAnswerSubmission: () => void;
  handleNextQuestion: () => void;
}

export default function QuestionAnswer({
  currentQuestion,
  currentQuestionIndex,
  selectedOptionIndex,
  answerType,
  displayCorrectAnswer,
  handleOptionClick,
  handleAnswerSubmission,
  handleNextQuestion,
}: QuestionAnswerProps) {
  return (
    <>
      <div className="lg:col-start-1 lg:row-start-2 lg:flex lg:flex-col lg:gap-56">
        <p className="lg:text-[2.25rem] ">{currentQuestion.question}</p>
        <ProgressSlider currentQuestionIndex={currentQuestionIndex} />
      </div>
      <div className="col-start-2 row-span-2 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option, index) => (
            <AnswerOptionCard
              key={index}
              optionLabel={MULTIPLE_CHOICE_OPTIONS[index]}
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
      </div>
    </>
  );
}
