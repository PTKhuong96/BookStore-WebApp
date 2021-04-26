import React from "react";
import BookItem from "./BookItem";
import FilterForm from "./FilterForm";
const Gallery = props => {
  const results = props.data;
  let bookItems;
  // map variables to each item in fetched image array and return image component
  if (results && results.length) {
    bookItems = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <BookItem url={url} key={id} alt={title} />;
    });
  }

  return (
    <div className="gallery-container">
      <p className="header-title">Welcome to Store Front Team's Book Store</p>
      <p className="header-title">Good things is yet to come :P</p>
      <FilterForm></FilterForm>
      <ul>{bookItems}</ul>
    </div>
  );
};

export default Gallery;
