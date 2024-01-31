import BottonDelete from "./BottoDelete";
import BottonEdit from "./BottonEdit";
import { useContext, useRef } from "react";
import { ProductContext } from "../context/ProductContext";
import ModalInvalided from "./ModalInvalided";

export default function ListProducts() {
  const { products, isEditting, idSelected, changeEditMode, updateProduct } =
    useContext(ProductContext);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleSubmit = () => {
    const currentDate = new Date();
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const date = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;

    const data = { id, name, date, price, quantity };

    updateProduct(data);
    changeEditMode();
  };

  return (
    <>
      <div className="flex overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-600 uppercase bg-gray-50 border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Cantidad
              </th>
              <th scope="col" className="px-6 py-3">
                {!isEditting && "Accion"}
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {isEditting && idSelected == product.id ? (
                      <input
                        type="text"
                        ref={idRef}
                        className="w-8"
                        value={product.id}
                        readOnly
                      />
                    ) : (
                      product.id
                    )}
                  </th>
                  <th
                    scope="row"
                    className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {isEditting && idSelected == product.id ? (
                      <input
                        type="text"
                        minLength={3}
                        ref={nameRef}
                        className="w-32 transition-all duration-200 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
                        defaultValue={product.name}
                      />
                    ) : (
                      product.name
                    )}
                  </th>
                  <td className="px-3 py-4">
                    {isEditting && idSelected == product.id ? (
                      <input
                        type="text"
                        readOnly
                        className="w-24"
                        defaultValue={product.date}
                      />
                    ) : (
                      product.date
                    )}
                  </td>
                  <td className="px-3 py-4 text-center">
                    {isEditting && idSelected == product.id ? (
                      <input
                        type="number"
                        ref={priceRef}
                        min={1}
                        className="w-20 transition-all duration-200 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
                        defaultValue={product.price}
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td className="px-3 py-4 text-center">
                    {isEditting && idSelected == product.id ? (
                      <input
                        type="number"
                        ref={quantityRef}
                        min={1}
                        className="w-20 transition-all duration-200 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
                        defaultValue={product.quantity}
                      />
                    ) : (
                      product.quantity
                    )}
                  </td>
                  <td className="flex flex-row px-3 py-4">
                    {isEditting && idSelected == product.id && (
                      <input
                        type="submit"
                        onClick={handleSubmit}
                        className="transition-all duration-200 bg-green-100 hover:bg-green-300 border border-gray-300 text-gray-600 text-sm rounded-lg outline-none p-2 font-bold"
                        value="Actualizar"
                      />
                    )}

                    {isEditting && idSelected == product.id && (
                      <button
                        onClick={() => changeEditMode()}
                        className=" ml-2 transition-all duration-200 bg-red-200 border border-red-600 text-red-600 hover:bg-red-600 hover:text-slate-50 text-sm rounded-lg outline-none p-2 font-bold"
                      >
                        Cancelar
                      </button>
                    )}
                    {!isEditting && <BottonDelete id={product.id} />}
                    {!isEditting && <BottonEdit id={product.id} />}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center items-center">
                <td
                  colSpan={6}
                  className="px-6 py-4 text-gray-500 font-medium text-lg"
                >
                  Sin productos por ahora
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ModalInvalided />
    </>
  );
}
