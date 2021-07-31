import React, { useState, useEffect } from 'react'
import WeatherDetail from './components/WeatherDetail'
import WeatherCard from './components/WeatherCard'
import { Link } from "react-router-dom";


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

        <Link to='/WeatherDetail'>
          <button className='button'>7-day forecast</button>
        </Link>

      </div>



    </>
  )
}

export default App

