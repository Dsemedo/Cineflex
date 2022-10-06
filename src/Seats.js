import styled from "styled-components";
import colors from "./services/colors";
import axios from "axios";
import Seat from "./Seat";
import { useState, useEffect } from "react";

export default function Seats() {
  const {
    Laranja,
    AzulClaro,
    AzulEscuro,
    CinzaClaro,
    CinzaEscuro,
    AmareloClaro,
    AmareloEscuro,
  } = colors;

  const [seatAvailable, setSeatAvailable] = useState([]);
  const [infoSeats, setInfoSeats] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/1/seats"
    );

    promise.then((response) => {
      setSeatAvailable(response.data.movie);
      setInfoSeats(response.data.seats);
      console.log(response.data.seats);
    });

    promise.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  return (
    <>
      <Description>Selecione o(s) assento(s)</Description>

      <AllSeats>
        {infoSeats.map((s) => (
          <Seat s={s} />
        ))}
      </AllSeats>

      <Damn>
        <SubtitleSeats>
          <NumberSeat backColor={AzulClaro} border={AzulEscuro} />
          Disponivel
        </SubtitleSeats>

        <SubtitleSeats>
          <NumberSeat backColor={CinzaClaro} border={CinzaEscuro} />
          Disponivel
        </SubtitleSeats>

        <SubtitleSeats>
          <NumberSeat backColor={AmareloClaro} border={AmareloEscuro} />
          Disponivel
        </SubtitleSeats>
      </Damn>

      <Footer backColor={CinzaClaro}>
        <img alt="Foto do filme" src={seatAvailable.posterURL} />
        <p>{seatAvailable.title}</p>
        {infoSeats.name}
      </Footer>
    </>
  );
}

const Description = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-seriff;
  font-size: 25px;
`;

const AllSeats = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Footer = styled.div`
  width: 100%;
  height: 15%;
  background-color: ${(props) => props.backColor};
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-family: "Roboto", sans-seriff;
  background: #dfe6ed;
  border: 1px solid #9eadba;

  img {
    border: 10px solid #ffffff;
    width: 15%;
    height: 75%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const NumberSeat = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.backColor};
  border: 1px solid ${(props) => props.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 10px;
`;

const SubtitleSeats = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Damn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
