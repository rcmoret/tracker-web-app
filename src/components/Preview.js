import React from "react"
import { connect } from "react-redux"

import { admin } from "../locales/copy"

const Preview = (props) => {
  const {
    height,
    name,
    url,
    width,
  } = props

  const imgstyle = {
    height: height + 'px',
    width: width + 'px',
    display: 'block',
    position: 'relative',
    margin: '10px auto',
  }

  const divstyle = {
    height: (parseInt(height) + 40) + 'px',
    width: (parseInt(width) + 40) + 'px',
  }

  return (
    <div>
      <h3>{admin.preview}</h3>
      <div className="meme" style={divstyle}>
        <img src={url} style={imgstyle} alt={name} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return state.memes.new
}

export default connect(mapStateToProps)(Preview)
