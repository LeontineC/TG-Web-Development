import React from 'react';



const Child = props => {
    return (
        <div>
           <input type='text' onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}

export default Child


/*export default class Child extends React.Component {
    constructor(props){
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
}

handleTextChange(e) {
    this.props.handleTextChange(e.target.value);
}
  
render(){
    return(
        <>
        <input value={this.props.text}
        onChange={this.handleTextChange} />
        <p>Welcome {this.props.text}</p>
        </>
    );
}
}*/
