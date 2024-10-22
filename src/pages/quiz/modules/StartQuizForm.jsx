import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setActiveQuestion, setQuizInfo } from "@/redux/features/quiz.slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StartQuizForm = () => {
  const { questions } = useSelector((state) => state.quiz);

  const topics = questions.categories?.map((q) => ({
    value: q.id,
    label: q.name,
  }));

  const dispatch = useDispatch();

  // State to handle form data and validation errors
  const [formData, setFormData] = useState({
    fullName: "",
    selectedTopic: null, // default value
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error
  };

  // Handle radio group change
  const handleTopicChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      selectedTopic: value,
    }));
    setErrors((prev) => ({ ...prev, selectedTopic: "" })); // Clear error
  };

  // Handle form submission
  const handleStartQuiz = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newErrors = {};

    // Validate full name
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    // Validate selected topic
    if (!formData.selectedTopic) {
      newErrors.selectedTopic = "Please select a topic.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Prevent submission if there are errors
    }

    // Dispatch form data to Redux
    dispatch(setQuizInfo(formData));
    dispatch(setActiveQuestion(1));
  };

  return (
    <form onSubmit={handleStartQuiz}>
      <div className="flex flex-col gap-2 mb-7">
        <Label className="text-light">Full name</Label>
        <Input
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        {errors.fullName && (
          <span className="text-red-600">{errors.fullName}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <Label className="text-light">Please select a topic to continue</Label>
        <RadioGroup
          value={formData.selectedTopic}
          onValueChange={handleTopicChange}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2">
            {topics?.map((topic) => (
              <div
                className="flex items-center space-x-2 border p-4 rounded-md"
                key={topic.value}
              >
                <RadioGroupItem value={topic.value} id={topic.value} />
                <Label
                  className="text-md font-light cursor-pointer"
                  htmlFor={topic.value}
                >
                  {topic.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        {errors.selectedTopic && (
          <span className="text-red-600">{errors.selectedTopic}</span>
        )}
      </div>
      <Button type="submit">Start Quiz</Button>
    </form>
  );
};

export default StartQuizForm;
