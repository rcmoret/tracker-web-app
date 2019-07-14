import React from "react"
import { connect } from "react-redux"

import CalculateStreak from "../functions/CalculateStreak"
import { problem } from "../locales/copy"

const Info = (props) => {
  const {
    correctStreak,
    totalAttempts,
    totalCorrect,
  } = props

  const {
    correct,
  } = problem

  return (
    <div className="info">
      {correct(totalCorrect, totalAttempts)}
      <br />
      <Streak
        number={correctStreak}
      />
    </div>
  )
}

const Streak = ({ number }) => {
  const {
    inARow,
  } = problem

  if (number > 1) {
    return (
      <div className="streak">
        {inARow(number)}
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
