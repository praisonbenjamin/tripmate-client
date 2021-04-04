import React, { useState } from 'react';
import './RegistrationForm.css'
import AuthApiService from '../../services/auth-api-service';

const RegistrationForm = (props) => {
    const [error, setError] = useState(null);
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
  
      let user = {
        user_name: enteredUsername,
        password: enteredPassword
      };
  
      AuthApiService.postUser(user)
        .then((response) => {
          setEnteredUsername('');
          setEnteredPassword('');
          props.onRegisterSuccess();
        })
        .catch((response) => {
          setError(response.error.message);
        });
    };

    return (
        <form className='sign-up-form' onSubmit={e => handleSubmit(e)}>

            <div className='form-options'>
                <label htmlFor='user_name'>Username</label>
                <br />
                <input type='text' placeholder='Enter Username' name='user_name' required
                    value={enteredUsername} onChange={e => setEnteredUsername(e.target.value)} />
            </div>
            <div className='form-options'>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" placeholder="Enter Password" name="password" required
                    value={enteredPassword} onChange={e => setEnteredPassword(e.target.value)} />
            </div>
            <br />
            <p>{error}</p>
            <br />
            <div className='box pass-requirements'>
                <p>Password must:</p>
                <ul>
                    <li>Be at least 8 characters</li>
                    <li>Contain no spaces</li>
                    <li>Contain a number and special character</li>
                </ul>
            </div>
            <button type="submit" className='myButton'
                disabled={
                    !(enteredUsername.length > 0) ||
                    !(enteredPassword.length > 0)
                }>
                Register
                </button>

        </form>
    )
}

export default RegistrationForm;