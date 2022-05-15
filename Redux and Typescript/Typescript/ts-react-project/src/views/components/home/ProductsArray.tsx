import React from "react";
import ProductCard from "../common/ProductCard";

const ProductsArray = ({ products }: { products: IProduct[] }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsArray;
