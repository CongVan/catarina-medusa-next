import Image from "next/image";
import styles from "./page.module.css";

import { Suspense } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/Button";

export default function Home() {
  const promise = new Promise((resolve) =>
    setTimeout(() => resolve("ok"), 4000)
  );

  return (
    <div className="p-10 space-x-2">
      <Button variant="subtle">Mua ngay</Button>
      <Button variant="light">Mua ngay</Button>
      <Button variant="filled">Mua ngay</Button>
      <Button variant="default">Mua ngay</Button>
      <Button variant="default" disabled >Mua ngay</Button>
      <Button variant="outline" size="lg" >
        Mua ngay
      </Button>
    </div>
  );
}
