"use client";

import { QueryClient } from "@tanstack/react-query";
import {
  CartProvider,
  MedusaProvider,
  SessionCartProvider,
} from "medusa-react";
import { ReactNode } from "react";
const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BASE_URL + ""}
    >
      <SessionCartProvider>
        <CartProvider>{children}</CartProvider>
      </SessionCartProvider>
    </MedusaProvider>
  );
};
