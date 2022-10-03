import { useContext } from 'react'
import * as C from './styles'

// components
import { Logout } from '../../Components/Logout'
import { ToggleTheme } from '../../Components/Theme_modo'
import { Context } from '../../Contexts/ContextGeral'


export const Home = () => {
    const { state } = useContext(Context)

    return(
        <C.Container>
                Pagina Home
                <br />
                <h4>Ola, {state.dadosUser.User.displayName}</h4>
                <ToggleTheme />
                <br />
                <Logout />        
                <br />
                <button onClick={()=>console.log(state)}>Ver</button>   
        </C.Container>
       
    )
}