import React from 'react'

import AddDetail from './AddDetail'
import DatePicker from 'react-datepicker'
import Detail from './Detail'
import HSeparator from '../../shared/HSeparator'
import { Link } from 'react-router-dom'

import ApiUrlBuilder from '../../../functions/ApiUrlBuilder'
import { config } from '../../../locales/config'
import { editNewLogEvent, newLogEventCreate, removeNewLogEventDetail } from '../actions'
import { logEventBody } from '../../../functions/jsonBody'
import { post } from '../../../functions/RestClient'
import { shared, log as copy } from '../../../locales/copy'
import { titleize } from '../../../locales/functions'

const {
  event,
  textareaPlacholder
} = copy

const {
  caption,
  format,
} = shared.time

const {
  octothorp,
} = shared

const {
  dateFormat,
  pickerInterval,
} = config.time

export default (props) => {
  const {
    dispatch,
    newEvent,
    types,
  } = props

  const {
    details,
    eventTime,
    narrative,
  } = newEvent


  const editLogEvent = (payload) => {
    const action = editNewLogEvent(payload)
    dispatch(action)
  }

  const removeDetail = (index) => {
    const action = removeNewLogEventDetail(index)
    dispatch(action)
  }

  const editDateTime = datetime => editLogEvent({ event: { eventTime: datetime } })

  const refreshDateTime = () => editDateTime(new Date())

  const onNarrativeChange = e => editLogEvent({ event: { narrative: e.target.value } })

  const onSubmit = () => {
    const body = logEventBody(newEvent)
    const url = ApiUrlBuilder(['logs'])
    const onSuccess = data => {
      const action = newLogEventCreate(data)
      dispatch(action)
    }
    post(url, body, onSuccess)
  }

  return(
    <div className='event-form mg-bottom'>
      <h2>{titleize(event)}</h2>
      <div className='mg-bottom'>
        <strong>{titleize(caption)}</strong>
      </div>
      <div className='datepicker mg-bottom'>
        <div className='input'>
          <DatePicker
            selected={eventTime}
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
      <div className='mg-bottom'>
        <textarea
          placeholder={textareaPlacholder}
          onChange={onNarrativeChange}
          value={narrative}
        />
      </div>
      {details.map((detail, index) => (
        <Detail
          key={index}
          index={index}
          detail={detail}
          editLogEvent={editLogEvent}
          removeDetail={removeDetail}
          types={types}
        />
      ))}
      <AddDetail
        details={details}
        dispatch={dispatch}
        types={types}
      />
      <HSeparator />
      <button type={shared.submitText} onClick={onSubmit}>
        {titleize(shared.submitText)}
      </button>
    </div>
  )
}
