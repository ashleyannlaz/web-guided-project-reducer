import React, { useReducer } from "react";
import reducer, { intialState } from './reducers/calcReducer';
import { addAction, subtractAction, addToMemoryAction} from './actions/calcActions'
import "./styles.css";


export default function App() {

    const [state, dispatch] = useReducer(reducer, intialState)
  

  // let currentState = {
  //   currentValue: 0,
  //   memory: 0
  // }

  // console.log(currentState.currentValue)
  // currentState = reducer(currentState, addAction(7))
  // console.log(currentState);
  // currentState = reducer(currentState, subtractAction(12))
  // console.log(currentState);
  // currentState = reducer(currentState, addToMemoryAction())
  // console.log(currentState);
  console.log(state)
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
