import React from 'react'
import { connect } from 'react-redux'

import { problemsCollectionFetched } from "../actions/problems"
import Info from "./Info"
import Problem from "./Problem"
import Message from "./Message"

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
      <Message />
      <Problem />
      <Info />
    </div>
  )
}

export default connect(state => state.problems)(Body);
