import { ADD_ELEM, DEL_ELEM, EQUAL, CLEAR_ELEM } from "./constant";

const INITIAL_STATE = {
    value: 0,
    expression: "", // * || / || + || -
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

function isValidInput(value) {
    console.log("isValidInput: ", value)

    // if (expression === "+") {

    // }


    return false;
}

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
                value: action.value.slice(0, -1),
            };

        case CLEAR_ELEM:
            return {
                ...state,
                value: 0,
            };

        case EQUAL: {
            try {
                return {
                    ...state,
                    value: eval(action.value),
                };
            } catch (error) {
                alert('Tính cho cẩn thận nha')
                return {
                    ...state,
                    value: 'ERROR',
                }

            }
        }

        default:
            return state;
    }
};

export default calculatorReducer;
