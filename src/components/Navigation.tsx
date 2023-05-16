import { ProductCategory } from "@medusajs/medusa";
import { memo } from "react";

export const Navigation = memo(function Navigtion({
  categories,
}: {
  categories: ProductCategory[];
}) {
  return (
    <div className="flex items-center gap-4 mr-auto lg:flex-row flex-col">
      {categories.map((c) => (
        <div
          key={c.id}
          className="hover:text-brand hover:bg-brand-50 rounded px-3.5 py-1.5 cursor-pointer"
        >
          {c.name}
        </div>
      ))}
    </div>
  );
});
