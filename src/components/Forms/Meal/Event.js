import React from 'react'

import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'

import HSeparator from '../../shared/HSeparator'
import MealTypeSelect from './TypeSelect'

import { addNewMealEventDetail, editNewMealEvent } from '../actions'
import { titleize } from '../../../locales/functions'
import { shared, meal as copy } from '../../../locales/copy'
import { config } from '../../../locales/config'

import Detail from './Detail'
import Submit from './Submit'

const {
  event,
} = copy

const {
  octothorp,
} = shared

const {
  caption,
  format,
} = shared.time

const {
  dateFormat,
  pickerInterval,
} = config.time

export default ({ dispatch, items, newEvent, types, units }) => {
  const editDateTime = datetime => {
    const action = editNewMealEvent({ event: { eventTime: datetime  } })
    dispatch(action)
  }

  const refreshDateTime = () => {
    const action = editNewMealEvent({ event: { eventTime: new Date() } })
    dispatch(action)
  }

  const addDetail = () => {
    dispatch(addNewMealEventDetail())
  }

  return(
    <div className='meal-event-form mg-bottom'>
      <h2>{titleize(event)}</h2>
      <div className='mg-bottom'>
        <strong>{titleize(caption)}</strong>
      </div>
      <div className='datepicker mg-bottom'>
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
      <MealTypeSelect
        dispatch={dispatch}
        event={newEvent}
        types={types}
      />
      {newEvent.details.map((detail, index) => (
        <Detail
          key={index}
          index={index}
          detail={detail}
          dispatch={dispatch}
          items={items}
          units={units}
        />
      ))}
      <HSeparator />
      <AddDetail
        details={newEvent.details}
        onClick={addDetail}
        items={items}
      />
      <HSeparator />
      <Submit
        dispatch={dispatch}
        event={newEvent}
      />
    </div>
  )
}

const AddDetail = (props) => {
  const {
    details,
    onClick,
    items,
  } = props

  if (details.length === items.length) {
    return null
  } else {
    return(
      <Link
        to={octothorp}
        onClick={onClick}
      >
        <i className='fas fa-plus-circle'></i>
        {titleize(shared.addDetail)}
      </Link>
    )
  }
}
