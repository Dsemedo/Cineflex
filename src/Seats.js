import styled from "styled-components";
import colors from "./services/colors";
import axios from "axios";
import Seat from "./Seat";
import Loading from "./assets/img/loading.gif";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Seats({
  setDataSession,
  setDataDay,
  setDataSeats,
  setDataCPF,
  setDataName,
  selected,
}) {
  const params = useParams();
  const navigate = useNavigate();
  const {
    AzulClaro,
    AzulEscuro,
    CinzaClaro,
    CinzaEscuro,
    AmareloClaro,
    AmareloEscuro,
  } = colors;

  const [infoMovie, setinfoMovie] = useState([]);
  const [infoSeats, setInfoSeats] = useState([]);
  const [nameSeats, setNameSeats] = useState([]);

  const [forms, setForms] = useState({
    ids: [],
    name: "",
    cpf: "",
  });

  function handleForm(e) {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  }

  function sendOrder(e) {
    e.preventDefault();

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      forms
    );

    promise.then(
      () => navigate("/sucesso"),
      setDataSession(infoMovie.day.weekday),
      setDataDay(infoMovie.name),
      setDataSeats(nameSeats),
      setDataCPF(forms.cpf),
      setDataName(forms.name)
    );
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`
    );

    promise.then((response) => {
      setinfoMovie(...infoMovie, response.data);
      setInfoSeats(response.data.seats);
    });
  }, []);

  if (infoMovie.length === 0) {
    return <img alt="Tela de loading" src={Loading}></img>;
  }

  return (
    <>
      <Description>Selecione o(s) assento(s)</Description>

      <AllSeats>
        {infoSeats.map((s, i) => (
          <Seat
            key={i}
            s={s}
            setForms={setForms}
            forms={forms}
            setNameSeats={setNameSeats}
            nameSeats={nameSeats}
          />
        ))}
      </AllSeats>

      <Legends>
        <SubtitleSeats>
          <NumberSeat backColor={AzulClaro} border={AzulEscuro} />
          Selecionado
        </SubtitleSeats>

        <SubtitleSeats>
          <NumberSeat backColor={CinzaClaro} border={CinzaEscuro} />
          Disponivel
        </SubtitleSeats>

        <SubtitleSeats>
          <NumberSeat backColor={AmareloClaro} border={AmareloEscuro} />
          Indisponivel
        </SubtitleSeats>
      </Legends>

      <Form>
        <label htmlFor="Nome do comprador">Nome do comprador:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome..."
          onChange={handleForm}
          value={forms.name}
        />
        <label htmlFor="CPF do comprador">CPF do comprador:</label>
        <input
          type="text"
          name="cpf"
          placeholder="Digite seu CPF..."
          onChange={handleForm}
          value={forms.cpf}
          pattern="(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)"
        />

        <SendButton forms={forms} sendOrder={sendOrder} />
      </Form>

      <Footer backColor={CinzaClaro}>
        <img alt="Foto do filme" src={infoMovie.movie.posterURL} />
        <DescriptionFilm>
          <p>{infoMovie.movie.title}</p>
          {infoMovie.day.weekday} - {infoMovie.name}
        </DescriptionFilm>
      </Footer>
    </>
  );
}

function SendButton({ forms, sendOrder }) {
  if (forms.cpf.length < 10 || forms.name === "") {
    return (
      <button
        onClick={() =>
          alert("Verifique se preencheu seu nome e CPF corretamente")
        }
      >
        Reservar assento(s)
      </button>
    );
  } else {
    return (
      <button type="submit" onClick={sendOrder}>
        Reservar assento(s)
      </button>
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.backColor};
  border: 1px solid ${(props) => props.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const SubtitleSeats = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Legends = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  font-family: "Roboto", sans-seriff;

  input {
    margin: 10px 0px;
    width: 80%;
    height: 40px;
    font-family: "Roboto", sans-seriff;
    font-style: italic;
  }

  button {
    margin: 10% 0 5% 25%;
    width: 45%;
    height: 42px;
    background-color: #e8833a;
    color: #ffffff;
    border-radius: 3px;
  }
`;

const DescriptionFilm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;
