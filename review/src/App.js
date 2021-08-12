import React, { useReducer } from "react";
import reducer, {initialState} from './reducers/calcReducer';
import "./styles.css";

let currentState = initialState;
// currentState = reducer(currentState, {type:"ADD", payload: 5});
// currentState = reducer(currentState, {type:"SUBTRACT", payload: 2});


// console.log("currentState:", currentState)
// console.log("currentState:", currentState)

import { addAction, subtractAction, addToMemoryAction, clearAction } from './actions/calcAction'

console.log("currentState: ", currentState);
// ADD BY FIVE
currentState = reducer(currentState, addAction(5));
console.log("currentState: ", currentState);

// SUBTRACT BY 10
currentState = reducer(currentState, subtractAction(10));
console.log("currentState: ", currentState);

// 
currentState = reducer(currentState, addToMemoryAction());
console.log("currentState: ", currentState);

currentState = reducer(currentState, clearAction());
console.log("currentState: ", currentState);



export default function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  console.log(state)
  const handleAddClick = () =>{
    // state = reducer(state, addAction(5));
    dispatch(addAction(5))
    // setState({
    //   ...state,
    //   currentValue: 
    // })
  }

  const handleSubClick = () => {
    dispatch(subtractAction(2))
  }

  const clearClick = () => {
    dispatch(clearAction())
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button onClick={handleAddClick} type="button" className="btn">
        + 5
      </button>
      <button onClick={handleSubClick} type="button" className="btn">
        -2 
      </button>
      <button onClick={clearClick} type="button" className="btn">
        CE
      </button>
    </div>
  );
}
