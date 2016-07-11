require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { DATA_PATH } from '../constants/Settings';
import { RECEIVE_SCHEDULES, RECEIVE_SCHEDULE, PLACE_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';

function receiveSchedules(json) {
  return {
    type: RECEIVE_SCHEDULES,
    schedules: json
  }
}

function receiveSchedule(json) {
  return {
    type: RECEIVE_SCHEDULE,
    schedule: json
  }
}

export function fetchSchedules() {
  return dispatch => {
    return fetch(`${DATA_PATH}/schedules.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveSchedules(json)))
  }
}

export function fetchSchedule(location) {
  return dispatch => {
    return fetch(`${DATA_PATH}/schedules/${location}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveSchedule(json)))
  }
}

export function placeItem(location, item) {
  return _.assign({}, item, {type: PLACE_ITEM, location: location});
}

export function removeItem(locatation, item) {
  return _.assign({}, item, {type: REMOVE_ITEM, location: location});
}
