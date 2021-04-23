import React from "react";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let images;
  // map variables to each item in fetched image array and return image component
  if (results.length) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  }

  return (
    <div>
      <ul>{images}</ul>
    </div>
  );
};

export default Gallery;
