import _ from 'lodash'
import { FETCH_EVENTS , SELECT_EVENTS , SELECT_EVENT} from './../actions'

export function events(state = [],action){
  switch(action.type){
    case FETCH_EVENTS:

              //var newState = _.mapKeys(action.payload.data.data,'_id')
              var newState = action.payload.data.data
                console.log(newState);
              return newState

    default: return state
  }
}

export function selectedEvents(state = {},action){
  switch(action.type){
    case SELECT_EVENTS:
              var newState = _.mapKeys(action.payload,'_id')
              console.log(newState);
              return newState
    default: return state
  }
}
