'use client'
import { useState,createContext } from "react";

 
export const apiContext = createContext()
export const useToggleContext = createContext()


export function ApiProvider(props){
    const[data,setData] = useState([{}])

    return(

        <apiContext.Provider value={data}>
            <useToggleContext.Provider value={setData}>
                {props.children}
            </useToggleContext.Provider>

        </apiContext.Provider>
    );
}