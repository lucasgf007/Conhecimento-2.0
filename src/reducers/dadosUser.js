export const initialDadosUser = {
    User: sessionStorage.getItem('@AuthFirebase:token')
}

export const reducerDadosUser = (state, action) => {

    switch(action.type){
        case 'USER_INFO':
            return{...state, User: action.payload.userStatus}

        default:
            return state   
    }
    
}