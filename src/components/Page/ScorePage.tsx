import { useLocation } from "react-router";

export default function ScorePage() {
  const location = useLocation();
  const quizScore = location.state;

  return <div>ScorePage: {quizScore}</div>;
}
