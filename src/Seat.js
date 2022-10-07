import { useState } from "react";
import styled from "styled-components";
import colors from "./services/colors";

export default function Seat({ s, forms }) {
  const [selected, setSelected] = useState([]);

  const {
    AzulClaro,
    AzulEscuro,
    CinzaClaro,
    CinzaEscuro,
    AmareloClaro,
    AmareloEscuro,
  } = colors;

  if (selected.includes(s.id)) {
    return (
      <NumberSeat selected={selected} backColor={AzulClaro} border={AzulEscuro}>
        {s.name}
      </NumberSeat>
    );
  } else if (s.isAvailable === true) {
    return (
      <NumberSeat
        selected={selected}
        backColor={CinzaClaro}
        border={CinzaEscuro}
        onClick={() => {
          setSelected([...selected, s.id]);
          forms.ids.push(s.id);
        }}
      >
        {s.name}
      </NumberSeat>
    );
  } else {
    return (
      <NumberSeat
        selected={selected}
        backColor={AmareloClaro}
        border={AmareloEscuro}
        onClick={() => alert("Esse assento não está disponível")}
      >
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

  &:hover {
    cursor: pointer;
  }
`;
