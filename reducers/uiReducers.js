import {
  DAY_VIEW,
  MONTH_VIEW,
  TOGGLE_ADD_VIEW,
  DAY_DATA_RECEIVE,
  DAY_DATA_NOT_RECEIVE
} from '../actions/uiActions';
import {
  SAVING,
  SAVED,
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
      return Object.assign({}, state, {isSaving: false, isSaved: true});
    case NOT_SAVED:
      return Object.assign({}, state, {isSaving: false, isSaved: false});
    case DAY_DATA_NOT_RECEIVE:
      return Object.assign({}, state, {dataError: true});
    case DAY_DATA_RECEIVE:
      return Object.assign({}, state, {dataError: false, data: action.data});
    default:
      return state;
  }
}
