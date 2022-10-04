import styled from "styled-components";
import { v } from "../../styles/variable";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const FormContainer = styled.div`
    background-color: #fff;
    color: #2B2D35;
    width: 900px;
    border-radius: ${v.borderRadius};
    display: flex;
    flex-direction: row;
    box-shadow: ${v.boxShadow};

    .img{
        width: 50%;
        border-radius: ${v.borderRadius} 0 0 ${v.borderRadius};
        background-image: linear-gradient(to right top, #dcecfc, #deedfd, #e0eefe, #e2effe, #e4f0ff);
        text-align: center;
        padding: 20px 0;
        img{
            width: 320px;
        }
    }
    .login{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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

        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            width: 70%;
        }

        button{
            margin-top: 20px;
            border: 0;
            background-image: var( --${item => item.bg} );
            color: #fff;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 800;
            padding: 8px 15px;
            border-radius: 2px;
        }

        p{
            color: #FF5E64;
            padding: 10px;
        }
    }
`;