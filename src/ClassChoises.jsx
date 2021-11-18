import React from "react";

const ClassChoises = ({ classesList, classModifier }) => {
  const deleteClass = (selectedClass) => {
    classModifier(selectedClass);
  };
  return (
    <>
      <p>Cliquez sur un cours pour le supprimer de la liste</p>
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
    </>
  );
};

export default ClassChoises;
