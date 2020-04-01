import React from 'react'
import Select from 'react-select'

import findOrDefault from '../../../functions/findOrDefault'
import { sortBy } from '../../../functions/sortBy'

export default (props) => {
  const {
    detail,
    onChange,
    units,
  } = props

  const options = units.map(unit => (
    { label: unit.name, value: unit.id }
  )).sort(sortBy('label'))

  const value = findOrDefault(options, option => option.value === detail.unitId, null)

  const onSelect = option => onChange({ unitId: option.value })

  return(
    <Select
      onChange={onSelect}
      options={options}
      value={value}
    />
  )
}
