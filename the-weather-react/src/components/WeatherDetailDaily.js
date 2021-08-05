import React from 'react'

const WeatherDetailDaily = ({unit}) => {

    const morningTemp = Math.round((unit.morn))
    const dayTemp = Math.round((unit.day))
    const eveningTemp = Math.round((unit.eve))
    const nightTemp = Math.round((unit.night))
    
   
    

    return (
        <>
           {morningTemp} {dayTemp} {eveningTemp} {nightTemp}
        </>
    )
}

export default WeatherDetailDaily
