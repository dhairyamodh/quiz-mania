import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz.slice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
