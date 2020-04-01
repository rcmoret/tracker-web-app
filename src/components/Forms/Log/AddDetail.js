import React from 'react'

import { addNewLogEventDetail } from '../actions'
import { shared } from '../../../locales/copy'
import { titleize } from '../../../locales/functions'
import { Link } from 'react-router-dom'

const {
  octothorp,
} = shared

export default (props) => {
  const {
    details,
    dispatch,
    types,
  } = props

  const addDetail = () => {
    dispatch(addNewLogEventDetail())
  }

  if (types.length <= details.length) {
    return null
  } else {
    return (
      <Link
        to={octothorp}
        onClick={addDetail}
      >
        <i className='fas fa-plus-circle'></i>
        {titleize(shared.addDetail)}
      </Link>
    )
  }
}
