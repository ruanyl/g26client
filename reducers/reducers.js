import {combineReducers} from 'redux';
import {uiState} from './uiReducers';
import {addData} from './addReducers';

export default combineReducers({
  uiState,
  addData
});
