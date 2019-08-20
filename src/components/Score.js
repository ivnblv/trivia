import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getScore } from "../redux/actions/userActions";

const Score = () => {
  const score = useSelector(state => state.user.score);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScore());
  }, []);

  window.onunload = () => {
    localStorage.setItem("score", score);
  };

  return (
    <React.Fragment>
      <div className="score">
        <p>Score:</p> <h4>{score}</h4>
      </div>
    </React.Fragment>
  );
};
export default Score;
