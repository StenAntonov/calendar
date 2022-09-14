import { useState } from "react";
import CreateFmBtn from './Modal/CreateFmBtn';

const Header = ({updateEvents}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const createClickHandler = (e) => {
    e.preventDefault();
    setShowCreateModal(true);
  };

  const closeModal = () => {
    setShowCreateModal(false);
  };
  
  return (
    <section className="header">
      <article className="logo">
        <img className="logo-img" src="../assets/logo.png" alt="logo" />
        <p className="calendar-header"> Calendar</p>
      </article>
      <h1 className="month">September 2022</h1>
      <button className="createBtn" onClick={createClickHandler}>
        <img className="addBtn" src="../assets/plus.svg" alt="Add event" />
        <p className="btnText">Create</p>
      </button>
      {showCreateModal && <CreateFmBtn closeModal={closeModal} />}
    </section>
  );
}

export default Header;