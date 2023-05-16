"use client";

import { NextButton, PrevButton } from "@/components/CarouseNavigation";
import { useCarousel } from "@/hooks/use-carousel";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductCard } from "../components/ProductCard";
import { useCart, useProduct, useProducts, useSessionCart } from "medusa-react";

export const ProductCarouselTemplate: React.FC<{
  products: PricedProduct[];
  title: string;
}> = ({ products, title }) => {
  const { prevBtnEnabled, scrollNext, scrollPrev, nextBtnEnabled, ref } =
    useCarousel({
      loop: false,
      align: "start",
      skipSnaps: false,
      containScroll: "trimSnaps",
    });

  return (
    <div className="">
      <div className="text-center">
        <div className="h3">{title}</div>
        <div className="flex justify-center gap-4 ">
          <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
          <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        </div>
      </div>

      <div ref={ref} className="container  mx-auto  overflow-hidden">
        <div className="flex py-4">
          {products.map((p) => (
            <div
              key={p.id}
              className=" mr-2 min-w-0 flex-shrink-0 flex-grow-0 basis-1/2 lg:basis-1/5"
            >
              <ProductCard {...p} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
