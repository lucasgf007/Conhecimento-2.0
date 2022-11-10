import axios from "axios"

const BASE = 'https://9eqgiael76.execute-api.us-east-1.amazonaws.com/dev'

export const useApi = {
    getAllUsers: async () => {
        let response = await axios.get(`${BASE}/crud`, {})
        return response.data
    },
    addNewUser: async (Nome, E_mail, Cargo, Senha, Role) => {
        let response = await axios.post(`${BASE}/crud`, {
            Nome,
            E_mail,
            Cargo,
            Senha,
            Role
        })
        console.log(response)
        return response.data
    },
    delUser: async (id) => {
        let response = await axios.delete(`${BASE}/crud`, {
            id
        })
        console.log(response)
        return response.data
    },
    updateUser: async (id, Nome, E_mail, Cargo, Senha, Role) => {
        let response = await axios.put(`${BASE}/crud`, {
            id,
            Nome,
            E_mail,
            Cargo,
            Senha,
            Role
        })
        console.log(response)
        return response.data
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