import quizData from "../../data/data.json";
import SubjectOptionCard from "./SubjectOptionCard";

const optionsBgColor = ["#FFF1E9", "#E0FDEF", "#EBF0FF", "#F6E7FF"];

export default function StartMenu() {
  return (
    <>
      {quizData.quizzes.map((subject, index) => (
        <SubjectOptionCard
          key={index}
          optionLabel={subject.icon}
          optionName={subject.title}
          optionBg={optionsBgColor[index]}
        />
      ))}
    </>
  );
}
