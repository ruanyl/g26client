import {
  DAY_VIEW,
  MONTH_VIEW,
  TOGGLE_ADD_VIEW,
  SAVING,
  SAVED,
  NOT_SAVED
} from '../actions/uiActions';

const viewState = {
  view: 'day',
  showAdd: false,
  isSaving: false,
  isSaved: true
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
      return Object.assign({}, state, {isSaved: true});
    case NOT_SAVED:
      return Object.assign({}, state, {isSaved: false});
    default:
      return state;
  }
}
