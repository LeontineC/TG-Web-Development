import React, { useState } from 'react'

const Accordion = ({ title, content, temperature }) => {

    const [clicked, setClicked] = useState(false)



    return (
        <>
            <div className='item'>
                <div className='title'
                    onClick={() => setClicked(!clicked)}>
                    <div>{title}</div>
                    <div>{clicked ? '-' : '+'}</div>
                </div>
                {clicked && <div className='content'>
                    <p>{content}</p>
                    <p>{temperature}</p>
                </div>}



            </div>
        </>
    )
}

export default Accordion
