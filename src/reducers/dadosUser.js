export const initialDadosUser = {
    User: localStorage.getItem('@Auth:user'),
    Id: 0,
    Nome: '',
    Email: '',
    Cargo: '',
    Role: 'user'
}

export const reducerDadosUser = (state, action) => {

    switch(action.type){
        case 'USER_INFO':
            return{...state, 
                User: action.payload.userStatus,
                Id: action.payload.Id,
                Nome: action.payload.Nome,
                Email: action.payload.Email,
                Cargo: action.payload.Cargo,
                Role: action.payload.Role
            }
        case 'USER_ROLE':
                return{...state, Role: action.payload.userRole}
        default:
            return state   
    }
    
}