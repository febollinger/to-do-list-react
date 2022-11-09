import styled from "styled-components";

export const MainStyled = styled.main`
background: var(--color-bgHeader);
width: 100%;
height: 100vh;

& .addNew{
    display:flex;
    flex-direction:row;
    width:80%;
    height:35px;

    position:relative;
    top:1.5rem;

    display:flex;
    justify-content: space-between;
    align-items: center;

    color:var(--color-darkGray);
    font-weight:500;
    font-size:20px;
}

& .tasks {
    width:98%;
    height:100%;

    position:relative;
    top:2.5rem;

    display: flex;
    justify-content: center;
}

& .tasks ul {
    width:90%;
    height:100%;

    display:flex;
    flex-direction: column;
    gap:0.5rem;

}

& .tasks ul li {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
    height:2.5rem;

    background: var(--color-lightGray);
    border:none;
    border-radius:0 1px 1px 0;

    color:var(--color-darkGray);
}

& .tasks ul li p {
    align-self:center;
}

& .listInfos {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    
    width: 100%;
    justify-content: space-between;
    padding: 0.2rem;
}

& .saida{
    background:var(--color-red);
    border:none;
    border-radius:2px 0 0 2px;
    width:1%;

    display: flex;
    justify-content: flex-end;;

}

& .entrada{
    background:var(--color-green);
    border:none;
    border-radius:2px 0 0 2px;
    width:1%;

    display: flex;
    justify-content: flex-end;

}

@media (min-width:869px){
    & .tasks{
        width:80%;

    }

    & .saida{
        width:5px;
    }

    & .entrada{
        width:5px;
    }
}

`;