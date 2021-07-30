import React from 'react'



const CurrentTime = () => {
    
    const currentTime = new Date().toLocaleString('en-CA',{
        timeZone: 'America/Toronto',
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
