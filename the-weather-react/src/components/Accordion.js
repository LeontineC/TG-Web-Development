import React, { useState } from 'react'
import WeatherIcons from '../Assets/WeatherIcons'



const Accordion = ({ title, content, iconID, size }) => {

    const [clicked, setClicked] = useState(false)

    

    return (
        <>
            <div className='item'>
                <div className='title'
                    onClick={() => setClicked(!clicked)}>
                    <div className='titleIcons'> {title} <WeatherIcons size='20' iconID={iconID} />
                    </div>
                    <div>{clicked ? '-' : '+'}</div>
                </div>
                {clicked && <div className='content'>
                    <p>{content}</p>
                </div>}
            </div>
        </>
    )
}

export default Accordion
