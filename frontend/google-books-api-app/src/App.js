import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [searchWord, setSearchWord] = useState(["universe"]);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [itemsPerPage, setItemsPerPage] = useState(20)

  function handleChange(event) {
    const searchWord = event.target.value;
    setSearchWord(searchWord);
  }

  function searchBooks() {
    axios.get("https://Google-Books-API-App.matthewclarkosu.repl.co/volumeSearch", {
      params: {
        searchWord: searchWord,
        page: currentPage,
        itemsPerPage: itemsPerPage
      }
    })
      .then(data => {
        setResults(data.data.items);
        setNextPage(data.data.hasNextPage)
        setPrevPage(data.data.hasPreviousPage)
      })
  }

  useEffect(() => {
    searchBooks();
  }, [currentPage])


  function handleSubmit(event) {
    event.preventDefault();
    searchBooks();
  }

  function handlePreviousPage() {
    prevPage ? setCurrentPage(page => page - 1) :
      setCurrentPage(page => page)
  }

  function handleNextPage() {
    nextPage ? setCurrentPage(page => page + 1) :
      setCurrentPage(page => page)
  }

  return (
    <div className="App">
      <div className="search-container">
        <h1>Google Books API App</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="search-box"
              type="text"
              autoComplete="off"
              onChange={handleChange}
              className="input-control"
              placeholder="Search for books!" />
          </div>
          <button
            id="search-button"
            type="submit"
            className="btn btn-info text-white">
            Search
                </button>
        </form>
        <hr id="horizontal-rule" />
      </div>
      <div id="page-buttons">
        <a href="#horizontal-rule">
          <button
            id="previous-page"
            onClick={handlePreviousPage}
            className="btn btn-info text-white">
            Previous
              </button>
        </a>
        <a href="#horizontal-rule">
          <button
            id="next-page"
            onClick={handleNextPage}
            className="btn btn-info text-white">
            Next
              </button>
        </a>
      </div>
      <div className="card-container">
        {results.length > 0 ? results.map(result => (
          <a target="_blank" href={result.link}>
            <div key={result.id} className="card">
              <img src={result.image}
                alt="book image failed to load" />
              <div id="book-title">{result.title}</div>
              <div id="book-authors">{result.authors}</div>
              <div id="book-date">{result.publishedDate}</div>
              <div id="book-description">{result.description}</div>
              <div id="description-click">... Click to learn more!</div>
            </div>
          </a>
        )) : <p>No results found</p>}
      </div>
      <div id="page-buttons">
        <a href="#horizontal-rule">
          <button
            id="previous-page"
            onClick={handlePreviousPage}
            className="btn btn-info text-white">
            Previous
              </button>
        </a>
        <a href="#horizontal-rule">
          <button
            id="next-page"
            onClick={handleNextPage}
            className="btn btn-info text-white">
            Next
              </button>
        </a>
      </div>
      <hr />
      <footer>Created by Matt Clark - 2021</footer>
    </div>
  );
}

export default App;
