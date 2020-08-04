import React, { useReducer } from "react";

import "./styles.css";

const initalState = {
  count: 0
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "set":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(countReducer, initalState);

  const decrement = () => {
    dispatch({
      type: "decrement"
    });
  };
  const increment = () => {
    dispatch({
      type: "increment"
    });
  };

  const reset = () => {
    dispatch({
      type: "set",
      payload: 0
    });
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      {state.count}
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
