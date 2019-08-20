import {
  GET_CATEGORIES,
  GET_QUESTIONS,
  REMOVE_QUESTION,
  CLEAR_QUESTIONS
} from "./types";
import axios from "axios";

export const getCategories = () => async dispatch => {
  const res = await axios.get("https://opentdb.com/api_category.php");
  if (res.status === 200) {
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.trivia_categories
    });
  }
};

export const getQuestions = id => async dispatch => {
  const res = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${id}`
  );
  if (res.status === 200) {
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data.results
    });
  }
};

export const removeQuestion = () => dispatch => {
  dispatch({
    type: REMOVE_QUESTION
  });
};

export const clearQuestions = () => dispatch => {
  dispatch({
    type: CLEAR_QUESTIONS
  });
};
