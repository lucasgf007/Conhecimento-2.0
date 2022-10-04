import * as C from './styled'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Contexts/ContextGeral'

import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'

export const Logout = ({ children }) => {
    const { dispatch } = useContext(Context)
    const navigate = useNavigate()

    function logout() {
        signOut(auth).then(()=>{
            sessionStorage.clear()
            dispatch({
                type: 'USER_INFO',
                payload: {
                    userStatus: null
                }
            })
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <C.Btn onClick={()=>logout()}>
            {children}
        </C.Btn>
    )
}