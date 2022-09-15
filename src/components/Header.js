import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../features/count";
import CreateFmBtn from './Modal/CreateFmBtn';

const Header = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let num = 2;
   
  const increase = () => {
    num = num + 1;
    dispatch(increment(num));
  }
  const createClickHandler = (e) => {
    e.preventDefault();
    setShowCreateModal(true);
  };

  const closeModal = () => {
    navigate("/home");
    setShowCreateModal(false);
  };

  return (
    <section className="header">
      <article className="logo">
        <div className="redux-div">
       <p className="redux-p">Redux Demo:</p> 
      <button onClick={increase} className="redux-btn">+</button>
        </div>
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