import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { setResetQuiz } from "@/redux/features/quiz.slice";
import { useDispatch, useSelector } from "react-redux";

const ScoreBoard = () => {
  const { percentage, correctAnswers, incorrectAnswers, unansweredQuestions } =
    useSelector((state) => state.quiz);

  let message, innerMessage;
  let messageStyle = "text-center text-xl md:text-5xl font-medium";

  // Determine message based on percentage
  if (percentage > 80) {
    message = "Congratulation";
    innerMessage = "Great job!";
  } else if (percentage >= 60) {
    message = "Congratulation";
    innerMessage = "Well done!";
  } else {
    message = "Keep practicing!";
    messageStyle += " text-red-600"; // Change text color for low score
  }

  const dispatch = useDispatch();

  const handleRetakeQuiz = () => {
    dispatch(setResetQuiz());
  };

  const isHighScore = percentage >= 60;

  return (
    <div className="flex flex-col items-center gap-10">
      <img
        src={percentage >= 60 ? "check.svg" : "failed.svg"}
        alt="Quiz Result"
      />
      <div
        className={cn(
          "flex flex-col gap-4",
          !isHighScore && "flex-col-reverse"
        )}
      >
        <h1 className="tracking-[10px] md:tracking-[20px] uppercase text-xl md:text-5xl font-light text-center">
          {message}
        </h1>
        <p className="text-center">
          You successfully completed the Quiz{" "}
          {percentage >= 60 ? "and holds" : "but you need to"}
        </p>
      </div>
      <div
        className={cn(
          "flex flex-col items-center gap-4 p-10",
          !isHighScore &&
            "border border-red-400 rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] justify-center"
        )}
      >
        <h1 className="text-2xl md:text-4xl font-light text-center">
          Your Score
        </h1>
        <h2
          className={cn(
            "font-bold text-4xl md:text-6xl",
            percentage >= 60 ? "text-green-600" : "text-[#AF9B06]"
          )}
        >
          {percentage}%
        </h2>
        {isHighScore && <h1 className={messageStyle}>{innerMessage}</h1>}
      </div>
      <div className="border rounded-md p-5 md:p-10">
        <h1 className="text-lg md:text-2xl text-center font-medium mb-5">
          Out of 10 questions
        </h1>
        <div className="flex items-center gap-4">
          <span className="font-bold text-sm md:text-xl text-green-600">
            {correctAnswers}{" "}
            <span className="font-light text-black">Correct</span>
          </span>
          <span className="font-bold text-sm md:text-xl text-red-600">
            {incorrectAnswers}{" "}
            <span className="font-light text-black">Incorrect</span>
          </span>
          <span className="font-bold text-sm md:text-xl text-muted-foreground">
            {unansweredQuestions}{" "}
            <span className="font-light text-black">Not answered</span>
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={handleRetakeQuiz}
        className="text-md md:text-xl p-5 md:p-7 border-destructive text-destructive hover:text-destructive-foreground hover:bg-destructive"
      >
        Retake Quiz
      </Button>
    </div>
  );
};

export default ScoreBoard;
