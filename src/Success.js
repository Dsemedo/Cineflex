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
    for (let i = 0; i <= dataSeats.length; i++) {
      return <h2>Assento {dataSeats[i]} </h2>;
    }
  }

  return (
    <>
      <PedidoFeito>
        <span>Pedido feito com sucesso!</span>
      </PedidoFeito>
      <FilmDetail>
        <h1>Filme e sessão </h1>
        <h2>{dataTitle}</h2>
        <h2>
          {dataSession} - {dataDay}
        </h2>
      </FilmDetail>

      <Tickets>
        <h1>Ingressos</h1>

        <PrintSeats />
      </Tickets>
      <ClientDetails>
        <h1>Comprador</h1>
        <h2>
          Nome: {dataName} CPF: {dataCPF}
        </h2>
      </ClientDetails>

      <Link to={"/"}>
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
  margin-bottom: 2%;
  width: 90%;
  height: 100px;
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
`;
