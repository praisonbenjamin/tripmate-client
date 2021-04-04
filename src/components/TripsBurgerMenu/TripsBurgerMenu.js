import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import './TripsBurgerMenu.css'
import PlayPacketApiService from '../../services/api-service';
import TripsOptions from '../TripsOptions/TripsOptions'

export default function TripsBurgerMenu(props) {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserTrips()
            .then(userTrips => {
                setTrips(userTrips);
            })
    }, [])
    function handleDeleteClicked(trip_id){
        PlayPacketApiService.deleteTrip(trip_id)
        .then(() => {
            const filterTrips = trips.filter(trip => trip.id !== trip_id)
            setTrips(filterTrips)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const tripOptions = trips.map(trip => {
        return (
            <TripsOptions key={trip.id} id={trip.id} name={trip.trip_title} 
            handleDeleteClicked={handleDeleteClicked} />
            
        )
    })

    return (
        <Menu>
            <Link to='/MyTrips'>
                <button>
                    Back
                </button>
            </Link>
            {tripOptions}
        </Menu >
    )
}