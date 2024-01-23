import BottonDelete from "./BottoDelete"
import BottonEdit from "./BottonEdit"
import { useEffect } from "react"


export default function(){
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
                <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        1
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Julio
                    </th>
                    <td className="px-6 py-4">
                        19/01/2003
                    </td>
                    <td className="px-6 py-4">
                        20
                    </td>
                    <td className="px-6 py-4">
                        300
                    </td>
                    <td className="flex flex-row px-6 py-4">
                        <BottonDelete/>
                        <BottonEdit/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}