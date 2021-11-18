import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CLASSES } from "./classes";
import "./styles.css";
import ClassChoises from "./ClassChoises";

const App = ({ default_classes = CLASSES }) => {
  const [value, setValue] = useState("");
  const [classes, setClasses] = useState(default_classes);

  function deleteClass(selectedClass) {
    let updatedList = [...classes];
    updatedList = updatedList.filter((x) => x.sigle !== selectedClass.sigle);
    setClasses(updatedList);
  }

  function addClass() {
    const updatedList = [...classes];
    updatedList.push({
      sigle: value,
      credits: Math.round(Math.random() * 6 + 1)
    });
    setClasses(updatedList);
    setValue("");
  }
  return (
    <div className="App">
      <h1>Mes cours</h1>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={addClass}>+</button>
      <p>Vous avez entré: {value}</p>
      <p>Cliquez sur un cours pour le supprimer de la liste</p>
      <ClassChoises classesList={classes} classModifier={deleteClass} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
