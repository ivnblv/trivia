import { GET_SCORE, ADD_SCORE } from "./types";

export const getScore = () => dispatch => {
  dispatch({
    type: GET_SCORE
  });
};
export const addScore = () => dispatch => {
  dispatch({
    type: ADD_SCORE
  });
};
