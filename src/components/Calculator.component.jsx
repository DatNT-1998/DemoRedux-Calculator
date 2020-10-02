import React, { Component } from "react";
import { connect } from "react-redux";

import { addElem, delElem, clearElem, equal } from "../redux/action";
class Calculator extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="App">
        <div className="value-container">
          <input type="text" value={value} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    btns: state.btns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addElem: (text) => {
      dispatch(addElem(text));
    },
    delElem: (value) => {
      dispatch(delElem(value));
    },
    equal: (value) => {
      dispatch(equal(value));
    },
    clearElem: () => {
      dispatch(clearElem());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
