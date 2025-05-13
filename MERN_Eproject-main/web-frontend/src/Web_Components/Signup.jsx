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
    let [phone,setPhone]= useState(0)
    


    function clear(){
        setName("") 
        setEmail("")
        setPass("")
        setAge(0)
        setPhone(0)

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
                    age:age,
                    phone:phone
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
          
        <h2>Register Now</h2><hr />
        <p>Name</p>
        <input type="text" placeholder='Please Enter Name' className='form-control my-2'value={name} 
        onChange={(e)=>setName(e.target.value)} />

        <p>Email</p>
        <input type="email" placeholder='Please Enter Email' className='form-control my-2' value={email}
        onChange={(e)=>setEmail(e.target.value)} />

        <p>Password</p>
        <input type="password" placeholder='Please Enter Password' className='form-control my-2' value={pass} 
        onChange={(e)=>setPass(e.target.value)}  />

        <p>Age</p>
        <input type="number" placeholder='Please Enter Age' className='form-control my-2' value={age}
        onChange={(e)=>setAge(e.target.value)} />

        <p>Phone</p>
        <input type="number" placeholder='Please Enter Phone' className='form-control my-2' value={phone}
        onChange={(e)=>setPhone(e.target.value)} />

        <button className='btn btn-primary my-2' onClick={save_form}>submit</button>

        <Link to="/log">Please Login Now</Link>
       
        <ToastContainer/>

    </div>
  )
}
