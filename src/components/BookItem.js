import React from "react";

const BookItem = ({ url, title }) => (
  <div className="book-item-container">
    <li>
      <img src={url} alt={title} className="book-item-image"/>
      <div class="book-item-overlay">My Name is John</div>
    </li>
  </div>

);

export default BookItem;
