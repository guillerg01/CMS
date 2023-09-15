'use client';

import { Button, Checkbox, Label, Modal, TextInput ,DarkThemeToggle} from 'flowbite-react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { useCookies } from 'react-cookie';





export const  Login = () =>{
  const [openModal, setOpenModal] = useState("");
  const [user, setUser] = useState("");
  const [password, SetPassword] = useState("");
const[estado,setEstado] = useState("Inicia Session")

const [cookies, setCookie] = useCookies(['token']);


const handleSubmitLogin = ({}) => {
    
  cookies.token&&  setOpenModal("none")

    const res = axios.post('http://localhost:4000/api/auth/', {
      name: user,
      password: password,
    },{
    headers: {"Content-Type": "application/json"}
    })
      .then((response) => {
        
        setCookie('token', `${response.data.token}`, { path: '/' });
         console.log('token: ' +cookies.token);
         
         setUser("")
         SetPassword("")
        }).catch((e)=>{console.log('error: ' +e);
        })

  };
  
  const handleSubmitRegister = () => {
    
  

    const res = axios.post('http://localhost:4000/api/auth/new', {
      name: user,
      password: password,
    },{
    headers: {"Content-Type": "application/json"}
    })
      .then((response) => {
        
        setCookie('token', `${response.data.token}`, { path: '/' });
         console.log('token: '+cookies.token);
         setOpenModal("none")
         setUser("")
         SetPassword("")
        }).catch((e)=>{console.log('error: ' + e)})}



useEffect(()=>{

  if(cookies.token===undefined){
    setOpenModal('form-elements')
  }
},[cookies.token])


const handleClickregister = ()=>{

    if(estado==="Inicia Session"){setEstado("Registrarse")}
    else if(estado==="Registrarse"){setEstado("Inicia Session")}
}





  return (
    <>
      
      
      <Modal show={openModal === 'form-elements'} size="md"  popup onClose={() => setOpenModal('')}>
        
        <Modal.Body>
       
          <div className="space-y-6 my-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{estado}</h3>
            <div>
              <div className="mb-2 block">
                <Label  value="Tu Usuario" />
              </div>
              <input   value={user} onChange={(e) => setUser(e.target.value)} className="w-full px-3 py-2 h-10 border rounded-md  border-gray-600 bg-transparent " />
            </div>
            <div>
              <div className="mb-4 block">
                <Label  value="Tu Contraseña" />
              </div>
              <input    value={password} onChange={(e) => SetPassword(e.target.value)} className=" w-full px-3 h-10 border rounded-md  border-gray-600 bg-transparent " />
            </div>
            <div className="flex  items-center justify-center ">
            
              <Button onClick={estado==="Inicia Session"? handleSubmitLogin :handleSubmitRegister} className="w-full">{estado}</Button>
            
              
             
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
             No Tiene Cuenta?&nbsp;
              <p onClick={handleClickregister} className="text-cyan-700 hover:underline dark:text-cyan-500">
              {estado==="Inicia Session" ? "Registrarse" : "Inicia Session"}
              </p>
            </div>
          </div>
          
        </Modal.Body>
      </Modal>
    </>
  )
}