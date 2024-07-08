import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  showInput: false,
  name: "",
  displayNames: [],
  checkedNames: [],
  showLimitPopup: false,
  showEmptyPopup: true,
  showList: false,
  firstName: "",
  lastName: "",
};

const findIndex = (checkedNames) => {
  const index = checkedNames.findIndex((checked) => checked === true);
  console.log(`findIndex: ${index}`);
  return index;
};

const deleteCheckedNames = (state) => {
  const newState = { ...state };
  let indexToRemove = findIndex(newState.checkedNames);
  while (indexToRemove !== -1) {
    newState.displayNames.splice(indexToRemove, 1);
    newState.checkedNames.splice(indexToRemove, 1);
    indexToRemove = findIndex(newState.checkedNames);
  }
  return newState;
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
      return deleteCheckedNames(state);
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const setShowInput = (showInput) =>
    dispatch({ type: "SET_SHOW_INPUT", payload: showInput });
  const setName = (name) => dispatch({ type: "SET_NAME", payload: name });
  const addName = () => dispatch({ type: "ADD_NAME", payload: state.name });
  const removeName = (index) =>
    dispatch({ type: "REMOVE_NAME", payload: index });
  const toggleName = (index) =>
    dispatch({ type: "TOGGLE_NAME", payload: index });
  const setShowLimitPopup = (show) =>
    dispatch({ type: "SET_SHOW_LIMIT_POPUP", payload: show });
  const setShowEmptyPopup = (show) =>
    dispatch({ type: "SET_SHOW_EMPTY_POPUP", payload: show });
  const setShowList = (show) =>
    dispatch({ type: "SET_SHOW_LIST", payload: show });
  const deleteCheckedNames = () => dispatch({ type: "DELETE_CHECKED_NAMES" });

  return (
    <TodoContext.Provider
      value={{
        state,
        setShowInput,
        setName,
        addName,
        removeName,
        toggleName,
        setShowLimitPopup,
        setShowEmptyPopup,
        setShowList,
        deleteCheckedNames,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);

export { TodoProvider, useTodos };
