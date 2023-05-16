import Image from "next/image";
import styles from "./page.module.css";
import { headers, cookies } from "next/headers";

import { Fragment, Suspense } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/Button";
import { MedusaClient } from "@/utils/medusa";
import { HomeProductCarouselTemplate } from "@/modules/home/template/HomeProductCarouselTemplate";
import { ProductCarouselSkeleton } from "@/modules/product/components/ProductCarouselSkeleton";
import { ProductListTemplate } from "@/modules/product/template/ProductListTemplate";

export default async function Home() {
  const { collections } = await MedusaClient.collections.list({ limit: 4 });
  const promises = collections.map((c) => ({
    collection: c,
    promise: MedusaClient.products.list({
      collection_id: [c.id],
      expand: "categories,variants,variants.prices,tags",
      limit: 25,
    }),
  }));

  const suggestPromises = MedusaClient.products.list({
    order: "created_at",
    expand: "categories,variants,variants.prices,tags",
    limit: 50,
  });
  return (
    <div className="">
      <Image
        className="h-auto w-full object-cover"
        src={"/banner.webp"}
        alt="catarina"
        width={1280}
        height={680}
      ></Image>
      <div className="container mt-10 space-y-10">
        {promises.map(({ collection, promise }, index) => (
          <Fragment key={index}>
            <Suspense
              fallback={<ProductCarouselSkeleton title={collection.title} />}
            >
              {/* @ts-expect-error Async ServerComponent */}
              <HomeProductCarouselTemplate
                promise={promise}
                collection={collection}
              />
            </Suspense>
          </Fragment>
        ))}
        <div>
          <div className="h3 mb-5 text-center">Gợi ý hôm nay</div>
          <Suspense>
            {/* @ts-expect-error Async ServerComponent */}
            <ProductListTemplate promise={suggestPromises} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
