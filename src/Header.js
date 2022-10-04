import colors from "./colors"
import styled from "styled-components"

export default function Header() {
    const { CinzaClaro, Laranja } = colors
    return (
        <TopBar backColor={CinzaClaro} color={Laranja}>
            CINEFLEX
        </TopBar>

    )
}

const TopBar = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backColor};
    width: 360px;
    height: 90px;
    font-family: 'Roboto', sans-seriff;
    font-size: 40px;
    color:${props => props.color};
`