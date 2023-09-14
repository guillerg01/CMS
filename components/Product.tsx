"use client";

import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./login";
import jwt_decode from "jwt-decode";


import { useCookies } from 'react-cookie';
type Inputs = {
  nombre: String;
  cantidad: number;
  descripcion: String;
  precio: number;
};

const Product = () => {
  const [cookies, setCookie] = useCookies(['token']);
  let decoded :any= jwt_decode(cookies.token)
 const[restablecer,setRestablecer] = useState(false)

  const URL = "http://localhost:4000/api/productos";

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const resp = axios
      .post(
        URL,
        {
          nombre: data.nombre,
          cantidad: data.cantidad,
          descripcion: data.descripcion,
          precio: data.precio,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-token" : `${cookies.token}`
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  const url =
    "https://novonegocio.com.br/wp-content/uploads/2014/05/20-Produtos-Para-Vender-e-Lucrar-768x497.jpg";


    const handleClick = ()=>{
      setRestablecer(!restablecer)
    }
  return (<>
    <div className="shadow-md mt-5 bg-zinc-300/60  flex flex-col-2 shadow-stone-400 w-[80%]  h-[80%] p-24">
      <h4 className="absolute top-32 left-[50%] underline decoration-slate-700">Id de usuario: {decoded.uid}</h4>
      <div>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("nombre")}
            className="bg-transparent  border-transparent outline-none  border-b-zinc-500 shadow-lg hover:shadow-2xl   rounded-sm p-1 hover:scale-[1.02] transition-all w-[90%] h-10 hover:border-b-zinc-500 border-2 "
            placeholder="Nombre"
          ></input>
          <input
            {...register("cantidad")}
            type="number"
            className="bg-transparent border-transparent outline-none  border-b-zinc-500 shadow-lg hover:shadow-2xl   rounded-sm p-1 hover:scale-[1.02] transition-all w-[90%] h-10 hover:border-b-zinc-500 border-2 "
            placeholder="Cantidad"
          ></input>
          <textarea
            {...register("descripcion")}
            className="bg-transparent py-3 border-transparent outline-none  border-b-zinc-500 shadow-lg hover:shadow-2xl   rounded-sm p-1 hover:scale-[1.02] transition-all w-[90%] h-28 hover:border-b-zinc-500 border-2 "
            placeholder="Descripcion"
          ></textarea>
          <input
            {...register("precio")}
            type="number"
            className="bg-transparent border-transparent outline-none  border-b-zinc-500 shadow-lg hover:shadow-2xl   rounded-sm p-1 hover:scale-[1.02] transition-all w-[90%] h-10 hover:border-b-zinc-500 border-2 "
            placeholder="Precio"
          ></input>
          <button
          onClick={handleClick}
            type="submit"
            className="bg-stone-600 rounded-md p-2  hover:scale-105 shadow-md hover:shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full ">
        <Image
          className="rounded-md shadow-md"
          alt="foto"
          width={500}
          height={500}
          src={url}
        ></Image>
      </div>
    </div>
    <Login></Login>
    </>
  );
};

export default Product;
