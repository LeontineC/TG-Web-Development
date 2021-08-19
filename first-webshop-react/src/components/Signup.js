import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import firebaseApp from './Firebase'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password } = e.target.elements;
        try {
            firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value)
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    }
    if (currentUser) {
        return <Redirect to='/dashboard' />
    }



    return (
        <>
        <div className='signupCard'>
            <h2>become a member</h2>
            <form onSubmit={handleSubmit}>
                <label for='email'>email</label>
                <input type='email' name="email" placeholder='email' />
                <label for='password'>password</label>
                <input type='password' name='password' placeholder='password' />
                <button type='submit'>join us</button>
            </form>
            <h2>already a member? <Link to='/login'>login</Link></h2>
            </div>
        </>
    )
}

export default Signup
