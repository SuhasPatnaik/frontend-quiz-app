import quizData from "../data/data.json";
import OptionCard from "./OptionCard";

export default function StartMenu() {
  return (
    <>
      {quizData.quizzes.map((subject, index) => (
        <OptionCard
          key={index}
          optionLabel={subject.icon}
          optionName={subject.title}
        />
      ))}
    </>
  );
}
