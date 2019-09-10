import React from "react";

class ShelfShifter extends React.Component {
  shelfHandler = e => {
    this.props.shelfShift(this.props.book, e.target.value);
  };

  render() {
    const { allBooks, book } = this.props;
    let currentState = "none";
    for (let bookie of allBooks) {
      if (bookie.id === book.id) {
        currentState = bookie.shelf;

        break;
      }
    }
    return (
      <div className="book-shelf-changer">
        <select onChange={this.shelfHandler} defaultValue={currentState}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfShifter;
