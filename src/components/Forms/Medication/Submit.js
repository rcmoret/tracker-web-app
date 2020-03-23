import React from 'react'

import { titleize } from '../../../locales/functions'

import ApiUrlBuilder from '../../../functions/ApiUrlBuilder'
import { medicationEventBody } from '../../../functions/jsonBody'
import { newMedicationEventCreate } from '../actions'
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
    const body = medicationEventBody(event)
    const url =  ApiUrlBuilder(['medications'])
    const onSuccess = data => {
      const action = newMedicationEventCreate(data)
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
