export const formItemsFetched = (payload) => (
  { type: "forms/items/FETCHED", payload: payload.data }
)

export const addNewMealEventDetail = () => (
  { type: 'forms/meal/new/ADD_DETAIL', payload: null }
)

export const editNewMealEvent = (payload) => (
  { type: 'forms/meal/new/EDIT_EVENT', payload: payload }
)

export const newMealEventCreate = (payload) => (
  { type: 'forms/meal/new/EVENT_CREATE', payload: payload }
)

export const removeNewMealEventDetail = (payload) => (
  { type: 'forms/meal/new/REMOVE_DETAIL', payload: payload }
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

export const editNewSnackEvent = (payload) => (
  { type: 'forms/snack/new/EDIT_EVENT', payload: payload }
)

export const newSnackEventCreate = (payload) => (
  { type: 'forms/snack/new/EVENT_CREATE', payload: payload }
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
