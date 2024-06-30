export default function formatCurrency(value){
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };