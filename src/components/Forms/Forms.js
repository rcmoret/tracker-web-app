// now - 11 budget
// 11-12 clean the house
// 12:30-1 food and interview followup
// 1:00 - 1:30 budget app updates

import React from 'react'
import { connect } from 'react-redux'

import { getItems } from './graphQueries'
import { formItemsFetched } from './actions'

import MealEvent from './MealEvent'
import MedicationEvent from './Medication/Event'
import SupplementEvent from './SupplementEvent'

const Body = (props) => {
  const {
    dispatch,
    isFetched,
    items,
    medicationEvent
  } = props

  if (!isFetched) {
    const onSuccess = (result) => dispatch(formItemsFetched(result))
    getItems(onSuccess)
  }

  return (
    <div>
      <MedicationEvent
        dispatch={dispatch}
        newEvent={medicationEvent}
        types={items.medicationTypes}
      />
      <SupplementEvent types={items.supplementTypes} />
      <MealEvent types={items.victualTypes} items={items.victualItems} />
    </div>
  )
}

// const FormSelector =

const mapStateToProps = (state) => {
  const {
    medicationEvent,
  } = state.forms.newEvents

  const {
    isFetched,
    items,
  } = state.forms

  return {
    isFetched: isFetched,
    items:  items,
    medicationEvent: medicationEvent
  }
}
export default connect(mapStateToProps)(Body);
