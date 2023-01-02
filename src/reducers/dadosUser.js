export const initialDadosUser = {
    token: localStorage.getItem('@Auth:token'),
    id: 0,
    id_user: 0,
    nome: '',
    email: '',
    cargo: '',
    role: 'user'
}

export const reducerDadosUser = (state, action) => {

    switch(action.type){
        case 'USER_INFO':
            return{...state, 
                token: action.payload.token,
                id: action.payload.id,
                id_user: action.payload.id_user,
                nome: action.payload.nome,
                email: action.payload.email,
                cargo: action.payload.cargo,
                role: action.payload.role
            }
        case 'USER_ROLE':
                return{...state, role: action.payload.userRole}
        default:
            return state   
    }
    
}