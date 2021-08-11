import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import OurStory from './components/OurStory'
import ProductOverview from './components/ProductOverview'
// import ProductDetail from './components/ProductDetail'



function App() {
  return (

    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Homepage}>
            </Route>
            <Route exact path='/ourstory' component={OurStory}>
            </Route>
            <Route exact path='/productoverview' component={ProductOverview}>
            </Route>
            {/* <Route path='/productdetails' component={ProductDetails}> */}
            {/* <ProductDetail /> */}
            {/* </Route> */}
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default App;
