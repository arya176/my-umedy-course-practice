import React from "react";
import "./App.css";
import { Book } from "./Book";

export const App: React.FC = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

// https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg
