import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    .form{
        width: 65%;

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
    .avatar{
        width: 35%;
    }
`;