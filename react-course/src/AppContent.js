import React, { useEffect } from "react";
import "./App.css";
import Close from "./close-circle.svg";
import Trash from "./trash.svg";
import { useTodos } from "./TodoContext";

function AppContent() {
  const {
    state,
    toggleName,
    removeName,
    addName,
    setShowInput,
    setShowLimitPopup,
    setShowEmptyPopup,
    setShowList,
    setName,
    deleteCheckedNames,
  } = useTodos();
  

  const handleSubmit = (e) => {
    addName();
    e.preventDefault();
    // alert(state.name);

    
  };

  useEffect(() => {
    if (state.displayNames.length > 9) {
      setShowLimitPopup(true);
    }
    if (state.displayNames.length === 0) {
      setShowEmptyPopup(!state.showEmptyPopup);
      setShowList(false);
    } else {
      setShowEmptyPopup(false);
      setShowList(true);
    }
  }, [state.displayNames]);

  const handleOpenPopup = () => {
    setShowInput(true);
    if (state.displayNames.length > 9) {
      setShowLimitPopup(true);
    }
  };

  const handleClose = () => {
    setShowInput(false);
    setShowLimitPopup(false);
    setShowEmptyPopup(false);
    // setName("");
    
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  

  const handleEmptyPopupClose = () => {
    setShowEmptyPopup(false);
    setShowInput(true);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      addName();
    }
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  const handleDeleteItem = (index) => {
    removeName(index);
  };

  const handleCheckboxChange = (index) => {
    toggleName(index);
  };

  const handleDelete = () => {
    deleteCheckedNames();
    setTimeout(() => {
      if (state.displayNames.length === 0) {
        setShowList(false);
        setShowEmptyPopup(!state.showEmptyPopup);
      }
    }, 0);
  };
  const handleInput = (e) => {
    alert(state.name);
    e.preventDefault();

  }
  console.log(state);


  return (
    <div className="App">
      {state.showInput && (
        <div className="popup">
          <div className="header">
            <p></p>
            <img
              className="close"
              onClick={handleClose}
              src={Close}
              alt="close"
            />
          </div>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            id="myInput"
            value={state.name}
            className="input"
            onChange={handleChangeName}
            autoFocus
            onKeyDown={handleKeyDown}
          />
          <div className="btn">
            <button
              className="sub-btn"
              // onClick={handleSubmit}
              disabled={!state.name.trim()}
            >
              Submit
            </button>
            <button className="cancel-btn" onClick={handleClose}>
              X
            </button>
          </div>
        </form>

          
        </div>
      )}

      {state.showLimitPopup && (
        <div className="popup-limit">
          <div className="header">
            <p></p>
            <img
              className="close"
              onClick={handleClose}
              src={Close}
              alt="close"
            />
          </div>
          <div className="content-limit">
            <div>
              <p className="limit">Limit 10 items</p>
            </div>
          </div>
        </div>
      )}

      {state.showEmptyPopup && (
        <div className="popup-empty">
          <div className="header">
            <p></p>
            <img
              className="close"
              onClick={handleClose}
              src={Close}
              alt="close"
            />
          </div>

          <div className="content-empty">
            <p className="empty">Please add item</p>
            <button className="ok-btn" onClick={handleEmptyPopupClose}>
              Ok
            </button>
          </div>
        </div>
      )}

      {state.showList && (
        <div className="list">
          <div className="header">
            <p>LIST</p>
            <img
              className="trash"
              src={Trash}
              onClick={handleDelete}
              alt="delete"
            />
          </div>
          <hr />
          <div className="">
            {state.displayNames.map((displayName, index) => (
              <div className="content" key={index}>
                <p
                  checked={state.checkedNames[index]}
                  onDoubleClick={() => handleCheckboxChange(index)}
                  className={state.checkedNames[index] ? "dimmed" : "undimmed"}
                >
                  {index + 1} : {displayName}
                </p>
                <div className="btn-content">
                  <img
                    className="close"
                    onClick={() => handleDeleteItem(index)}
                    src={Close}
                    alt="close"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="add-btn" onClick={handleOpenPopup}>
        ADD
      </button>
    </div>
  );
}

export { AppContent };
