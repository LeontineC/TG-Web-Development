import React from 'react'



const CurrentTime = () => {
    const currentTime = new Date();
    const timeOther = new Date().toLocaleString('en-CA',{
        timeZone: 'America/Toronto',
        hour: '2-digit',
        minute: '2-digit'
        }
    )
    
        
    return (
        <div>
            {timeOther}
        </div>
    )
}

export default CurrentTime
