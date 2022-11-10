import axios from "axios"

const BASE = 'https://9eqgiael76.execute-api.us-east-1.amazonaws.com/dev'

export const useApi = {
    getAllUsers: async () => {
        let response = await axios.get(`${BASE}/crud`, {
            data: {

            }
        })
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
        // const response = await fetch(`${BASE}/test_pass`, {
        //     body: {
        //         e_mail: e_mail,
        //         password: password
        //     }
        // });
        // const user = await response.json();
        // return user;

        // let e_mail_ = JSON.stringify(e_mail)
        // let pass = JSON.stringify(password)

        let response = await axios.get(`${BASE}/test_pass`, {
            data: {
                "e_mail": "gabriel@gmail.com",
                "password": "171717"
            }
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