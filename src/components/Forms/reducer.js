const newGenericDetail = {
  typeId: '',
  quantity: '',
}

const newLogDetail = {
  rating: '',
  typeId: '',
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
    logEvent: {
      eventTime: new Date(),
      narrative: '',
      details: [
        {...newLogDetail},
      ]
    },
    mealEvent: {
      eventTime: new Date(),
      details: [
        {...newVictualDetail}
      ]
    },
    snackEvent: {
      eventTime: new Date(),
      ...newVictualDetail,
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
  case "forms/items/REFRESH":
    return {
      ...state,
      isFetched: false,
    }
  case 'forms/log/new/ADD_DETAIL':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        logEvent: {
          ...state.newEvents.logEvent,
          details: [
            ...state.newEvents.logEvent.details,
            {...newLogDetail},
          ]
        }
      }
    }
  case 'forms/log/new/EDIT_EVENT':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        logEvent: {
          ...state.newEvents.logEvent,
          ...action.payload.event,
          details: state.newEvents.logEvent.details.map((detail, index) => (
            index === action.payload.index ? { ...detail, ...action.payload.detail } : detail
          ))
        }
      }
    }
  case 'forms/log/new/EVENT_CREATE':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        logEvent: {...initialState.newEvents.logEvent},
      }
    }
  case 'forms/log/new/REMOVE_DETAIL':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        logEvent: {
          ...state.newEvents.logEvent,
          details: state.newEvents.logEvent.details.filter((_detail, index) => index !== action.payload),
        }
      }
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
  case 'forms/meal/new/EVENT_CREATE':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        mealEvent: {...initialState.newEvents.mealEvent}
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
  case 'forms/snack/new/EDIT_EVENT':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        snackEvent: {
          ...state.newEvents.snackEvent,
          ...action.payload,
        }
      }
    }
  case 'forms/snack/new/EVENT_CREATE':
    return {
      ...state,
      newEvents: {
        ...state.newEvents,
        snackEvent: {...initialState.newEvents.snackEvent}
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
