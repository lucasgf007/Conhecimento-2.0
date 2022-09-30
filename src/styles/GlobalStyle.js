import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #00B37E;
        --text-light: #fff;
        --text-dark: #000;
        --caption: #8d8d99;
        --gray: #e1e1e6;
        --background-light: rgba(255, 255, 255, 0.05);
        --background-dark: linear-gradient(to right top, #2f3136, #2d3036, #2c2e35, #2a2d35, #282c34);
    }
    
    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-image: var( --${item => item.bg} );
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        color: var( --${item => item.text} );
    }
`;