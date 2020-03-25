import React from 'react'

import Select from 'react-select'

import { titleize } from '../../../locales/functions'
import { editNewMealEvent } from '../actions'

export default ({ dispatch, event, types }) => {
  const options = types.map(type => (
    { value: type.id, label: titleize(type.name) }
  ))

  const value = options.find(option => option.value === event.typeId)

  const onChange = (option) => {
    const action = editNewMealEvent({ event: { typeId: option.value } })
    dispatch(action)
  }

  return (
    <div className='meal-event-form-type-select mg-bottom'>
      <Select
        onChange={onChange}
        options={options}
        value={value}
      />
    </div>
  )
}
