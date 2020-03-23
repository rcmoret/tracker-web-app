import React from 'react'

import DatePicker from 'react-datepicker'

import { editNewMedicationEvent } from '../actions'
import { titleize } from '../../../locales/functions'
import { shared, medication as copy } from '../../../locales/copy'
import { config } from '../../../locales/config'

import Detail from './Detail'

const { event } = copy
const { caption, format } = shared.time
const { dateFormat, pickerInterval } = config.time

export default ({ dispatch, newEvent, types }) => {
  const editDateTime = datetime => {
    const action = editNewMedicationEvent({ event: { eventTime: datetime  } })
    dispatch(action)
  }
  const displayTime = newEvent.eventTime === '' ? new Date() : newEvent.eventTime

  return(
    <div className='medication-event-form'>
      <h2>{titleize(event)}</h2>
      <div>
        <strong>{titleize(caption)}</strong>
      </div>
      <DatePicker
        selected={displayTime}
        onChange={editDateTime}
        showTimeSelect
        timeFormat={format}
        timeIntervals={pickerInterval}
        timeCaption={titleize(caption)}
        dateFormat={dateFormat}
      />
      {newEvent.details.map((detail, index) => (
        <Detail
          key={index}
          index={index}
          detail={detail}
          dispatch={dispatch}
          types={types}
        />
      ))}
    </div>
  )
}
