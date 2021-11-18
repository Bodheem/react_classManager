import React from "react";

const ClassChoices = ({ classesList, classModifier }) => {
  const deleteClass = (selectedClass) => {
    classModifier(selectedClass);
  };
  return (
    <>
      <p>Cliquez sur un cours pour le supprimer de la liste</p>
      <ul className="items">
        {classesList.map((item,i) => {
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
