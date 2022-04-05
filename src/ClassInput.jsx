import React, { useState, useContext, useEffect } from "react";
import DispatchContext from "./DispatchContext";
import { ACTIONS } from "./reducer";

function ClassInput() {
  const [value, setValue] = useState("");
  const dispatch = useContext(DispatchContext);
  const addClassAndReset = () => {
    dispatch({ type: ACTIONS.ADD, payload: { sigle: value } });
    setValue("");
  };

  // Ne devrait pas changer si ClassContext change
  useEffect(()=>{console.log("On change of ClassInput")});
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={addClassAndReset}>+</button>
      <p>Vous avez entré: {value}</p>
    </>
  );
}

export default ClassInput;
