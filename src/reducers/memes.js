const initialState = {
  collection: [
    {
      url: 'http.cat/404',
    }
  ],
  fetched: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case "MEMES_FETCHED":
    return {
      collection: action.payload,
      fetched: true,
    }
    default:
      return state
  }
}
