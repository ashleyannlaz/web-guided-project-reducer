
export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const SET_TITLE_TEXT = "SET_TITLE_TEXT";
export const SAVE_INPUT = "SAVE_INPUT"

export const toggleEdit = () => {
    return({ type: TOGGLE_EDIT})
}

export const setTitleText = (input) => {
    return ({type: SET_TITLE_TEXT, payload: input})
}

export const saveInput = () => {
    return({type: SAVE_INPUT})
}