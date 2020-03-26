import React from 'react'
import { connect } from 'react-redux'

import { getItems } from './graphQueries'
import { formItemsFetched } from './actions'

import MealEvent from './Meal/Event'
import MedicationEvent from './Medication/Event'
import SnackEvent from './Snack/Event'
import SupplementEvent from './Supplement/Event'

const Body = (props) => {
  const {
    dispatch,
    isFetched,
    items,
    mealEvent,
    medicationEvent,
    snackEvent,
    supplementEvent,
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
      <SupplementEvent
        dispatch={dispatch}
        newEvent={supplementEvent}
        types={items.supplementTypes}
      />
      <MealEvent
        dispatch={dispatch}
        newEvent={mealEvent}
        items={items.victualItems}
        types={items.mealTypes}
        units={items.units}
      />
      <SnackEvent
        dispatch={dispatch}
        newEvent={snackEvent}
        items={items.victualItems}
        units={items.units}
      />
    </div>
  )
}

// const FormSelector =

const mapStateToProps = (state) => {
  const {
    mealEvent,
    medicationEvent,
    snackEvent,
    supplementEvent,
  } = state.forms.newEvents

  const {
    isFetched,
    items,
  } = state.forms

  return {
    isFetched: isFetched,
    items:  items,
    mealEvent: mealEvent,
    medicationEvent: medicationEvent,
    snackEvent: snackEvent,
    supplementEvent: supplementEvent,
  }
}
export default connect(mapStateToProps)(Body);
