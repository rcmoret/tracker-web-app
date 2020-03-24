export const formItemsFetched = (payload) => (
  { type: "forms/items/FETCHED", payload: payload.data }
)

export const addNewMedicationEventDetail = () => (
  { type: 'forms/medication/new/ADD_DETAIL', payload: null }
)

export const editNewMedicationEvent = (payload) => (
  { type: 'forms/medication/new/EDIT_EVENT', payload: payload }
)

export const newMedicationEventCreate = (payload) => (
  { type: 'forms/medication/new/EVENT_CREATE', payload: payload }
)

export const removeNewMedicationEventDetail = (payload) => (
  { type: 'forms/medication/new/REMOVE_DETAIL', payload: payload }
)

export const addNewSupplementEventDetail = () => (
  { type: 'forms/supplement/new/ADD_DETAIL', payload: null }
)

export const editNewSupplementEvent = (payload) => (
  { type: 'forms/supplement/new/EDIT_EVENT', payload: payload }
)

export const newSupplementEventCreate = (payload) => (
  { type: 'forms/supplement/new/EVENT_CREATE', payload: payload }
)

export const removeNewSupplementEventDetail = (payload) => (
  { type: 'forms/supplement/new/REMOVE_DETAIL', payload: payload }
)
