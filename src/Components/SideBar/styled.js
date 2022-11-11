import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from '../../styles/variable'

export const Container  = styled.div`
    height: 100vh;
    display: flex;
`;

export const SSidebar = styled.div`
    width: ${({ isOpen }) => !isOpen ? `auto` : v.sidebarWidth};
    background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
    padding: ${({ isOpen }) => !isOpen ? v.mdSpacing : v.lgSpacing};
    margin: 15px;
    flex-grow: 1;
    flex-basis: auto;
    border-radius: 10px;
    box-shadow: ${v.boxShadow};

    position: relative;
`;

export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => isOpen ? `-16px` : `-40px`};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
    box-shadow: ${v.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const Slogo = styled.div`
    /* width: 52px; */
    h4{
        font-size: 17px;
        font-weight: 300;
        letter-spacing: 8px;
        text-transform: uppercase;
    }
    display: flex;
    justify-content: center;

    img{
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};
`;

export const SSearch = styled.div`
    background-color: ${item => item.bg === 'background-light' ? '#49A5E5' : '#2B2E35'};

    border: 1px solid ${item => item.bg === 'background-light' ? '#49A5E5' : '#2B2E35'};
    border-radius: ${v.borderRadius};
    input{
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;

export const SSearchIcon = styled.button`
    ${btnReset};
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;

    svg{
        font-size: 20px;
    }
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background-image: var( --${item => item.bg} );
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainerGeral = styled.div`
    overflow-x: auto;
    height: 340px;
    ::-webkit-scrollbar{
        width: 1px;
        border-radius: 50%;
    }
    ::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
        background-color: #2A2D35;    /* color of the scroll thumb */
    }

    @media (max-height: 700px) {
        height: 250px;
    }
`;

export const SLinkContainer = styled.div`
    background: ${({ isActive, bg }) => (!isActive ? `transparent` : (bg ? '#DADDE2' : '#292C34'))};
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover{
        box-shadow: ${v.boxShadow};
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg{
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} /2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background-color: red;
    color: white;

    margin-right: ${v.mdSpacing};
`;

export const Theme = styled.div`
    background: transparent;
    border-radius: ${v.borderRadius};
    margin: 8px 0;

`;

