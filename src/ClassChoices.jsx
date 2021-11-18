import React, { useContext } from "react";
import ClassContext from "./ClassContext";

const ClassChoices = () => {
  const { classes, deleteClass } = useContext(ClassContext);
  return (
    <>
      <p>Cliquez sur un cours pour le supprimer de la liste</p>
      <ul className="items">
        {classes.map((item, i) => {
          return (
            <li key={i} onClick={() => deleteClass(item.sigle)}>
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
