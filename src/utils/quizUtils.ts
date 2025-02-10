import quizData from "../data/data.json";

export function getQuizIndex(subjectName: string | undefined): number {
  if (!subjectName) return -1;

  return quizData.quizzes.findIndex(
    (quiz) => quiz.title.toLowerCase() === subjectName.toLowerCase()
  );
}

export function getQuizByIndex(index: number) {
  return index !== -1 ? quizData.quizzes[index] : null;
}
