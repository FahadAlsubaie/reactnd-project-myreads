import React from "react";

import ShelfShifter from "./shelfShifter";

class Book extends React.Component {
  render() {
    const { allBooks, book, shelfShift } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
            <ShelfShifter
              book={book}
              shelfShift={shelfShift}
              allBooks={allBooks}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
