import React from "react";
import Book from "../components/Book";

const Books = () => {
  return (
    <div className="grid-container">
      <Book />
      <Book className="first" />
    </div>
  );
};
export default Books;
