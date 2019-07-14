import React from 'react'
import { connect } from 'react-redux'

const Message = ({ failureMessage, lastAnswer, successMessage }) => {
  if (lastAnswer === "correct") {
    return (
      <div className="message success">
        <h4>{successMessage}</h4>
      </div>
    )
  } else if (lastAnswer === "incorrect") {
    return (
      <div className="message failure">
        <h4>{failureMessage}</h4>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    failureMessage: state.problems.failureMessage,
    lastAnswer: state.problems.lastAnswer,
    successMessage: state.problems.successMessage,
  }
}

export default connect(mapStateToProps)(Message)
