
import _ from 'lodash'
import axios from 'axios'
export const FETCH_EVENTS = "FETCH_EVENTS"
export const SELECT_EVENTS = "SELECT_EVENTS"
export const SELECT_EVENT = "SELECT_EVENT"
const url = 'https://verve2k18.herokuapp.com'

export function fetchEvents(){
  console.log("FETCH EVENTS IS CALLED");
  const request = axios.get(`${url}/getEvents`)

  return (dispatch)=>{

    request.then((response=>{
      dispatch({
        type:FETCH_EVENTS,
        payload:response})
    }))

  }
}

export function selectEvents(events,type){
  const pickedEvents = _.filter(events,(event)=>{

    if(event.type===type) return event
  })

  return (dispatch)=>{
      dispatch({
        type:SELECT_EVENTS,
        payload:pickedEvents})


  }
}

export function selectEvent(id){
  return (dispatch)=>{
    dispatch({
      type:SELECT_EVENT,
      payload:id
    })
  }
}
