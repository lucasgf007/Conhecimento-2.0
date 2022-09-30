import * as C from './styled'
import { useContext } from 'react'
import { Context } from '../../Contexts/ContextGeral'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    const { state, dispatch } = useContext(Context)

    const handleContextData = () => {
        dispatch({
            type: 'USER_NAME',
            payload: {
                name: 'lucas'
            }
        })
    }
    const handleTheme = () => {
        if(state.themeStatus.bg === 'background-light'){
            dispatch({
                type: 'THEME',
                payload: {
                    bg: 'background-dark',
                    text: 'text-light'

                }
            })
        } else {
            dispatch({
                type: 'THEME',
                payload: {
                    bg: 'background-light',
                    text: 'text-dark'
                }
            })
        }
    }

    return(
        <C.Container>
            Login {state.dadosUser.name}
            <br />
            theme: {state.themeStatus.bg} e {state.themeStatus.text}
            <br />
            <Link to='/home'>Page home</Link>
            <br />
            <button onClick={handleContextData}>Insierir dados</button>
            <br />
            <button onClick={handleTheme}>Modo light</button>
        </C.Container>
    )
}