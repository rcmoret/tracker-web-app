export const createdMeme = (payload) => {
  return { type: "CREATED_MEME", payload: payload }
}

export const editNewMeme = (payload) => {
  return { type: "EDIT_NEW_MEME", payload: payload }
}

export const memesFetched = (payload) => {
  return { type: "MEMES_FETCHED", payload: payload }
}
