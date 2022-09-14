import { useState } from 'react';

const CreateFmBtn = ({ closeModal, count }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const date = new Date().getDate();

  const events = { name, description };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8000/day-' + date, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(events)
    }).then(() => {
      closeModal();
    })
  }
  
  return (
    <div className="modal createModal">
      <section className="modal-main">
        <div className="modal-header" >
          <h1 className="modal-title">Create Event</h1>
        </div>
        <div className="create-event-info">
          <label className="create-event-name-label">Event Name:</label>
          <input className="create-event-text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter event name..." maxLength={30} />
          <label className="create-event-description-label">Event Description:</label>
          <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event description..." cols="30" rows="5"></textarea>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal} className="modal-buttons no" type="button" variant="secondary">
            Cancel
          </button>
          <button onClick={handleSubmit} className="modal-buttons" type="button" variant="primary">
            Save
          </button>
        </div>
      </section>
    </div>
  );
};

export default CreateFmBtn;