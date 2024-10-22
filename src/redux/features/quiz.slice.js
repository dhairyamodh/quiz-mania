import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    fullName: "",
    selectedTopic: null,
    activeQuestion: 0,
    selectedAnswers: {},
    score: 0,
    percentage: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    unansweredQuestions: 0,
    quizFinish: false,
    questions: {
      categories: [
        {
          id: "js_basics",
          name: "JavaScript Basics",
          questions: [
            {
              id: "q1",
              question:
                "What is the correct syntax for referring to an external script called 'script.js'?",
              options: [
                "A. <script name='script.js'>",
                "B. <script href='script.js'>",
                "C. <script src='script.js'>",
                "D. <script file='script.js'>",
              ],
              correctAnswer: "C",
              timeLimit: 10,
            },
            {
              id: "q2",
              question: "Which company developed JavaScript?",
              options: [
                "A. Microsoft",
                "B. Netscape",
                "C. Google",
                "D. Mozilla",
              ],
              correctAnswer: "B",
              timeLimit: 10,
            },
            {
              id: "q3",
              question: "What is the output of 2 + '2' in JavaScript?",
              options: ["A. 22", "B. 4", "C. NaN", "D. '22'"],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q4",
              question: "Which of the following is not a JavaScript data type?",
              options: [
                "A. String",
                "B. Boolean",
                "C. Character",
                "D. Undefined",
              ],
              correctAnswer: "C",
              timeLimit: 10,
            },
            {
              id: "q5",
              question: "How do you create a function in JavaScript?",
              options: [
                "A. function:myFunction() {}",
                "B. function myFunction() {}",
                "C. myFunction() function {}",
                "D. create myFunction() {}",
              ],
              correctAnswer: "B",
              timeLimit: 10,
            },
            {
              id: "q6",
              question:
                "What is the purpose of the 'this' keyword in JavaScript?",
              options: [
                "A. Refers to the current object",
                "B. Refers to the global object",
                "C. Refers to the previous object",
                "D. Refers to the outer function",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q7",
              question: "What does JSON stand for?",
              options: [
                "A. JavaScript Object Notation",
                "B. JavaScript Online Notation",
                "C. Java Standard Object Notation",
                "D. JavaScript Object Name",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q8",
              question:
                "Which operator is used to assign a value to a variable?",
              options: ["A. -", "B. *", "C. =", "D. :"],
              correctAnswer: "C",
              timeLimit: 10,
            },
            {
              id: "q9",
              question: "How can you add a comment in JavaScript?",
              options: [
                "A. // This is a comment",
                "B. /* This is a comment */",
                "C. Both A and B",
                "D. # This is a comment",
              ],
              correctAnswer: "C",
              timeLimit: 10,
            },
            {
              id: "q10",
              question: "Which of the following is a JavaScript framework?",
              options: [
                "A. Django",
                "B. Ruby on Rails",
                "C. Angular",
                "D. Flask",
              ],
              correctAnswer: "C",
              timeLimit: 10,
            },
          ],
        },
        {
          id: "react",
          name: "React",
          questions: [
            {
              id: "q1",
              question: "What is React primarily used for?",
              options: [
                "A. Building mobile applications",
                "B. Building user interfaces",
                "C. Server-side programming",
                "D. Database management",
              ],
              correctAnswer: "B",
              timeLimit: 10,
            },
            {
              id: "q2",
              question:
                "Which method is called to update the state in a class component?",
              options: [
                "A. setState()",
                "B. updateState()",
                "C. changeState()",
                "D. modifyState()",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q3",
              question: "What is the purpose of keys in React?",
              options: [
                "A. To store data",
                "B. To uniquely identify elements",
                "C. To optimize performance",
                "D. Both B and C",
              ],
              correctAnswer: "D",
              timeLimit: 10,
            },
            {
              id: "q4",
              question: "What does the 'props' keyword stand for in React?",
              options: [
                "A. Properties",
                "B. Prototypes",
                "C. Procedures",
                "D. Protocols",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q5",
              question:
                "Which hook is used to manage state in functional components?",
              options: [
                "A. useState",
                "B. useEffect",
                "C. useContext",
                "D. useReducer",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q6",
              question: "How do you create a functional component in React?",
              options: [
                "A. function MyComponent() {}",
                "B. MyComponent() {}",
                "C. class MyComponent {}",
                "D. create MyComponent() {}",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q7",
              question: "What does the useEffect hook do?",
              options: [
                "A. Manages state",
                "B. Manages side effects",
                "C. Renders components",
                "D. Updates the DOM",
              ],
              correctAnswer: "B",
              timeLimit: 10,
            },
            {
              id: "q8",
              question: "What is JSX?",
              options: [
                "A. JavaScript XML",
                "B. JavaScript Extension",
                "C. Java Syntax Extension",
                "D. JavaScript X-structure",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q9",
              question:
                "Which lifecycle method is called after the component is mounted?",
              options: [
                "A. componentDidMount",
                "B. componentWillMount",
                "C. componentDidUpdate",
                "D. componentWillUnmount",
              ],
              correctAnswer: "A",
              timeLimit: 10,
            },
            {
              id: "q10",
              question: "What is the default export of a React component?",
              options: [
                "A. An array",
                "B. A string",
                "C. A function",
                "D. An object",
              ],
              correctAnswer: "C",
              timeLimit: 10,
            },
          ],
        },
      ],
    },
  },
  reducers: {
    setQuizInfo: (state, action) => {
      Object.assign(state, action.payload);
    },
    setActiveQuestion: (state, action) => {
      state.activeQuestion = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      const { questionNumber, answer } = action.payload;
      state.selectedAnswers[questionNumber] = answer; // Update selected answer for the specific question
    },
    setResetQuiz: (state) => {
      state.quizFinish = false;
      state.activeQuestion = 1;
      state.selectedAnswers = {};
      state.score = 0;
      state.percentage = 0;
      state.correctAnswers = 0;
      (state.incorrectAnswers = 0), (state.unansweredQuestions = 0);
    },
    calculateScore: (state) => {
      let score = 0;

      const category = state.questions.categories.find(
        (q) => q.id === state.selectedTopic
      );

      if (!category) return; // Handle case where category is not found

      state.totalQuestions = category.questions.length;

      // Reset counts
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.unansweredQuestions = 0;

      // Loop through the questions for the selected topic
      category.questions.forEach((question, index) => {
        const questionNumber = index + 1; // Question numbers are 1-based
        const selectedAnswer = state.selectedAnswers[questionNumber]; // Selected answer for the current question

        // Check if the selected answer matches the correct answer
        if (selectedAnswer === undefined) {
          state.unansweredQuestions += 1; // Increment unanswered count
        } else if (selectedAnswer.charAt(0) === question.correctAnswer) {
          score += 1; // Increment score for correct answer
          state.correctAnswers += 1; // Increment correct answers count
        } else {
          state.incorrectAnswers += 1; // Increment incorrect answers count
        }
      });

      state.score = score; // Update score in state
      state.quizFinish = true;

      // Calculate percentage score
      state.percentage = (score / state.totalQuestions) * 100;
    },
  },
});

export const {
  setQuizInfo,
  setActiveQuestion,
  setSelectedAnswer,
  calculateScore,
  setResetQuiz,
} = quizSlice.actions;

// Export the reducer directly
export default quizSlice.reducer; // Ensure you're exporting the reducer correctly
