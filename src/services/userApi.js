import axios from "axios"

const BASE = 'https://9eqgiael76.execute-api.us-east-1.amazonaws.com/dev'

export const useApi = {
    getAllUsers: async () => {
        let response = await axios.get(`${BASE}/crud`, {})
        return response.data
    },
    addNewUser: () => {

    },
    delUser: () => {
        
    },
    updateUser: () => {
        
    },
    user: async (e_mail, password) => {

        let response = await axios.post(`${BASE}/test_pass`, {
            e_mail,
            password
        })
        console.log(response)
        return response.data
    },
    roleUser: async (id) => {
        let response = await axios.get(`${BASE}/users`, {
            params: {
                id
            }
        })
        return response.data
    }
}