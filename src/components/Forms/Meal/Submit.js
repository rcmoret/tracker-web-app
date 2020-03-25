import React from 'react'

import ApiUrlBuilder from '../../../functions/ApiUrlBuilder'
import { newMealEventCreate } from '../actions'
import { mealEventBody } from '../../../functions/jsonBody'
import { post } from '../../../functions/RestClient'
import { titleize } from '../../../locales/functions'

const copy = {
  shared: {
    submitText: 'submit',
  }
}

export default ({ dispatch, event }) => {
  const onSubmit = () => {
    const body = mealEventBody(event)
    const url = ApiUrlBuilder(['meals'])
    const onSuccess = data => {
      const action = newMealEventCreate(data)
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
