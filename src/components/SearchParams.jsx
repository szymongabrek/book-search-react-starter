import React from "react";
import Books from "../containers/Books";
import Book from "./Book";

const SearchParams = () => {
  return (
    <div className="search-params">
      <form action="">
        <input
          type="text"
          className="textbox"
          placeholder="Jakiej książki szukasz ?"
        />
        <input title="Search" value="" type="submit" className="button" />
      </form>

      <Books />
    </div>
  );
};

export default SearchParams;
