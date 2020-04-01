import React from 'react'
import Select from 'react-select'

import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import HSeparator from '../../shared/HSeparator'

import ApiUrlBuilder from '../../../functions/ApiUrlBuilder'
import {
  editNewSnackEvent,
  newSnackEventCreate,
} from '../actions'
import { post } from '../../../functions/RestClient'
import { snackEventBody } from '../../../functions/jsonBody'
import { sortBy } from '../../../functions/sortBy'
import { titleize } from '../../../locales/functions'

import { shared, snack as copy } from '../../../locales/copy'
import { config } from '../../../locales/config'

const {
  event,
  typePlaceholder,
} = copy

const {
  octothorp,
  submitText,
} = shared

const {
  caption,
  format,
} = shared.time

const {
  inputSize
} = config.quantity

const {
  dateFormat,
  pickerInterval,
} = config.time

export default ({ dispatch, items, newEvent, units }) => {
  const {
    itemId,
    quantity,
    unitId,
  } = newEvent

  const editDateTime = datetime => {
    const action = editNewSnackEvent({ eventTime: datetime  })
    dispatch(action)
  }

  const refreshDateTime = () => {
    const action = editNewSnackEvent({ eventTime: new Date() })
    dispatch(action)
  }

  const onChange = (attributes) => {
    const action = editNewSnackEvent(attributes)
    dispatch(action)
  }

  const onSubmit = () => {
    const body = snackEventBody(newEvent)
    const url = ApiUrlBuilder(['snacks'])
    const onSuccess = data => {
      const action = newSnackEventCreate(data)
      dispatch(action)
    }
    post(url, body, onSuccess)
  }

  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value })
  }

  return(
    <div className='event-form mg-bottom'>
      <h2>{titleize(event)}</h2>
      <div className='datepicker'>
        <div className='input'>
          <DatePicker
            selected={newEvent.eventTime}
            onChange={editDateTime}
            showTimeSelect
            timeFormat={format}
            timeIntervals={pickerInterval}
            timeCaption={titleize(caption)}
            dateFormat={dateFormat}
          />
        </div>
        <div className='sync'>
          <Link
            className='fas fa-sync'
            to={octothorp}
            onClick={refreshDateTime}
          />
        </div>
      </div>
      <div className='form-detail'>
        <HSeparator />
        <div className='item-select mg-bottom'>
          <div className='select-box'>
            <ItemSelect
              items={items}
              itemId={itemId}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={shared.quantity}>
          <div className='input'>
            <input
              value={quantity}
              name={shared.quantity}
              onChange={handleChange}
              placeholder={shared.quantity}
              size={inputSize}
            />
          </div>
          <div className='unit-select'>
            <UnitSelect
              onChange={onChange}
              unitId={unitId}
              units={units}
            />
          </div>
        </div>
      </div>
      <HSeparator />
      <button type={submitText} onClick={onSubmit}>
        {titleize(submitText)}
      </button>
    </div>
  )
}

const ItemSelect = ({ items, itemId, onChange }) => {
  const options = items
    .filter(item => item.type.name !== 'condiment')
    .sort(sortBy('name'))
    .map(item => (
      { label: titleize(item.name), value: item.id }
    ))

  const value = options.find(option => option.value === itemId)

  const onItemChange = option => onChange({ itemId: option.value })

  return(
    <Select
      isSearchable={true}
      onChange={onItemChange}
      options={options}
      placeholder={typePlaceholder}
      value={value}
    />
  )
}

const UnitSelect = ({ onChange, unitId, units }) => {
  const options = units.map(unit => (
    { label: unit.name, value: unit.id }
  )).sort(sortBy('label'))

  const value = options.find(option => option.value === unitId)

  const onSelect = option => onChange({ unitId: option.value })

  return(
    <Select
      onChange={onSelect}
      options={options}
      value={value}
    />
  )
}
