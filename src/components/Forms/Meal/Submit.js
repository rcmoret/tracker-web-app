import React from 'react'

import ApiUrlBuilder from '../../../functions/ApiUrlBuilder'
import { newMealEventCreate } from '../actions'
import { mealEventBody } from '../../../functions/jsonBody'
import { post } from '../../../functions/RestClient'
import { shared as copy } from '../../../locales/copy'
import { titleize } from '../../../locales/functions'

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
    <button type={copy.submitText} onClick={onSubmit}>
      {titleize(copy.submitText)}
    </button>
  )
}
