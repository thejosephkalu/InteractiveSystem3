import React from "react";
import "./Movie.css"

const ImageURL = 'https://image.tmdb.org/t/p/w500/';
const NoImage = 'https://screench.com/upload/no-poster.jpeg';

function Movie({poster_path,title, overview, vote_average})
{
    const getVoteColor = (vote) => {
        if (vote > 7) {
            return 'green';
        } else if (vote >= 5) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    return (
        <div className="movie">
            <img src={poster_path ? ImageURL + poster_path : NoImage} alt={title}></img>
            <div className="movie-info">
                <h3>{title}</h3>
                <span style={{color: getVoteColor(vote_average)}}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;