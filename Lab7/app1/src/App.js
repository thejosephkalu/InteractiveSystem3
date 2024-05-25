import { useState, useEffect } from "react";
import "./App.css";
import APIKey from "./config";
import Movie from "./components/Movie";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=";

const SearchURL = "https://api.themoviedb.org/3/search/movie?api_key=";

function App() {
  const [movieResults, setmovieResults] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    fetch(APIURL + APIKey)
      .then((resp) => resp.json())
      .then((data) => setmovieResults(data.results) /*;console.log(data);*/);
  }, []);

  const handleonSubmit = (e) => {
    e.preventDefault();
  };

  if (searchTerm) {
    fetch(SearchURL + APIKey + "&query=" + searchTerm)
      .then((resp) => resp.json())
      .then((data) => setmovieResults(data.results) /*;console.log(data);*/);
  }

  const handleonChange = (e) => {
    console.log(e.target.value);
    setsearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleonSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleonChange}
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {" "}
        {movieResults.map((element, index) => (
          <Movie key={element.id} {...element} />
        ))}
      </div>
    </>
  );
}

export default App;
