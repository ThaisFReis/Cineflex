import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css"
import Header from "../Utils/Header"

function Receipt({ src, title, weekday, time }){
    /*
    const [movieSession, setMovieSession] = useState();
        useEffect(() => {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${props.sessionId}/seats`);
    
            promise.then(response => {
                setMovieSession(response.data);
            });
        }, [props.sessionId]);

        if (movieSession === undefined) {
            return (
                <div className="loading">
                    <h1>Carregando...</h1>
                </div>
            );
        }

    return (
        <>
        <Header />
        <div className="ticketPage">
            <div className="sucessMessage">
                <h1>Pedido feito com sucesso!</h1>
            </div>

            <div className="ticketInfo">
                <div className="ticketContainer">
                    <div className="movieName">
                        <h2>Filme:</h2>
                        <p>{movieSession.movie.title}</p>
                    </div>

                    <div className="sessionInfo">
                        <h2>Sessão:</h2>
                        <p>{movieSession.day.date} - {movieSession.name}</p>
                    </div>

                    <div className="ticket">
                        <h2>Ingressos:</h2>
                        <p>Assento: 13</p>
                    </div>

                    <div className="buyer">
                        <h2>Comprador:</h2>
                        <div className="buyerContanier">
                            <div className="buyerName">
                                <p>Nome: {props.name}</p>
                            </div>
                            <div className="buyerIdentification">
                                <p>CPF: {props.identificationDocument}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
    */
   return(
       <div className="body">
        <Header />
        <div className="ticketPage">
            <div className="sucessMessage">
                    <h1>Pedido feito com sucesso!</h1>
            </div>
            <button className="home">
            <Link to={`/`}>
                <p>Voltar pra Home</p>
            </Link>
            </button>
        </div>
       </div>
   )

}

export default Receipt