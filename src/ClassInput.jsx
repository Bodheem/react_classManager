import React, { useState, useContext } from "react";
import ClassContext from "./ClassContext";
import { ACTIONS } from "./reducer";

function ClassInput() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(ClassContext);
  const addClassAndReset = () => {
    dispatch({ type: ACTIONS.ADD, payload: { sigle: value } });
    setValue("");
  };
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={addClassAndReset}>+</button>
      <p>Vous avez entré: {value}</p>
    </>
  );
}

export default ClassInput;
