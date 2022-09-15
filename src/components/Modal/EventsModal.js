import { useState, useEffect } from "react";
import * as eventsService from '../../services/eventsService';

const EventsModal = ({ id, day, closeEventsList, populateCreateEvent }) => {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    eventsService.getOneDay(id)
    .then(result => setEvents(result));
  }, [id])

  const deleteEvent = (e) => {
    e.preventDefault();

    const eventId = e.target.parentNode.parentNode.id;
    eventsService.del(id, eventId)
    .then(() => {
      populateCreateEvent();
      closeEventsList();
    })
  }

  return (
    <div className="modal createModal">
      <section className="modal-main">
        <div className="modal-header" >
          <h1 className="modal-title">Events List</h1>
        </div>
        <div className="create-event-info">
        <ul className="daily-events">
          {events ? Object.values(events).map(event => <>
            <li className={event.id} id={event.id} key={event.id}>{event.name}<button className="del" onClick={deleteEvent}><i className="fa-sharp fa-solid fa-trash-can"></i></button></li>
            <p className="desc">{event.description}</p>
          </>)
            : <div></div>}
        </ul>
        </div>
        <div className="modal-footer">
          <button onClick={closeEventsList} className="modal-buttons" type="button" variant="secondary">
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsModal;