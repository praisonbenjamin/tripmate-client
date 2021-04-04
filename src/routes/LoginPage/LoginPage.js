import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage(props) {
    const onLoginSuccess = useCallback(() => {
        props.history.push('/home');
    }, [props.history]);

    return (
        <div className='sign-in'>
            <h2>Sign in</h2>
            <LoginForm whenLoggedIn={() => props.whenLoggedIn()}
                onLoginSuccess={onLoginSuccess} />
            <p>
                Don't have an account? <br />
                <Link to='/register'>Sign up</Link>
            </p>
        </div>
    )
}