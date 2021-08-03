import React from 'react'
import './WeatherDetail.css';
import Accordion from './Accordion';
import CurrentDate from './CurrentDate';
import WeatherIcons from '../Assets/WeatherIcons';




//template literal(``) can spread content multiple lines


const WeatherDetail = ({data, iconCode})  => {

const morn = Math.round((data.daily[1].temp.morn))
const noon = Math.round((data.daily[1].temp.day)) 
const eve = Math.round((data.daily[1].temp.eve))
const night = Math.round((data.daily[1].temp.night))

let conditions = (data.daily[1].weather[0].icon)
console.log(conditions)

let days = {
    "7" : "Sunday", 
    "1" : "Monday", 
    "2" : "Tuesday", 
    "3" : "Wednesday", 
    "4" : "Thursday", 
    "5" : "Friday", 
    "6" : "Saturday"
};



const futureDays = new Date();

let today = futureDays.getDay();





let tomorrow = futureDays.getDay() +1;
let dayThree = futureDays.getDay() +2;
let dayFour = futureDays.getDay() +3;
let dayFive = futureDays.getDay() +4;
let daySix = futureDays.getDay() +5;
let daySeven = futureDays.getDay() +6;
let dayEight = futureDays.getDay() +7;

console.log(today)


    const forecastData = [
        {   title: `${tomorrow} `,
            content: `morning afternoon evening night`,
            temperature:`${morn} \u00b0 C  ${noon} \u00b0 C ${eve} \u00b0 C  ${night} \u00b0 C `,
            
        } ,
        {   title: `${dayThree}`,
            content: 'morning afternoon evening night',
            temperature:`${morn}`,
            
        },  
        {   title: `${dayFour}`,
            content: 'morning afternoon evening night',
            temperature:`${morn}`,
        
        }, 
        {   title: `${dayFive}`,
            content: 'morning afternoon evening night',
            temperature: `${morn}`,
        
        },   
        {   title: `${daySix}`,
            content: 'morning afternoon evening night',
            temperature: `${morn}`,
            
        }, 
        {   title: `${daySeven}`,
            content: 'morning afternoon evening night',
            temperature: `${morn}`,
           
        }, 
        {   title: `${dayEight}`,
            content: 'morning afternoon evening night',
            temperature: `${morn}`,
           
        }      
    ]

    
    const { title, content, temperature } = forecastData;
    console.table(data.daily[1].temp)
    
  

    return (
        <div className='containerForecast'>
            <div className='accordion'>
            {forecastData.map(({ title, content, temperature }) => (
          <Accordion title={title} content={content} temperature={temperature}/>
          
          ))}
            </div>
            
        </div>
    )
    
}



export default WeatherDetail
