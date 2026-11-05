import { useState } from "react";
import Iphone1 from "../assets/iphone15.jpg";
import Iphone2 from "../assets/swap1.jpg";
import Iphone3 from "../assets/swap2.jpg";
import Iphone4 from "../assets/swap3.jpg";

import ProductBreadcrumb from "../components/product/ProductBreadcrumb";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductOptions from "../components/product/ProductOptions";
import ProductActions from "../components/product/ProductActions";
import ProductFeatures from "../components/product/ProductFeatures";

const gallery = [Iphone1, Iphone2, Iphone3, Iphone4];

const finishes = [
  { name: "Natural Titanium", color: "#b9b3a7" },
  { name: "Black Titanium", color: "#3b3b3d" },
  { name: "White Titanium", color: "#e6e4e0" },
  { name: "Blue Titanium", color: "#4a4d52" },
];

const capacities = [
  { label: "256GB", note: "STANDARD" },
  { label: "512GB", note: "+$100" },
  { label: "1TB", note: "+$400" },
];

export default function ProductHero() {
  const [activeFinish, setActiveFinish] = useState(0);
  const [activeCapacity, setActiveCapacity] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full">
      <ProductBreadcrumb />

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery gallery={gallery} />

        <div>
          <ProductInfo />

          <ProductOptions
            finishes={finishes}
            capacities={capacities}
            activeFinish={activeFinish}
            setActiveFinish={setActiveFinish}
            activeCapacity={activeCapacity}
            setActiveCapacity={setActiveCapacity}
          />

          <ProductActions quantity={quantity} setQuantity={setQuantity} />

          <ProductFeatures />
        </div>
      </div>
    </div>
  );
}
