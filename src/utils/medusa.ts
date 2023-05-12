import Medusa from "@medusajs/medusa-js";

export const MedusaClient = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BASE_URL + "",
  maxRetries: 1,
});
