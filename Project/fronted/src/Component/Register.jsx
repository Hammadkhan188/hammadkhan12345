import { toast ,ToastContainer} from 'react-toastify';
import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

export default function Register() {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [pass,setPass] = useState("")
    let [age,setAge]= useState(0)


    function clear(){
        setName("")
        setEmail("")
        setPass("")
        setAge(0)

    }
    
    function save_form(){
        try {
            axios.post("http://localhost:3002/web/reg",{
            name:name,
            email:email,
            password:pass,
            age:age
        })
        console.log("data save succesfully")
        toast.success("data enter successfully")
        clear()
        } catch (error) {
            toast.error(error)
            console.log(error)
            
        }

    }
  return (
    <div className='container'>
          {/* <ToastContainer/> */}
        <h2>user Registeration form</h2><hr />
        <p>enter your name</p>
        <input type="text" placeholder='enter name' className='form-control my-2'value={name} 
        onChange={(e)=>setName(e.target.value)} />

        <p>enter your email</p>
        <input type="email" placeholder='enter name' className='form-control my-2' value={email}
        onChange={(e)=>setEmail(e.target.value)} />

        <p>enter your password</p>
        <input type="password" placeholder='enter name' className='form-control my-2' value={pass} 
        onChange={(e)=>setPass(e.target.value)}  />

        <p>enter your age</p>
        <input type="number" placeholder='enter name' className='form-control my-2' value={age}
        onChange={(e)=>setAge(e.target.value)} />

        <button className='btn btn-primary my-2' onClick={save_form}>submit</button>
       
      

    </div>
  )
}
