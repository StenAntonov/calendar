import DayTemp from "./DayTemp";
import { useSelector } from "react-redux";

const Days = ({ daysInMonth }) => {
  const count = useSelector((state) => state.count.value);
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
          <li className="day">Redux Demo:<br></br></li>
          <li className="day-events redux">{count}</li>
        </section>
      </ul>
    </section>
  );
}

export default Days;
