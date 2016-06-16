import { PLACE_CHIP } from '../constants/ActionTypes';

export function placeChip(value, day, hour) {
  return {
    type: PLACE_CHIP,
    value: value,
    day: day,
    hour: hour
  };
}
