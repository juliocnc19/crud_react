import { Button, Modal } from "flowbite-react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ModalInvalided() {
  const { repetid, isInvalid, changeAModal } = useContext(ProductContext);

  const handleSubmit = () => {
    changeAModal();
  };

  return (
    <>
      <Modal dismissible show={repetid || isInvalid} onClose={handleSubmit}>
        <Modal.Header>
          {repetid ? "Elemento ya existente" : "Valores invalidos"}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {repetid
                ? "El nombre del producto ya existe, inserte otro nombre"
                : "Tanto el precio como la cantidad no pueden ser numeros menores o iguales a cero"}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {isInvalid && "Y, el nombre no puede ser un valor numerico"}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
