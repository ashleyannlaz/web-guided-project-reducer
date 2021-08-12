import React, { useState, useReducer } from 'react';
import reducer, {initialState} from '../reducers';
import { saveInput, toggleEdit, setTitleText } from '../actions'

const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');

  const [state,dispatch] = useReducer(reducer, initialState);
  console.log(state.newTitleText)

  const handleChanges = e => {
    // setNewTitleText(e.target.value);
    dispatch(setTitleText(e.target.value));
  };

  const handleEditing = () => {
    dispatch(toggleEdit());
  }

  const handleForm = () => {
    dispatch(saveInput());
  }


  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleForm}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;