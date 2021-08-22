import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./Firebase";

const PasswordReset = () => {

  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/dashboard');
  }, [user, loading]);

  return (
    <>
    <div className='passwordReset'>
    <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
        />
        <button
          className="resetButton"
          onClick={() => sendPasswordResetEmail(email)}
        >
          send me a password reset email
        </button>
        <div>
          not yet a member? <Link to="/signup">sign up</Link> now.
        </div>
    </div>
      
    </>
  )
}

export default PasswordReset


