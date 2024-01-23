import ListProducts from "./components/ListProducts"
import FormInsert from "./components/FormInsert"

export default function App(){
    return (
        <div className="flex items-center h-screen justify-center">
            <ListProducts/>
            <FormInsert/>
        </div>
    )
}
