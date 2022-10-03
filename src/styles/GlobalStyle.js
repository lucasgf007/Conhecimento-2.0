import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #00B37E;
        --text-light: #fff;
        --text-dark: #000;
        --caption: #8d8d99;
        --gray: #e1e1e6;
        --background-light: linear-gradient(to right top, #499fef, #47a1ec, #47a3e8, #49a5e4, #4ca7e0);
        --background-dark: linear-gradient(to right top, #2f3136, #2d3036, #2c2e35, #2a2d35, #282c34);
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;

        background-image: var( --${item => item.bg} );
        color: var( --${item => item.text} );
        letter-spacing: .6px;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        
    }

    button{
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
    }
`;