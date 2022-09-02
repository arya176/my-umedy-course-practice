import React from "react";
import { Image } from "./Image";
import { Title } from "./Title";
import { Writer } from "./Writer";
import "./Book.css";

export const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Writer />
    </article>
  );
};
