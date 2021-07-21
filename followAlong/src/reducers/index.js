import { SET_EDITING } from '../actions'

export const initialState = {
    title: 'Hello earthlings!',
    editing: false,
    newTitleText: ''
}


// reducer is a function
    // takes 2 args
        // state
        // action
// has a switch
    // the cases are what we are doing to our state

const reducer = (state, action) => {
    switch(action.type) {
        case('SET_TITLE'): 
            return state
        case(SET_EDITING): 
            return ({...state, editing: action.payload})
        case('SET_NEW_TITLE_TEXT'): 
            return state
        default: 
            return state
    }
}

export default reducer