'use client'
import React from 'react'


import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";

const Header = () => {
    const [cookies, setCookie] = useCookies(['token']);
    let decoded :any= jwt_decode(cookies.token)
    console.log(decoded);
  return (
   
       <h1 className=" uppercase tracking-[20px] text-gray-800 text-2xl animate-pulse">Productos: {decoded.name} </h1>
   
  )
}

export default Header
