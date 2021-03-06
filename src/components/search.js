import React from "react";

import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import Book from "./book";

class SearchBar extends React.Component {
  state = {
    searchedBooks: [],
    text: "",
    noResults: false,
    emptyText: false
  };

  onChangeHandler = async e => {
    await this.setState({
      text: e.target.value
    });
    if (this.state.text === "") {
      this.setState({
        searchedBooks: []
      });
      return;
    }
    this.onSubmitHandler();
  };

  onSubmitHandler = e => {
    BooksAPI.search(this.state.text).then(books => {
      if (
        books !== undefined &&
        books.error !== "empty query" &&
        this.state.text !== ""
      ) {
        this.setState({
          searchedBooks: books,
          noResults: false,
          emptyText: false
        });
      } else {
        this.setState({
          searchedBooks: [],
          noResults: true,
          emptyText: false
        });
      }
    });
  };

  render() {
    const { allBooks, shelfShift } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={this.props.return}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type=""
              placeholder="Search by title or author"
              value={this.state.text}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>

        <div className="search-books-results" />
        {this.state.noResults ? (
          this.state.emptyText ? (
            <div>Type Something First !</div>
          ) : (
            <div>there is no Books with this name</div>
          )
        ) : (
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <Book
                book={book}
                key={book.id}
                shelfShift={shelfShift}
                allBooks={allBooks}
              />
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default SearchBar;
