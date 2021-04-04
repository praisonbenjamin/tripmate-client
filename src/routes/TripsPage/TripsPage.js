import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TripsOptions from '../../components/TripsOptions/TripsOptions';
import PlayPacketApiService from '../../services/api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function PlansPage(props) {
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
        <div className='RulesPage'>
            <h2>Which Trips are you looking for?</h2>
            <div className='gameSelect'>
                {tripOptions}
            </div>
            <p>Want to add a new trip? <Link to='/Add'><FontAwesomeIcon icon={ faPlus } className="exit"></FontAwesomeIcon> Click here!</Link></p>
        </div>
    )
}