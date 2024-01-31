import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ModalInvalided from "./ModalInvalided";

export default function FormInsert() {
  const { register, handleSubmit, reset } = useForm();
  const generateId = () => Math.floor(Math.random() * 1000);

  const { createProduct, isEditting } = useContext(ProductContext);

  const onSubmit = (data) => {
    const currentDate = new Date();
    data.date = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    data.id = generateId();
    createProduct(data);
    reset();
  };

  return (
    <>
      <div className="flex flex-col p-8 bg-slate-50 shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <h1 className="uppercase mb-8 text-center text-gray-600 font-bold">
            Crear producto
          </h1>
          <div className="flex flex-col mb-5">
            <label className="mb-1 text-gray-600">Nombre del producto</label>
            <input
              defaultValue=""
              {...register("name", { required: true, maxLength: 30, minLength:3 })}
              className="transition-all duration-200 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2"
              required
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-gray-600">Precio</label>
            <input
              type="number"
              {...register("price", { required: true, min: 1 })}
              className="transition-all duration-200 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
              required
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-gray-600">Cantidad</label>
            <input
              type="number"
              {...register("quantity", { required: true, min: 1 })}
              className="transition-all duration-200 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
              required
            />
          </div>
          {!isEditting && (
            <input
              type="submit"
              value="Agregar"
              className="transition-all duration-200 bg-green-100 hover:bg-green-300 border border-gray-300 text-gray-600 text-sm rounded-lg outline-none p-2 font-bold"
            />
          )}
        </form>
      </div>
      <ModalInvalided />
    </>
  );
}
