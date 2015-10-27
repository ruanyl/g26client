import fetch from 'isomorphic-fetch';

export const DAY_VIEW = 'DAY_VIEW';
export const MONTH_VIEW = 'MONTH_VIEW';
export const TOGGLE_ADD_VIEW = 'TOGGLE_ADD_VIEW';

export function dayViewAction() {
  return {
    type: DAY_VIEW
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
