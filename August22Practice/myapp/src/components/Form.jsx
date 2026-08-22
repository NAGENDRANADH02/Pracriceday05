import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";


const Form = () => {
  const { addProduct } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: Date.now(),
      name: name,
      price: price,
    };

    addProduct(product);

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>Product Name</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Price</label>

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
};

export default Form;