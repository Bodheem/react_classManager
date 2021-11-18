import React, { useState } from "react";

function ClassInput({ classModifier }) {
  const [value, setValue] = useState("");

  const addClass = () => {
    classModifier(value);
    setValue("");
  };
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={addClass}>+</button>
      <p>Vous avez entré: {value}</p>
    </>
  );
}

export default ClassInput;
