import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function QuizRuleModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="link"
          className="p-0 h-4 text-primary font-light text-sm md:text-lg"
        >
          Quiz Rules
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">Quiz rules</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-4 text-black">
              <div>
                <div className="bg-[#ebedcc] font-bold text-md rounded-md p-3 mb-2">
                  10-Second Timer
                </div>
                <ul className="list-disc ml-7">
                  <li>Each question comes with a 10-second timer.</li>
                  <li>
                    If you don’t answer within the time limit, the app will
                    automatically move to the next question.
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#ebedcc] font-bold text-md rounded-md p-3 mb-2">
                  Manual Navigation
                </div>
                <ul className="list-disc ml-7">
                  <li>
                    You can navigate to the next question manually before the
                    timer expires.
                  </li>
                  <li>
                    Use the &quot;Next&quot; button to move ahead if youre ready
                    before the timer runs out.
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#ebedcc] font-bold text-md rounded-md p-3 mb-2">
                  Final Score and Performance Message
                </div>
                <ul className="list-disc ml-7">
                  <li>
                    After all questions are answered, your final score will be
                    displayed.
                  </li>
                  <li>
                    Based on your performance, you will receive a personalized
                    message:
                    <ul className="list-disc ml-7">
                      <li>
                        Great job!: If you score <b>above 80%.</b>
                      </li>
                      <li>
                        Well done!: If you score <b>between 60% and 80%.</b>
                      </li>
                      <li>
                        Keep practicing!: If you score <b>below 60%.</b>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
