import {
  GET_CATEGORIES,
  GET_QUESTIONS,
  REMOVE_QUESTION,
  CLEAR_QUESTIONS
} from "../actions/types";

const initialState = {
  categories: [],
  questions: []
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };
    case REMOVE_QUESTION:
      let arr = [...state.questions];
      arr.shift();
      return {
        ...state,
        questions: arr
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload
      };
    case CLEAR_QUESTIONS:
      return {
        ...state,
        questions: []
      };
    default:
      return state;
  }
}
