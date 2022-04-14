import axios from 'axios'
import useSessionStorage from '../hooks/useSessionStorage'
export function getHeaders(jwt) {
    return {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('jwt')
      }
}
const getReimbursements = async () => {
    const reimbursements = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/reimbursements',
            headers: getHeaders()
        }).then(function(response) {
            return response.data
        })
        .catch(function(e) {
            console.log(e)
        })
    }
}

const getReimbursementById = async(id) => {
    const reimbursement = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/reimbursements/' + id,
            headers: getHeaders()
        })
        .then(function(response){
            console.log("res", response)
        })
        .catch(function(e) {
            console.log(e)
        })
    }
}

const createReimbursement = async (amount, description, stat, type) => {
    await axios({
        method: 'POST',
        url: 'http://localhost:8080/api/reimbursements',
        headers: getHeaders()
    })
    .then(function(response){
        console.log("res", response)
    })
    .catch(function(e) {
        console.log(e)
    })
}