export const sortBy = (label) => {
  return (item1, item2) => item1[label] < item2[label] ? -1 : 1
}
