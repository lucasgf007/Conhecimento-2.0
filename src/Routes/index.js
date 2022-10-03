import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
// import { AuthGoogleContext } from "../Contexts/authGoogle"
import { Context } from "../Contexts/ContextGeral"

export const PrivateRoutes = () => {
    // const { signed } = useContext(AuthGoogleContext)
    const { state } = useContext(Context)

    return state.dadosUser.User !== null ? <Outlet /> : <Navigate to='/' />
}