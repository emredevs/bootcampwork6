import React from "react";
import styles from "./Header.module.css";
import Form from "./Form";
export default function Header() {
  return (
    // form sayfasındaki inputun header'a eklenmesi ve  hızanlanması
    <div className={styles.header}>
      <h1>Book Search App...</h1>
      <Form />
    </div>
  );
}
