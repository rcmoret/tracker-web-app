const newGenericDetail = {
  typeId: '',
  quantity: '',
}

const newVictualDetail = {
  itemId: '',
  quantity: '',
  unitId: '',
}

const initialState = {
  isFetched: false,
  items: {
    mealTypes: [],
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
      eventTime: new Date(),
      details: [
        {...newGenericDetail}
      ]
    },
    mealEvent: {
      eventTime: new Date(),
      details: [
        {...newVictualDetail}
      ]
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
  case 'forms/meal/new/ADD_DETAIL':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        mealEvent: {
          ...state.newEvents.mealEvent,
          details: [...state.newEvents.mealEvent.details, {...newVictualDetail}]
        }
      }
    }
  case 'forms/meal/new/EDIT_EVENT':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        mealEvent: {
          ...state.newEvents.mealEvent,
          ...action.payload.event,
          details: state.newEvents.mealEvent.details.map((detail, index) => (
            index === action.payload.index ? { ...detail, ...action.payload.detail } : detail
          ))
        }
      }
    }
  case 'forms/meal/new/REMOVE_DETAIL':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        mealEvent: {
          ...state.newEvents.mealEvent,
          details: state.newEvents.mealEvent.details.filter((detail, index) => index !== action.payload.index)
        }
      }
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
  case "forms/supplement/new/ADD_DETAIL":
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        supplementEvent: {
          ...state.newEvents.supplementEvent,
          details: [...state.newEvents.supplementEvent.details, {...newGenericDetail}]
        }
      }
    }
  case "forms/supplement/new/EDIT_EVENT":
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        supplementEvent: {
          ...state.newEvents.supplementEvent,
          ...action.payload.event,
          details: state.newEvents.supplementEvent.details.map((detail, index) => (
            index === action.payload.index ? { ...detail, ...action.payload.detail } : detail
          ))
        }
      }
    }
  case 'forms/supplement/new/EVENT_CREATE':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        supplementEvent: {...initialState.newEvents.supplementEvent},
      }
    }
  case "forms/supplement/new/REMOVE_DETAIL":
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        supplementEvent: {
          ...state.newEvents.supplementEvent,
          details: state.newEvents.supplementEvent.details.filter((detail, index) => index !== action.payload.index)
        }
      }
    }
    default:
      return state
  }
}
