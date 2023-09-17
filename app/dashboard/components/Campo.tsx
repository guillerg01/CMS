import React from 'react'


const Campo = () => {


    
  return (
    <div>
    <label className="block text-sm font-medium text-gray-700" >
      Username
    </label>
    <div className="mt-1">
      <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  placeholder="username" type="text" name="username" id="username"/>
    </div>
  </div>
  )
}

export default Campo
