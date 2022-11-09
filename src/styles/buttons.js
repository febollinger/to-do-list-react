import styled from "styled-components";

export const Button = styled.button`
background: var(--color-bgHeader);
color: var(--color-white);
padding:0.5rem;
font-size:16px;
font-weight:400;

border:none;
border-radius: 6px;

cursor:pointer;

`;

export const ButtonDlt = styled.button`
background: transparent;
cursor:pointer;

display: flex;
align-items: center;
justify-content: space-between;
width: 65px;

`;