import * as C from './sytled'
import { useContext } from 'react'
import { Context } from '../../Contexts/ContextGeral'
import { Moon, RocketLaunch } from 'phosphor-react'

export const ToggleTheme = ({ msg, justify }) => {
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
        <C.Container js={justify}>
            {msg && 
                <span>Mude para o tema {state.themeStatus.bg === 'background-light' ? 'dark🌑→' : 'chama🔥→'}</span>
            }
            {state.themeStatus.bg === 'background-light' && 
                <Moon size={25} onClick={handleTheme} />
            }
            {state.themeStatus.bg === 'background-dark' && 
                <RocketLaunch size={25} onClick={handleTheme} />
            }
        </C.Container>
    )
}