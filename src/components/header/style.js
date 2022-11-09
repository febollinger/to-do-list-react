import styled from "styled-components";

export const HeaderStyled = styled.header`
background: var(--color-bgHeader);
color: var(--color-white);
font-weight: 400;
font-size: 14px;

width:100%;
height: 100px;

display:flex;
align-items: center;

& section {
    max-width:1300px;
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

& .date{
    align-self: center;
}

& .saldo {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
}

& .despesas {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
}
`