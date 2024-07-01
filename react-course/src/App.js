import { useState } from "react";
import "./App.css";
import Close from "./close-circle.svg";


function App(props) {
  // const [showModal, setShowModal] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const [displayNames, setDisplayNames] = useState([]);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [showEmptyPopup, setShowEmptyPopup] = useState(false);

  const handleSubmit = () => {
    if (displayNames.length < 10) {
      setDisplayNames((prevDisplayNames) => [...prevDisplayNames, name]);
      setName("");
      setShowInput(false);
    } else {
      setShowLimitPopup(true);
      setShowInput(false);
    }
  };

  const handleOpenPopup = () => {
    setShowInput(true);
  };

  const handleClose = () => {
    setShowInput(false);
    setShowLimitPopup(false);
    setShowEmptyPopup(false);
    setName("");

  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleDeleteItem = (index) => {
    setDisplayNames((prevDisplayNames) => {
      const newDisplayNames = [...prevDisplayNames];
      newDisplayNames.splice(index, 1);
      if (newDisplayNames.length === 0) {
        setShowEmptyPopup(true);
      }
      return newDisplayNames;
    });
  };
  const handleEmptyPopupClose = () => {
    setShowEmptyPopup(false);
    setShowInput(true);
  };

  console.log(displayNames);

  return (
    <div className="App">
      {showInput && (
        <div className="popup">
          <div className="header">
            <p></p>
            <img
             className="close"
             onClick={handleClose} src={Close} />
          </div>

          <input
            type="text"
            value={name}
            className="input"
            onChange={handleChangeName}
            autoFocus
          />
          <div className="btn">
            <button
              className="sub-btn"
              onClick={handleSubmit}
              disabled={!name.trim()}
            >
              Submit
            </button>
            <button className="cancel-btn" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}

      {showLimitPopup && (
        <div className="popup-limit">
          <div className="header">
            <p></p>
            <img
            className="close"
            onClick={handleClose} src={Close} />
          </div>
          <div className="content-limit">
            <div>
              <p className="limit">Limit 10 item</p>
            </div>
          </div>
        </div>
      )}
      {showEmptyPopup && (
        <div className="popup-empty">
          <div className="header">
            <p></p>
            <img
            className="close" 
            onClick={handleClose} src={Close} />
          </div>

          <div className="content-empty">
            <p className="empty">Please add item</p>
            <button className="ok-btn" onClick={handleEmptyPopupClose}>
              Ok
            </button>
          </div>
        </div>
      )}

      <div className="list">
        <div className="header">
          <p>LIST </p>
        </div>
        <hr></hr>
        <div className="">
          {displayNames.map((displayName, index) => (
            <div className="content" key={index}>
              <p>
                {index + 1} : {displayName}
              </p>
              <img
              className="close"
              onClick={() => handleDeleteItem(index)} src={Close} />
            </div>
          ))}
        </div>
      </div>

      <button className="add-btn" onClick={handleOpenPopup}>
        ADD
      </button>
    </div>
  );
}

export default App;
