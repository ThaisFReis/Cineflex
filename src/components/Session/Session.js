import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./style.css"
import Header from "../Utils/Header"

function Session(){
    const [movie, setMovie] = useState([]);
    const { idMovie } = useParams();
    let { days } = movie;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`)
        promise.then(response => {
            setMovie(response.data);
        });
    }, [idMovie])

    if (movie.length === 0) {
        return (
            <div className="loading">
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="body">
            <Header />
            <div className="container-session">
                <div>
                    <img src={movie.posterURL} alt={movie.title} title={movie.title} />
                </div>

                <div className="content">
                    <div className="title-session">Selecione o horário</div>
                    {days.map(session => (
                        <div className="date-card">
                            <div className="date">
                                <h1>{session.weekday}-{session.date}</h1>
                            </div>

                            <div className="hours">
                                {session.showtimes.map(session =>
                                    <Link to={`/seats/${session.id}`}>
                                        <p>{session.name}</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Session