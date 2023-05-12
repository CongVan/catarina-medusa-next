import { MedusaClient } from "@/utils/medusa";
import { memo } from "react";
{/* @ts-expect-error Async Server Component */}
export const Navigation = memo(async function Navigtion() {
  const data = await MedusaClient.productCategories.list({
    parent_category_id: "null",
  });
  return (
    <div className="flex items-center gap-4 mr-auto lg:flex-row flex-col">
      {data.product_categories.map((c) => (
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
