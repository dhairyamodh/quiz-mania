import { useDispatch, useSelector } from "react-redux";
import Questions from "./modules/Questions";
import { useEffect, useState } from "react";
import { calculateScore, setActiveQuestion } from "@/redux/features/quiz.slice";
import { formatTime } from "../../../utils";

const QuizQuestions = () => {
  const { activeQuestion, questions, selectedTopic } = useSelector(
    (state) => state.quiz
  );

  const topicQuestions = questions.categories.find(
    (q) => q.id === selectedTopic
  );
  const [timer, setTimer] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    // Reset the timer when the active question changes
    setTimer(10);

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          // Move to the next question
          // handleNextQuestion();
          return 10; // Reset timer for the next question
        }
        return prev - 1;
      });
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(countdown);
  }, [activeQuestion]); // Run effect when activeQuestion changes

  const handleNextQuestion = () => {
    if (topicQuestions && activeQuestion < topicQuestions.questions.length) {
      dispatch(setActiveQuestion(activeQuestion + 1)); // Move to the next question
    } else {
      dispatch(calculateScore());
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">
            <span className="text-primary">{activeQuestion} </span>/
            <span className="text-lg">{topicQuestions.questions.length}</span>
          </h1>
          <div className="p-2 bg-muted rounded-md">{formatTime(timer)}</div>
        </div>
        <div className="bg-muted w-full h-3 relative">
          <div
            className="absolute bg-primary h-full top-0 left-0 transition-all"
            style={{
              width: `${
                (activeQuestion / topicQuestions.questions.length) * 100
              }%`,
            }}
          />
        </div>
      </div>
      <Questions handleNextQuestion={handleNextQuestion} />
    </div>
  );
};

export default QuizQuestions;
