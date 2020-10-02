import { ADD_ELEM, DEL_ELEM, EQUAL, CLEAR_ELEM } from "./constant";

export const addElem = (text) => {
  return {
    type: ADD_ELEM,
    text,
  };
};

export const delElem = (value) => {
  return {
    type: DEL_ELEM,
    value,
  };
};

export const equal = (value) => {
  return {
    type: EQUAL,
    value,
  };
};

export const clearElem = () => {
  return {
    type: CLEAR_ELEM,
  };
};
