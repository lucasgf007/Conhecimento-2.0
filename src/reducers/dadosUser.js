export const initialDadosUser = {
    User: localStorage.getItem('@Auth:user'),
    Role: ''
}

export const reducerDadosUser = (state, action) => {

    switch(action.type){
        case 'USER_INFO':
            return{...state, User: action.payload.userStatus}
        case 'USER_ROLE':
                return{...state, Role: action.payload.userRole}
        default:
            return state   
    }
    
}