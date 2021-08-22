import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "./Firebase";

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    
    const history = useHistory();

    /*const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    }; */

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");

        
    }, [user, loading]);

    return (
        <>
            <div className='dashboard'>
                <div>you are logged in as
                   
                    <div>{user?.email}</div>
                    <button className="dashboardButton" onClick={logout}>
                        logout
                    </button>
                </div>
            </div>

        </>
    )
}

export default Dashboard
