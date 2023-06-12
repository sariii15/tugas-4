// import React from 'react'
import { useState } from 'react';


const Products = (p) => {
  const { name, image, deskripsi, sumber } = p;
  const { like, setLike } = useState(false);
  const { showDeskipsi, setShowDeskripsi } = useState(false);
  const { background, setBackground } = useState(true);

  const likeClick = () => {
    setLike(!like);
    setBackground(!background);
  };

  const moreClick = () => {
    setShowDeskripsi(!showDeskipsi);
  };

  return (
    <div className='Products'>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {showDeskipsi && <p>{deskripsi}</p>}
      <p>{sumber}</p>
      <button style={{ backgroundColor: background ? "#9BABB8" : "#C2DEDC" }} onClick={likeClick}>
        {like ? "Batal Suka" : "Suka"}
      </button>
      <button onClick={moreClick}>
        {showDeskipsi ? "Sembunyikan" : "Selengkapnya"}
      </button>
    </div>
  );
};

export default Products;
