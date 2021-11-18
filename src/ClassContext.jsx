import React from "react";
import { CLASSES } from "./classes";

const ClassContext = React.createContext({
  classes: CLASSES,
});

export default ClassContext;
