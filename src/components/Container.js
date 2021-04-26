import React, { useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = () => {
  const { books, loading, runGet } = useContext(BookContext);
  useEffect(() => {
    runGet();
  }, []);

  return (
    <div className="book-container">
      {loading ? <Loader /> : <Gallery data={books} />}
    </div>
  );
};

export default Container;
