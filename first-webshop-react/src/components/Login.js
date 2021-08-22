import React,  { useContext, useRef } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseApp from './Firebase'

const Login = () => {

    
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try{
            
           
            firebaseApp.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        } catch(error ){
            alert(error)
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
            <input type='email' name='email' placeholder='email' ref={emailRef} required/>
            <label for='password'>password</label>
            <input type='password' name='password' placeholder='password'ref={passwordRef} required/>
            <button type='submit'> log in</button>
        </form>
        
        <Link to='/passwordreset'>forgot password?</Link>
        </>
    );
}

export default Login;