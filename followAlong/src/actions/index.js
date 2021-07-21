// Constants
export const SET_EDITING = "SET_EDITING"

// Action Creators
export const setEditing = (isEditing) => {
    return { type: SET_EDITING, payload: isEditing }
}