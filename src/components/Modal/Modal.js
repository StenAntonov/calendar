const Modal = ({closeModal}) => {
  const date = new Date().getDate();
  console.log(date);
  return (
    <div className="modal createModal">
      <section className="modal-main">
        <div className="modal-header" type="button">
          <h1 className="modal-title">Delete Vape</h1>
        </div>
        <p className="modal-question">Are you sure you want to delete this vape?</p>
        <div className="modal-vape">
            <div className="modal-vape-info">
                <img className="modal-vape-img" src={"test"} alt="vape"/>
                <h2 className="modal-vape-h2">test</h2>
                <h4 className="modal-vape-h4">test</h4>
            </div>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal} className="modal-buttons no" type="button" variant="secondary">
            No
          </button>
          <button className="modal-buttons" type="button" variant="primary">
            Yes
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;