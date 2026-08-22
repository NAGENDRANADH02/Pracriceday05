import { createContext, useState } from "react";


export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Form → Context
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // ProductDetails → Context
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // AddtoCart → Context
  const deleteProduct = (id) => {
    setCart((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  // AddtoCart → Context
  const editProduct = (id, name, price) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, name, price }
          : product
      )
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        cart,
        addProduct,
        addToCart,
        deleteProduct,
        editProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;