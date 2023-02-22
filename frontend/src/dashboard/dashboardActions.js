import axios from 'axios'

const URL = 'http://localhost:3003/api'

export const getSummary = () => {
    return dispatch => {
        const request = axios.get(`${URL}/billingCycles/summary`)
            .then(resp => dispatch({type:'BILLING_SUMARRY_FETCHED', payload: resp}))
    }
}