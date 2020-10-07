import React, { Component } from "react";
import { connect } from "react-redux";

import { addElem, delElem, clearElem, equal } from "../redux/action";
class Calculator extends Component {
    render() {
        const { value, btns, addElem, delElem, clearElem, equal } = this.props;
        return (
            <div className="App">
                <div className="value-container">
                    <input type="text" value={value} />
                </div>
                <div className="buttons-container">
                    {
                        btns.map((item, index) => {
                            if (item === "Clear") {
                                return (
                                    <button onClick={clearElem.bind(this)} key={index}>{item}</button>
                                )
                            } else if (item === "=") {
                                return (
                                    <button onClick={equal.bind(this, value)} key={index}>{item}</button>
                                )
                            } else if (item === "Delete") {
                                return (
                                    <button onClick={delElem.bind(this, value)} key={index}>{item}</button>
                                )
                            } else {
                                return (
                                    <button onClick={addElem.bind(this, item)} key={index}>{item}</button>
                                )
                            }
                        })
                    }
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
