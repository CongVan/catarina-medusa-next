import { ProductCard } from "@/modules/product/components/ProductCard";
import { StoreProductsListRes } from "@medusajs/medusa";

export const ProductListTemplate = async ({
  promise,
}: {
  query?: any;
  showLoadMore?: boolean;
  promise: Promise<StoreProductsListRes>;
}) => {
  const { products } = await promise;
  return (
    <div className=" grid grid-cols-2 gap-4 lg:grid-cols-5">
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
};
