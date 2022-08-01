import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css"
import Header from "../Utils/Header"

function Movies(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then(response => {
            setMovies(response.data);
        });
    }, [])

    if (movies.length === 0) {
        return (
            <div className="loading">
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="page-movies">
            <Header />
            <div className="title">Selecione o filme</div>
            <div className="movies">
                {movies.map(movie => (
                    <Link to={`/sessions/${movie.id}`}>
                        <div className="movie-card">
                            <img src={movie.posterURL} alt={movie.title} />
                        </div>     
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Movies