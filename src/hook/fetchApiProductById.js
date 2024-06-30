import { useEffect, useState } from "react";
import ApiProduct from "../services/APIproductService";

const useFetchProductById = (props) => {
  const { productitem } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const onFetchProduct = async (id) => {
    setLoading(true);
    try {
      const data = await ApiProduct.getProductById(id);
      console.log("🚀 ~ onFetchProduct ~ data:", data);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onFetchProduct(productitem);
  }, [productitem]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetchProductById;
