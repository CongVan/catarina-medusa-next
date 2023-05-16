"use client";

import { formatPrice } from "@/utils/helper";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const ProductCard: React.FC<PricedProduct & { className?: string }> = ({
  thumbnail,
  title,
  className,
  variants,
  categories,
  tags,
}) => {
  const price = Math.min.apply(
    Math,
    variants?.map((v) => v?.prices?.map((s) => s.amount) || []).flat(1) || []
  );

  return (
    <div
      className={twMerge(
        "flex flex-col rounded bg-white transition-all duration-300",
        "border-2 border-transparent hover:-translate-y-1 hover:border-neutral-100 hover:shadow-sm",
        "group",
        className
      )}
    >
      <div className="relative flex aspect-square w-full flex-col items-center justify-center">
        <Image
          src={thumbnail || ""}
          alt=""
          width={160}
          height={160}
          className="duration-400  m-auto origin-bottom transition-transform group-hover:scale-110"
        />
      </div>

      <div className="flex grow flex-col gap-2 p-4">
        <div>
          <span className="inline-flex  rounded bg-brand-50 px-3 py-0.5 text-xs font-semibold uppercase text-brand-900">
            {tags
              ?.find((t) => t.value.startsWith("BRAND"))
              ?.value.replace("BRAND:", "")}
          </span>
        </div>

        <div className=" line-clamp-2 min-h-[40px]  min-w-0 text-sm font-normal">
          {title}
        </div>

        <div className="text-lg font-semibold text-brand">
          {formatPrice(price)}
        </div>
      </div>
    </div>
  );
};
