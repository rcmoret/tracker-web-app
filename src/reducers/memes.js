const initialNew = {
  url: "",
  name: "",
  height: "",
  width: "",
  success: true,
}

const initialState = {
  collection: [
    {
      url: 'http.cat/404',
    }
  ],
  fetched: false,
  new: initialNew,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case "CREATED_MEME":
    return {
      ...state,
      new: initialNew,
      collection: [...state.collection, action.payload],
    }
  case "EDIT_NEW_MEME":
    return {
      ...state,
      new: {
        ...state.new,
        ...action.payload,
      }
    }
  case "MEMES_FETCHED":
    return {
      collection: action.payload,
      fetched: true,
    }
    default:
      return state
  }
}
