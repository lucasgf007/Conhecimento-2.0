import styled from "styled-components";
import { v, btnReset } from '../../styles/variable'

export const Container = styled.div`
    
    padding: ${v.mdSpacing};
    border-radius: ${v.borderRadius};
    box-shadow: ${v.boxShadow};
    height: 100%;
    background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
    color: ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};

    .min-container{
        display: flex;
        overflow: auto;
    }
`

export const DadosPerfil = styled.div`
    width: 70%;
    padding: ${v.smSpacing};
    

    .card{
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#2B2E35'};
        margin: ${v.smSpacing};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};
    }
`;

export const Perfil = styled.div`
    width: 30%;
    padding: ${v.smSpacing};
    
    
    .card{
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#2B2E35'};
        margin: ${v.smSpacing};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};
    }
    .foto{
        text-align: center;
        

        .icon{
            margin: -30px 15px 15px 15px;
            display: flex;
            justify-content: center;

            button{
                ${btnReset}
            }

            svg{
                background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
                border-radius: 50%;
                box-shadow: ${v.boxShadow};
                padding: 5px;
            }
        }
    }
    .detalhes{
        text-align: center;

        h3{

        }
    }
`;

export const CloseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 45px;
    
    a{
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
    }
`;