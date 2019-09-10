import React from "react";

import { Route } from "react-router-dom";
import SearchBar from "./components/search";
import BookShelf from "./components/bookshelf";
import { getAll, update } from "./BooksAPI";

import "./App.css";

class BooksApp extends React.Component {
  state = { allBooks: [] };

  componentDidMount() {
    getAll().then(allBooks =>
      this.setState({
        allBooks
      })
    );
  }
  changeShelfHandler = (bookChange, shelf) => {
    update(bookChange, shelf).then(res => {
      bookChange.shelf = shelf;
      getAll().then(allBooks =>
        this.setState({
          allBooks
        })
      );
    });
  };
  refreshHandler = () => {
    getAll().then(allBooks =>
      this.setState({
        allBooks
      })
    );
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={props => (
            <BookShelf
              allBooks={this.state.allBooks}
              shelfShift={this.changeShelfHandler}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={props => (
            <SearchBar
              allBooks={this.state.allBooks}
              shelfShift={this.changeShelfHandler}
              return={this.refreshHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
