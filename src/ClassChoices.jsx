import React, { useContext } from "react";
import ClassContext from "./ClassContext";
import DispatchContext from "./DispatchContext";
import { ACTIONS } from "./reducer";

const ClassChoices = () => {
  const state = useContext(ClassContext);
  const dispatch = useContext(DispatchContext);
  return (
    <>
      <p>Cliquez sur un cours pour le supprimer de la liste</p>
      <ul className="items">
        {state.classes.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => dispatch({ type: ACTIONS.DELETE, payload: item })}
              onContextMenu={(e) => {
                e.preventDefault();
                dispatch({ type: ACTIONS.MODIFY, payload: item });
              }}
            >
              <div className="item">
                <p className="item-text">
                  {item.sigle} : {item.credits}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ClassChoices;
