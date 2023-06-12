// import React from 'react';
import Products from "./componen/Products";
import "./App.css";

const App = () => {
  const products = [
    {
      name: "Sectional Sofa",
      image:
        "https://i.pinimg.com/originals/9e/0e/6b/9e0e6ba8e5770152f49e6d3ad31e5df5.jpg",
      deskripsi:
        "Sofa adalah salah satu furniture yang paling penting di setiap rumah, terutama di ruang tamu dan ruang keluarga.",
      sumber: "Eurway",
    },
    {
      name: "The classic sofa",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.rnqSFQaI17J8fQU-x78A2gHaD1&pid=Api&P=0&h=180",
      deskripsi:
        "Grandmas couch yang berarti sofa tersebut adalah sofa klasik yang bisa bertahan sangat lama, bahkan sampai bertahun-tahun.",
      sumber: "Wayfair",
    },
  ];

  return (
    <div className="App">
      {products.map((products, key) => (
        <Products
          key={key}
          name={products.name}
          image={products.image}
          deskripsi={products.deskripsi}
          sumber={products.sumber}
        />
      ))}
    </div>
  );
};
export default App;
