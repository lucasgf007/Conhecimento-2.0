import axios from "axios"

const BASE = 'https://jsonplaceholder.typicode.com'

export const useApi = {
    getAllUsers: async () => {
        let response = await axios.get(`${BASE}/users`)
        return response.data
    },
    addNewUser: () => {

    },
    delUser: () => {
        
    },
    user: async (email, pass) => {
        let response = await axios.get(`${BASE}/users`, {
            params: {
                email
            }
        })
        return response.data
    }
}