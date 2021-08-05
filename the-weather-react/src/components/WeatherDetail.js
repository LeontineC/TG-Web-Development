import React from 'react'
import './WeatherDetail.css';
import Accordion from './Accordion';
import WeatherIcons from '../Assets/WeatherIcons';
import WeatherDetailDaily from './WeatherDetailDaily';






//template literal(``) can spread content multiple lines


const WeatherDetail = ({ data}) => {



    

    const morningTemp = Math.round(data.daily[1].temp.morn)
    const dayTemp = Math.round((data.daily[1].temp.day))
    const eveningTemp = Math.round((data.daily[1].temp.eve))
    const nightTemp = Math.round((data.daily[1].temp.eve))

    const morningTempTwo = Math.round(data.daily[2].temp.morn)
    const dayTempTwo = Math.round((data.daily[2].temp.day))
    const eveningTempTwo = Math.round((data.daily[2].temp.eve))
    const nightTempTwo = Math.round((data.daily[2].temp.eve))

    const morningTempThree = Math.round(data.daily[3].temp.morn)
    const dayTempThree = Math.round((data.daily[3].temp.day))
    const eveningTempThree = Math.round((data.daily[3].temp.eve))
    const nightTempThree = Math.round((data.daily[3].temp.eve))

    const morningTempFour = Math.round(data.daily[4].temp.morn)
    const dayTempFour = Math.round((data.daily[4].temp.day))
    const eveningTempFour = Math.round((data.daily[4].temp.eve))
    const nightTempFour = Math.round((data.daily[4].temp.eve))

    const morningTempFive = Math.round(data.daily[5].temp.morn)
    const dayTempFive = Math.round((data.daily[5].temp.day))
    const eveningTempFive = Math.round((data.daily[5].temp.eve))
    const nightTempFive = Math.round((data.daily[5].temp.eve))

    const morningTempSix = Math.round(data.daily[6].temp.morn)
    const dayTempSix= Math.round((data.daily[6].temp.day))
    const eveningTempSix = Math.round((data.daily[6].temp.eve))
    const nightTempSix = Math.round((data.daily[6].temp.eve))

    const morningTempSeven = Math.round(data.daily[7].temp.morn)
    const dayTempSeven = Math.round((data.daily[7].temp.day))
    const eveningTempSeven = Math.round((data.daily[7].temp.eve))
    const nightTempSeven = Math.round((data.daily[7].temp.eve))



    let dayone = new Date(data.daily[1].dt * 1000)
    let dayOne = new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).format(dayone)

    let daytwo = new Date(data.daily[2].dt * 1000)
    let dayTwo = new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).format(daytwo)

    let daythree = new Date(data.daily[3].dt * 1000)
    let dayThree = new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'}).format(daythree)

    let dayfour = new Date(data.daily[4].dt * 1000)
    let dayFour = new Intl.DateTimeFormat('en-UK', {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).format(dayfour)

    let dayfive = new Date(data.daily[5].dt * 1000)
    let dayFive = new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).format(dayfive)

    let daysix = new Date(data.daily[6].dt * 1000)
    let daySix = new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).format(daysix)

    let dayseven = new Date(data.daily[7].dt * 1000)
    let daySeven = new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'}).format(dayseven)


    const forecastData = [
        {
            title: `${dayOne}  `,
            content: `morning:${morningTemp}\u00b0C  afternoon:${dayTemp}\u00b0C evening:${eveningTemp}\u00b0C night:${nightTemp}\u00b0C`,
        },
        {
            title: `${dayTwo}`,
            content: `morning:${morningTempTwo}\u00b0C  afternoon:${dayTempTwo}\u00b0C evening:${eveningTempTwo}\u00b0C night:${nightTempTwo}\u00b0C`,
        },
        {
            title: `${dayThree}`,
            content: `morning:${morningTempThree}\u00b0C  afternoon:${dayTempThree}\u00b0C evening:${eveningTempThree}\u00b0C night:${nightTempThree}\u00b0C`,
        },
        {
            title: `${dayFour}`,
            content: `morning:${morningTempFour}\u00b0C  afternoon:${dayTempFour}\u00b0C evening:${eveningTempFour}\u00b0C night:${nightTempFour}\u00b0C`,
        },
        {
            title: `${dayFive}`,
            content: `morning:${morningTempFive}\u00b0C  afternoon:${dayTempFive}\u00b0C evening:${eveningTempFive}\u00b0C night:${nightTempFive}\u00b0C`,
        },
        {
            title: `${daySix}`,
            content: `morning:${morningTempSix}\u00b0C  afternoon:${dayTempSix}\u00b0C evening:${eveningTempSix}\u00b0C night:${nightTempSix}\u00b0C`,
        },
        {
            title: `${daySeven}`,
            content: `morning:${morningTempSeven}\u00b0C  afternoon:${dayTempSeven}\u00b0C evening:${eveningTempSeven}\u00b0C night:${nightTempSeven}\u00b0C`,
        }
    ]


    const { title, content } = forecastData;

    const one = data.daily[1].temp
    const two = data.daily[2].temp
    let conditionOne = (data.daily[1].weather[0].icon)
    

    return (
        <div className='containerForecast'>
            <div className='accordion'>
                {forecastData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                   
                ))}
                {/* <WeatherIcons iconID={conditionOne} /> */}
                {/* <WeatherDetailDaily unit={one} /> */}
                {/* <WeatherDetailDaily unit={two} /> */}
                
               
             </div>
              



        </div>
    )

}



export default WeatherDetail




