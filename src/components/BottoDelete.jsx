import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Modal, Button } from "flowbite-react";

export default function BottonDelete({ id }) {
  const { deleteProduct } = useContext(ProductContext);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModalDelete(true)}
        className="transition-all duration-500 hover:bg-gray-200 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>

      <Modal show={openModalDelete} size="md" popup color="white">
        <Modal.Header />
        <Modal.Body color="white">
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-slate-100">
              Seguro que quieres eliminar el producto?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  deleteProduct(id), setOpenModalDelete(false);
                }}
              >
                Si, estoy seguro
              </Button>
              <Button color="gray" onClick={() => setOpenModalDelete(false)}>
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
