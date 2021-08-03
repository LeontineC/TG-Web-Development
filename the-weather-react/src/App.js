import React, { useState, useEffect } from 'react'
import WeatherOverview from './components/WeatherOverview';


const App = () => {
  const [data, setData] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.5088&lon=-73.5878&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
      .then((response) => response.json())
      .then((newData) => setData(newData))

  }, []);

  if (!data) return null




  return (

    <>
     <WeatherOverview data={data} />
    </>
  )
}

export default App

