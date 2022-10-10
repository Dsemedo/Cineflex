import styled from "styled-components";
import colors from "./services/colors";

export default function Seat({ s, forms, setForms, nameSeats, setNameSeats }) {
  const {
    AzulClaro,
    AzulEscuro,
    CinzaClaro,
    CinzaEscuro,
    AmareloClaro,
    AmareloEscuro,
  } = colors;

  function toggle() {
    const idsForm = forms.ids;
    let idFilter = [];
    if (idsForm.includes(s.id)) {
      idFilter = idsForm.filter((id) => id !== s.id);
      // nameSeats.filter((name) => name !== s.name);
      nameSeats.splice(nameSeats.indexOf(`${s.name}`), 1);
    } else {
      idFilter = [...idsForm, s.id];
      setNameSeats([...nameSeats, s.name]);
    }
    setForms({ ...forms, ids: idFilter });
  }

  if (forms.ids.includes(s.id)) {
    return (
      <NumberSeat backColor={AzulClaro} border={AzulEscuro} onClick={toggle}>
        {s.name}
      </NumberSeat>
    );
  } else if (s.isAvailable === true) {
    return (
      <NumberSeat backColor={CinzaClaro} border={CinzaEscuro} onClick={toggle}>
        {s.name}
      </NumberSeat>
    );
  } else {
    return (
      <NumberSeat
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
