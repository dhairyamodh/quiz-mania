import { useSelector } from "react-redux";
import QuizIntroduction from "./QuizIntroduction";
import QuizQuestions from "./QuizQuestions";
import ScoreBoard from "./modules/ScoreBoard";

const Quiz = () => {
  const { activeQuestion, quizFinish } = useSelector((state) => state.quiz);
  return (
    <div className="w-full p-4 md:px-48">
      {quizFinish ? (
        <ScoreBoard />
      ) : activeQuestion === 0 ? (
        <QuizIntroduction />
      ) : (
        <QuizQuestions />
      )}
    </div>
  );
};

export default Quiz;
