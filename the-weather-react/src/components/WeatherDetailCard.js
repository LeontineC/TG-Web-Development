import React from 'react'
import WeatherDetailDaily from './WeatherDetailDaily'
import WeatherIcons from '../Assets/WeatherIcons'
import Accordion from './Accordion'

const WeatherDetailCard = () => {
   


    const dailyDate = new Date([dailydate]*1000)
    let conditionOne = (data.daily[1].weather[0].icon)

//title     //content

    return (
        <>

        
        <div >
         <WeatherIcons iconID={conditionOne}/>
        </div> 
        <div > 
            <WeatherDetailDaily />
            
        </div>
        </>
    )
}

export default WeatherDetailCard
