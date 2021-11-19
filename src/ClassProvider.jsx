import React, { useReducer } from "react";
import { CLASSES } from "./classes";
import ClassContext from "./ClassContext";
import reducer from "./reducer";

const ClassProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { classes: CLASSES });
  return <ClassContext.Provider value={{ state, dispatch }}>{children}</ClassContext.Provider>;
};

export default ClassProvider;
