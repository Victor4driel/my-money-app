import axios from "axios"

const URL = 'http://localhost:3003/api/billingCycles'

export function getList() {
    const request = axios.get(URL)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}