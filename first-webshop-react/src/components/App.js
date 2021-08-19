import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './Homepage'
import OurStory from './OurStory'
import ProductOverviewData from './ProductOverview/ProductOverviewData'
import Cart from './Cart'
import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import PasswordReset from './PasswordReset'
import { AuthProvider } from './Auth'
import ProductDetail from './ProductDetail'
import { connect } from 'react-redux'




function App({ detail }) {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='contentNavbar'>
            <Switch>
              <Route exact path='/' component={Homepage}>
              </Route>
              <Route exact path='/ourstory' component={OurStory}>
              </Route>
              <Route exact path='/productoverview' component={ProductOverviewData}>
              </Route>
              <Route exact path='/cart' component={Cart}>
              </Route>
              {!detail ? (
                <Redirect to='/productoverview' component={ProductOverviewData} />
              ) : (
                <Route exact path="/productdetail/:id" component={ProductDetail} />
              )}
              <Route exact path='/dashboard' component={Dashboard}>
              </Route>
              <Route exact path='/login' component={Login}>
              </Route>
              <Route exact path='/signup' component={Signup}>
              </Route>
              <Route exact path='/passwordreset' component={PasswordReset}>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    detail: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
