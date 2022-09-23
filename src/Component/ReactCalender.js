import React, { useState } from "react";
import Calendar from "react-calendar";

const ReactCalender = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  console.log(date);
  return (
    <center>
      <Calendar onChange={onChange} value={date} />
      <div style={{marginTop:'12px'}}><b>{date.toString()}</b></div>
    </center>
  );
};
export default ReactCalender;
