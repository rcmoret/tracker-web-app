export const problem = {
  answerButtonText: "Answer",
  correct: (number, attempts) => correctOutOfString(number, attempts),
  equalSign: "=",
  inARow: (number) => `${number} in a row!`,
}

const correctOutOfString = (number, attempts) => {
  if (attempts === 0) {
    return ""
  } else if (attempts === 1) {
    return `${number} correct out of ${attempts} question`
  } else {
    return `${number} correct out of ${attempts} questions`
  }
}
