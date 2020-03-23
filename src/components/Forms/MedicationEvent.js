import React from 'react'

import DatePicker from 'react-datepicker'

import { editNewMedicationEvent } from './actions'
import { sortByName } from '../../functions/sortBy'

const copy = {
  medicationEvent: 'medictaion event',
  timeFormat: 'HH:mm',
  timeCaption: 'time'
}

const config = {
  time: {
    dateFormat: 'MMMM d, yyyy h:mm aa',
    pickerInterval: 5
  }
}


export default ({ dispatch, newEvent, types }) => {
  const editDateTime = datetime => {
    const action = editNewMedicationEvent({ eventTime: datetime })
    dispatch(action)
  }
  const displayTime = newEvent.eventTime === '' ? new Date() : newEvent.eventTime

  return(
    <div className='medication-event-form'>
      <h3>{copy.medicationEvent}</h3>
      <DatePicker
        selected={displayTime}
        onChange={editDateTime}
        showTimeSelect
        timeFormat={copy.timeFormat}
        timeIntervals={config.time.pickerInterval}
        timeCaption={copy.timeCaption}
        dateFormat={config.time.dateFormat}
      />
      <ul>
          {types.slice(0).sort(sortByName).map(type => (
            listItem(type)
          ))
          }
      </ul>
    </div>
  )
}

const listItem = (type) => (
  <li key={type.id}>name: <strong>{type.name}</strong> - unit: <strong>{type.unit.displayName}</strong></li>
)
