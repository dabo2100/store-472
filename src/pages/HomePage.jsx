import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [product, setProducts] = useState([
    {
      name: "iPhone x",
      price: 400,
      imgSrc:
        "https://mobizil.com/wp-content/uploads/2017/09/apple-iphone-x.jpg",
    },
    {
      name: "iPhone 14",
      price: 600,
      imgSrc:
        "https://esterad.com.eg/media/catalog/product/cache/75280c1db8dc3c3b8f7f5f134828a25e/6/1/61bk6pmoc3l._ac_sl1500_.jpg",
    },
    {
      name: "iPhone 17 Pro max",
      price: 1000,
      imgSrc:
        "https://incredideals.co/cdn/shop/files/IMG-18071641_m_jpeg_1.png?v=1758021301&width=1800",
    },
    {
      name: "iPhone 17 Pro max",
      price: 1000,
      imgSrc:
        "https://incredideals.co/cdn/shop/files/IMG-18071641_m_jpeg_1.png?v=1758021301&width=1800",
    },
  ]);
  return (
    <div className="w-full flex justify-center">
      <div className="container ">
        <h1 className="bg-blue-600 text-white text-3xl text-center py-4">
          Our Products
        </h1>
        <div className="grid grid-cols-3 gap-3 py-3">
          {product.map((el, index) => {
            return (
              <ProductCard key={index} bgColor="bg-gray-400" theData={el} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
