import React from "react";
import "./Movie.css";

const ImageURL = 'https://image.tmdb.org/t/p/w500/';
const placeholderImage = 'https://raw.githubusercontent.com/mehmoodhamza819/Interactive-Design-System/main/Lab7/app1/public/images/poster.png';

function Movie({poster_path,title,overview,vote_average})
{
    const ImageURLFinal=ImageURL+poster_path;
    const imageURLFinal = poster_path ? ImageURL + poster_path : placeholderImage;
    let scoreColorClass = '';
    if (vote_average > 7) {
        scoreColorClass = 'green';
    } else if (vote_average <= 7 && vote_average >= 5) {
        scoreColorClass = 'yellow';
    } else {
        scoreColorClass = 'red';
    }
    return(
<div className="movie">
    <img src={imageURLFinal}alt={title}></img>
    <div className="movie-info">
        <h3>{title}</h3>
        <span className={`vote-average ${scoreColorClass}`}>{vote_average}</span>
    </div>
    <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
    </div>
</div>

    );
}



export default Movie;