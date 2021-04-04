import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import PlayPacketApiService from '../../services/api-service';
import TripsOptions from '../TripsOptions/TripsOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faBackward } from '@fortawesome/free-solid-svg-icons';

export default function SideBar(props) {
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
            <TripsOptions key={trip.id} id={trip.id} name={trip.trip_title} break={true}
            handleDeleteClicked={handleDeleteClicked} />
        )
    })

    return (
        <React.Fragment>
            <button onClick={props.goBack}>
                <FontAwesomeIcon icon={ faBackward } className="backward"></FontAwesomeIcon> Go Back 
            </button>
            <br />        


            <Link to='/Add'>
                    <button>
                        Add Trip <FontAwesomeIcon icon={ faPlusCircle } className="exit"></FontAwesomeIcon>
                    </button>
            </Link>
                <br />
                {tripOptions}
        </React.Fragment>
    )
}