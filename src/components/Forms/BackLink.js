import React from 'react'

import { Link } from 'react-router-dom'
import { links as copy } from '../../locales/copy'
import { config } from '../../locales/config'

export default () => (
  <Link to={config.paths.formSelect}>
    <div className='bg-yellow button'>
      <span className='point8em'>
        <i className='fas fa-arrow-circle-left'></i>
      </span>
      {' '}
      <span className='back-link'>{copy.backLinkTest}</span>
    </div>
  </Link>
)
