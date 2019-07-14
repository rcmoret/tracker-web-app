const failureMessages = [
  "So close",
  "Not quite",
  "Try again",
  "Sad Trombone",
  "Better Luck Next Time",
  "Keep practicing",
]

const successMessages = [
  "Greate Job",
  "Well Done",
  "BOOM!",
  "That's the ticket",
  "You rock",
  "I see you working!",
  "Perfect",
  "A+",
  "You got it!",
  "Keep going!!",
  "You're crushing it",
  "You know that's right",
  "Nailed it",
  "Aced it",
  "Genius",
  "You're a math whiz",
  "That's it!",
  "Keeping it 100",
  "Ballin",
  "I just smashed that like button",
]

export const problem = {
  answerButtonText: "Answer",
  correct: (number, attempts) => correctOutOfString(number, attempts),
  equalSign: "=",
  failureMessages: failureMessages,
  inARow: (number) => `${number} in a row!`,
  successMessages: successMessages,
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
