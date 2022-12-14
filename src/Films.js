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
        <CardLoad>
          <img alt="Gif de Loading" src={Loading} />
        </CardLoad>
      );
    } else {
      return (
        <>
          {imageCard.map((value, i) => (
            <Link key={i} to={`/filme/${value.id}`}>
              <Card data-identifier="movie-outdoor">
                <img alt="Capa do Filme" src={value.posterURL} />
              </Card>
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
  margin-left: 15%;
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Card = styled.div`
  width: 100%;
  height: 180px;
  margin-left: 10%;
  margin-bottom: 15%;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #e8833a;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 90%;
    height: 90%;
  }
`;

const CardLoad = styled(Card)`
  height: 90%;
  width: 100%;
  box-shadow: none;
  border: none;
`;
