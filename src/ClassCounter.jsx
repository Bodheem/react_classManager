import React from "react";

function ClassCounter({ classes }) {
  return (
    <>
      <p>Nombre total de cours : {classes.length}</p>
    </>
  );
}

export default ClassCounter;
