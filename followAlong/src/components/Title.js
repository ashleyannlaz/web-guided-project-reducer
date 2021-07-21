import React, { useState, useReducer } from 'react';
import reducer, {initialState} from '../reducers';
import { setEditing } from '../actions';

const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  console.log(state)
  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(setEditing(!state.editing))} className="far fa-edit" />
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
            onClick={() => {
              setTitle(state.newTitleText);
              dispatch(setEditing(false));
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;