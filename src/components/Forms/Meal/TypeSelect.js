import React from 'react'

import Select from 'react-select'

import { titleize } from '../../../locales/functions'
import findOrDefault from '../../../functions/findOrDefault'
import { editNewMealEvent } from '../actions'

export default ({ dispatch, event, types }) => {
  const options = types.map(type => (
    { value: type.id, label: titleize(type.name) }
  ))

  const value = findOrDefault(options, option => option.value === event.typeId, null)

  const onChange = (option) => {
    const action = editNewMealEvent({ event: { typeId: option.value } })
    dispatch(action)
  }

  return (
    <div className='meal-event-form bg-green-type-select mg-bottom'>
      <Select
        onChange={onChange}
        options={options}
        value={value}
      />
    </div>
  )
}
