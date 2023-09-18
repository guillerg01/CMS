'use client'
import { useState,createContext, Dispatch ,SetStateAction} from "react";


 
export const ApiContext = createContext<{
    data: string[];
    updatedata: (d:string[])=>void
    camposcontext: string[];
    setCamposcontext: Dispatch<SetStateAction<string[]>>;
  }>(({
    data: [],
updatedata: ()=>null,
    camposcontext: [],
    setCamposcontext: () => {},
  }))


  
export function ApiProvider(props:any){
    const[data,setData] = useState<string[]>([])
const[camposcontext,setCamposcontext] = useState<string[]>([])

console.log("App Provider")
function updatedata(d:string[]){
    console.log("campo en el contexto",d)
    setData(d)
}
    return(

        <ApiContext.Provider value={
        {data,
        updatedata,
        camposcontext,
        setCamposcontext}
            }>
            
                {props.children}
       

        </ApiContext.Provider> 
    );
}