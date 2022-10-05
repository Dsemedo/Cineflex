import styled from "styled-components";
import Header from "./Header";
import Films from "./Films";
import Sessions from "./Sessions";
import GlobalStyle from "./services/GlobalStyle"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    
    const [id, setId] = useState("")
    
    return (
        <>
            <BrowserRouter>

                <GlobalStyle />
                <Container>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Films setId={setId}/>} />
                        <Route path= {`/filme/:id`} element={<Sessions id={id}/>} />
                    </Routes>

                </Container>

            </BrowserRouter>

        </>

    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`