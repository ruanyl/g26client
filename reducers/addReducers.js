import {
  ADD_END_DATE,
  ADD_START_DATE,
  ADD_TITLE,
  ADD_CONTENT,
  ADD_PRIORITY,
  ADD_END_TIME,
  ADD_START_TIME,
  SAVED,
  UPDATED
} from '../actions/addActions';
import {
  TOGGLE_ADD_VIEW,
  EDIT_EVENT
} from '../actions/uiActions';

const addState = {
  _id: '',
  title: '',
  content: '',
  priority: 1,
  startDate: new Date(),
  startTime: new Date(),
  endDate: new Date(),
  endTime: new Date()
};

export function addData(state = addState, action) {
  switch(action.type) {
    case ADD_TITLE:
      return Object.assign({}, state, {title: action.title});
    case ADD_CONTENT:
      return Object.assign({}, state, {content: action.content});
    case ADD_PRIORITY:
      return Object.assign({}, state, {priority: action.priority});
    case ADD_START_DATE:
      return Object.assign({}, state, {startDate: action.startDate});
    case ADD_START_TIME:
      return Object.assign({}, state, {startTime: action.startTime});
    case ADD_END_DATE:
      return Object.assign({}, state, {endDate: action.endDate});
    case ADD_END_TIME:
      return Object.assign({}, state, {endTime: action.endTime});
    case SAVED:
      return Object.assign({}, state, addState);
    case UPDATED:
      return Object.assign({}, state, addState);
    case EDIT_EVENT:
      return Object.assign({}, state, action.event); // better that date and time be the same as event
    case TOGGLE_ADD_VIEW:
      return Object.assign({}, state, addState); // when click add button, reset the state of add view to defaul
    default:
      return state;
  }
}
