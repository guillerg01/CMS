import Listado from "@/components/Listado";
import Product from "@/components/Product";
import Header from "@/components/Header";

export default function Home() {
 
  
  return (
    <main className="flex flex-col  items-center justify-center  p-10">
     <Header></Header>
    <Product></Product>
    <Listado></Listado>
    </main>
  )
}
