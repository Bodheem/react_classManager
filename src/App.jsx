import React, { useState } from "react";
import { CLASSES } from "./classes";
import "./styles.css";
import ClassChoises from "./ClassChoises";
import ClassInput from "./ClassInput";

const App = ({ default_classes = CLASSES }) => {
  const [classes, setClasses] = useState(default_classes);

  function deleteClass(selectedClass) {
    console.log(selectedClass);
    let updatedList = [...classes];
    updatedList = updatedList.filter((x) => x.sigle !== selectedClass);
    setClasses(updatedList);
  }

  function addClass(newClass) {
    const updatedList = [...classes];
    updatedList.push({
      sigle: newClass,
      credits: Math.round(Math.random() * 6 + 1),
    });
    setClasses(updatedList);
  }
  return (
    <div className="App">
      <h1>Mes cours</h1>
      <ClassInput classModifier={addClass} />
      <ClassChoises classesList={classes} classModifier={deleteClass} />
    </div>
  );
};

export default App;
