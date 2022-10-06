import colors from "./services/colors";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Sessions() {
  const { Laranja, CinzaClaro } = colors;

  const params = useParams();
  console.log(params);

  const [session, setSession] = useState([]);
  const [filmSelected, setFilmSelected] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.filmeID}/showtimes`
    );

    promise.then((response) => {
      setFilmSelected(response.data);
      setSession(response.data.days);
    });

    promise.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  console.log(session);
  console.log(filmSelected);

  return (
    <>
      <Description>Selecione o horário</Description>

      {session.map((value) => (
        <Day>
          {value.weekday} - {value.date}
          <AllSessions>
            {value.showtimes.map((h) => (
              <HourSession
                key={h.id}
                backColor={Laranja}
                onClick={() => console.log(h.id)}
              >
                {h.name}
              </HourSession>
            ))}
          </AllSessions>
        </Day>
      ))}

      <Footer backColor={CinzaClaro}>
        <img src={filmSelected.posterURL} />
        {filmSelected.title}
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

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: "Roboto", sans-seriff;
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const HourSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: ${(props) => props.backColor};
  margin-top: 20px;
  margin-right: 20px;
  font-size: 15px;
  color: white;
  border-radius: 2px;
`;

const AllSessions = styled.div`
  display: flex;
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
