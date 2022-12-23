import { createContext, useEffect, useReducer } from 'react'

// reducer individual
import { initialDadosUser, reducerDadosUser } from '../reducers/dadosUser'
import { initialThemeStatus, reducerThemeStatus } from '../reducers/themeStatus'

// valores iniciais
const initialState = {
    dadosUser: initialDadosUser,
    themeStatus: initialThemeStatus
}

// criando CONTEXTO com seus valores
// state: onde ficam as variaveis de contexto
// dispatch: onde recebemos os dados
export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

// reducer global
const mainReducer = ( state, action) => ({
    dadosUser: reducerDadosUser(state.dadosUser, action),
    themeStatus: reducerThemeStatus(state.themeStatus, action)
})

// PROVIDER = "bolha de dados" provedor de dados
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)
    
    useEffect(()=>{
        const loadStoreAuth = () => {
            const sessionToken = localStorage.getItem('@Auth:token')
            const localUser = localStorage.getItem('@Auth:user')
            const dados = JSON.parse(localUser)

            if(sessionToken && localUser){
                dispatch({
                    type: 'USER_INFO',
                    payload: {
                        userStatus: JSON.parse(localUser),
                        id: dados.id,
                        id_user: dados.id_user,
                        nome: dados.nome,
                        email: dados.email,
                        cargo: dados.cargo,
                        role: dados.role
                    }
                })
            }

            dispatch({
                type: 'THEME',
                payload: {
                    bg: `${localStorage.getItem('theme_bg') === null ? 'background-light' : localStorage.getItem('theme_bg')}`,
                    text: `${localStorage.getItem('theme_text') === null ? 'text-dark' : localStorage.getItem('theme_text')}`
                }
            })
        }

        loadStoreAuth()
    }, [])

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}