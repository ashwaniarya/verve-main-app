import { combineReducers } from 'redux'
import {events,selectedEvents} from './reducer_events'
const rootReducer = combineReducers({
  events,
  selectedEvents
});

export default rootReducer;
