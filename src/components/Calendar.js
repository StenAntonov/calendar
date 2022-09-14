import { useState } from "react";
import WeekDays from "./WeekDays";
import Days from "./Days";
import CreateFmDate from "./Modal/CreateFmDate";
import EventsModal from "./Modal/EventsModal";

const Calendar = () => {
  const [showCreateFmDate, setShowCreateFmDate] = useState(false);
  const [showEventsModal, setshowEventsModal] = useState(false);
  const [id, setId] = useState('');
  const [day, setDay] = useState('');
  const [daysInMonth, setDaysInMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

  const showOrCreateEvents = (e) => {
    console.log(e);
    if (e.target.tagName === "BUTTON") {
      setId(e.target.id);
      setShowCreateFmDate(true);
    } else if (e.target.tagName === "LI" || e.target.tagName === 'UL') {
      setId(e.target.parentNode.className.slice(4));
      setDay(e.target.parentNode.className);
      setshowEventsModal(true);
    }
  }

  const closeCreateFmDate = () => {
    setShowCreateFmDate(false);
  };

  const closeEventsList = () => {
    setshowEventsModal(false);
  };

  const populateCreateEvent = () => {
    console.log('test');
    setDaysInMonth([])
    setDaysInMonth((oldState) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])
  };

  return (
    <div onClick={showOrCreateEvents} className="calendar">
      <WeekDays />
      <Days daysInMonth={daysInMonth} />
      {showCreateFmDate && <CreateFmDate id={id} populateCreateEvent={populateCreateEvent} closeCreateFmDate={closeCreateFmDate} />}
      {showEventsModal && <EventsModal id={id} day={day} closeEventsList={closeEventsList} />}
    </div>
  );
}

export default Calendar;