import { connect } from 'react-redux';
import styles from './CalendarInfoBox.scss';
import { CELL, EMPLOYEE, ACTION, CHIP } from '../constants/InfoBoxTypes';
import { DAYS } from '../constants/Settings';
import { getHourLabel, hourPlus1 } from '../utils/time';

const Cell = ({day, hour}) => (
	<div className="cell">
		<div>{DAYS[day]} {getHourLabel(hour)}-{getHourLabel(hourPlus1(hour))}</div>
	</div>
);

const Employee = data => (
	<div className="employee">
		Employee
	</div>
);

const Action = ({name, description}) => (
	<div className="action">
		<div className="title">{name}</div>
		<div className="description">{description}</div>
	</div>
);

const Chip = data => (
	<div className="chip">
		Chip
	</div>
);

function renderTemplate(infoType, data) {
	switch(infoType) {
		case CELL: return Cell(data);
		case EMPLOYEE: return Employee(data);
		case ACTION: return Action(data);
		case CHIP: return Chip(data);
		default: return '';
	}
}

const CalendarInfoBox = ({infoType, data}) => (
	<div className={styles.container}>
		{renderTemplate(infoType, data)}
	</div>
);

export default connect(
  state => state.calendarInfoBox,
  {}
)(CalendarInfoBox);
