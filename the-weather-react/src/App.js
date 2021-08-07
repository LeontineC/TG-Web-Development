import React, { useState, useEffect } from 'react'
import WeatherOverview from './components/WeatherOverview';


const App = () => {
  const [data, setData] = useState()
  const [latitude, setLatitude] = useState(45.5088)
  const [longtitude, setLongtitude] = useState(-73.5878)
  const [city, setCity] = useState('Montreal')

  /* fetch 2 api's get cities and read their longtitude to use in weather detail? */

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
      .then((response) => response.json())
      .then((newData) => setData(newData))



  }, [latitude, longtitude]);

  if (!data) return null

 

  const handleOnClick = (e) => {
    const newLatitude = 52.374
    setLatitude(newLatitude)
    changeLongtitude()
    changeCity()

  }

  const changeLongtitude = (e) => {
    const newLongtitude = 4.8897
    setLongtitude(newLongtitude)

  }
  const changeCity = (e) => {
    const newCity = `Amsterdam`
    setCity(newCity)
  }
  const handleOnClickBack = (e) => {
    const newLatitudeBack = 45.5088
    setLatitude(newLatitudeBack)
    changeLongtitudeBack()
    changeCityBack()

  }
  const changeLongtitudeBack = (e) => {
    const newLongtitudeBack = -73.5878
    setLongtitude(newLongtitudeBack)

  }
  const changeCityBack = (e) => {
    const newCityBack = `Montreal`
    setCity(newCityBack)
  }

  return (

    <>

      <div><WeatherOverview data={data} city={city} /></div>
      <div className='buttonContainer'>
        <button className='citybutton'
          onClick={() => {
            handleOnClick()
          }}> the weather Amsterdam</button>
        <button className='citybutton'
          onClick={() => {
            handleOnClickBack()
          }}> the weather Montreal</button>
      </div>

    </>

  )
}

export default App

