// action creator
export const addAction = (input) => {
    return { type: "ADD", payload: input}
  }

export const subtractAction = (input) => {
    return { type: "SUBTRACT", payload: input}
}

export const clearAction = () => {
    return { type: "CLEAR"}
}

export const addToMemoryAction = () => {
    return { type: "ADD_TO_MEMORY"}
}