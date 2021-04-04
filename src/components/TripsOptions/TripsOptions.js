import React from 'react';
import { Link } from 'react-router-dom';
import './TripsOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function TripsOptions(props) {

    return (
        <>
            <Link to={`/Trips/${props.id}`}>
                <button className='games-button'>
                    {props.name}
                </button>
            </Link>
            
            <FontAwesomeIcon icon={faTrashAlt}
                  className="delete-btn" 
                  id={props.id}
                  type="button" 
                  onClick={() => props.handleDeleteClicked(props.id)}
              ></FontAwesomeIcon>
            
            {props.break && <br />}
        </>
    )
}