import {
  DAY_VIEW,
  MONTH_VIEW,
  TOGGLE_ADD_VIEW,
  DAY_DATA_RECEIVE,
  DAY_DATA_NOT_RECEIVE,
  DELETE_EVENT,
  EDIT_EVENT
} from '../actions/uiActions';
import {
  SAVING,
  SAVED,
  UPDATED,
  NOT_SAVED
} from '../actions/addActions';

const viewState = {
  view: 'day',
  showAdd: false,
  isSaving: false,
  isSaved: true,
  dataError: false,
  data: []
};

export function uiState(state = viewState, action) {
  switch(action.type) {
    case DAY_VIEW:
      return Object.assign({}, state, {view: 'day'});
    case MONTH_VIEW:
      return Object.assign({}, state, {view: 'month'});
    case TOGGLE_ADD_VIEW:
      const showAdd = !state.showAdd;
      return Object.assign({}, state, {showAdd: showAdd});
    case SAVING:
      return Object.assign({}, state, {isSaving: true});
    case SAVED:
      let savedData = Object.assign({}, state, {isSaving: false, isSaved: true});
      savedData.data.push(action.event);
      return savedData;
    case UPDATED:
      let updatedData = Object.assign({}, state, {isSaving: false, isSaved: true});
      updatedData.data = updatedData.data.map(function(event) {
        let result = event._id === action.event._id ? action.event : event;
        return result;
      });
      return updatedData;
    case NOT_SAVED:
      return Object.assign({}, state, {isSaving: false, isSaved: false});
    case DAY_DATA_NOT_RECEIVE:
      return Object.assign({}, state, {dataError: true});
    case DAY_DATA_RECEIVE:
      return Object.assign({}, state, {dataError: false, data: action.data});
    case DELETE_EVENT:
      let data = state.data.filter(function(event) {
        return !(action.id === event._id);
      });
      return Object.assign({}, state, {data: data});
    case EDIT_EVENT:
      return Object.assign({}, state, {showAdd: true});
    default:
      return state;
  }
}
