import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import PathDirect from "../../components/PathDirect/PathDirect";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import ProductBrand from "../../components/ProductBrand/ProductBrand";
import FilterInfo from "../../components/FilterInfo/FilterInfo";
import Tag from "../../components/Tag/Tag";
import Sort from "../../components/Sort/Sort";
import ProductItem from "../../components/ProductItem/ProductItem";
import Pagination from "../../components/Pagination/Pagination";
import useFetchApiProduct from "../../hook/fetchApiProduct";
import { useSort } from "../../context/SortContext";
import { useFilterBrand } from "../../context/FilterBrandContext";
import { useFilterContext } from "../../context/FilterInfoContext";

const Product = ({ basket, addToBasket, updateBasketItem }) => {
  const [page, setPage] = useState(0);
  const priceProductRange = [0, 100000000];
  const [nameCategogry, setNameCategogry] = useState("");
  const { filterOptions } = useFilterContext();
  const { selectedBrands } = useFilterBrand();
  const [filterProduct, setFilterProduct] = useState([]);
  const { data: products } = useFetchApiProduct();
  const { selectedDisplay, selectedSort } = useSort();
  console.log(products);
  const amountPage = Math.ceil(products.length / selectedDisplay);
  let productPage = [];
  for (let i = 0; i < amountPage; i++) {
    const temp = products.slice(i * selectedDisplay, (i + 1) * selectedDisplay);
    productPage.push(temp);
  }

  //sort with condition another
  const sortProductList = (selectedSort) => {
    switch (selectedSort) {
      case "price-low-high": {
        productPage[page].sort(
          (productA, productB) => productA.price - productB.price
        );
        break;
      }
      case "price-high-low": {
        productPage[page].sort(
          (productA, productB) => productB.price - productA.price
        );
        break;
      }
      case "name-az":
        productPage[page].sort((productA, productB) =>
          productA.name.toLowerCase().localeCompare(productB.name.toLowerCase())
        );
        break;
      case "name-za":
        productPage[page].sort((productA, productB) =>
          productB.name.toLowerCase().localeCompare(productA.name.toLowerCase())
        );
        break;

      case "promotion-yes":
        break;
      case "promotion-no":
        break;

      default:
        return productPage[page];
    }

    return productPage[page];
  };
  if (selectedSort) sortProductList(selectedSort);

  //sortby brand
  const filterBrand = (productsToFilter) => {
    const product = productsToFilter.filter((product) =>
      selectedBrands.includes(product.brand)
    );
    return setFilterProduct(product);
  };

  //sort by money
  const filterProducts = (productsToFilter) => {
    const productfiltered = productsToFilter.filter((product) => {
      // Lọc theo sizeOfNumber
      if (
        filterOptions.sizeOfNumber.length > 0 &&
        !filterOptions.sizeOfNumber.includes(product.sizeOfNumber)
      ) {
        return false;
      }
      // Lọc theo color
      else if (
        filterOptions.color.length > 0 &&
        !filterOptions.color.includes(product?.color?.value)
      ) {
        return false;
      }
      // Lọc theo sizeOfString
      else if (
        filterOptions.sizeOfString.length > 0 &&
        !filterOptions.sizeOfString.includes(product.sizeOfString)
      ) {
        return false;
      }
      // Lọc theo internalMemory
      else if (
        filterOptions.internalMemory.length > 0 &&
        !filterOptions.internalMemory.includes(product.internalMemory)
      ) {
        return false;
      }
      // Lọc theo material
      else if (
        filterOptions.material.length > 0 &&
        !filterOptions.material.includes(product.material)
      ) {
        return false;
      }
      // Lọc theo priceRange
      else if (product.price < filterOptions.priceRange[0]) {
        return false;
      } else if (
        product.price < filterOptions.priceRange[0] ||
        product.price > filterOptions.priceRange[1]
      ) {
        return false;
      }
      // Lọc theo brand
      else if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      return true;
    });
    return setFilterProduct(productfiltered);
  };

  //sort by name category
  const handleChangeCategory = (category) => {
    console.log(category);
    return setNameCategogry((prev) => {
      console.log(prev);
      if(prev === category) return null;
      return category;
    });
  };
  const filterCategory = (productsToFilter) => {
    const product = productsToFilter.filter(
      (product) => product.categoryDetail_id === nameCategogry
    );
    return setFilterProduct(product);
  };

  useEffect(() => {
    if (selectedBrands) filterBrand(products);
  }, [selectedBrands]);
  useEffect(() => {
    if (filterOptions) filterProducts(products);
  }, [filterOptions]);
  useEffect(() => {
    console.log(nameCategogry);
    if (nameCategogry) filterCategory(products);
  }, [nameCategogry]);
  return (
    <div className="product-page" style={{ height: "auto" }}>
      <PathDirect name="sản phẩm" />
      <div className="d-flex flex-row content">
        <aside>
          <ProductCategory onSelectCategory={handleChangeCategory} />
          <ProductBrand product={productPage[page]} />
          <FilterInfo products={products} />
          <Tag />
        </aside>
        <section>
          <Sort />
          <div className="show-product mb-5">
            {filterProduct.length > 0 ||
            nameCategogry ||
            priceProductRange[0] !== filterOptions.priceRange[0] ||
            priceProductRange[1] !== filterOptions.priceRange[1]
              ? filterProduct?.map((item) => {
                  return (
                    <ProductItem
                      basket={basket}
                      updateBasketItem={updateBasketItem}
                      products={item}
                      addToBasket={addToBasket}
                      update
                    />
                  );
                })
              : productPage[page]?.map((item) => {
                  return (
                    <ProductItem
                      basket={basket}
                      updateBasketItem={updateBasketItem}
                      products={item}
                      addToBasket={addToBasket}
                      update
                    />
                  );
                })}
          </div>
          <Pagination amountPage={amountPage} setPage={setPage} />
        </section>
      </div>
    </div>
  );
};

export default Product;
