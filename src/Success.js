import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess({
  dataTitle,
  dataSession,
  dataDay,
  dataSeats,
  dataName,
  dataCPF,
}) {
  function PrintSeats() {
    return dataSeats.map((seats, i) => <h2 key={i}>Assento {seats}</h2>);
  }

  function FormCPF() {
    dataCPF = dataCPF.replace(/[^\d]/g, "");
    return dataCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return (
    <>
      <PedidoFeito>
        <span>Pedido feito com sucesso!</span>
      </PedidoFeito>
      <FilmDetail data-identifier="movie-session-infos-reserve-finished">
        <h1>Filme e sessão </h1>
        <p>{dataTitle}</p>
        <h2>
          {dataSession} - {dataDay}
        </h2>
      </FilmDetail>

      <Tickets>
        <h1>Ingressos</h1>

        <PrintSeats data-identifier="seat-infos-reserve-finished" />
      </Tickets>
      <ClientDetails data-identifier="buyer-infos-reserve-finished">
        <h1>Comprador</h1>
        <p>Nome: {dataName}</p>
        <h2>
          CPF: <FormCPF />
        </h2>
      </ClientDetails>

      <Link to={"/"} data-identifier="back-to-home-btn">
        <ButtonHome>Voltar para Home </ButtonHome>
      </Link>
    </>
  );
}

const PedidoFeito = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #247a6b;
  font-family: "Roboto";
  font-size: 24px;

  span {
    width: 40%;
  }
`;

const FilmDetail = styled.div`
  margin-left: 2%;
  margin-bottom: 7%;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;

  h1 {
    font-weight: bold;
    margin-bottom: 5%;
  }

  h2 {
    font-size: 22px;
  }

  p {
    margin-bottom: 5px;
    font-size: 22px;
  }
`;

const Tickets = styled(FilmDetail)``;

const ClientDetails = styled(FilmDetail)``;

const ButtonHome = styled.button`
  margin-left: 27%;
  width: 45%;
  height: 42px;
  background-color: #e8833a;
  color: #ffffff;
  border-radius: 3px;
  border: none;
`;
