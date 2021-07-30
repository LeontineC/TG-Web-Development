import React, { useState } from 'react'


const style = {
    maxWidth: '300px',
    margin: '30px auto',
    overflow: 'auto',
    minHeight: '500px',
    border: '1px solid rgb(73, 116, 209)',
    padding: '30px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2017/02/21/09/02/clouds-2085112_960_720.jpg" + ")",
    
}

const styleAccordian = {
        width: '250px',
        height: '400px',
        backgroundColor: 'lightblue',
        margin: '0 auto',
        borderRadius: '5px',
        
        
        

}


const WeatherDetail = ({data}) => {
    const [ clicked, setClicked] =  useState(false)

    console.log('7')
    return (
        <div style={style}>
        <div className='accordion' style={styleAccordian}> 
            {/* <div className='Day'> */}
                {/* <div className='DailyInfo'> */}
                    <p>tomorrow</p>
                {/* </div> */}
            {/* </div> */}
            {/* // <div className='Dropdown'></div> */}

        </div> 
        </div>
    )
}

export default WeatherDetail
