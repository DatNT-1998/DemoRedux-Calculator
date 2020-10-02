import { ADD_ELEM, DEL_ELEM, EQUAL, CLEAR_ELEM } from "./constant";

const INITIAL_STATE = {
  value: 0,
  btns: [
    "(",
    ")",
    "Clear",
    "Delete",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
    "-",
  ],
};

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ELEM:
      return {
        ...state,
        value: state.value === 0 ? action.text : state.value + action.text,
      };

    case DEL_ELEM:
      return {
        ...state,
        value: action.text.substr(1, action.text.length),
      };

    case CLEAR_ELEM:
      return {
        ...state,
        value: 0,
      };

    case EQUAL:
      return {
        ...state,
        value: eval(action.value),
      };

    default:
      return state;
  }
};

export default calculatorReducer;
