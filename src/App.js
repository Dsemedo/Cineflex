import styled from "styled-components";
import Header from "./Header";
import InitialWindow from "./InitialWindow";

export default function App() {
    return(
        <Container>

        <Header/>
        <InitialWindow/>
        </Container>
        
    )
}

const Container = styled.div`
    width: 400px;
    height: 1000px;
    background-color: green;
`