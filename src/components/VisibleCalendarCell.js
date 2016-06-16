import { connect } from 'react-redux';
import CalendarCell from './CalendarCell';
import { bindActionCreators } from 'redux';
import * as HourPreferencesActions from '../actions/HourPreferencesActions';

const mapStateToProps = state => {
  return state.hourPreferences;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(HourPreferencesActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarCell);
