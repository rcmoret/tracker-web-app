import React from 'react'
import { connect } from 'react-redux'

import { problemsCollectionFetched } from "../actions/problems"
import Info from "./Info"
import Meme from "./Meme"
import Message from "./Message"
import Problem from "./Problem"

import ApiUrlBuilder from "../functions/ApiUrlBuilder"

const Body = (props) => {
  if (!props.fetched) {
    const url = ApiUrlBuilder(["/problems"])
    fetch(url)
      .then(response => response.json())
      .then(data => props.dispatch(problemsCollectionFetched(data)))
  }

  return (
    <div>
      <div className="left">
        <Message />
        <Problem />
        <Info />
      </div>
      <div className="right">
        <Meme />
      </div>
    </div>
  )
}

export default connect(state => state.problems)(Body);
