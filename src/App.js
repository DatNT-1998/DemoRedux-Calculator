import React from "react";
import "./App.css";
import Calculator from "./components/Calculator.component";
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
