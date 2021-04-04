import React, { useState } from 'react';
import plus from '../../images/icons/plus.png';
import minus from '../../images/icons/minus.png';
import AddPlanForm from '../AddPlanForm/AddPlanForm'

export default function AddPlanSelect(props) {
    const [adding, setAdding] = useState(false);

    function afterPost() {
        setAdding(false);
    }

    let imgSrc;

    (adding === false)
        ? imgSrc = plus
        : imgSrc = minus;


    return (
        <div className='RuleAddSelect'>
            <div className='flex'>
                <h4>{props.location}</h4>

                <img className='click-icon' src={imgSrc} alt='' height='30px'
                    onClick={() => setAdding(!adding)} />
            </div>

            { adding && (
                <AddPlanForm trip_id={props.trip_id}
                    afterPost={(newPlan) => afterPost(newPlan)} />
            )}
        </div>
    )
}