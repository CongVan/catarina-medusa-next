export const convertToDecimal = (amount: number | null) => {
  return Math.floor(amount || 0);
};

export const formatPrice = (amount: number | null) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    // TODO assuming region is already defined somewhere
    currency: "VND",
  }).format(convertToDecimal(amount));
};
