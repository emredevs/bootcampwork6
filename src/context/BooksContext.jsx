import { createContext, useState } from "react";
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("harry potter");
  const values = { books, setBooks, book, setBook };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
export default BookContext;
