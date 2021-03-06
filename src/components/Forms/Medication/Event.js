import React from 'react'

import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import HSeparator from '../../shared/HSeparator'

import { addNewMedicationEventDetail, editNewMedicationEvent } from '../actions'
import { titleize } from '../../../locales/functions'
import { shared, medication as copy } from '../../../locales/copy'
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

export default ({ dispatch, newEvent, types }) => {
  const editDateTime = datetime => {
    const action = editNewMedicationEvent({ event: { eventTime: datetime  } })
    dispatch(action)
  }

  const refreshDateTime = () => {
    const action = editNewMedicationEvent({ event: { eventTime: new Date() } })
    dispatch(action)
  }

  const displayTime = newEvent.eventTime === '' ? new Date() : newEvent.eventTime

  const addDetail = () => {
    dispatch(addNewMedicationEventDetail())
  }

  return(
    <div className='event-form bg-green mg-bottom'>
      <h2>{titleize(event)}</h2>
      <div className='mg-bottom'>
        <strong>{titleize(caption)}</strong>
      </div>
      <div className='datepicker'>
        <div className='input'>
          <DatePicker
            selected={displayTime}
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
      {newEvent.details.map((detail, index) => (
        <Detail
          key={index}
          index={index}
          detail={detail}
          dispatch={dispatch}
          types={types}
        />
      ))}
      <HSeparator />
      <AddDetail
        details={newEvent.details}
        onClick={addDetail}
        types={types}
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
    types,
  } = props

  if (details.length === types.length) {
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
