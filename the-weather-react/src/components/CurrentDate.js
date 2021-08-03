import React from 'react'

export default function CurrentDate() {
    let time = new Date();
    
  
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
