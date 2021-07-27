import React, { useState } from 'react'
import Sibling from './Sibling'
import Child from './Child'
import ChangingSomething from './ChangingSomething'



const App = () => {
  const [name, setName] = useState('');
 
  return (
    <div>
      <p>Welcome {name}</p>
      <Child onChange={value => setName(value)}/>
      <Sibling onChange={value => setName(value)}/>
      <p>Welcome {name}</p>
      <ChangingSomething />
    </div>
  )
}




/*class App extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {text: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    
  }
   handleTextChange(newText) {
     this.setState({text: newText});
   }
   render() {
  
  return(
    <>
    <Child text={this.state.text}
    handleTextChange={this.handleTextChange}/>
    <Sibling text={this.state.text}/>
    
    </>
  )
}
}*/
  
export default App;


