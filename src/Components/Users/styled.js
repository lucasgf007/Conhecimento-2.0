import styled from "styled-components";
import { v, btnReset } from '../../styles/variable'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    text-align: center;

    th, td{
        padding: 15px;
        text-align: center;
    }


    button{
        ${btnReset}
        padding: ${v.smSpacing};
        border-radius: ${v.borderRadius};
        background-color: ${item => item.bg === 'background-light' ? '#49A5E6' : '#2C2F35'};
        color: #fff;
    }

    th {
        font-weight: 800;
    }
`;


export const Alert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${v.mdSpacing};
    border-radius: ${v.borderRadius};
    box-shadow: ${v.boxShadow};
    background-color: #FFF;
    color: #2C2F35;

    h3{
        margin-right: 15px;
        font-weight: 500;

    }

    .confirm{
        margin-right: 10px;
        background-color: #00E33B;
        color: #FFF;
    }
    .cancel{
        background-color: red;
        color: #FFF;
    }
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    color: #2C2F35;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 2px solid #313243;

        button{
            ${btnReset}
            padding: ${v.smSpacing};
            border-radius: ${v.borderRadius};
            background-color: red;
            color: #fff;
        }
    }
    .body{
        margin-top: 20px;
        label{
            font-size: 17px;
            font-weight: 500;
            width: 70%;

            input, select {
                display: block;
                margin: 7px 0;
                box-sizing: border-box;
                width: 100%;
                padding: 10px 10px;
                border: 1px solid ${item => item.campos ? '#FF5E64' : '#2B2D35'};
                border-radius: 1px;
                color: #313243;
                outline: 0;
                background-color: #FFF;
                font-size: 16px;
            }
        }
    }
`;