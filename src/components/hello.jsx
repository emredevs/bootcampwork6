import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import { useParams } from "react-router-dom";
export default function Description() {
  const { books } = useContext(BooksContext);
  const { id } = useParams();

  return (
    <div>
      <ul>
        {books
          .filter((book) => book.id === id)
          .map((book) => (
            <li key={book.id}>{book.description}</li>
          ))}
      </ul>
    </div>
  );
}
