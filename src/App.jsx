import React from "react";
import "./styles.css";
import ClassProvider from "./ClassProvider";
import ClassChoises from "./ClassChoises";
import ClassInput from "./ClassInput";
import ClassCounter from "./ClassCounter";

const App = () => {
  return (
    <ClassProvider>
      <div className="App">
        <h1>Mes cours</h1>
        <ClassInput />
        <ClassCounter />
        <ClassChoises />
      </div>
    </ClassProvider>
  );
};

export default App;
