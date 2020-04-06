import React from 'react'

import { Link } from 'react-router-dom'

import { shared, links as copy } from '../../locales/copy'

import { formItemsRefresh } from './actions'


export default ({ dispatch }) => {
  const onClick = () => {
    const action = formItemsRefresh()
    dispatch(action)
  }

  return (
    <Link
      to={shared.octothorp}
      onClick={onClick}
    >
      <div className='bg-tan button'>
        <span className='point8em'>
          <i className="fas fa-sync-alt"></i>
        </span>
        {' '}
        <span className='refresh-button'>{copy.refreshButtonText}</span>
      </div>
    </Link>
  )
}
