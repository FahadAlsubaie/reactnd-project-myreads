import React from "react";

import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import Book from "./book";

class SearchBar extends React.Component {
  state = {
    searchedBooks: [],
    query: ""
  };

  searchText = e => {
    const text = e.target.value;
    this.setState({
      query: text
    });
    BooksAPI.search(this.state.query, "10").then(books => {
      if (typeof books !== "undefined") {
        books.length > 0
          ? this.setState({
              searchedBooks: books
            })
          : this.setState({
              searchedBooks: []
            });
      }
    });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.searchText}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(item => (
              <Book book={item} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBar;
