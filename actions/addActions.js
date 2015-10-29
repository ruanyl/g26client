import request from 'superagent';
import moment from 'moment';

export const ADD_TITLE = 'ADD_TITLE';
export const ADD_CONTENT = 'ADD_CONTENT';
export const ADD_PRIORITY = 'ADD_PRIORITY';
export const ADD_START_DATE = 'ADD_START_DATE';
export const ADD_START_TIME = 'ADD_START_TIME';
export const ADD_END_DATE = 'ADD_END_DATE';
export const ADD_END_TIME = 'ADD_END_TIME';
export const SAVE = 'SAVE';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const NOT_SAVED = 'NOT_SAVED';
const API_ENDPOINT = 'http://localhost:3000';

export function addTitleAction(title) {
  return {
    type: ADD_TITLE,
    title
  };
}

export function addContentAction(content) {
  return {
    type: ADD_CONTENT,
    content
  };
}

export function addPriorityAction(priority) {
  return {
    type: ADD_PRIORITY,
    priority
  };
}

export function addStartDateAction(startDate) {
  return {
    type: ADD_START_DATE,
    startDate
  };
}

export function addStartTimeAction(startTime) {
  return {
    type: ADD_START_TIME,
    startTime
  };
}

export function addEndDateAction(endDate) {
  return {
    type: ADD_END_DATE,
    endDate
  };
}

export function addEndTimeAction(endTime) {
  return {
    type: ADD_END_TIME,
    endTime
  };
}

function _savingAction() {
  return {
    type: SAVING
  };
}

function _savedAction() {
  return {
    type: SAVED
  };
}

function _notSavedAction() {
  return {
    type: NOT_SAVED
  };
}

export function saveAction(data) {
  let start = moment(data.startDate).format('YYYY-MM-DD ') +
    moment(data.startTime).format('HH:mm:ss');
  let end = moment(data.endDate).format('YYYY-MM-DD ') +
    moment(data.endTime).format('HH:mm:ss');
  start = moment(start).valueOf();
  end = moment(end).valueOf();
  data = Object.assign({}, data, {start: start, end: end});
  return dispatch => {
    dispatch(_savingAction());
    return request.post(API_ENDPOINT + '/event')
    .send(data)
    .end(function(err, res) {
      if(res && res.body.status !== 'error') {
        dispatch(_savedAction());
      } else {
        dispatch(_notSavedAction());
      }
    });
  };
}
