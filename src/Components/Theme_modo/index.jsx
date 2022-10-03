import * as C from './sytled'
import { useContext } from 'react'
import { Context } from '../../Contexts/ContextGeral'
import { Sun, Moon } from 'phosphor-react'

export const ToggleTheme = () => {
    const { state, dispatch } = useContext(Context)

    const handleTheme = () => {

        dispatch({
            type: 'THEME',
            payload: {
                bg: `${state.themeStatus.bg === 'background-light' ? 'background-dark' : 'background-light'}`,
                text: `${state.themeStatus.text === 'text-dark' ? 'text-light' : 'text-dark'}`
            }
        })

        localStorage.setItem('theme_bg', `${state.themeStatus.bg === 'background-light' ? 'background-dark' : 'background-light'}`)
        localStorage.setItem('theme_text', `${state.themeStatus.text === 'text-dark' ? 'text-light' : 'text-dark'}`)
    }

    return(
        <C.Container>
            
            {state.themeStatus.bg === 'background-light' && 
                <Moon size={25} onClick={handleTheme} />
            }
            {state.themeStatus.bg === 'background-dark' && 
                <Sun size={25} onClick={handleTheme} />
            }
        </C.Container>
    )
}