import colors from "./services/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  const { CinzaClaro, Laranja } = colors;
  return (
    <TopBar backColor={CinzaClaro}>
      <StyledLink to="/" color={Laranja}>
        CINEFLEX
      </StyledLink>
    </TopBar>
  );
}

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backColor};
  width: 100%;
  height: 90px;
  font-family: "Roboto", sans-seriff;
  font-size: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
  cursor: pointer;
`;
