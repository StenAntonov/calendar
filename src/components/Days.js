import { useEffect } from "react";
import DayTemp from "./DayTemp";

const Days = ({ daysInMonth }) => {
  const todaysDate = new Date().getDate();

  useEffect(() => {
    const presentDayBox = document.getElementById(todaysDate);
    presentDayBox.classList.add("today");
  }, [todaysDate]);

  return (
    <section className="week-days">
      <ul className="week-days-row">
        <section className="day-prev">
          <li className="day"><br></br></li>
          <li className="day-events"></li>
        </section>
        <section className="day-prev">
          <li className="day"><br></br></li>
          <li className="day-events"></li>
        </section>
        <section className="day-prev">
          <li className="day"><br></br></li>
          <li className="day-events"></li>
        </section>
        <section className="day-prev">
          <li className="day"><br></br></li>
          <li className="day-events"></li>
        </section>

        {daysInMonth.map(day => <DayTemp id={day} key={day} />)}

        <section className="day-next">
          <li className="day"><br></br></li>
          <li className="day-events"></li>
        </section>
      </ul>
    </section>
  );
}

export default Days;
