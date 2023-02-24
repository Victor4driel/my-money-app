import axios from "axios"
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab} from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api/billingCycles'

export function getList() {
    const request = axios.get(URL)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(URL, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com Sucesso.')
                dispatch([
                    resetForm('billingCycleForm'), 
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(err => {
                err.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
            .then(resp => dispatch({}))
    }

}