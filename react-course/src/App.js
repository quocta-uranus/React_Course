import { useEffect, useState } from "react";
import "./App.css";
import Close from "./close-circle.svg";
import Trash from "./trash.svg";
function App() {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const [displayNames, setDisplayNames] = useState([]);
  const [checkedNames, setCheckedNames] = useState([]);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [showEmptyPopup, setShowEmptyPopup] = useState(true);
  const [showList, setShowList] = useState(false);

  const handleSubmit = () => {
    setDisplayNames((prevDisplayNames) => [...prevDisplayNames, name]);
    setName("");
    setShowInput(false);
  };

  useEffect(() => {
    if (displayNames.length > 9) {
      setShowLimitPopup(true);
    }
  }, [displayNames]);

  const handleOpenPopup = () => {
    setShowInput(true);
    // if (displayNames.length > 9) {
    //   setShowInput(false);
    //   setShowLimitPopup(true);
    // }
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

  useEffect(() => {
    if (displayNames.length === 0) {
      setShowEmptyPopup(!showEmptyPopup);
      setShowList(false);
    } else {
      setShowEmptyPopup(false);
      setShowList(true);
    }
  }, [displayNames]);

  const handleEmptyPopupClose = () => {
    setShowEmptyPopup(false);
    setShowInput(true);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setDisplayNames((prevDisplayNames) => [...prevDisplayNames, name]);
      setShowInput(false);
      setName("");
    }
    if(event.keyCode === 27) {
      setShowInput(false);
      setShowLimitPopup(false);
      setShowEmptyPopup(false);
      setName("");
    }
  };
  const handleDeleteItem = (index) => {
    setDisplayNames((prevDisplayNames) => {
      const newDisplayNames = [...prevDisplayNames];
      newDisplayNames.splice(index, 1);
      return newDisplayNames;
    });

    setCheckedNames((prevCheckedNames) => {
      const newCheckedNames = [...prevCheckedNames];
      newCheckedNames.splice(index, 1);
      return newCheckedNames;
    });
  };
  console.log(displayNames);
  console.log(checkedNames);

  const handleCheckboxChange = (index) => {
    setCheckedNames((prevCheckedNames) => {
      const newCheckedNames = [...prevCheckedNames];
      newCheckedNames[index] = !prevCheckedNames[index];
      return newCheckedNames;
    });
  };
  const handleDelete = () => {
    setDisplayNames((prevDisplayNames) =>
      prevDisplayNames.filter((_, index) => !checkedNames[index])
    );
    setCheckedNames((prevCheckedNames) =>
      prevCheckedNames.filter((_, index) => !checkedNames[index])
    );

  };

  return (
    <div className="App">
      {showInput && (
        <div className="popup">
          <div className="header">
            <p></p>
            <img className="close" onClick={handleClose} src={Close} />
          </div>

          <input
            type="text"
            value={name}
            className="input"
            onChange={handleChangeName}
            autoFocus
            onKeyDown={handleKeyDown}
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
            <img className="close" onClick={handleClose} src={Close} />
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
            <img className="close" onClick={handleClose} src={Close} />
          </div>

          <div className="content-empty">
            <p className="empty">Please add item</p>
            <button className="ok-btn" onClick={handleEmptyPopupClose}>
              Ok
            </button>
          </div>
        </div>
      )}
      {showList && (
        <div className="list">
          <div className="header">
            <p>LIST </p>
            <img className="trash" src={Trash} onClick={handleDelete} />
          </div>
          <hr></hr>
          <div className="">
            {displayNames.map((displayName, index) => (
              <div className="content" key={index}>
                <p
                  checked={checkedNames[index]}
                  onDoubleClick={() => handleCheckboxChange(index)}
                  className={checkedNames[index] ? "dimmed" : "undimmed"}
                >
                  {index + 1} : {displayName}
                </p>
                <div className="btn-content">
                  <img
                    className="close"
                    onClick={() => handleDeleteItem(index)}
                    src={Close}
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

export default App;
