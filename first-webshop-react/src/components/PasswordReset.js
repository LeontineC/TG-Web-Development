import React, { useState } from 'react'
import firebaseApp from './Firebase'

const PasswordReset = () => {
    const [email, setEmail] = useState('')
    const [sentEmail, setSentEmail] = useState(false)
    const [error, setError] = useState(null)

    const onChangeHandler = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'email') {
            setEmail(value);
        }
    }
    const sendResetEmail = event => {
        event.preventDefault();
    }



return (
    <>
        
    
    
    </>
)
}

export default PasswordReset
