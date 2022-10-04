import styled from "styled-components";

export default function InitialWindow() {
    return(
        <Description>
            Selecione o filme
        </Description>
    )
}

const Description = styled.div`
    width:100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-seriff;
    font-size: 25px;
`