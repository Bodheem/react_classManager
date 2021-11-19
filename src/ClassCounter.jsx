import React, { useContext } from "react";
import ClassContext from "./ClassContext";

function ClassCounter() {
  const { state } = useContext(ClassContext);
  return (
    <>
      <p>Nombre total de cours : {state.classes.length}</p>
    </>
  );
}

export default ClassCounter;
