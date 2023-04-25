import React, { useContext, useEffect } from "react";
import axios from "axios";
import BooksContext from "../context/BooksContext";
import styles from "./Form.module.css";
export default function Form() {
  const { book, setBook, books, setBooks } = useContext(BooksContext);
  //form submit olduğunda API dan verilerin çekilmesi
  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${book}&lang=tr`)
      .then((res) => setBooks(res.data.items));
    setBook("");
  };
  // sahya ilk yüklendiğinde otomatik olarak yüklenen kitaplar
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${book}&lang=tr`)
      .then((res) => setBooks(res.data.items));
    setBook("");
  }, []);
  console.log(books);
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="bookInput">
          <input
            className={styles.formInput}
            placeholder="lütfen kitap adı  yada yazar adı giriniz..."
            type="text"
            value={book}
            id="bookInput"
            onChange={(e) => setBook(e.target.value)}
          />
        </label>
        <button className={styles.formButton} type="submit">
          Ara
        </button>
      </form>
    </div>
  );
}
