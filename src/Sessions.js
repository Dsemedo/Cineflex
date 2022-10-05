import colors from "./services/colors";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react"

export default function Sessions({ id }) {
    const { Laranja, CinzaClaro } = colors

    const [session, setSession] = useState([]);
    const [filmSelected, setFilmSelected] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/3/showtimes`);

        promise.then(response => {
            setFilmSelected(response.data);
            setSession(response.data.days);
        });

        promise.catch(erro => {
            console.log(erro.response.data);
        });
    }, []);

    console.log(session);
    console.log(filmSelected);

    return (
        <>
            <Description>
                Selecione o horário
            </Description>

            {session.map((value) => <Day>
                {value.weekday} - {value.date}

                <AllSessions>

                    {value.showtimes.map((h) => <HourSession key={h.id} backColor={Laranja}>
                        {h.name}
                    </HourSession>)}
                </AllSessions>

            </Day>)}

            <Footer backColor={CinzaClaro}>

                <img src={filmSelected.posterURL} />
                {filmSelected.title}

            </Footer>
        </>
    )
}


const Description = styled.div`
    width:100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-seriff;
    font-size: 25px;
`

const Day = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-family: 'Roboto', sans-seriff;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
`

const HourSession = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    background-color:${props => props.backColor};
    margin-top: 20px;
    margin-right: 20px;
    font-size: 15px;
    color: white;    
    border-radius: 2px;
`

const AllSessions = styled.div`
    display: flex;
`

const Footer = styled.div`
    width: 100%;
    height: 15%;    
    background-color:${props => props.backColor};
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-family: 'Roboto', sans-seriff;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

img{
    border: 10px solid #FFFFFF;
    width: 15%;
    height: 75%;
    margin-left: 10px;
    margin-right: 10px;
}

`    