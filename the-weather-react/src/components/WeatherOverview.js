import React, { useState } from 'react'
import WeatherCard from './WeatherCard'
import WeatherDetail from './WeatherDetail'

const WeatherOverview = ({ data, city}) => {
    const [show, setShow] = useState(false)

   

    return (
        <>
            <div className='weatheroverview'>
                <WeatherCard data={data} city={city} />
            </div>
            <div className='weatherDetail'
                onClick={() => setShow(!show)}>
                <button className='button'>7-day forecast</button>
            </div>
            {show && <WeatherDetail data={data}/>}
            
        </>
    )
}

export default WeatherOverview
