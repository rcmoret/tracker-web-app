export const logEventBody = eventObject => {
  const details = eventObject.details.map(detail => ({ type_id: detail.typeId, ...detail }))
  const newObject = { ...eventObject, event_time: eventObject.eventTime, details: details }

  return JSON.stringify(newObject)
}

export const logEventBodyDecode = eventObject => (
  {
    ...eventObject,
    eventTime: eventObject.event_time,
    details: eventObject.details.map(detail => ({ typeId: detail.type_id, ...detail })),
  }
)

export const mealEventBody = eventObject => {
  const details = eventObject.details.map(detail => ({ item_id: detail.itemId, unit_id: detail.unitId, ...detail }))
  const newObject = { ...eventObject, event_time: eventObject.eventTime, type_id: eventObject.typeId, details: details }

  return JSON.stringify(newObject)
}

export const mealEventBodyDecode = eventObject => (
  {
    ...eventObject,
    eventTime: eventObject.event_time,
    typeId: eventObject.type_id,
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

export const snackEventBody = eventObject => (
  JSON.stringify({
    ...eventObject,
    event_time: eventObject.eventTime,
    item_id: eventObject.itemId,
    unit_id: eventObject.unitId,
  })
)

export const snackEventBodyDecode = eventObject => (
  {
    ...eventObject,
    eventTime: eventObject.event_time,
    itemId: eventObject.item_id,
    unitId: eventObject.unit_id,
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
