import {DAY_VIEW, MONTH_VIEW, TOGGLE_ADD_VIEW} from '../actions/actions';

const viewState = {
  view: 'day',
  showAdd: false
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
    default:
      return state;
  }
}
