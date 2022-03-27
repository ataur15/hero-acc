import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import Dslider from "../../components/custom/Dslider";
import ProductsArray from "../../components/home/ProductsArray";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Dslider />
      <ProductsArray products={products} />
    </div>
  );
};

export default Home;
