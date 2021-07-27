import React from 'react'

const Sibling = props => {
    return (
        <div>
           <input type='text' onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}

export default Sibling





/*import React from 'react';

export default class Sibling extends React.Component {
    render (){
        return(
            <>
            <input value={this.props.text}/>
            <p>Welcome {this.props.text}</p>
            </>
        );
    }
}*/
