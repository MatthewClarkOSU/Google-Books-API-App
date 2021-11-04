import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [searchWord, setSearchWord] = useState(["universe"]);
  const [tempSearchWord, setTempSearchWord] = useState()
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [itemsPerPage, setItemsPerPage] = useState(20)
  let selectedItemsPerPage

  useEffect(() => {
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
  }, [currentPage, searchWord, itemsPerPage])

  function handleChange(event) {
    const tempSearchWord = event.target.value;
    setTempSearchWord(tempSearchWord);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchWord(tempSearchWord)
    setCurrentPage(1)
  }

  function handlePreviousPage() {
    prevPage ? setCurrentPage(page => page - 1) :
      setCurrentPage(page => page)
  }

  function handleNextPage() {
    nextPage ? setCurrentPage(page => page + 1) :
      setCurrentPage(page => page)
  }

  function handleItemsPerPageDropdown(event) {
    selectedItemsPerPage = event.target.value
    setItemsPerPage(selectedItemsPerPage)
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
              placeholder="Input Search - i.e. 'Universe'" />
          </div>
          <button
            id="search-button"
            type="submit"
            className="btn btn-info text-white">
            Search
                </button>
        </form>
        <div id="dropdown-container">
          <select id="results-per-page-dropdown" className="btn btn-info dropdown-toggle" onChange={handleItemsPerPageDropdown}>
            <option value="2">2 books per page</option>
            <option value="4">4 books per page</option>
            <option value="8">8 books per page</option>
            <option value="10">10 books per page</option>
            <option selected value="20">20 books per page</option>
            <option value="40">40 books per page</option>
          </select>
        </div>
        <hr id="horizontal-rule" />
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
              <p>...</p>
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
      <a href="https://www.linkedin.com/in/matt-clark-372756212/" target="_blank">
      <footer>Matt Clark - 2021</footer>
      </a>
    </div>
  );
}

export default App;
