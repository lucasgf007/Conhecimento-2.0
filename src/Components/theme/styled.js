import styled from "styled-components";

import { v } from '../../styles/variable'

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    padding: calc(${v.mdSpacing});
    width: 100%;

    h1{
        font-size: 14px;
    }
`;