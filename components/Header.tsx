'use client'
import React from 'react'


import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import { useState, useEffect } from 'react';

const Header = () => {
    const [cookies, setCookie] = useCookies(['token']);
    const[decode,setDecode]= useState({name:''})
    let decoded :any 
    useEffect(()=>{try {
      setDecode(jwt_decode(cookies.token))
    } catch (error) {
      console.log(error);
      
    } },[cookies.token])
    console.log('decode: '+decoded);
  return (
   
       <h1 className=" uppercase tracking-[20px] text-gray-800 text-2xl animate-pulse">Productos: {decode.name || ""} </h1>
   
  )
}

export default Header
