import React from 'react'
import Select from 'react-select'

import { editNewMealEvent, removeNewMealEventDetail } from '../actions'
import findOrDefault from '../../../functions/findOrDefault'
import { Link } from 'react-router-dom'
import { titleize } from '../../../locales/functions'
import { sortBy } from '../../../functions/sortBy'

import HSeparator from '../../shared/HSeparator'
import UnitSelect from './UnitSelect'

import { shared, meal as copy } from '../../../locales/copy'

export default (props) => {
  const {
    index,
    detail,
    dispatch,
    items,
    units,
  } = props

  const { typePlaceholder } = copy
  const {
    octothorp,
    quantity,
  } = shared

  const options = items.map(item => (
      { value: item.id, label: titleize(item.name) }
  )).sort(sortBy('label'))

  const value = findOrDefault(options, option => option.value === detail.itemId, null)

  const onChange = tuple => {
    const action = editNewMealEvent({ index: index, detail: tuple })
    dispatch(action)
  }

  const onItemChange = ({ value }) => {
    onChange({ itemId: value })
  }

  const onQuantityChange = (e) => {
    onChange({ quantity: e.target.value })
  }

  const removeDetail = () => {
    const action = removeNewMealEventDetail({ index: index })
    dispatch(action)
  }

  return (
    <div className='form-detail'>
      <HSeparator />
      <div className='item-select mg-bottom'>
        <div className='select-box'>
          <Select
            isSearchable={true}
            onChange={onItemChange}
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
        <div className='input'>
          <input
            value={detail.quantity}
            onChange={onQuantityChange}
            placeholder={quantity}
            size='12'
          />
        </div>
        <div className='unit-select'>
          <UnitSelect
            detail={detail}
            onChange={onChange}
            units={units}
          />
        </div>
      </div>
    </div>
  )
}
