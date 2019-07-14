import { shuffle } from "../functions/CollectionHelpers"

const initialNew = {
  url: "",
  name: "",
  height: "",
  width: "",
  success: true,
}

const initialState = {
  success: {
    index: 0,
    collection: [
      {
        height: 200,
        name: "404",
        url: "https://http.cat/404",
        width: 200,
        success: true,
      },
    ],
  },
  failure: {
    index: 0,
    collection: [
      {
        height: 200,
        name: "404",
        url: "https://http.cat/404",
        width: 200,
        success: false,
      },
    ],
  },
  fetched: false,
  new: initialNew,
  index: 0,
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
      failure: {
        ...state.failure,
        collection: shuffle(action.payload.filter(meme => !meme.success)),
      },
      success: {
        ...state.success,
        collection: shuffle(action.payload.filter(meme => meme.success)),
      },
      fetched: true,
    }
    default:
      return state
  }
}
