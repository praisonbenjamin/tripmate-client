import React, { useState } from 'react';
import './AddTripForm.css'
import PlayPacketApiService from '../../services/api-service';

export default function AddRuleForm(props) {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');



    function handleTripSubmit(e) {
        e.preventDefault();
        setLoading(true);

        PlayPacketApiService.addTrip(title, props.user_id)
            .then(newTrip => {
                setLoading(false);
                setTitle('');
                props.onPostSucess()
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }

    return (
        <form className='AddRuleForm' onSubmit={e => handleTripSubmit(e)}>
            <div className='form-options'>
                <label htmlFor='title'>Trip Title*</label>
                <br />
                <input type='text' placeholder='Enter title for trip' name='title'
                    required
                    value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            
            <button type="submit"
                disabled={loading}>
                Add Plan
            </button>
        </form>
    )
}