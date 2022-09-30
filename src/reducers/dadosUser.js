export const initialDadosUser = {
    name: ''
}

export const reducerDadosUser = (state, action) => {

    switch(action.type){
        case 'USER_NAME':
            return{...state, name: action.payload.name}
        default:
            return state   
    }
    
}