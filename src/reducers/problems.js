import { problem as problemCopy } from "../locales/copy"
import { sampleFrom } from "../functions/CollectionHelpers"

const randomFailureMessage = () => sampleFrom(problemCopy.failureMessages)
const randomSuccessMessage = () => sampleFrom(problemCopy.successMessages)

const initialState = {
  collection: [
    {
      x_value: 0,
      y_value: 0,
      symbol: '+',
    }
  ],
  answer: "",
  failureMessage: randomFailureMessage(),
  fetched: false,
  history: [],
  index: 0,
  lastAnswer: "",
  successMessage: randomSuccessMessage(),
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
      index: (state.index + 1),
      history: ["success", ...state.history],
      successMessage: randomSuccessMessage(),
    }
  case "LOG_INCORRECT_ANSWER":
    return {
      ...state,
      collection: state.collection.map(problem =>
        problem.id === action.payload.id ? addFailedAttempt(problem) : problem
      ),
      answer: "",
      failureMessage: randomFailureMessage(),
      index: (state.index + 1),
      history: ["failure", ...state.history],
      lastAnswer: "incorrect",
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
