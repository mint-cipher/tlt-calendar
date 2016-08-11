import { Component } from 'react';
import { connect } from 'react-redux';
import ReserveIcon from './ReserveIcon';
import EmployeeCalendarIcon from './EmployeeCalendarIcon';
import styles from './ScheduleBank.scss';
import Dimensions from 'react-dimensions';
import { HOUR, HALF_HOUR } from '../constants/Constants';

const ICON_MARGIN = 3;
const WHOLE_COLS = 7;
const COLS = WHOLE_COLS + 0.5;  // Show half an extra column

class ScheduleBank extends Component {
	render() {
		const {containerWidth, employees, disabled} = this.props;
    const iconSize = Math.round((containerWidth - ((COLS - 1) * ICON_MARGIN * 2)) / COLS);
		return <div className={styles.container}>
			<div className="bank-row">
				<div style={{margin: ICON_MARGIN}}>
					<ReserveIcon size={iconSize} disabled={disabled} duration={HOUR} />
				</div>
				{_.map(employees, (employee, i) =>
					<div key={i} style={{margin: ICON_MARGIN}}>
						<EmployeeCalendarIcon size={iconSize} value={employee} disabled={disabled} duration={HOUR} />
					</div>)}
			</div>
		</div>;
	}
}

const mapStateToProps = state => ({
	employees: state.employees
});

export default connect(
  mapStateToProps,
  {}
)(Dimensions()(ScheduleBank));