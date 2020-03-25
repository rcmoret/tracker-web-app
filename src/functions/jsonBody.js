export const mealEventBody = eventObject => {
  const details = eventObject.details.map(detail => ({ item_id: detail.itemId, unit_id: detail.unitId, ...detail }))
  const newObject = { ...eventObject, event_time: eventObject.eventTime, details: details }

  return JSON.stringify(newObject)
}

export const mealEventBodyDecode = eventObject => (
  {
    ...eventObject,
    eventTime: eventObject.event_time,
    details: eventObject.details.map(detail => ({ typeId: detail.type_id, unitId: detail.unit_id, ...detail }))
  }
)

export const medicationEventBody = eventObject => {
  const details = eventObject.details.map(detail => ({ type_id: detail.typeId, ...detail }))
  const newObject = { ...eventObject, event_time: eventObject.eventTime, details: details }

  return JSON.stringify(newObject)
}

export const medicationEventBodyDecode = eventObject => (
  {
    ...eventObject,
    eventTime: eventObject.event_time,
    details: eventObject.details.map(detail => ({ typeId: detail.type_id, ...detail }))
  }
)

export const supplementEventBody = eventObject => {
  const details = eventObject.details.map(detail => ({ type_id: detail.typeId, ...detail }))
  const newObject = { ...eventObject, event_time: eventObject.eventTime, details: details }

  return JSON.stringify(newObject)
}

export const supplementEventBodyDecode = eventObject => (
  {
    ...eventObject,
    eventTime: eventObject.event_time,
    details: eventObject.details.map(detail => ({ typeId: detail.type_id, ...detail }))
  }
)
