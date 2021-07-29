import React from 'react'

export default function CurrentDate(props) {
    let time = new Date();
    
  
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sat"];
    let months = [
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
    let day = days[time.getDay()];
    let month = months[time.getMonth()];
    let date = time.getDate();
    let year = time.getFullYear();
  
    return (
      <div>
        {day} {date} {month} {year}
      </div>
    );
  }
