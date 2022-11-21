import styled from "styled-components";
import { v, btnReset } from '../../styles/variable'

export const Container = styled.div`
    border-radius: ${v.borderRadius};
    height: 100%;
    color: ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};
    overflow: auto;

    .card{
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
        margin: ${v.lgSpacing};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .filter{
        span{
            padding: 0 10px;

            input {
                padding: 6px;
                box-sizing: border-box;
                border: 1px solid ${item => item.bg === 'background-light' ? '#48A4E8' : '#2D2F36'};
                border-radius: 7px;
                color: #FFF;
                outline: 0;
                background-color: ${item => item.bg === 'background-light' ? '#48A4E8' : '#2D2F36'};
                font-size: 16px;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 3px;
            }
        }
    }

    .update{
        button{
            ${btnReset}
            font-size: 16px;
            font-weight: 400;
            text-transform: capitalize;

            display: flex;
            justify-content: center;
            align-items: center;

            svg{
                margin-left: 5px;
            }
        }
    }

`;

export const Body = styled.div`
    
    text-align: center;
    
    .tabela{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        overflow-x: auto;
    }

    h3{
        font-size: 25px;
        font-weight: 500;
    }
    hr{
        margin: 10px 0;
    }

    th, td{
        padding: 15px;
        text-align: center;
    }
`;