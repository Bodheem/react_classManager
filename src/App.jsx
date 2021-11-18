import React from "react";
import "./styles.css";
import ClassProvider from "./ClassProvider";
import ClassChoices from "./ClassChoices";
import ClassInput from "./ClassInput";
import ClassCounter from "./ClassCounter";

const App = () => {
  return (
    <ClassProvider>
      <div className="App">
        <h1>Mes cours</h1>
        <ClassInput />
        <ClassCounter />
        <ClassChoices />
      </div>
    </ClassProvider>
  );
};

export default App;
