import React, { useState, useEffect } from 'react'
import WeatherOverview from './components/WeatherOverview'
import WeatherCard from './components/WeatherCard'




const App = () => {
  const [data, setData] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((newData) => setData(newData))

  }, []);

  if (!data) return null

  


  return (
    <>

      <div className='container'>

        <WeatherCard data={data} />
        <div>{Math.round(data.main.temp)} &deg; C</div>
        


      </div>
    </>
  )
}

export default App

