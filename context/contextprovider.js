'use client'
import { useState,createContext } from "react";

 
export const apiContext = createContext()



export function ApiProvider(props){
    const[data,setData] = useState<Array>([])


    return(

        <apiContext.Provider value={{data,setData}}>
            
                {props.children}
       

        </apiContext.Provider> 
    );
}