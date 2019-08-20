import { GET_SCORE, ADD_SCORE } from "../actions/types";

const initialState = {
  score: 0
};

export default function(state = initialState, { type }) {
  switch (type) {
    case GET_SCORE:
      const score = parseInt(localStorage.getItem("score"));
      return {
        ...state,
        score: isNaN(score) ? 0 : score
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + 1
      };
    default:
      return state;
  }
}
