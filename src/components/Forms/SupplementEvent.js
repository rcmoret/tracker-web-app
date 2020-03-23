import React from 'react'

import { sortByName } from '../../functions/sortBy'

export default ({ types }) => {
  return(
    <div className='supplement-event-form'>
      <h3>Supplements</h3>
      <ul>
          {types.sort(sortByName).map(type => (
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
