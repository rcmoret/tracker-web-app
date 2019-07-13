import React from 'react'
import { connect } from 'react-redux'

const Message = ({ lastAnswer }) => {
  if (lastAnswer === "correct") {
    return (
      <div className="message success">
        <h4>Great Job!</h4>
      </div>
    )
  } else if (lastAnswer === "incorrect") {
    return (
      <div className="message failure">
        <h4>Better luck next time!</h4>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return { lastAnswer: state.problems.lastAnswer }
}

export default connect(mapStateToProps)(Message)
