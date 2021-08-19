import React,  { useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseApp from './Firebase'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try{
            firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <>
        <h2>log in</h2>
        <form onSubmit={handleSubmit}>
            <label for='email'>email</label>
            <input type='email' name='email' placeholder='email' />
            <label for='password'>password</label>
            <input type='password' name='password' placeholder='password'/>
            <button type='submit'> log in</button>
        </form>
        <Link to='/passwordreset'>forgot password?</Link>
        </>
    );
}

export default Login;