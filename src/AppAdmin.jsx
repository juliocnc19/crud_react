import ListProducts from "./components/ListProducts"
import FormInsert from "./components/FormInsert"
import { useState, useEffect } from "react"

export default function App(){
    return (
        <div className="flex items-center h-screen justify-around max-[900px]:flex-col">
            <FormInsert/>
            <ListProducts/>
        </div>
    )
}
