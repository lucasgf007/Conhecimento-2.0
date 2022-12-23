import axios from "axios"

const BASE = process.env.REACT_APP_API_RESPONSE

export const useApi = {
    getAllUsers: async () => {
        let response = await axios.get(`${BASE}/user/all`)
        return response.data
    },
    delUser: async (id) => {
        let response = await axios.delete(`${BASE}/user/delete?id=${id}`)
        return response.data
    },
    updateUser: async (id, nome, email, cargo) => {
        let response = await axios.post(`${BASE}/user/update`, {
            id,
            nome,
            email,
            cargo,
        })
        return response.data
    },
    user: async (nome, senha) => {
        
        let response = await axios.post(`${BASE}/user/login`, {
            nome,
            senha
        })
        return response.data
    },
    createUser: async (id_user, nome, senha, email, cargo, role) => {
        let response = await axios.post(`${BASE}/user/create`, {
            id_user,
            nome,
            senha,
            email,
            cargo,
            role
        })
        return response.data
    },
    verificationUser: async (id) => {
        let user = await axios.post(`${BASE}/user`, {
            id
        })

        return user.data
    }
}