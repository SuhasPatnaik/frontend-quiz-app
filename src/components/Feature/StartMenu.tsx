import quizData from "../../data/data.json";
import OptionCard from "./OptionCard";

const optionsBgColor = ["#FFF1E9", "#E0FDEF", "#EBF0FF", "#F6E7FF"];

export default function StartMenu() {
  return (
    <>
      {quizData.quizzes.map((subject, index) => (
        <OptionCard
          key={index}
          optionLabel={subject.icon}
          optionName={subject.title}
          optionBg={optionsBgColor[index]}
        />
      ))}
    </>
  );
}
