import axios from "axios"

const BASE = 'https://9eqgiael76.execute-api.us-east-1.amazonaws.com/dev'

export const useApi = {
    getAllUsers: async () => {
        let response = await axios.get(`${BASE}/teste/14`)
        return response.data
    },
    delUser: async (id) => {
        let response = await axios.delete(`${BASE}/crud`, {
            "id": "16"
        })
        console.log(response)
        return response.data
    },
    updateUser: async (id, Nome, E_mail, Cargo, Senha, Role) => {
        let response = await axios.put(`${BASE}/crud`, {
            id,
            Nome,
            E_mail,
            Cargo
        })
        console.log(response)
        return response.data
    },
    user: async (e_mail, password) => {
        
        let response = await axios.post(`${BASE}/test_pass`, {
            e_mail,
            password
        })
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