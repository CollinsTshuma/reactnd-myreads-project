import React from "react";
import Book from "./Book";

const Shelf = ({ books, title }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map(m => (
                <li>
                    <Book book={m}/>
                </li>
            ))}

        </ol>
      </div>
    </div>
  );
};

export default Shelf;
