import React from "react";

import { Route } from "react-router-dom";
import SearchBar from "./components/search";
import BookShelf from "./components/bookshelf";

import "./App.css";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookShelf} />
        <Route exact path="/search" component={SearchBar} />
      </div>
    );
  }
}

export default BooksApp;
