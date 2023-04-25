import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Description.module.css";
export default function Description() {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const book = books.find((book) => book.id === id);
  // detay sayfasında bulunması gereken verilerin API dan çekilerek listelenmesi
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
        <p>
          <h5>Yazar: {book.volumeInfo.authors}</h5>
        </p>
        <p>
          <h5>Uzunluk: {book.volumeInfo.pageCount} Sayfa</h5>
        </p>
        <p>
          <h5>Tür: {book.volumeInfo.categories}</h5>
        </p>
        <p>
          <h5>Yayın Tarihi: {book.volumeInfo.publishedDate}</h5>
        </p>
        <p>Açıklama: {book.volumeInfo.description}</p>

        <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
          More Info
        </a>
      </div>
    </div>
  );
}
