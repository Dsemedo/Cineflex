import styled from "styled-components";
import GlobalStyle from "./services/GlobalStyle";
import Header from "./Header";
import Films from "./Films";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [dataTitle, setDataTitle] = useState("");
  const [dataSession, setDataSession] = useState("");
  const [dataDay, setDataDay] = useState("");
  const [dataSeats, setDataSeats] = useState();
  const [dataName, setDataName] = useState();
  const [dataCPF, setDataCPF] = useState();

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<Films />} />
            <Route
              path="/filme/:idFilme"
              element={<Sessions setDataTitle={setDataTitle} />}
            />
            <Route
              path="/sessao/:idSessao"
              element={
                <Seats
                  setDataDay={setDataDay}
                  setDataSession={setDataSession}
                  setDataSeats={setDataSeats}
                  setDataName={setDataName}
                  setDataCPF={setDataCPF}
                />
              }
            />
            <Route
              path="/sucesso"
              element={
                <Success
                  dataTitle={dataTitle}
                  dataSession={dataSession}
                  dataDay={dataDay}
                  dataSeats={dataSeats}
                  dataName={dataName}
                  dataCPF={dataCPF}
                />
              }
            />
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
