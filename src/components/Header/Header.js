import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt, faSave, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const [loggedIn, setLoggedIn] = useState(props.isLoggedIn)
    useEffect(() => {
        setLoggedIn(props.isLoggedIn)
    }, [props.isLoggedIn])

    function handleLogoutClick() {
        TokenService.clearAuthToken();
        props.whenLoggedOut();
    }

    function renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link className='center'
                    onClick={handleLogoutClick}
                    to='/'>

                    <FontAwesomeIcon icon={ faSignOutAlt } className="exit"></FontAwesomeIcon>
                    <br />
                        Logout
                    </Link>
            </div>
        )
    }

    function renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <nav>
                    <Link
                        to='/login'>
                        <FontAwesomeIcon icon={ faSignInAlt } className="exit"></FontAwesomeIcon>
                        Log in
                    </Link>
                    {'    or    '}
                    <Link to='/register'>
                    <FontAwesomeIcon icon={ faSave } className="exit"></FontAwesomeIcon>
                    Sign up</Link>
                </nav>
            </div>
        )
    }

    return (
        <nav className='Header'>
            <Link to='/home'>
                <h1> <FontAwesomeIcon icon={ faUmbrellaBeach } className="exit"></FontAwesomeIcon> Trip Mate</h1>
            </Link>

            {(loggedIn === true)
                ? renderLogoutLink()
                : renderLoginLink()}
        </nav>
    )
}

export default Header;