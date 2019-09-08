import React from "react";

import { Link } from "react-router-dom";
import Book from "./book";

class BookShelf extends React.Component {
  render() {
    const { allBooks, shelfShift } = this.props;
    const currRead = allBooks.filter(book => book.shelf === "currentlyReading");
    const wantTo = allBooks.filter(book => book.shelf === "wantToRead");
    const read = allBooks.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currRead.map(book => (
                    <Book
                      book={book}
                      key={book.id}
                      shelfShift={shelfShift}
                      allBooks={allBooks}
                    />
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantTo.map(book => (
                    <Book
                      book={book}
                      key={book.id}
                      shelfShift={shelfShift}
                      allBooks={allBooks}
                    />
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map(book => (
                    <Book
                      book={book}
                      key={book.id}
                      shelfShift={shelfShift}
                      allBooks={allBooks}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;
