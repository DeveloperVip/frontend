import React, { useEffect, useState } from 'react'
import ProductForm from '../../components/Seller/ProductForm/ProductForm';
import ProductList from '../../components/Seller/ProductList/ProductList';

const SellerPage = () => {
    const [products, setProducts] = useState({});

    const fetchProductsFromLocalStorage = () => {
        const storedProducts = {};
        Object.keys(localStorage).forEach((key) => {
            if (key !== 'products') {
                storedProducts[key] = JSON.parse(localStorage.getItem(key));
            }
        });
        return storedProducts;
    };

    useEffect(() => {
        const storedProducts = fetchProductsFromLocalStorage();
        setProducts(storedProducts);
    }, []);

    const handleSubmit = (data) => {
        const { productId, category } = data;
        const updatedProducts = {
            ...products,
            [productId]: { ...data, category: category },
        };
        setProducts(updatedProducts);

        localStorage.setItem(productId, JSON.stringify({ ...data, category: category }));
    };

    const handleDelete = (productId) => {
        const updatedProducts = { ...products };
        delete updatedProducts[productId];

        setProducts(updatedProducts);
        localStorage.removeItem(productId);
    };

    return (
        <div className="seller h-auto">
            <ProductForm onSubmit={handleSubmit} />
            <ProductList products={products} onDelete={handleDelete} />
        </div>
    );
}

export default SellerPage