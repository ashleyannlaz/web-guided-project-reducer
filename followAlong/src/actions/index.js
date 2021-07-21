// Constants
export const SET_EDITING = "SET_EDITING"
export const SET_TITLE = "SET_TITLE"
export const SET_NEW_TITLE_TEXT = "SET_NEW_TITLE_TEXT"

// Action Creators
export const setEditing = (isEditing) => {
    return { type: SET_EDITING, payload: isEditing }
}

export const setTitle = (title) => {
    return { type: SET_TITLE, payload: title}
}