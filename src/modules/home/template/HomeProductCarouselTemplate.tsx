import { ProductCard } from "@/modules/product/components/ProductCard";
import { ProductCarouselTemplate } from "@/modules/product/template/ProductCarouselTemplate";
import {
  Product,
  ProductCollection,
  StoreProductsListRes,
} from "@medusajs/medusa";

export const HomeProductCarouselTemplate = async ({
  promise,
  collection,
}: {
  promise: Promise<StoreProductsListRes>;
  collection: ProductCollection;
}) => {
  const { products } = await promise;

  return (
    <div>
      <ProductCarouselTemplate products={products} title={collection.title} />
    </div>
  );
};
