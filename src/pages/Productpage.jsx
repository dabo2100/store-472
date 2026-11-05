import ProductHero from "../components/ProductHero";
import Text from "../components/Text";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <ProductHero />
      <div className="mt-14">
        <Text />
      </div>
      <RelatedProducts />
    </div>
  );
}