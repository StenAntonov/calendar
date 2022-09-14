import { useEffect } from "react";
import DayTemp from "./DayTemp";

const Days = ({daysInMonth}) => {
  const todaysDate = new Date().getDate();
  // const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  
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
