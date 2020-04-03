import React from 'react'

import { Link } from 'react-router-dom'

export default () => (
  <Link to='/forms/select' >
    <div className='bg-yellow rounded padded-min narrow centered-text mg-bottom'>
      <span className='point8em'>
        <i class='fas fa-arrow-circle-left'></i>
      </span>
      {' '}
      Back
    </div>
  </Link>
)
