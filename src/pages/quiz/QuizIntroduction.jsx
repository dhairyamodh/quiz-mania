import { Alert, AlertTitle } from "@/components/ui/alert";
import StartQuizForm from "./modules/StartQuizForm";
import { QuizRuleModal } from "@/components/QuizRuleModal";

const QuizIntroduction = () => {
  return (
    <div className="container flex flex-col justify-start items-center">
      <h1 className="flex items-center text-2xl whitespace-nowrap md:text-6xl gap-3 mb-7">
        Welcome to <img src="logo.png" className="w-[100px] md:w-full" />
      </h1>
      <div className="w-auto md:w-[500px]">
        <Alert className="bg-muted mb-7">
          <AlertTitle className="font-light text-sm md:text-lg">
            <div className="flex flex-col gap-1 items-start">
              Please read all the rules about this quiz before you start.
              <QuizRuleModal />
            </div>
          </AlertTitle>
        </Alert>
        <StartQuizForm />
      </div>
    </div>
  );
};

export default QuizIntroduction;
