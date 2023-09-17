"use client";

import React from "react";
import App from "./app";
import { useState } from "react";

import Drowdown from "./components/Drowdown";
import Campos from "./components/campos";
import Card from "./components/Card";
import { useContext } from "react";
import { apiContext } from "@/context/contextprovider";

const Layout = () => {
  const datacontext = useContext(apiContext);
  const [campos, setCampos] = useState<String[]>([]);
  const [campo, setCampo] = useState("");
  const [cantidadCampos, setCantidadCampos] = useState<number>(0);
  let i = 0;

  console.log(datacontext);
  

  const handlecampo = () => {
    setCampos([...campos, campo]);
    console.log("Arreglo local de campos: " + campos);
    // setData(campos);
    // console.log("data del contexto : " + data);
  };
  return (
    <div className="flex text-black flex-col-2">
      <div className="w-[25%] h-screen bg-[#E2E2E5] "> </div>

      <div className="w-full h-full flex flex-col">
        <div className="  flex justify-end px-5 py-2 w-full h-16">
          <div className="flex flex-row space-x-2  items-center justify-center">
            <svg
              className="w-14 h-14"
              filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
              stroke="gray"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <h2 className="">Guillermo</h2>
            <Drowdown></Drowdown>
          </div>
        </div>

        <div>
          <div className="flex justify-between m-7 text-center bg-[#EDEDF6] bg-opacity-40 rounded-md p-2 shadow-md">
            <div className="space-x-2">
              <h1 className=" m-2 ">Escriba una cantidad</h1>
              <input
                value={cantidadCampos}
                onChange={(e: any) => {
                  setCantidadCampos(e.target.value);
                }}
                type="text"
                className="p-2 border-0 rounded-md w-72"
                placeholder="Campo"
              />
              <button
                onClick={handlecampo}
                className="bg-[#dddde2]  hover:animate-spin hover:scale-105 hover:shadow-lg transition-all p-2 rounded-md"
              >
                Guardar
              </button>
            </div>
            <div className="space-x-2">
              <h1 className=" m-2 ">Escriba un nombre</h1>
              <input
                value={campo}
                onChange={(e: any) => {
                  setCampo(e.target.value);
                }}
                type="text"
                className="p-2 border-0 rounded-md w-72"
                placeholder="Campo"
              />
              <button
                onClick={handlecampo}
                className="bg-[#dddde2] hover:animate-spin hover:scale-105 hover:shadow-lg transition-all p-2 rounded-md"
              >
                Agregar campo
              </button>
            </div>
          </div>
        </div>
        <div></div>

        <div id="campos" className="grid grid-cols-3  gap-5">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
