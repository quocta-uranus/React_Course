import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  showInput: false,
  name: "",
  displayNames: [],
  checkedNames: [],
  showLimitPopup: false,
  showEmptyPopup: true,
  showList: false,
};

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOW_INPUT":
      return { ...state, showInput: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "ADD_NAME":
      return {
        ...state,
        displayNames: [...state.displayNames, action.payload],
        name: "",
        showInput: false,
      };
    case "REMOVE_NAME":
      const newDisplayNames = [...state.displayNames];
      newDisplayNames.splice(action.payload, 1);
      const newCheckedNames = [...state.checkedNames];
      newCheckedNames.splice(action.payload, 1);
      return {
        ...state,
        displayNames: newDisplayNames,
        checkedNames: newCheckedNames,
      };
    case "TOGGLE_NAME":
      const updatedCheckedNames = [...state.checkedNames];
      updatedCheckedNames[action.payload] =
        !updatedCheckedNames[action.payload];
      return { ...state, checkedNames: updatedCheckedNames };

    case "SET_SHOW_LIMIT_POPUP":
      return { ...state, showLimitPopup: action.payload };
    case "SET_SHOW_EMPTY_POPUP":
      return { ...state, showEmptyPopup: action.payload };
    case "SET_SHOW_LIST":
      return { ...state, showList: action.payload };
    case "DELETE_CHECKED_NAMES":
      const newState = { ...state };
      for (let i = state.checkedNames.length - 1; i >= 0; i--) {
        if (state.checkedNames[i] === true) {
          newState.displayNames.splice(i, 1);
        }
      }
      for (let i = state.checkedNames.length - 1; i >= 0; i--) {
        if (state.checkedNames[i]=== true) {
          newState.checkedNames.splice(i, 1);
        }
      }

      return newState;
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);

export { TodoProvider, useTodos };
