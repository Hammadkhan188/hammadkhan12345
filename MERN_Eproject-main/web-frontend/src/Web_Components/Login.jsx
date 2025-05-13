import axios from 'axios';
import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    let [email,setEmail] = useState("")
    let [pass,setPass] = useState("")
    let nav=useNavigate();

    async function login_work(){
        try {
            await axios.post("http://localhost:4000/web/log",{
                email :email,
                password:pass
            }).then((a)=>{
                toast.success(a.data.msg);
                localStorage.setItem("user_data",JSON.stringify(a.data.user))
                setEmail("")
                setPass("")
                nav("/get")
            })
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }
  return (
    <div className='container'>
        <h2>Login Now</h2>
        <p>Email</p>
        <input type="email" placeholder='Please Enter Email' className='form-control my-2' value={email}
        onChange={(e)=>setEmail(e.target.value)} />

        <p>Password</p>
        <input type="password" placeholder='Please Enter Password ' className='form-control my-2' value={pass} 
        onChange={(e)=>setPass(e.target.value)}  />


<button className='btn btn-primary my-2' onClick={login_work}>submit</button><br />
<Link to="/get">Please Register first</Link>
<ToastContainer/>
    </div>
  )
}
