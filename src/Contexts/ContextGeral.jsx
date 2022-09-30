import { createContext, useReducer } from 'react'

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

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}