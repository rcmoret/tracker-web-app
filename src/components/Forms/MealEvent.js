import React from 'react'

import { titleize } from '../../locales/functions'
import { sortBy } from '../../functions/sortBy'

export default ({ items, types }) => {
  const groupedData = groupBy(items, types)
  return(
    <div>
      <h3>Meals</h3>
        {groupedData.map(data => groupPresenter(data))}
    </div>
  )
}

const groupBy = (items, types) => {
  const filterFn = (item, typeId) => item.typeId === parseInt(typeId)
  const reducer = (acc, type) => {
    const collection = items.filter(item => filterFn(item, type.id)).sort(sortBy('name'))
    acc.push({ ...type, collection: collection })
    return acc
  }
  return types.reduce(reducer, [])
}

const groupPresenter = (data) => (
  <div key={data.id}>
    <strong>{titleize(data.name)}</strong>
    <ul>
      {data.collection.map(item => itemPresenter(item))}
    </ul>
  </div>
)

const itemPresenter = (item) => (
  <li key={item.id}>{item.name}</li>
)
