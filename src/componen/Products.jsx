// import React from 'react'
import { useState } from "react";

const Products = (p) => {
  const { name, image, deskripsi, sumber } = p;
  const [like, setLike] = useState(false);
  const [showDeskipsi, setShowDeskripsi] = useState(false);

  function likeClick() {
    setLike(!like);
  }

  const moreClick = () => {
    setShowDeskripsi(!showDeskipsi);
  };

  return (
    <div className="Products">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {showDeskipsi && <p>{deskripsi}</p>}
      <p>{sumber}</p>
      <button
        style={{ backgroundColor: like ? "#A4907C" : "#A4907C" }}
        onClick={likeClick}
      >
        {like ? "Batal Suka" : "Suka"}
      </button>
      <button
        style={{ backgroundColor: like ? "#A4907C" : "#A4907C" }}
        onClick={moreClick}
      >
        {showDeskipsi ? "Sembunyikan" : "Selengkapnya"}
      </button>
    </div>
  );
};

export default Products;
