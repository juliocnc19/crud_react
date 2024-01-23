import { useForm } from "react-hook-form"


export default function FormInsert() {
  const {
    register,
    handleSubmit,
  } = useForm()


  const onSubmit = (data) => console.log(data)

  return (
    <div className="flex flex-col m-6 p-8  bg-slate-100 sm:rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <h1 className="uppercase mb-8 text-center text-gray-600 font-bold">Crear producto</h1>
            <div className="flex flex-col mb-5">
                <label className="mb-1 text-gray-600">Nombre del producto</label>
                <input defaultValue="" {...register("name",{ required: true, maxLength: 30 })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 " required/>
            </div>

            <div className="flex flex-col mb-5">
                <label className="mb-1 text-gray-600">Precio</label>
                <input type="number" {...register("price",{ required:true, min: 1 })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 " required/>
            </div>

            <div className="flex flex-col mb-5">
                <label className="mb-1 text-gray-600">Cantidad</label>
                <input type="number"  {...register("quantity", { required:true ,min:1 })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 " required/>
            </div>
     
            <input type="submit" value="Add" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "/>
        </form>
    </div>
    
  )
}
