import React from 'react'
import { connect } from 'react-redux'

import { getItems } from './graphQueries'
import { formItemsFetched } from './actions'

import LogEvent from './Log/Event'
import MealEvent from './Meal/Event'
import MedicationEvent from './Medication/Event'
import SnackEvent from './Snack/Event'
import SupplementEvent from './Supplement/Event'

const Body = (props) => {
  const {
    dispatch,
    formType,
    isFetched,
    items,
    logEvent,
    mealEvent,
    medicationEvent,
    snackEvent,
    supplementEvent,
  } = props

  if (!isFetched) {
    const onSuccess = (result) => dispatch(formItemsFetched(result))
    getItems(onSuccess)
  }

  const FormElementFinder = () => {
    switch (formType) {
    case 'log':
      return (
        <LogEvent
          dispatch={dispatch}
          newEvent={logEvent}
          types={items.logDetailTypes}
        />
      )
    case 'meal':
      return (
        <MealEvent
          dispatch={dispatch}
          newEvent={mealEvent}
          items={items.victualItems}
          types={items.mealTypes}
          units={items.units}
        />
      )
    case 'medication':
      return (
        <MedicationEvent
          dispatch={dispatch}
          newEvent={medicationEvent}
          types={items.medicationTypes}
        />
      )
    case 'snack':
      return (
        <SnackEvent
          dispatch={dispatch}
          newEvent={snackEvent}
          items={items.victualItems}
          units={items.units}
        />
      )
    case 'supplement':
      return (
        <SupplementEvent
          dispatch={dispatch}
          newEvent={supplementEvent}
          types={items.supplementTypes}
        />
      )
    default:
      return null
    }
  }

  const FormElement = FormElementFinder()

  return (
    <div>
      <div className='left'>
        <div>
          {FormElement}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {
    logEvent,
    mealEvent,
    medicationEvent,
    snackEvent,
    supplementEvent,
  } = state.forms.newEvents

  const {
    isFetched,
    items,
  } = state.forms

  const { formType } = ownProps.match.params

  return {
    formType: formType,
    isFetched: isFetched,
    items:  items,
    logEvent: logEvent,
    mealEvent: mealEvent,
    medicationEvent: medicationEvent,
    snackEvent: snackEvent,
    supplementEvent: supplementEvent,
  }
}
export default connect(mapStateToProps)(Body);
