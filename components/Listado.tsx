'use client'
import React from 'react'

import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Listado = () => {
    const URL = "http://localhost:4000/api/productos";
    const [cookies, setCookie] = useCookies(['token']);
    const [productos, setProductos] = useState([]);

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
                console.log(productos);
            });
    }, []);
    return (
        <><h3 className=" my-10  uppercase tracking-[20px] text-gray-800 text-2xl animate-pulse bg-zinc-300 ">Listado</h3>
            <div className=' flex relative flex-col  text-left md:flex-row max-w-full xl:px-10 justify-evenly  mx-auto items-center z-0"'>


                <div className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  ">
                    {productos.map((u: any, i) => {
                        return (
                            <div key={i} className='  transition-all flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 w-screen'>




                                <div className='space-y-5 px-10  border-2 border-stone-500/75 p-5 w-96 h-60 shadow-sm scroll max-w-6xl'>
                                    <h4 className='text-4l font-semibold text-center'>
                                        <span className='underline decoration-[#F7AB0A] font-bold '> {u.nombre} :</span> </h4>

                                    <p className=' text-center h-[40%]'>{u.descripcion}</p>
                                    <div className='flex space-x-5 items-center justify-center'> 
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
