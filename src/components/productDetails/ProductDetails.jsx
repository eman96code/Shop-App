import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  async function getProduct() {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.productId}`
      );
      setProduct(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.thumbnail}
            alt="Product"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4 overflow-normal">{product.description}</p>
          <div className="text-gray-900 text-xl font-bold mb-4 price flex  space-x-5 items-center">
            <p className="oldPrice text-center text-gray-800 mt-1 line-through">{`${product.price} LE`}</p>
            <p className="newPrice text-center text-gray-800 mt-1">
              {`${(
                product.price -
                (product.price / 100) * product.discountPercentage
              ).toFixed(2)} LE`}
            </p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
