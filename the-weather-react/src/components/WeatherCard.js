import React from 'react'
import CurrentDate from './CurrentDate'



const WeatherCard = ({ data }) => {
    

    return (
        <div>

            <CurrentDate />
            <h2>Montreal</h2>
            <p>humidity: {data.current.humidity}</p>
            <p>{Math.round(data.current.temp)} &deg; C</p>
           

        </div>
    )
}

export default WeatherCard
