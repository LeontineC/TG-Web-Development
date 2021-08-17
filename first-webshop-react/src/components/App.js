import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './Homepage'
import OurStory from './OurStory'
import ProductOverview from './ProductOverview/ProductOverview'
import Cart from './Cart'
import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import { AuthProvider } from './Auth'




function App() {
  return (
    <AuthProvider>
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
              <Route exact path='/cart' component={Cart}>
              </Route>
              <Route exact path='/dashboard' component={Dashboard}>
              </Route>
              <Route exact path='/login' component={Login}>
              </Route>
              <Route exact path='/signup' component={Signup}>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;
