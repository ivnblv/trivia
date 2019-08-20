import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../redux/actions/userActions";
import Result from "./Result";
import Answers from "./Answers";

const Question = props => {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelected] = useState("");

  const { question, correct_answer } = props.question;
  const dispatch = useDispatch();

  const selectAnswer = e => {
    const selectedAnswer = e.target.dataset.answer;
    setSelected(selectedAnswer);
    setAnswered(true);
  };
  const nextQuestion = () => {
    if (selectedAnswer === correct_answer) {
      dispatch(addScore());
    }
    setAnswered(false);
    props.nextQuestion();
  };

  return (
    <React.Fragment>
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      {!answered ? (
        <Answers answers={props.answers} selectAnswer={selectAnswer} />
      ) : (
        <Result
          selectedAnswer={selectedAnswer}
          correct={selectedAnswer === correct_answer}
          correctAnswer={correct_answer}
        />
      )}
      <button
        onClick={nextQuestion}
        className="next-btn"
        style={{ visibility: answered ? "visible" : "hidden" }}
      >
        Next Question
      </button>
    </React.Fragment>
  );
};

export default Question;
