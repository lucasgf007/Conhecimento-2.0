import { Link } from "react-router-dom";
import styled from "styled-components";
import { v, btnReset } from '../../styles/variable'

export const Container = styled.div`
    border-radius: ${v.borderRadius};
    height: 100%;
    /* background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'}; */
    color: ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};

    display: flex;
    flex-direction: column;
    overflow: auto;

    .card{
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
        margin: ${v.smSpacing};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};

        display: flex;
    }
`;

export const Header = styled.div`
    width: 100%;

`;

export const navmenu = styled.nav`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    ul{
        list-style: none;
        float:left;
    }
    li{
        position: relative;
        float: left;
        margin: 0 15px;
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
`;

export const btns = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};
`;

export const Body = styled.div`

`;