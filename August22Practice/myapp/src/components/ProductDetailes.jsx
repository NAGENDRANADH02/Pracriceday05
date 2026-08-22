import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const ProductDetails = () => {
  const { products, addToCart } = useContext(GlobalContext);

  return (
    <div>
      <h2>Product Details</h2>

      {products.map((product) => (
        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
};

export default ProductDetails;