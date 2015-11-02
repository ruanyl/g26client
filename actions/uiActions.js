import request from 'superagent';

export const DAY_VIEW = 'DAY_VIEW';
export const MONTH_VIEW = 'MONTH_VIEW';
export const TOGGLE_ADD_VIEW = 'TOGGLE_ADD_VIEW';
export const DAY_DATA_RECEIVE = 'DAY_DATA_RECEIVE';
export const DAY_DATA_NOT_RECEIVE = 'DAY_DATA_NOT_RECEIVE';
export const EDIT_EVENT = 'EDIT_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
const API_ENDPOINT = 'http://localhost:3000';

function _dayViewAction() {
  return {
    type: DAY_VIEW
  };
}

function _dayDataReceiveAction(data) {
  return {
    type: DAY_DATA_RECEIVE,
    data
  };
}

function _dayDataNotReceiveAction() {
  return {
    type: DAY_DATA_NOT_RECEIVE
  };
}

export function monthViewAction() {
  return {
    type: MONTH_VIEW
  };
}

export function toggleAddViewAction() {
  return {
    type: TOGGLE_ADD_VIEW
  };
}

export function dayViewAction() {
  return dispatch => {
    dispatch(_dayViewAction());
    return request.get(API_ENDPOINT + '/event')
    .end(function(err, res) {
      if(res && res.status !== 'error') {
        dispatch(_dayDataReceiveAction(res.body));
      } else {
        dispatch(_dayDataNotReceiveAction());
      }
    });
  };
}

export function editEventAction(id) {
  return {
    type: EDIT_EVENT,
    id
  };
}

function _deleteEventAction(id) {
  return {
    type: DELETE_EVENT,
    id
  };
}

export function deleteEventAction(id) {
  return dispatch => {
    return request.del(API_ENDPOINT + '/event/' + id)
    .end(function(err, res) {
      if(res && res.status !== 'error') {
        dispatch(_deleteEventAction(id));
      }
    });
  };
}
