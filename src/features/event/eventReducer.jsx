import { createReducer } from '../../app/common/util/reducerUtil'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENTS } from './eventConstants'

 const initialState = [];

export const createEvent = (state, payload) => {
    console.log("this is createEvent from event Reducer")
    return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
  console.log("this is updateEvent from event Reducer")
  console.log(payload.event.id)
    return [
        ...state.filter(event => event.id !== payload.event.id),
        Object.assign({}, payload.event)
    ]
}

export const deleteEvent = (state, payload) => {
    return [...state.filter(event => event !== payload.eventId)]
}

export const fetchEvents = (state, payload) => {
  return payload.events
}

export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent,
    [FETCH_EVENTS]: fetchEvents
})