import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'

const Homepage = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <>
            <p>Homepage</p>
            {currentUser ? (
                <p>you are logged in - <Link to='/dashboard'>dashboard</Link></p>
            ) : (
                <p>
                    <Link to='/login'>log in</Link> or <Link to='/signup'>sign up</Link>
                </p>
            )}
        </>
    )
}

export default Homepage;
