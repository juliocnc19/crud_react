import { Button, Modal } from "flowbite-react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ModalInvalided() {
  const { repetid, isInvalid, isMinusThree, changeAModal } =
    useContext(ProductContext);

  const handleSubmit = () => {
    changeAModal();
  };

  return (
    <>
      <Modal
        dismissible
        show={repetid || isInvalid || isMinusThree}
        onClose={handleSubmit}
      >
        <Modal.Header>{"Aviso"}</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {isMinusThree &&
                "Nombre de producto muy corto (minimo tres caracteres). "}
              {repetid &&
                "El nombre del producto ya existe, inserte otro nombre. "}
              {isInvalid &&
                "Tanto la cantidad como el precio no pueden ser menores o iguales a cero. "}
              <br></br>
              <br></br>
              {isInvalid &&
                "Y, el nombre del producto no puede ser de tipo numerico"}
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
