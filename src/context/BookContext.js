import React, { createContext, useState } from "react";
import axios from "axios";
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const runGet = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=bird&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        setBooks(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <BookContext.Provider value={{ books, loading, runGet }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
