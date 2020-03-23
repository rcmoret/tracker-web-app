import React from 'react'
import Select from 'react-select'

import { editNewMedicationEvent } from '../actions'
import { titleize } from '../../../locales/functions'
import { sortBy } from '../../../functions/sortBy'
import HSeparator from '../../shared/HSeparator'

import { shared, medication as copy } from '../../../locales/copy'

export default (props) => {
  const {
    index,
    detail,
    dispatch,
    types,
  } = props

  const { typePlaceholder } = copy
  const {
    quantity,
  } = shared

  const options = types.map(type => (
      { value: type.id, label: titleize(type.name), unit: type.unit }
  )).sort(sortBy('label'))

  const value = options.find(option => option.value === detail.typeId)

  const onChange = tuple => {
    const action = editNewMedicationEvent({ index: index, detail: tuple })
    dispatch(action)
  }

  const onTypeChange = ({ value }) => {
    onChange({ typeId: value })
  }

  const onQuantityChange = (e) => {
    onChange({ quantity: e.target.value })
  }

  const unit = { unit: { displayName: '' }, ...value }.unit.displayName

  return (
    <div className='medication-form-detail'>
      <HSeparator />
      <Select
        isSearchable={true}
        onChange={onTypeChange}
        options={options}
        placeholder={typePlaceholder}
        value={value}
      />
      <input
        value={detail.quantity}
        onChange={onQuantityChange}
        placeholder={quantity}
      />
      {unit}
    </div>
  )
}
