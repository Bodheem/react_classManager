import React, { useReducer } from "react";
import { CLASSES } from "./classes";
import ClassContext from "./ClassContext";
import reducer from "./reducer";
import DispatchContext from "./DispatchContext";

const ClassProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { classes: CLASSES });
  return (
    <ClassContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ClassContext.Provider>
  );
};

export default ClassProvider;
