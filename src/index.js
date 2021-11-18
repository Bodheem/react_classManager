import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const CLASSES = [
  { sigle: "LOG4420", credits: 3 },
  { sigle: "INF1010", credits: 3 },
  { sigle: "MTH1102", credits: 2 }
];

const ClassChoises = ({ classesList, classModifier }) => {
  const deleteClass = (selectedClass) => {
    classModifier(selectedClass);
  };
  return (
    <ul className="items">
      {classesList.map((item) => {
        return (
          <li key={item.name} onClick={() => deleteClass(item)}>
            <div className="item">
              <p className="item-text">
                {item.sigle} : {item.credits}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

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
