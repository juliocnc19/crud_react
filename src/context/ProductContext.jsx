import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [isEditting, setIsEditing] = useState(false);
  const [idSelected, setIdSelected] = useState(null);
  const [repetid, setRepetid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const createProduct = (newProduct) => {
    for (let product in products) {
      if (products[product].name == newProduct.name) {
        setRepetid(true);
        return;
      }
    }
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productSelected) => {
    const newList = products.filter((product) => productSelected != product.id);
    setProducts(newList);
  };

  const updateProduct = (productUpdated) => {
    
    if (productUpdated.price <= 0 || productUpdated.quantity <= 0 || Number(productUpdated.name)) {
      setIsInvalid(true);
      return;
    }

    for (let product in products) {
      if (products[product].name == productUpdated.name && products.length > 1 && products[product].id != productUpdated.id) {
        setRepetid(true);
        return;
      }
    }

    const newListUpdated = products.map((product) => {
      return productUpdated.id == product.id ? productUpdated : product;
    });

    setProducts(newListUpdated);
  };

  const changeEditMode = () => {
    if (isEditting == false) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  const IdtoEdit = (id) => {
    setIdSelected(id);
  };

  const changeAModal = () => {
    if (repetid == false || isInvalid == false) {
      setRepetid(true);
      setIsInvalid(true);
    } else {
      setRepetid(false);
      setIsInvalid(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        deleteProduct,
        products,
        isEditting,
        updateProduct,
        changeEditMode,
        IdtoEdit,
        idSelected,
        repetid,
        isInvalid,
        changeAModal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
