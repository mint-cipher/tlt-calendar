import { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import StudentCalendarGrid from '../components/hourPreferences/StudentCalendarGrid';
import HoursSettings from '../components/hourPreferences/HoursSettings';
import VisibleChipBank from '../components/hourPreferences/VisibleChipBank';
import StudentCalendarTrash from '../components/hourPreferences/StudentCalendarTrash';
import VisibleLocationOrder from '../components/hourPreferences/VisibleLocationOrder';
import CalendarInfoBox from '../components/CalendarInfoBox';
import styles from './HourPreferences.scss';

@DragDropContext(HTML5Backend)
export default class HourPreferences extends Component {
  render() {
    return <div className={styles.container}>
      <StudentCalendarGrid />
      <div className="controls">
        <div className="hours-settings"><HoursSettings /></div>
        <div className="chip-bank"><VisibleChipBank /></div>
        <div className="trash"><StudentCalendarTrash /></div>
        <div className="location-order"><VisibleLocationOrder /></div>
        <div className="info"><CalendarInfoBox /></div>
      </div>
    </div>;
  }
}
