import React from 'react'
import Select from 'react-select'

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

  const value = options.find(option => option.value === detail.unitId)

  const onSelect = option => {
    onChange({ unitId: option.value })
  }

  return(
    <Select
      onChange={onSelect}
      options={options}
      value={value}
    />
  )
}
