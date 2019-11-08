import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../redux/actions/userActions";
import Result from "./Result";
import Answers from "./Answers";

const Question = ({ questionData, answers, nextQuestion }) => {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelected] = useState("");
  const dispatch = useDispatch();

  const { question, correct_answer } = questionData;
  const selectAnswer = e => {
    const selectedAnswer = e.target.dataset.answer;
    setSelected(selectedAnswer);
    setAnswered(true);
  };
  const next = () => {
    if (selectedAnswer === correct_answer) {
      dispatch(addScore());
    }
    setAnswered(false);
    nextQuestion();
  };

  return (
    <React.Fragment>
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      {!answered ? (
        <Answers answers={answers} selectAnswer={selectAnswer} />
      ) : (
        <Result
          selectedAnswer={selectedAnswer}
          correct={selectedAnswer === correct_answer}
          correctAnswer={correct_answer}
        />
      )}
      <button
        onClick={next}
        className="next-btn"
        style={{ visibility: answered ? "visible" : "hidden" }}
      >
        Next Question
      </button>
    </React.Fragment>
  );
};

export default Question;
