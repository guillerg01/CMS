import React from 'react'
import Campo from './Campo'
import { useContext } from 'react';
import { ApiContext } from '@/context/contextprovider';

const Card = () => {




  const data = useContext(ApiContext)
  return (<div className="flex flex-col justify-center  px-2">

  <div className="mt-8 sm:mx-auto ">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form method="POST" action="#">
       {/* {data&&data.length!==0&&data[0].campos.map((c:any,i:any)=>{return(<Campo key={i}></Campo>)}) } */}

       

        
{/*         
        <div className="flex items-center justify-center mt-6">
  <span className="mr-3 text-gray-700 font-medium">Gender:</span>
  <label className="inline-flex items-center">
    <input type="radio" className="form-radio h-5 w-5 text-pink-600" name="gender" value="Male">
    <span className="ml-2 text-gray-700">Male</span>
  </label>
  <label className="inline-flex items-center ml-6">
    <input type="radio" className="form-radio h-5 w-5 text-purple-600" name="gender" value="Female">
    <span className="ml-2 text-gray-700">Female</span>
  </label>
</div>



        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="terms-and-condition" id="terms-and-condition">
            <label className="ml-2 block text-sm text-gray-900" >
              I agree to the terms and conditions
            </label>
          </div>
        </div> */}

        <div className="mt-6">
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
           Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Card
