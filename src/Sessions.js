import colors from "./services/colors";
import styled from "styled-components";
import axios from "axios";
import Loading from "../src/assets/img/loading.gif";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Sessions({ setDataTitle }) {
  const { Laranja, CinzaClaro } = colors;

  const params = useParams();

  const [session, setSession] = useState([]);
  const [filmSelected, setFilmSelected] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme}/showtimes`
    );

    promise.then((response) => {
      setFilmSelected(response.data);
      setSession(response.data.days);
    });
  }, []);

  setDataTitle(filmSelected.title);

  if (session.length === 0) {
    return <img alt="Gif de Loading" src={Loading}></img>;
  } else {
    return (
      <>
        <Description>Selecione o horário</Description>

        {session.map((value, i) => (
          <Day key={i}>
            {value.weekday} - {value.date}
            <AllSessions>
              {value.showtimes.map((h) => (
                <StyledLink to={`/sessao/${h.id}`}>
                  <HourSession
                    key={h.id}
                    backColor={Laranja}
                    onClick={() => console.log(h)}
                  >
                    {h.name}
                  </HourSession>
                </StyledLink>
              ))}
            </AllSessions>
          </Day>
        ))}

        <Footer backColor={CinzaClaro}>
          <img alt="Capa do Filme" src={filmSelected.posterURL} />
          {filmSelected.title}
        </Footer>
      </>
    );
  }
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
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.backColor};
  font-size: 15px;
  color: white;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
  }
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

const StyledLink = styled(Link)`
  margin-right: 20px;
  margin-top: 20px;
  width: 100px;
  text-decoration: none;
`;
