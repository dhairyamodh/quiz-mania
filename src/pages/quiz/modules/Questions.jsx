import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setSelectedAnswer } from "@/redux/features/quiz.slice";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const Questions = ({ handleNextQuestion }) => {
  const dispatch = useDispatch();

  const { activeQuestion, selectedAnswers, questions, selectedTopic } =
    useSelector((state) => state.quiz);

  const topicQuestions = questions.categories.find(
    (q) => q.id === selectedTopic
  );
  const questionDetails = topicQuestions.questions[activeQuestion - 1];

  const handleAnswerSelect = (value) => {
    dispatch(
      setSelectedAnswer({ questionNumber: activeQuestion, answer: value })
    );
  };

  const isAnswerSelected = Boolean(selectedAnswers[activeQuestion]);

  const isLastQuestion = activeQuestion === topicQuestions.questions.length;

  return (
    <div className="w-full md:w-[80%]">
      <div className="text-lg md:text-2xl list-decimal mb-4 flex gap-2 md:gap-5">
        <span>{activeQuestion}.</span>
        <h5>{questionDetails.question}</h5>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <RadioGroup
          value={selectedAnswers[activeQuestion]}
          onValueChange={handleAnswerSelect}
        >
          <div className="grid grid-cols-1 grid-rows-1 gap-2">
            {questionDetails &&
              questionDetails.options?.map((option) => {
                return (
                  <div
                    className="flex items-center space-x-2 border p-4 rounded-md"
                    key={option}
                  >
                    <RadioGroupItem value={option} id={option} />
                    <Label
                      className="text-sm md:text-md font-light cursor-pointer"
                      htmlFor={option}
                    >
                      {option}
                    </Label>
                  </div>
                );
              })}
          </div>
        </RadioGroup>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
          {!isLastQuestion ? "Next Question" : "Finish"}
        </Button>
        {!isLastQuestion && (
          <Button variant="ghost" onClick={handleNextQuestion}>
            Skip this question
          </Button>
        )}
      </div>
    </div>
  );
};

Questions.propTypes = {
  handleNextQuestion: PropTypes.func.isRequired, // Specify that handleNextQuestion is required
};

export default Questions;
