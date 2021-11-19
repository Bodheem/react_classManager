export const ACTIONS = {
  ADD: "addClass",
  DELETE: "deleteClass",
  MODIFY: "modifyClass",
};

const newClass = (sigle) => {
  return {
    sigle: sigle,
    credits: Math.round(Math.random() * 6 + 1),
  };
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      // Peut retourner l'ancien tableau et la nouvelle valeur avec l'operateur spread
      return {
        classes: [...state.classes, newClass(action.payload.sigle)],
      };
    case ACTIONS.DELETE:
      // Peut retourner le tableau crée par filter
      return {
        classes: state.classes.filter((x) => x.sigle !== action.payload.sigle),
      };

    case ACTIONS.MODIFY:
      const modifiedClasses = state.classes.map((x) => {
        return x.sigle === action.payload.sigle ? newClass(action.payload.sigle) : x;
      });
      return { classes: modifiedClasses };
    default:
      return state;
  }
}
