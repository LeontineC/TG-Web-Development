import React, { useState } from 'react'


const Accordion = ({ title, content }) => {

    const [clicked, setClicked] = useState(false)



    return (
        <>
            <div className='item'>
                <div className='title'
                    onClick={() => setClicked(!clicked)}>
                    <div>{title}
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
