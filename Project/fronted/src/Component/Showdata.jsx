import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

export default function Showdata() {
    let [user_data,setUserdata]=useState([])
    let [na,setNa]=useState("")
    let [em,setEm]=useState("")
    let [id,setId]=useState("")
    let [age,setAge]=useState(0)
    useEffect(()=>{
        datalao()
    },[])
    async function datalao(){
        await axios.get("http://localhost:3002/web/users")
        .then((abc)=>{
            console.log(abc.data)
            setUserdata(abc.data)
        })
        .catch((e)=>{
            console.log(e)
        })
      
    }
    async function remove(id){
        try {
            if (window.confirm("are you sure")) {
                await axios.delete(`http://localhost:3002/web/users/${id}`).then(()=>{
                    datalao();
                    toast.info("Recorde Deleted Succesfully")
                })
            }
            
        } catch (error) {
            toast.error(error.response.data.msg)
            
        }

    }
    async function Edit(){
        try {
            await axios.put(`http://localhost:3002/web/users/${id}`,{
                name: na,
                email:em,
                age:age
            }).then((e)=>{
                datalao();
                toast.success(e.data.msg)
                document.querySelector(".subhan").click()

            })
            
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }
    async function fetch_data(a,b,c,d){
        setNa(a)
        setEm(b)
        setAge(c)
        setId(d)

    }
  return (
    <div className='container'>
        <ToastContainer/>
        <h1>User data</h1><hr />
        <div className="row">
            {(user_data.length ===0) ?(
            <div class="card">
                <div class="card-body">
                    <p class="card-text text-danger">no user found</p>
                </div>
            </div>
            
            ):
            user_data.map((a)=>(
                <div className='col-md-3 mt-2' key={a.id}>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{a.name}</h4>
                        <p class="card-text">{a.email}</p>
                        <button className='btn btn-danger' onClick={()=>{console.log(a._id);remove(a._id)}}><i class="bi bi-trash"></i></button>
                        <button className='btn btn-primary'data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>fetch_data(a.name,a.email,a.age,a._id)} ><i class="bi bi-pencil"></i></button>

                    </div>
                </div>
                </div>
                
            ))}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" className='form-control mt-2' value={na}  onChange={(e)=>setNa(e.target.value)}/>
        <input type="text" className='form-control mt-2' value={em}  onChange={(e)=>setEm(e.target.value)} />
        <input type="text" className='form-control mt-2' value={age}  onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary subhan" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={Edit}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}
