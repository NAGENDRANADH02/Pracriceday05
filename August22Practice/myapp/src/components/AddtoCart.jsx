import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";


const AddtoCart = () => {
  const {
    cart,
    deleteProduct,
    editProduct,
  } = useContext(GlobalContext);

  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleEdit = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  const handleSave = (id) => {
    editProduct(id, name, price);

    setEditingId(null);
  };

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((product) => (

        <div key={product.id}>

          {editingId === product.id ? (

            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <button
                onClick={() => handleSave(product.id)}
              >
                Save
              </button>
            </>

          ) : (

            <>
              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <button
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </>

          )}

        </div>

      ))}
    </div>
  );
};

export default AddtoCart;