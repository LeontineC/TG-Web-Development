import React from 'react'

//timezone  timezone_offset


const CurrentTime = ({data}) => {

    const timezone = (data.timezone)

    const currentTime = new Date().toLocaleString('en-CA',{
        timeZone: [timezone],
        hour: '2-digit',
        minute: '2-digit'
        }
    )
    
    return (
        <div>
            {currentTime}
        </div>
    )
}

export default CurrentTime
