import React from 'react'
import CurrentDate from './CurrentDate'
import CurrentTime from './CurrentTime'




const WeatherCard = ({ data }) => {
    

    return (
        <div>

            <CurrentDate />
            <h2>Montreal</h2>
            <CurrentTime />
            <p>{Math.round(data.current.temp)} &deg; C</p>
            
            
          

        </div>
    )
}

export default WeatherCard
