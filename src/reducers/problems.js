const initialState = {
  collection: [
    {
      x_value: 0,
      y_value: 0,
      symbol: '+',
    }
  ],
  answer: "",
  fetched: false,
  index: 0,
  lastAnswer: "",
}

const addSuccessfulAttempt = (problem) => {
  return {
    ...problem,
    successful_attempts: (problem.successful_attempts + 1),
    total_attempts: (problem.total_attempts + 1),
  }
}

const addFailedAttempt = (problem) => {
  return {
    ...problem,
    total_attempts: (problem.total_attempts + 1),
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case "LOG_CORRECT_ANSWER":
    return {
      ...state,
      collection: state.collection.map(problem =>
        problem.id === action.payload.id ? addSuccessfulAttempt(problem) : problem
      ),
      answer: "",
      lastAnswer: "correct",
      index: (state.index + 1)
    }
  case "LOG_INCORRECT_ANSWER":
    return {
      ...state,
      collection: state.collection.map(problem =>
        problem.id === action.payload.id ? addFailedAttempt(problem) : problem
      ),
      answer: "",
      lastAnswer: "incorrect",
      index: (state.index + 1)
    }
  case "PROBLEMS_COLLECTION_FETCHED":
    return {
      ...state,
      collection: action.payload,
      fetched: true
    }
  case "UPDATE_INPUT_ANSWER":
    return {
      ...state,
      answer: action.payload
    }
  default:
    return state
  }
}
