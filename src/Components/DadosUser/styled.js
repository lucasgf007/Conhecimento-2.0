import styled from "styled-components";

import { v, btnReset } from '../../styles/variable'

export const Conteiner = styled.div`

`

export const Header = styled.div`
    background-color: ${item => item.bg === 'background-light' ? '#DADDE2' : '#F5F5F5'};
    color: ${item => item.bg === 'background-light' ? '#575B64' : '#575B64'};
    padding: ${v.mdSpacing};
    border-radius: ${v.borderRadius};
    margin: -${v.xlSpacing} 0 ${v.lgSpacing} 0;

    text-transform: uppercase;
`

export const Dados = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    label{
        font-size: 17px;
        font-weight: 500;
    }
    input{
        display: block;
        margin: 7px 0;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 10px;
        border: 1px solid ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};
        color: ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};
        border-radius: 5px;
        outline: 0;
        background-color: transparent;
        font-size: 16px;
    }

    button{
        margin-top: 15px;
        padding: ${v.smSpacing};
        border-radius: 5px;
        font-size: 16px;
        text-transform: uppercase;

        ${btnReset}
        text-align: center;
        color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
        background-color: ${item => item.bg === 'background-light' ? '#48A4E7' : '#F5F5F5'};
    }
`