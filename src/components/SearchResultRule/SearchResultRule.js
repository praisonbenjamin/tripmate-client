import React, { useState } from 'react';
import './SearchResultRule.css'
import add from '../../images/icons/plus.png';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SearchResultRule(props) {
    const [message, setMessage] = useState(false);

    const handleAddClicked = () => {
        PlayPacketApiService.postUserRule(props.title, props.description, props.game_id)
            .then(() => {
                setMessage(true);
                setTimeout(() => {
                    setMessage(false);
                }, 5000)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='rule'>
            {!message && (
                <img className='click-icon' src={add} alt='' height='25px'
                    onClick={() => handleAddClicked()} />
            )}
            {message && (
                <p className='red'>Rule has been added to your collection!</p>
            )}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}