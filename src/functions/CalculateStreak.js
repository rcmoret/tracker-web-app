export default (history) => {
  if (history.indexOf('failure') === -1) {
    return history.length
  } else {
    return history.indexOf('failure')
  }
}
