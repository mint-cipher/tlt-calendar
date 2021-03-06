import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNumDesiredHours } from '../actions/HourPreferencesActions';
import styles from './HoursSettings.scss';
import { NumberPicker } from 'react-widgets';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';
import 'react-widgets/dist/css/react-widgets.css';
numberLocalizer();

const HoursSettings = ({numDesiredHours, changeNumDesiredHours}) => (
  <form className={styles.container}>
    <div className="weekly-hours-container">
      <label>Weekly hours desired:</label>
      <div className="number-picker">
        <NumberPicker min={10} max={29} value={numDesiredHours} onChange={changeNumDesiredHours} />
      </div>
      <span className="star">*</span>
    </div>
    <div>
      Main library required hours: <span className="value">{4}</span>
    </div>
    <div className="notes">
      <p>This value determines your approximate ﬁnal hours.</p>
      <p>
        Enter as many preferences as you’d like and your
        schedule permits. The more choices you provide,
        the more chances of getting your first choice since
        the scheduler rewards higher availability.
      </p>
    </div>
  </form>
)

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  {changeNumDesiredHours}
)(HoursSettings);
