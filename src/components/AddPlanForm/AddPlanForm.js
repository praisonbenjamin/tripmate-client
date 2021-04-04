import React, { useState } from 'react';
import './AddPlanForm.css'
import PlayPacketApiService from '../../services/api-service';

export default function AddRuleForm(props) {
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [from_date, setFrom_date] = useState('');
    const [to_date, setTo_date] = useState('');
    const [notes, setNotes] = useState('');



    function handlePlanSubmit(e) {
        e.preventDefault();
        setLoading(true);

        console.log('testing')

        PlayPacketApiService.addPlan(location, from_date, to_date, notes, props.trip_id)
            .then(newPlan => {
                setLoading(false);
                setLocation('');
                setFrom_date('');
                setTo_date('');
                setNotes('');
                props.afterPost(newPlan);
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }

    return (
        <form className='AddRuleForm' onSubmit={e => handlePlanSubmit(e)}>
            <div className='form-options'>
                <label htmlFor='location'>Location/Plan title*</label>
                <br />
                <input type='text' placeholder='Enter location for plan' name='location'
                    value={location} onChange={e => setLocation(e.target.value)} />
            </div>
            <div className='form-options'>
                <label htmlFor='from_date'>From date*</label>
                <br />
                <textarea placeholder='Enter from date'
                    name='from_date' required
                    value={from_date} onChange={e => setFrom_date(e.target.value)} />
            </div>
            <div className='form-options'>
                <label htmlFor='to_date'>To date*</label>
                <br />
                <textarea placeholder='Enter to date'
                    name='to_date' required
                    value={to_date} onChange={e => setTo_date(e.target.value)} />
            </div>
            <div className='form-options'>
                <label htmlFor='notes'>Notes</label>
                <br />
                <input type='text' placeholder='Enter notes for plan' name='notes'
                    value={notes} onChange={e => setNotes(e.target.value)} />
            </div>
            <button type="submit"
                disabled={loading}>
                Add Plan
            </button>
        </form>
    )
}