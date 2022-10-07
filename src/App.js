import styled from "styled-components";
import GlobalStyle from "./services/GlobalStyle";
import Header from "./Header";
import Films from "./Films";
import Sessions from "./Sessions";
import Seats from "./Seats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="/filme/:idFilme" element={<Sessions />} />
            <Route path="/sessao/:idSessao" element={<Seats />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
