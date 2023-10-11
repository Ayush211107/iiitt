import React, { useState, useEffect } from "react";

function Time() {
  const [getday, setgetday] = useState(0);
  const [getHour, setgetHour] = useState(0);
  const [getminutes, setgetminutes] = useState(0);
  const [getDate, setgetDate] = useState(0);
  const [getMonth, setgetMonth] = useState(0);
  const [getFullYear, setgetFullYear] = useState(0);
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function updateCountdown() {
    const date = new Date();
    const getday1 = date.getDay();
    const getHour1 = date.getHours();
    const getminutes1 = date.getMinutes();
    const getDate1 = date.getDate();
    const getMonth1 = date.getMonth();
    const getFullYear1 = date.getFullYear();
    const getHour2 = getHour1 % 12;

    setgetday(getday1);
    setgetHour(getHour1 < 10 ? `0${getHour1}` : getHour1);
    setgetminutes(getminutes1 < 10 ? `0${getminutes1}` : getminutes1);
    setgetDate(getDate1);
    setgetMonth(getMonth1);
    setgetFullYear(getFullYear1);
  }

  setInterval(updateCountdown, 1000);

  return (
    <div>
      <p>
        {daysArray[getday]},{getHour}:{getminutes},{getDate}{" "}
        {monthArray[getMonth]}
      </p>
      <p>{getFullYear}</p>
    </div>
  );
}

export default Time;
