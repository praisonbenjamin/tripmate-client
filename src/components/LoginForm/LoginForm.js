import React, { useState } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default function LoginForm(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    function handleSubmitJwtAuth(e) {
        e.preventDefault();
        const { user_name, password } = e.target;

        setLoading(true);
        setError(null);

        console.log('login', props)

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                setLoading(false);
                props.whenLoggedIn();
                props.onLoginSuccess();
            })
            .catch(err => {
                setLoading(false);
                setError(err.error);
            })
    }
    return (
        <form className='sign-up-form'
            onSubmit={(e) => handleSubmitJwtAuth(e)}
        >
            {error &&
                (
                    <p>{error}</p>
                )}
            <div className='form-options'>
                <label htmlFor='user_name'>Username</label>
                <br />
                <input type='text' placeholder='Enter Username' name='user_name' required />
            </div>
            <div className='form-options'>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" placeholder="Enter Password" name="password" required />
            </div>
            <br />
            <button type="submit" className='myButton'
                disabled={loading}>
                {loading
                    ? 'Loading'
                    : 'Login'}
            </button>
        </form>
    )
}