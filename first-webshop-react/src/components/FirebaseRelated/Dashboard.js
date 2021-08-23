import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import { auth, db, logout } from '../Firebase'

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace('/login');


    }, [user, loading]);

    return (
        <>
            <div className='dashboard'>
                <div>you are logged in as

                    <div>{user?.email}</div>
                    <button className='dashboardButton' onClick={logout}>
                        logout
                    </button>
                </div>
            </div>

        </>
    )
}

export default Dashboard
