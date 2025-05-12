import { toast ,ToastContainer} from 'react-toastify';
import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import {Link} from "react-router-dom"
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
    
   async function save_form(){
        try {
            let pswd_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            let username_regex=/^[A-Za-z0-9_-]{3,15}$/
            if(!name || !email || !pass || age ===0){
                toast.error("All field are required")
            }
            else if(!pswd_regex.test(pass)){
                toast.error("password invalid")
            }
            else if(!username_regex.test(name)){
                toast.error("username invalid")
            }
            else if(age < 18){
                toast.error("age greater then 18")
            }
            else{
                await  axios.post("http://localhost:3002/web/reg",{
                    name:name,
                    email:email,
                    password:pass,
                    age:age
                })
                console.log("data save succesfully")
                toast.success("data enter successfully")
                clear()

            }
      
        } catch (error) {
            if(error.status ===409){
                toast.error('email already exist')
            }
            toast.error(error)
            console.log(error)
            
        }

    }
  return (
    <div className='container'>
          
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

        <Link to="/log">Please Login Now</Link>
       
        <ToastContainer/>

    </div>
  )
}
