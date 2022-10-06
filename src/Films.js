import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../src/assets/img/loading.gif";
import { Link } from "react-router-dom";

export default function Films() {
  const [imageCard, setImageCard] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((response) => {
      setImageCard(response.data);
    });

    promise.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  function PosterCard() {
    if (imageCard.length === 0) {
      return (
        <Card>
          <img src={Loading}></img>
        </Card>
      );
    } else {
      return (
        <>
          {imageCard.map((value) => (
            <Link to={`/filme/${value.id}`}>
              <img src={value.posterURL} />
            </Link>
          ))}
        </>
      );
    }
  }

  return (
    <>
      <Description>Selecione o filme</Description>
      <CardList>
        <PosterCard />
      </CardList>
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

const CardList = styled.div`
  margin-left: 10%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;

  img {
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 45%;
  height: 200px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Linked = styled(Link)``;
