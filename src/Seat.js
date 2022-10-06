import styled from "styled-components";
import colors from "./services/colors";

export default function Seat({ s }) {
  console.log(s);
  const {
    Laranja,
    AzulClaro,
    AzulEscuro,
    CinzaClaro,
    CinzaEscuro,
    AmareloClaro,
    AmareloEscuro,
  } = colors;

  if (s.isAvailable === true) {
    return (
      <NumberSeat backColor={CinzaClaro} border={CinzaEscuro}>
        {s.name}
      </NumberSeat>
    );
  } else {
    return (
      <NumberSeat backColor={AmareloClaro} border={AmareloEscuro}>
        {s.name}
      </NumberSeat>
    );
  }
}

const NumberSeat = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => props.backColor};
  border: 1px solid ${(props) => props.border};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-seriff;
  font-size: 15px;
`;
