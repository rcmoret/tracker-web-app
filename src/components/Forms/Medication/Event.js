import React from 'react'

import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import HSeparator from '../../shared/HSeparator'

import { addNewMedicationEventDetail, editNewMedicationEvent } from '../actions'
import { titleize } from '../../../locales/functions'
import { shared, medication as copy } from '../../../locales/copy'
import { config } from '../../../locales/config'

import Detail from './Detail'

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

  const displayTime = newEvent.eventTime === '' ? new Date() : newEvent.eventTime

  const addDetail = () => {
    dispatch(addNewMedicationEventDetail())
  }

  return(
    <div className='medication-event-form'>
      <h2>{titleize(event)}</h2>
      <div className='mg-bottom'>
        <strong>{titleize(caption)}</strong>
      </div>
      <div className='datepicker'>
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
      <Link
        to={octothorp}
        onClick={addDetail}
      >
        <i className='fas fa-plus-circle'></i>
        {titleize(shared.addDetail)}
      </Link>
    </div>
  )
}
