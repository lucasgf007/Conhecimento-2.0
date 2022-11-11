import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Context } from "../Contexts/ContextGeral"

export const PrivateRoutes = ({children}) => {
    const { state } = useContext(Context)

    return state.dadosUser.User !== null ? children : <Navigate to='/' />
}

export const Permission = ({children}) => {
    const { state } = useContext(Context)

    // const [permission, setPermission] = useState(false)

    // useEffect(() => {
    //     const loadRole = () => {
    //         // console.log('dentro da função')
    //         // setPermission(true)

    //         if(){
    //             setPermission(true)
    //         }
    //     }

    //     loadRole()
    // }, [])

    return state.dadosUser.Role === 'admin' ? children : <Navigate to='/home/' />
}