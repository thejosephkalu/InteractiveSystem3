import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error("Error fetching quote:", error));
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="container">
      <div className="quote-box">
        <h2 className="quote">{quote}</h2>
        <p className="author">- {author}</p>
        <button className="button" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
