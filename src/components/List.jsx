import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import styles from "./List.module.css";
import { NavLink } from "react-router-dom";
// API dan aldığımız verilerin listelenmesi
export default function List() {
  const { books } = useContext(BooksContext);
  return (
    <div>
      <ul className={styles.ulList}>
        {books.map((book, index) => {
          return (
            <li key={index}>
              <img
                src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&source=gbs_api`}
                alt=""
              />
              <h4>{book.volumeInfo.title}</h4>
              <p>{book.volumeInfo.authors}</p>
              {/* <p>{book.volumeInfo.publishedDate}</p> */}
              <NavLink
                className={styles.NavLink}
                to={`/description/${book.id}`}
              >
                <h4 className={styles.home}>Description</h4>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
