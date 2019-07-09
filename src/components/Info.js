import React from "react"
import { connect } from "react-redux"

import CalculateStreak from "../functions/CalculateStreak"

const Info = (props) => {
  const {
    correctStreak,
    totalAttempts,
    totalCorrect,
  } = props

  return (
    <div className="info">
      {totalCorrect} correct out of {totalAttempts} questions
      <br />
      <Streak
        number={correctStreak}
      />
    </div>
  )
}

const Streak = ({ number }) => {
  if (number > 1) {
    return (
      <div className="streak">
        {number} in a row!
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  const { history } = state.problems
  const totalAttempts = history.length
  const totalCorrect = history.filter(attempt => attempt === "success").length
  const correctStreak = CalculateStreak(history)

  return {
    totalAttempts: totalAttempts,
    totalCorrect: totalCorrect,
    correctStreak: correctStreak,
  }
}

export default connect(mapStateToProps)(Info)
