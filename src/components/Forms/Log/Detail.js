import React from 'react'
import Select from 'react-select'

import HSeparator from '../../shared/HSeparator'
import { Link } from 'react-router-dom'

import { config } from '../../../locales/config'
import findOrDefault from '../../../functions/findOrDefault'
import { shared, log as copy } from '../../../locales/copy'

const {
  octothorp,
} = shared

const {
  quantity,
  typePlaceholder,
} = copy

const {
  inputSize
} = config.rating

export default (props) => {
  const {
    editLogEvent,
    index,
    detail,
    removeDetail,
    types,
  } = props

  const onChange = payload => {
    editLogEvent({ index: index, detail: payload })
  }

  const onTypeChange = option => onChange({ typeId: option.value })
  const onRatingChange = e => onChange({ rating: e.target.value })

  const options = types.map(type => (
    { label: type.description, value: type.id }
  ))

  const value = findOrDefault(options, option => option.value === detail.typeId, null)

  const onClick = () => removeDetail(index)

  return (
    <div className='form-detail'>
      <HSeparator />
      <div className={`${quantity} mg-bottom`}>
        <div className='detail-select'>
          <Select
            isSearchable={true}
            onChange={onTypeChange}
            options={options}
            placeholder={typePlaceholder}
            value={value}
          />
        </div>
        <div className='input'>
          <input
            value={detail.quantity}
            onChange={onRatingChange}
            placeholder={quantity}
            size={inputSize}
          />
        </div>
        <div className='close'>
          <Link
            to={octothorp}
            className='far fa-times-circle'
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}
