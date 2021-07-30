import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';




const WeatherIcons = ({ data }) => {
  const iconCode = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_DAY",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAINY",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",

};
console.log(data.minutely[1].precipitation)
console.log(data.current.weather[0].icon)
let iconID = (data.current.weather[0].icon)
  return (
    <ReactAnimatedWeather
      icon={iconCode[iconID]}
      color="black"
      size="50"
      animate={true}
    />
  );
}

export default WeatherIcons