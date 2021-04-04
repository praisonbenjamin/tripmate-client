import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import './TripPlansPage.css'
import AddPlanForm from '../../components/AddPlanForm/AddPlanForm';
import SideBar from '../../components/SideBar/SideBar';
import UserPlan from '../../components/UserPlan/UserPlan';
import PlayPacketApiService from '../../services/api-service';
import TripsBurgerMenu from '../../components/TripsBurgerMenu/TripsBurgerMenu';


export default function TripPlansPage(props) {
    const isDesktop = useMediaQuery({ minDeviceWidth: 800 })
    //form control
    const [adding, setAdding] = useState(false);
    //Inital render
    const [title, setTitle] = useState('')
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getTripTitle(props.match.params.tripId)
            .then(trip => {
                setTitle(trip.trip_title);
            })
        PlayPacketApiService.getUserPlans(props.match.params.tripId)
            .then(tripPlans => {
                setPlans(tripPlans);
            })
    }, [props.match.params.tripId]);


    

    const userPlans = plans.filter(plan => plan.trip_id === Number(props.match.params.tripId));
    
    function afterPost(newPlan) {
        const addPlan = plans;
        addPlan.push(newPlan)
        setPlans(addPlan);
        setAdding(false);
    }
    const mapPlans = userPlans.map(plan => {
        return (
            <UserPlan key={plan.id} id={plan.id}
                location={plan.location}
                from_date={plan.from_date}
                to_date={plan.to_date}
                notes={plan.notes}
                trip_id={props.match.params.tripId}
                
                handleDeleteClicked={handleDeleteClicked} />
        )
    })

    function handleDeleteClicked(plan_id) {
        PlayPacketApiService.deleteUserPlan(plan_id)
            .then(() => {
                const filterPlans = plans.filter(plan => plan.id !== plan_id)
                setPlans(filterPlans);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='GamesRulesPage'>
            {!isDesktop && (
                <div className='burger'>
                    <TripsBurgerMenu isOpen={false} category='usersgames'
                        goBack={props.history.goBack} />
                </div>
            )}
            <div className='content'>
                {isDesktop && (
                    <div className='Sidebar'>
                        <SideBar category='usersgames'
                            goBack={props.history.goBack} />
                    </div>
                )}
                <div className='userRules'>
                    <h2>Plans for: {title}</h2>
                    <button onClick={() => setAdding(!adding)}>
                        {adding === false
                            ? 'Add Plan' 
                            : 'Not Now'}
                    </button>

                    {adding && (
                        <AddPlanForm trip_id={props.match.params.tripId}
                            afterPost={(newPlan) => afterPost(newPlan)} />
                    )}
                    {mapPlans}
                </div>
            </div>
        </div>
    )
}