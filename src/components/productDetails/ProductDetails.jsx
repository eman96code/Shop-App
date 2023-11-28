import { useParams } from "react-router-dom";

const ProductDetails=()=> {
  const params= useParams();
  console.log(params.productId);
  return (
    <div className="productDetails">
      <h1>
        {params.productId}
      </h1>
    </div>
  )
}
export default ProductDetails