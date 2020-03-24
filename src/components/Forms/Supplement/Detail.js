import React from 'react'
import Select from 'react-select'

import { editNewSupplementEvent, removeNewSupplementEventDetail } from '../actions'
import { Link } from 'react-router-dom'
import { titleize } from '../../../locales/functions'
import { sortBy } from '../../../functions/sortBy'
import HSeparator from '../../shared/HSeparator'

import { shared, supplement as copy } from '../../../locales/copy'

export default (props) => {
  const {
    index,
    detail,
    dispatch,
    types,
  } = props

  const { typePlaceholder } = copy
  const {
    octothorp,
    quantity,
  } = shared

  const options = types.map(type => (
      { value: type.id, label: titleize(type.name), unit: type.unit }
  )).sort(sortBy('label'))

  const value = options.find(option => option.value === detail.typeId)

  const onChange = tuple => {
    const action = editNewSupplementEvent({ index: index, detail: tuple })
    dispatch(action)
  }

  const onTypeChange = ({ value }) => {
    onChange({ typeId: value })
  }

  const onQuantityChange = (e) => {
    onChange({ quantity: e.target.value })
  }

  const removeDetail = () => {
    const action = removeNewSupplementEventDetail({ index: index })
    dispatch(action)
  }

  const unit = { unit: { displayName: '' }, ...value }.unit.displayName

  return (
    <div className='supplement-form-detail'>
      <HSeparator />
      <div className='type-select'>
        <div className='select-box'>
          <Select
            isSearchable={true}
            onChange={onTypeChange}
            options={options}
            placeholder={typePlaceholder}
            value={value}
          />
        </div>
        <div className='close'>
          <Link
            to={octothorp}
            className='far fa-times-circle'
            onClick={removeDetail}
          />
        </div>
      </div>
      <div className={quantity}>
        <span className='input'>
          <input
            value={detail.quantity}
            onChange={onQuantityChange}
            placeholder={quantity}
          />
        </span>
        <span className='unit'>
          {unit}
        </span>
      </div>
    </div>
  )
}
