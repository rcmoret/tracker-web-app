import React from "react"
import { connect } from "react-redux"

import ApiUrlBuilder from "../functions/ApiUrlBuilder"
import { createdMeme, editNewMeme } from "../actions/memes"

import { admin } from "../locales/copy"

const Form = (props) => {
  const {
    dispatch,
    height,
    name,
    success,
    url,
    width,
  } = props

  const {
    failureLabel,
    heightLabel,
    nameLabel,
    submitText,
    successLabel,
    urlLabel,
    widthLabel,
  } = admin

  const handleChange = (e) => {
    const action = editNewMeme({ [e.target.name]: e.target.value })
    dispatch(action)
  }

  const hadleRadioChange = (e) => {
    const action = editNewMeme({ "success": !success })
    dispatch(action)
  }

  const submit = (e) => {
    const body = JSON.stringify({
      height: height,
      name: name,
      success: success,
      url: url,
      width: width,
    })
    const endpoint = ApiUrlBuilder(["meme"])
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(response => response.json())
      .then(data => dispatch(createdMeme(data)))
  }

  return (
    <div className="admin-form">
      <div className="label">
        {urlLabel}
      </div>
      <div className="input">
        <input
          className="url"
          type="text"
          name="url"
          onChange={handleChange}
          value={url}
        />
      </div>
      <div className="label">
        {nameLabel}
      </div>
      <div className="input">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className="dimensions">
        <div className="label">
          {heightLabel}
        </div>
        <div className="input">
          <input
            type="text"
            name="height"
            onChange={handleChange}
            value={height}
          />
        </div>
      </div>
      <div className="dimensions">
        <div className="label">
          {widthLabel}
        </div>
        <div className="input">
          <input
            type="text"
            name="width"
            onChange={handleChange}
            value={width}
          />
        </div>
      </div>

      <div className="success-radio">
        <div className="label">
          {successLabel}
        </div>
        <div className="input">
          <input
            type="radio"
            value={true}
            name="success"
            checked={success === true ? "checked" : ""}
            onChange={hadleRadioChange}
          />
        </div>
      </div>
      <div className="success-radio">
        <div className="label">
          {failureLabel}
        </div>
        <div className="input">
          <input
            type="radio"
            name="success"
            value={false}
            checked={success === true ? "" : "checked"}
            onChange={hadleRadioChange}
          />
        </div>
      </div>
      <div className="submit">
        <button
          type="submit"
          onClick={submit}
        >
            {submitText}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.memes.new
}

export default connect(mapStateToProps)(Form)
