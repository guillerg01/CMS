'use client'
import React from 'react'

import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { apiContext, useToggleContext } from '@/context/contextprovider';


const Listado = () => {
    const URL = "http://localhost:4000/api/productos";
    const [cookies, setCookie] = useCookies(['token','idprod']);
    const [productos, setProductos] = useState([]);
    const setdata = useContext(useToggleContext)
const data = useContext(apiContext)



       


    useEffect(() => {
        const resp = axios
            .get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    "x-token": `${cookies.token}`
                },
            })
            .then((response) => {
                setProductos(response.data.productos);
                setdata([...data,{productos:productos}])
                console.log('listado get: '+productos);
                console.log(data);
                
            }).catch((e)=>{console.log(e);
            })
    }, []);
    return (
        <><h3 className=" my-10  uppercase tracking-[20px] text-gray-800 text-2xl animate-pulse bg-zinc-300 ">Listado</h3>
            <div className=' flex relative flex-col  text-left md:flex-row max-w-full xl:px-10 justify-evenly  mx-auto Dropdown.Items-center z-0"'>


                <div className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  ">
                    {productos.map((u: any, i) => {
                        return (
                            <div key={i} className='  transition-all flex flex-shrink-0 snap-center flex-col space-y-5 Dropdown.Items-center justify-center p-20 md:p-44 w-screen'>

                                    <div className='flex flex-row gap-5'>
                                        
                                    <button onClick={()=>{
                                         setCookie('idprod', `${u._id}`, { path: '/' });
  console.log(cookies.idprod);
  

                                    }} className="bg-stone-600 mx-4 rounded-md p-2  text-stone-200 hover:scale-105 shadow-md hover:shadow-xl"  >Actualizar</button>
                                    <button className='bg-red-600 w-8 rounded-md shadow-md hover:scale-105 top-[100%] '  >X</button>
                                    </div>


                                <div className='space-y-5 px-10  border-2 border-stone-500/75 p-5 w-[30rem] h-96 shadow-sm scroll max-w-6xl'>
                                    <h4 className='text-4l font-semibold text-center'>
                                        <span className='underline decoration-[#F7AB0A] font-bold '> {u.nombre} :</span> </h4>
                                       

                                    <p className=' text-center h-[40%]'>{u.descripcion}</p>
                                    <h4 className='text-center'>id: {u._id}</h4>
                                    <div className='flex space-x-5 Dropdown.Items-center justify-center'> 
                                        <div><h1 className='font-bold'>Precio: </h1>{u.precio}</div>
                                    <div><h1 className='font-bold'>Cantidad:</h1>{u.cantidad}</div>
                                    
                                    </div>
                                    
                                </div>
                            </div>)
                    })}



                </div>
            </div >
        </>
    )
}

export default Listado
