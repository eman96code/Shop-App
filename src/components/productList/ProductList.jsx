import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductCard from '../productCard/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      setProducts(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  const categories=[];
  function getCategories() {
    products.filter((product) => {
      categories.push(product.category);
      console.log(categories);
      console.log([...new Set(categories)]);
      return [...new Set(categories)]

    })
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  
  return (
    <section>
      <div className="container">
        <div className="filter">
          {}
        </div>
      <h1 className='my-4 text-2xl font-bold text-gray-800 text-center'>Available Products</h1>
        <div className="row flex items-end flex-wrap justify-between space-y-10">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductList;
