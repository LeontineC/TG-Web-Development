import React, { useState } from 'react'

const Newtask = ({onAdd}) => {
    const [text, setText] = useState('')



    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({text});
        setText('');
    }

       
    
        

    return (
        <form className='form' onSubmit={onSubmit}>

            <input  value={text} 
                    type='text'
                    style={{fontSize: '16px', color: 'black', height: '40px',
                            marginBottom: '10px', width: '50vw'}}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='more to-do?'
            />
           
           <input type='submit' value='Add' style={{fontSize: '20px',
                    backgroundColor: 'green', color: 'white', cursor: 'pointer',
                    width: '50px',height: '40px', marginBottom: '30px'}}/>
            
        </form>
    )
}

export default Newtask
