import React from 'react'
import CurrentDate from './CurrentDate'
import CurrentTime from './CurrentTime'
import WeatherIcons from '../Assets/WeatherIcons'


const WeatherCard = ({ data }) => {



    return (
        <div>

            <CurrentDate />
            <h2>Montreal</h2>
            <CurrentTime data={data} />
            <p>{Math.round(data.current.temp)} &deg; C</p>
            <p>{data.current.weather[0].description}</p>
            <WeatherIcons data={data} />
            <p>humidity: {data.current.humidity} %</p>


        </div>
    )
}

export default WeatherCard
