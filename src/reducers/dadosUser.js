export const initialDadosUser = {
    User: localStorage.getItem('@Auth:user')
}

export const reducerDadosUser = (state, action) => {

    switch(action.type){
        case 'USER_INFO':
            return{...state, User: action.payload.userStatus}
        default:
            return state   
    }
    
}