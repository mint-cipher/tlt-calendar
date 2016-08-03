import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReserveIcon from './ReserveIcon';
import EmployeeCalendarIcon from './EmployeeCalendarIcon';
import _ from 'lodash';
import CalendarGrid from './CalendarGrid';
import * as ScheduleActions from '../actions/ScheduleActions';
import * as InfoBoxActions from '../actions/CalendarInfoBoxActions';
import { ADMIN_SCHEDULE_CELL } from '../constants/InfoBoxTypes';
import { RESERVED } from '../constants/Constants';
import styles from './ScheduleGrid.scss';

const getComponentClass = item => item.value === RESERVED ? ReserveIcon : EmployeeCalendarIcon;

const popover = ({items}) => (
  <div>
    Booo
  </div>
);

const mapStateToProps = state => {
  const coverage = state.locations && state.schedule.location ? _.find(state.locations, loc => loc.id === state.schedule.location).coverage : 1;
  return {
    items: state.schedule.shifts || {},
    coverage: coverage,
    cellComponent: item => getComponentClass(item)(item)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const scheduleActions = bindActionCreators(ScheduleActions, dispatch);
  const infoBoxActions = bindActionCreators(InfoBoxActions, dispatch);
  return {
    placeItem: scheduleActions.placeItem,
    removeItem:scheduleActions.removeItem,
    fillInfoBox: _.bind(infoBoxActions.fillInfoBox, {}, ADMIN_SCHEDULE_CELL),
    clearInfoBox: infoBoxActions.clearInfoBox
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {coverage} = stateProps;
  return {
    popover: coverage > 1 ? popover : undefined,
    shouldShowPopover: cellItems => coverage && _.some(cellItems, item => item.value !== RESERVED),
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarGrid);
