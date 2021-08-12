import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth' 
import firebaseApp from './Firebase'
 
const Dashboard = () => {
    const { currentUser } = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to='/login' />
    }
    return (
        <>
        <div>
            <h2>welcome</h2>
            <p>you have succesfully logged in</p>
            <button onClick={() => firebaseApp.auth().signOut()}>sign out</button>
        </div>
        </>
    )
}

export default Dashboard;