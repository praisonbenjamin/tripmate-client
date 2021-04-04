import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import './AddTrip.css';
import AddTripForm from '../../components/AddTripForm/AddTripForm'
import { Link } from 'react-router-dom';

export default function AddTrip(props)  {
    const handleTripAdd = useCallback(() => {
      props.history.push('/MyTrips');
    }, [props.history]);
    return (
      <section className="add-trip-container">
        <Link to="/Home">
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="back-chev"></FontAwesomeIcon>
        </Link>
        <AddTripForm onPostSucess={handleTripAdd} />
      </section>
    );
  }
