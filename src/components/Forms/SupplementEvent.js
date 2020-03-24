import React from 'react'

import { sortBy } from '../../functions/sortBy'

export default ({ types }) => {
  return(
    <div className='supplement-event-form mg-bottom'>
      <h3>Supplements</h3>
      <ul>
          {types.slice(0).sort(sortBy('name')).map(type => (
            listItem(type)
          ))
          }
      </ul>
    </div>
  )
}

const listItem = (type) => (
  <li key={type.id}>{type.name} - {type.unit.displayName}</li>
)
