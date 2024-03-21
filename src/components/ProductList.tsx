import { useEffect, useState } from "react";
import instance from "~/apis";
import { getAllProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    // Cach 1:
    // fetch('http://localhost:3000/products').then(res => res.json()).then(data => {setProducts(data)})

    // Cach 2:
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();

    // Cach 3:
    const getProducts = async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <h2>San pham danh cho nam:</h2>
      {products.map((product: TProduct) => (
        <div key={product.id}>
          <Link to={`/shop/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p>{product.price}</p>
          <Link to={`/shop/${product.id}`}>
            <img width={360} src={product.thumbnail} alt={product.title} />
          </Link>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
