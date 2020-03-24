import React from 'react'

import { titleize } from '../../../locales/functions'

import ApiUrlBuilder from '../../../functions/ApiUrlBuilder'
import { supplementEventBody } from '../../../functions/jsonBody'
import { newSupplementEventCreate } from '../actions'
import { post } from '../../../functions/RestClient'

const copy = {
  shared: {
    submitText: 'submit',
  }
}

export default (props) => {
  const {
    dispatch,
    event,
  } = props

  const onSubmit = () => {
    const body = supplementEventBody(event)
    const url =  ApiUrlBuilder(['supplements'])
    const onSuccess = data => {
      const action = newSupplementEventCreate(data)
      dispatch(action)
    }
    post(url, body, onSuccess)
  }


  return(
    <button type='submit' onClick={onSubmit}>
      {titleize(copy.shared.submitText)}
    </button>
  )
}
