import React, { useState } from 'react'
import './WeatherDetail.css';
import Accordion from './Accordion';


//template literal(``) can spread content multiple lines


const WeatherDetail = ({ data }) => {

    const forecastData = [
        {   title: 'tomorrow',
            content: `morning afternoon evening night`
        } ,
        {   title: 'day 2',
            content: 'morning afternoon evening night'
        },  
        {   title: 'day 3',
        content: 'morning afternoon evening night'
        }, 
        {   title: 'day 4',
        content: 'morning afternoon evening night'
        },   
        {   title: 'day 5',
            content: 'morning afternoon evening night'
        }, 
        {   title: 'day 6',
            content: 'morning afternoon evening night'
        }, 
        {   title: 'day 7',
            content: 'morning afternoon evening night'
        }      
    ]
    const { title, content } = forecastData;



    


    return (
        <div className='containerForecast'>
            <div className='accordion'>
            {forecastData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
            </div>
        </div>
    )
}

export default WeatherDetail
