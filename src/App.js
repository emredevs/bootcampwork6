import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Description from "./components/Description";
import { BookProvider } from "./context/BooksContext";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BookProvider>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
