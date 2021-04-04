import TokenService from './token-service';
import config from '../config';

const PlayPacketApiService = {
    getUserTrips() {
        return fetch(`${config.API_ENDPOINT}/trips`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    
    getUserPlans(trip_id) {
        return fetch(`${config.API_ENDPOINT}/plans`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

    },
    
  
    getTripTitle(trip_id) {
        return fetch(`${config.API_ENDPOINT}/trips/${trip_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    addPlan(location, from_date, to_date, notes, trip_id) {
        return fetch(`${config.API_ENDPOINT}/plans`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                location,
                from_date,
                to_date,
                notes,
                trip_id
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteUserPlan(rule_id) {
        return fetch(`${config.API_ENDPOINT}/plans/${rule_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    },
    deleteTrip(trip_id){
        return fetch(`${config.API_ENDPOINT}/trips/${trip_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    },
    
    addTrip(trip_title, user_id) {
        return fetch(`${config.API_ENDPOINT}/trips`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                trip_title,
                user_id
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default PlayPacketApiService;