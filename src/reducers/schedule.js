import { SET_LOCATION, RECEIVE_SCHEDULE, PLACE_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';
import * as calendar from '../utils/calendar';
import { placeItem } from '../utils/schedule';

const initialState = {
  shifts: {},
  location: undefined
};

export default function schedule(state=initialState, action) {
  switch (action.type) {
    case SET_LOCATION: return {...state, location: action.location};
    case RECEIVE_SCHEDULE: return {...state, shifts: action.schedule};
    case PLACE_ITEM: return {...state, shifts: placeItem(state.shifts, action, {maxItems: state.location.coverage})};
    case REMOVE_ITEM: return {...state, shifts: calendar.removeItem(state.shifts, action)};
    default: return state;
  }
}