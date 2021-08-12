export const ADD_ACTION = "ADD";
export const SUBTRACT_ACTION = "SUBTRACT";
export const ADD_TO_MEMORY_ACTION = "ADD_TO_MEMORY";
export const CLEAR_ACTION = "CLEAR_ACTION";


export const addAction = (input) => {
    return ({type: "ADD_ACTION", payload: input})
  }
  
 export const subtractAction = (input) => {
    return ({type: "SUBTRACT_ACTION", payload: input})
  }
  
export  const addToMemoryAction = (input) => {
    return ({type: "ADD_TO_MEMORY_ACTION", payload: input})
  }
  
export  const clearAction= () => {
    return ({type:"CLEAR_ACTION"})
  }