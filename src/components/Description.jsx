import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Description.module.css";
export default function Description() {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&source=gbs_api`}
          alt=""
        />
        <NavLink className={styles.NavLink} to="/">
          <h3 className={styles.home}>Home</h3>{" "}
        </NavLink>
      </div>
      <div className={styles.info}>
        <h4>Başlık: {book.volumeInfo.title}</h4>
        <p>Yazar: {book.volumeInfo.authors}</p>
        <p>Uzunluk: {book.volumeInfo.pageCount} Sayfa</p>
        <p>Tür: {book.volumeInfo.categories}</p>
        <p>Yayın Tarihi: {book.volumeInfo.publishedDate}</p>
        <p>Açıklama: {book.volumeInfo.description}</p>

        <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
          More Info
        </a>
      </div>
    </div>
  );
}
