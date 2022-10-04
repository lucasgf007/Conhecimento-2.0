import styled from "styled-components";
import { v } from "../../styles/variable";

export const Btn = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    cursor: pointer;
`