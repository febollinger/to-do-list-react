import styled from "styled-components";

export const ModalStyled = styled.section`
position: absolute;
top: 12rem;
width: 290px;
height: 230px;
background: var(--color-bgHeader);

border:none;
border-radius:4px;

display: flex;
flex-direction: column;
align-items: center;

& .divClose {
    width:95%;
    height: 18%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-white);
    font-size:18px;
    font-weight:500;
}

& .divForm{
    width:95%;
    height:80%;
}

& .divForm form {
    display:flex;
    flex-direction:column;
    gap:0.3rem;
}

& .divForm form label {
    color: var(--color-white);
    font-size:16px;
    font-weight:400;
}

& .divForm form input {
    padding:0.3rem;
    border:none;
    border-radius:2px;
}

& .divForm form select {
    padding:0.2rem;
    border:none;
    border-radius:2px;
}

@media (min-width: 426px){
    width: 350px;

    & .divClose span {
        cursor: pointer;
    }
    
}

@media (min-width: 769px){
    width: 450px;
    height:280px;

    & .divForm form {
        display:flex;
        flex-direction:column;
        gap:0.6rem;
    }
}
`;