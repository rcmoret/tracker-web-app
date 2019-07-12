import React from 'react'
import { connect } from 'react-redux'

import ApiUrlBuilder from "../functions/ApiUrlBuilder"
import CalculateStreak from "../functions/CalculateStreak"
import { memesFetched } from "../actions/memes"
import { sampleFrom } from "../functions/CollectionHelpers"

const Meme = (props) => {
  const {
    dispatch,
    fetched,
    selectedMeme,
    showMeme,
  } = props

  const {
    height,
    url,
    width,
  } = selectedMeme


  if (!fetched) {
    const url = ApiUrlBuilder(["memes"])
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(memesFetched(data)))
  }

  const divstyle = {
    height: (height + 40) + 'px',
    width: (width + 40) + 'px',
  }

  const imgstyle = {
    height: height + 'px',
    width: width + 'px',
    display: 'block',
    position: 'relative',
    margin: '10px auto',
  }

  if (showMeme) {
    return (
      <div className="meme" style={divstyle}>
        <img src={url} style={imgstyle} alt='funny-cats' />
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  const streak = CalculateStreak(state.problems.history)
  return {
    fetched: state.memes.fetched,
    selectedMeme: sampleFrom(state.memes.collection),
    showMeme: (streak >= 5)
  }
}

export default connect(mapStateToProps)(Meme)
