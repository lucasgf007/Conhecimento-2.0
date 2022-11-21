import styled from "styled-components";
import { v, btnReset } from '../../styles/variable'

export const Container = styled.div`
    border-radius: ${v.borderRadius};
    height: 100%;
    color: ${item => item.bg === 'background-light' ? '#575B64' : '#fff'};
    overflow: auto;

    .card{
        background-color: ${item => item.bg === 'background-light' ? '#fff' : '#575B64'};
        padding: ${v.mdSpacing};
        border-radius: ${v.borderRadius};
        box-shadow: ${v.boxShadow};
    }
`;