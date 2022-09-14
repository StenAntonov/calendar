import { useEffect, useState } from 'react';
import * as eventsService from '../services/eventsService'

const DayTemp = ({ id }) => {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    eventsService.getOneDay(id)
    .then(result => setEvents(result));
  }, [id])

  return (
    <section className={"day-" + id} key={id}>
      <li className="day"><button id={id} className="on-hover">{id}</button></li>
      <li className="day-events">
        <ul className="daily-events">
          {events ? Object.values(events).map(event => 
            <li className={event.id} id={event.id} key={event.id}>{event.name}</li>)
            : <div></div>}
        </ul>
      </li>
    </section>
  );
}

export default DayTemp;