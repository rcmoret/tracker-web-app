export const logCorrectAnswer = (payload) => {
  return { type: "LOG_CORRECT_ANSWER", payload: payload }
}

export const logIncorrectAnswer = (payload) => {
  return { type: "LOG_INCORRECT_ANSWER", payload: payload }
}

export const problemsCollectionFetched = (payload) => {
  return { type: "PROBLEMS_COLLECTION_FETCHED", payload: payload }
}

export const updateInputAnswer = (payload) => {
  return { type: "UPDATE_INPUT_ANSWER", payload: payload }
}
