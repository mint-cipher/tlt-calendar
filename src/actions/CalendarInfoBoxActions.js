import { FILL_INFO_BOX, CLEAR_INFO_BOX } from '../constants/ActionTypes';

export function fillInfoBox(type, data) {
	return {
		type: FILL_INFO_BOX,
		infoType: type,
		data: data
	}
}

export function clearInfoBox() {
	return (dispatch, getState) => {
		if (getState().calendarInfoBox.infoType) {  // If it's not already cleared
			dispatch({
				type: CLEAR_INFO_BOX
			});
		}
	}
}
