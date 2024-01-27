import BottonDelete from "./BottoDelete";
import BottonEdit from "./BottonEdit";

export default function ListProducts({ products, deleteProduct }) {

  return (
    <div className="flex overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-600 uppercase bg-gray-50">
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
              Accion
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
                  {product.id}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {product.name}
                </th>
                <td className="px-3 py-4">{product.date}</td>
                <td className="px-3 py-4">{product.price}</td>
                <td className="px-3 py-4">{product.quantity}</td>
                <td className="flex flex-row px-3 py-4">
                  <BottonDelete deleteProduct={deleteProduct} id={product.id} />
                  <BottonEdit />
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center items-center">
              <td colSpan={6} className="px-6 py-4 text-gray-500 font-medium text-lg">
                Sin productos por ahora
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
