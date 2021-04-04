import React, { useState } from 'react';
import './UserPlan.css'
import trash from '../../images/icons/garbage.png'
import edit from '../../images/icons/edit.png'
import Moment from 'react-moment';
import PlayPacketApiService from '../../services/api-service';

export default function UserRule(props) {
    
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [location, setLocation] = useState(props.location)
    const [from_date, setFrom_date] = useState(props.from_date)
    const [to_date, setTo_date] = useState(props.to_date)
    const [notes, setNotes] = useState(props.notes)
    const [editLocation, setEditLocation] = useState(location);
    const [editFrom_date, setEditFrom_date] = useState(from_date);
    const [editTo_date, setEditTo_date] = useState(to_date);
    const [editNotes, setEditNotes] = useState(notes);
    const [error, setError] = useState(null);

    const submitChanges = e => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        PlayPacketApiService.updateUserRule(props.id, editLocation, editFrom_date, editTo_date, editNotes)
            .then(() => {
                setLocation(editLocation);
                setFrom_date(editFrom_date);
                setTo_date(editTo_date);
                setNotes(editNotes);
                setLoading(false);
                setEditing(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false);
            })
    }

    function renderStaticItems() {
        console.log(props)
        return (
            <>
                <h3>{location}</h3>
                From <Moment utc format="MM/DD/YY">{from_date}</Moment> to <Moment utc format="MM/DD/YY">{to_date}</Moment>
                <p>{notes}</p>
            </>
        )
    }

    function renderEditItems() {
        return (
            <>
                {error && (
                    <p>{error}</p>
                )}
                <form className='post-rule-form' onSubmit={e => submitChanges(e)}>
                    <input type='text' placeholder={location} name='rule_title'
                        value={editLocation} onChange={e => setEditLocation(e.target.value)} />
                    <br />
                    <textarea placeholder={from_date} name='rule_description'
                        value={editFrom_date} onChange={e => setEditFrom_date(e.target.value)} />
                    <br />
                    <textarea placeholder={to_date} name='rule_description'
                        value={editTo_date} onChange={e => setEditTo_date(e.target.value)} />
                    <br />
                    <textarea placeholder={notes} name='rule_description'
                        value={editNotes} onChange={e => setEditNotes(e.target.value)} />
                    <br />
                    <button type="submit"
                        disabled={loading}>
                        {loading
                            ? 'Woah, hang tight'
                            : 'Submit!'}
                    </button>
                </form>
            </>
        )
    }

    return (
        <div className='rule'>
            <div className='icons'>
                <img className='click-icon delete' src={trash} alt='delete' height='20px'
                    onClick={() => props.handleDeleteClicked(props.id)} />
                <img className='click-icon' src={edit} alt='edit' height='20px'
                    onClick={() => setEditing(!editing)} />
            </div>

            {(editing === true)
                ? renderEditItems()
                : renderStaticItems()}
        </div>
    )
}