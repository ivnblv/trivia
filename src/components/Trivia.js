import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeQuestion,
  getQuestions,
  clearQuestions
} from "../redux/actions/triviaActions";
import Question from "./Question";
import Loader from "react-loader-spinner";
import { shuffle } from "lodash";

const Trivia = ({ id }) => {
  const questions = useSelector(state => state.trivia.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (questions.length < 1) {
      dispatch(getQuestions(id));
    }
  });
  useEffect(() => {
    return () => {
      dispatch(clearQuestions());
    };
  }, []);
  const nextQuestion = () => {
    dispatch(removeQuestion());
  };

  return (
    <React.Fragment>
      <div className="question">
        {questions.length > 0 ? (
          <Question
            questionData={questions[0]}
            nextQuestion={nextQuestion}
            answers={shuffle([
              questions[0].correct_answer,
              ...questions[0].incorrect_answers
            ])}
          />
        ) : (
          <div className="loader">
            <Loader type="TailSpin" color="#c4c4c4" height={100} width={100} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Trivia;
