import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import books from "./books";
import { Book } from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log({ ...book });
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
