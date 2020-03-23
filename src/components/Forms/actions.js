export const formItemsFetched = (payload) => (
  { type: "forms/items/FETCHED", payload: payload.data }
)

export const addNewMedicationEventDetail = () => (
  { type: 'forms/medication/new/ADD_DETAIL', payload: null }
)

export const editNewMedicationEvent = (payload) => (
  { type: 'forms/medication/new/EDIT_EVENT', payload: payload }
)
