import styled from "styled-components";
import { v } from '../../styles/variable'

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
        width: 30%;
    }
`;

export const Header = styled.div`
    .container{
        display: flex;
        justify-content: space-between;

        .data{
            display: flex;
            justify-content: space-between;
        }

        .icon{
            padding: ${v.mdSpacing};
            background-color: ${item => item.bg === 'background-light' ? '#DADDE2' : 'rebeccapurple'};
            border-radius: ${v.borderRadius};
            box-shadow: ${v.boxShadow};
            margin-top: -35px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
        }

        .text{
            margin: ${v.mdSpacing};
            text-align: right;
            h3{
                font-size: 14px;
                font-weight: 300;
                text-transform: capitalize;
            }
            span{
                font-size: 25px;
                font-weight: 500;
            }
        }

        .rodape{
            border-top: 0.5px solid #EEEEEE;
            font-weight: 300;
            margin-top: 10px;
            padding: ${v.smSpacing};
            display: flex;
            align-items: center;
            svg{
                margin-right: 10px;
                font-weight: 300;
            }
        }
    }
`;

export const List_semanal = styled.div`
    background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
    margin: ${v.lgSpacing};
    padding: ${v.mdSpacing};
    border-radius: ${v.borderRadius};
    box-shadow: ${v.boxShadow};

    display: flex;
    justify-content: center;
    flex-direction: column;

    h4{
        margin-bottom: 10px;
        font-size: 20px;
        text-transform: capitalize;
        font-weight: 300;
    }
    
    th, td{
        text-align: center;
        padding: 12px 7px;

        svg{
            width: 60px;
        }
    }

    th {
        font-weight: 800;
    }

    .emoji{
        font-size: 25px;
    }
`;

export const body = styled.div`
    display: flex;  


    .podio{
        width: 45%;
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
        margin: ${v.lgSpacing};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};

        .dados{
            display: flex;
            align-items: center;
            
            .perfil_foto{
                width: 30%;

                svg{
                    width: 95%;
                }
            }
            .perfil_dados{
                width: 55%;

                h2{
                    font-size: 40px;
                    svg{
                        font-weight: bold;
                        font-size: 20px;
                    }
                }
            }

            
        }

        h3{
            margin-bottom: 10px;
            font-size: 20px;
            text-transform: capitalize;
            font-weight: 300;
        }
    }
    .notification{
        width: 70%;
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
        margin: ${v.lgSpacing};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};

        h3{
            margin-bottom: 10px;
            font-size: 20px;
            text-transform: capitalize;
            font-weight: 300;
        }
    }
    
`;