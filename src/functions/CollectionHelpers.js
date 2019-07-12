export const shuffle = (array) => {
  let arr = array
  let i = array.length - 1
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export const sampleFrom = (array) => shuffle(array)[0]
