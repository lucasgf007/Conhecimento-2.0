import * as C from './styled'

import { useApi } from '../../services/userApi'
import { useEffect, useState } from 'react'

export const Users = () => {
    const [ allUsers, setAllUsers ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        const loadUsers = () => {
            setLoading(true)

            useApi.getAllUsers()
            .then((e)=>{
                setAllUsers(e.body)

                setLoading(false)
            })
            .catch((e)=>{
                console.log(e)
            })
            
        }

        loadUsers()
    }, [])

    

    return(
        <C.Container>
            <h1>Tabela de preços</h1>

            <table>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Login</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {loading ? (
                        <tr>
                            <td>Carregando...</td>
                        </tr>
                    ) : (
                        allUsers.map((item)=>(
                            <tr key={item.ID}>
                                <td>{item.Nome}</td>
                                <td>{item.E_mail}</td>
                                <td>{item.Cargo}</td>
                                <td>{item.Role}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

        </C.Container>
    )
}