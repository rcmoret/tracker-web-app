const newGenericDetail = {
  typeId: '',
  quantity: ''
}

const initialState = {
  isFetched: false,
  items: {
    medicationTypes: [],
    supplementTypes: [],
    victualItems: [],
    victualTypes: [],
    logDetailTypes: [],
    units: []
  },
  newEvents: {
    medicationEvent: {
      eventTime: new Date(),
      details: [
        {...newGenericDetail}
      ]
    },
    supplementEvent: {
      eventTime: '',
      details: [
        {...newGenericDetail}
      ]
    },
    mealEvent: {
      eventTime: '',
      details: []
    },
    snackEvent: {
      eventTime: '',
      victualItemId: '',
      unitId: '',
      quantity: ''
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case "forms/items/FETCHED":
    return {
      ...state,
      items: action.payload,
      isFetched: true
    }
  case "forms/medication/new/ADD_DETAIL":
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        medicationEvent: {
          ...state.newEvents.medicationEvent,
          details: [...state.newEvents.medicationEvent.details, {...newGenericDetail}]
        }
      }
    }
  case "forms/medication/new/EDIT_EVENT":
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        medicationEvent: {
          ...state.newEvents.medicationEvent,
          ...action.payload.event,
          details: state.newEvents.medicationEvent.details.map((detail, index) => (
            index === action.payload.index ? { ...detail, ...action.payload.detail } : detail
          ))
        }
      }
    }
  case 'forms/medication/new/EVENT_CREATE':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        medicationEvent: {...initialState.newEvents.medicationEvent},
      }
    }
  case "forms/medication/new/REMOVE_DETAIL":
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        medicationEvent: {
          ...state.newEvents.medicationEvent,
          details: state.newEvents.medicationEvent.details.filter((detail, index) => index !== action.payload.index)
        }
      }
    }
  case "form/supplement/new/ADD_NEW_DETAIL":
      return {
        ...state,
        forms: {
          ...state.forms,
          supplementEvent: {
            ...state.forms.supplementEvent,
            details: [
              ...state.forms.supplementEvent,
              {...newGenericDetail}
            ]
          }
        }
      }
    default:
      return state
  }
}
