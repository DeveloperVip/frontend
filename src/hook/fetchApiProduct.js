import { useEffect, useState } from "react";
import ApiProduct from "../services/APIproductService";

const useFetchApiProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const onFetchProduct = async () => {
    setLoading(true);
    try {
      const data = await ApiProduct.getAllProduct();
      console.log(data);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onFetchProduct();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchApiProduct;
