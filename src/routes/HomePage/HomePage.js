import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h2>Welcome to Trip Mate!</h2>
            <h3>What do you want to do?</h3>
            <div className='MyRules'>
                <h3>My Trips</h3>
                <p>Here's where you can find plans for all your trips</p>
                <p>Select a trip,</p>
                <p>then add plans to those trips!</p>
                <Link to='/MyTrips'>
                    <button>
                        My Trips
                    </button>
                </Link>
            </div>
            <div className='search'>
                <h3>Or</h3>

                <p>simply <span>ADD</span> a trip!</p>                
                <Link to='/Add'>
                    <button>
                        Add
                    </button>
                </Link>

                
                
            </div>
        </div>
    )
}