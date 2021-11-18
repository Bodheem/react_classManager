import React, { useContext } from "react";
import ClassContext from "./ClassContext";

function ClassCounter() {
  const { classes } = useContext(ClassContext);
  return (
    <>
      <p>Nombre total de cours : {classes.length}</p>
    </>
  );
}

export default ClassCounter;
