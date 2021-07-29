import React from 'react'
import CurrentDate from './CurrentDate'
import CurrentTemp from './CurrentTemp'

const WeatherCard = (props) => {
    return (
        <div>
            <CurrentDate />
           <h2>Montreal</h2> 
           <CurrentTemp />
           
        </div>
    )
}

export default WeatherCard
