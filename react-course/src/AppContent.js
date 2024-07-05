
import React, { useEffect} from 'react';
import './App.css';
import Close from './close-circle.svg';
import Trash from './trash.svg';
import { useTodos } from './TodoContext';

function AppContent() {
    const { state, dispatch } = useTodos();
  
    const handleSubmit = () => {
      dispatch({ type: 'ADD_NAME', payload: state.name });
    };
    useEffect(() => {
      if (state.displayNames.length > 9) {
        dispatch({ type: 'SET_SHOW_LIMIT_POPUP', payload: true });
      }
      if (state.displayNames.length === 0) {
        dispatch({ type: 'SET_SHOW_EMPTY_POPUP', payload: !state.showEmptyPopup });
        dispatch({ type: 'SET_SHOW_LIST', payload: false });
      } else {
        dispatch({ type: 'SET_SHOW_EMPTY_POPUP', payload: false });
        dispatch({ type: 'SET_SHOW_LIST', payload: true });
      }
    }, [state.displayNames]);
    const handleOpenPopup = () => {
      dispatch({ type: 'SET_SHOW_INPUT', payload: true });
      if (state.displayNames.length > 9) {
        dispatch({ type: 'SET_SHOW_LIMIT_POPUP', payload: true });

      }
    };
  
    const handleClose = () => {
      dispatch({ type: 'SET_SHOW_INPUT', payload: false });
      dispatch({ type: 'SET_SHOW_LIMIT_POPUP', payload: false });
      dispatch({ type: 'SET_SHOW_EMPTY_POPUP', payload: false });
      
      dispatch({ type: 'SET_NAME', payload: '' });
    };
  
    const handleChangeName = (e) => {
      dispatch({ type: 'SET_NAME', payload: e.target.value });
    };
  
   
  
    const handleEmptyPopupClose = () => {
      dispatch({ type: 'SET_SHOW_EMPTY_POPUP', payload: false });
      dispatch({ type: 'SET_SHOW_INPUT', payload: true });
    };
  
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        dispatch({ type: 'ADD_NAME', payload: state.name });
        dispatch({ type: 'SET_NAME', payload: '' });

      }
      if (event.keyCode === 27) {
        handleClose();
      }
    };
  
    const handleDeleteItem = (index) => {
      dispatch({ type: 'REMOVE_NAME', payload: index });
    };
  
    const handleCheckboxChange = (index) => {
      dispatch({ type: 'TOGGLE_NAME', payload: index });
    };
  
    const handleDelete = () => {
      dispatch({ type: 'DELETE_CHECKED_NAMES' });
    };
  
    return (
      <div className="App">
        {state.showInput && (
          <div className="popup">
            <div className="header">
              <p></p>
              <img className="close" onClick={handleClose} src={Close} alt="close" />
            </div>
  
            <input
              type="text"
              value={state.name}
              className="input"
              onChange={handleChangeName}
              autoFocus
              onKeyDown={handleKeyDown}
            />
            <div className="btn">
              <button
                className="sub-btn"
                onClick={handleSubmit}
                disabled={!state.name.trim()}
              >
                Submit
              </button>
              <button className="cancel-btn" onClick={handleClose}>
                X
              </button>
            </div>
          </div>
        )}
  
        {state.showLimitPopup && (
          <div className="popup-limit">
            <div className="header">
              <p></p>
              <img className="close" onClick={handleClose} src={Close} alt="close" />
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
              <img className="close" onClick={handleClose} src={Close} alt="close" />
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
              <img className="trash" src={Trash} onClick={handleDelete} alt="delete" />
            </div>
            <hr />
            <div className="">
              {state.displayNames.map((displayName, index) => (
                <div className="content" key={index}>
                  <p
                    checked={state.checkedNames[index]}
                    onDoubleClick={() => handleCheckboxChange(index)}
                    className={state.checkedNames[index] ? 'dimmed' : 'undimmed'}
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
  export  {AppContent};
  