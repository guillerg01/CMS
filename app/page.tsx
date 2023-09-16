'use client'
import Listado from "@/components/Listado";
import Product from "@/components/Product";
import Header from "@/components/Header";
import {ApiProvider} from '../context/contextprovider'
import { Login } from "@/components/login";

import Loader from "@/components/Loader";





export default function Home() {
 

 
 
  return (  
  
  <>
  <Login></Login>
        <Loader></Loader>
        </>
  
  
  
  
  
  
  
    
  
    // <main className="flex flex-col  Dropdown.Items-center justify-center  p-10">
    //  <Header></Header>
    // <Product></Product>
    // <Listado></Listado>
    // </main>
  
  )
}
