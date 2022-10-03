import { useContext } from "react"
import { Navigate } from "react-router-dom"
// import { AuthGoogleContext } from "../Contexts/authGoogle"
import { Context } from "../Contexts/ContextGeral"

export const PrivateRoutes = ({children}) => {
    // const { signed } = useContext(AuthGoogleContext)
    const { state } = useContext(Context)

    return state.dadosUser.User !== null ? children : <Navigate to='/' />
}