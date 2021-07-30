import React, { useState, useEffect } from 'react'
import WeatherDetail from './components/WeatherDetail'
import WeatherCard from './components/WeatherCard'
import WeatherIcons from './Assets/WeatherIcons'
import {Link } from "react-router-dom";


const App = () => {
  const [data, setData] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.5088&lon=-73.5878&exclude=hourly&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
      .then((response) => response.json())
      .then((newData) => setData(newData))

  }, []);

  if (!data) return null

  


  return (
    
    <>

      <div className='container'>

        <WeatherCard data={data} />
        <WeatherIcons data={data} />
        <p>max.temp: {data.daily[2].temp.max} &deg; C</p>
        <p>min.temp: {data.daily[2].temp.min} &deg; C</p>
        <p>humidity: {data.current.humidity}</p>
        <Link to='/WeatherDetail'>
          <button className='button'>7-day forecast</button>
        </Link>
        
        
      </div>
    
    
        
    </>
  )
}

export default App

