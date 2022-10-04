import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${item => item.js ? `space-between` : `center`};
    padding: 10px;
    span{
      padding-right: 5px;
      font-size: 11px !important;
    }

  svg{
    cursor: pointer;
  }  

`;