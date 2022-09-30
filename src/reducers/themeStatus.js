export const initialThemeStatus = {
    bg: 'background-light',
    text: 'text-dark'
}

export const reducerThemeStatus = (state, action) => {

    switch (action.type) {
        case 'THEME':
            return{ ...state, bg: action.payload.bg, text: action.payload.text }
            
        default:
            return state
    }

}