import ListProducts from "./components/ListProducts"
import FormInsert from "./components/FormInsert"
import { useState, useEffect } from "react"

export default function App(){
    const [products, setProducts] = useState([])
    const [dataEdit, setDataEdit] = useState(null)

    const createProduct = (newProduct) =>{
        setProducts([...products, newProduct])
    }

    const deleteProduct = (productSelected) =>{
        const newList = products.filter(product => productSelected != product.id)
        setProducts(newList)
    }

    return (
        <div className="flex items-center h-screen justify-around max-[900px]:flex-col">
            <FormInsert createProduct={createProduct}/>
            <ListProducts products={products} deleteProduct={deleteProduct}/>
        </div>
    )
}
