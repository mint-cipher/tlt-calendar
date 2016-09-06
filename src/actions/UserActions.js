import { DATA_PATH } from '../constants/Settings';
import { RECEIVE_USER, CHANGE_SETTINGS } from '../constants/ActionTypes';
import { fetch } from '../utils/api';

function receiveUser(json) {
  return {
    type: RECEIVE_USER,
    user: json
  }
}

export function fetchUser(netId) {
  return dispatch => {
    return fetch(`/users/${netId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}

export function fetchThisUser() {
  return dispatch => {
    return fetch('/user')
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}

export function changeSettings(newSettings) {
  return {
    type: CHANGE_SETTINGS,
    settings: newSettings
  }
}
