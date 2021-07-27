import React, { useState } from 'react';

const initialList = [
    {
        id: 1, 
        name: 'James',
    },
    {
        id: 2,
        name: 'Henry',
    },
];

const ChangingSomething = () => {
    const [list, setList] = React.useState(initialList)
    const [name, setName] = React.useState('');
    function handleChange(e) {
        setName(e.target.value);

    }

const id = Math.floor(Math.random() *
    1000) + 1

function handleAdd() {
    /*const newList = list.concat({id, name});*/
    const newList = [{id, name}, ...list];
    setList(newList);
        
    }

   

 return (
    <div>
         <div>
        <input type='text' onChange={handleChange} />
        <button style={{marginTop: '200px'}} type='button' onClick={handleAdd}></button>
        </div>

        <ul>
            {list.map((item) => (
             <li
                 key={item.id}>{item.name}
             </li>
            ))}
        </ul>
    </div>
 )
}




export default ChangingSomething