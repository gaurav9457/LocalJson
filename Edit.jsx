import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { index } = useParams();
    const naviget=useNavigate()

    const[post,setPost]=useState({
      FName: "",
      LastName: "",
      Email: "",
      Password:"",
      Address:"",
      City:"",
      Zip:"",
      State:"",
      image: ""
    });



    useEffect(() => {
        axios.get(`http://localhost:8000/posts/${index}`)
            .then(response => {
                setPost(response.data)
            })
            .catch((error) => {
                alert("Error" + error)
            })
    }, [])


    const handleChange=(e)=>{
      setPost(prev=>({
        ...prev,
        [e.target.name]:e.target.value
    })
     )
    }

    const editUser=()=>{

      axios.put(`http://localhost:8000/posts/${index}`,post)
      .then(()=>{
        alert("Information Updated")
      })
      .catch((error)=>{
         alert("Not Updated"+error)
      })
      naviget('/')
    }

  return (
    <>
      {/* <h1>{index}</h1> */}
     <div className="container ">
     <div className="container">
                <form class="row g-3 bg-body-secondary mt-3 ">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" name="FName" className='form-control' id="" value={post.FName} onChange={handleChange} required/>
                       
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" className='form-control' name='LastName'value={post.LastName} onChange={handleChange} required/>
                        
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">Email Id</label>
                        <input type="email" name='Email' className='form-control' value={post.Email} onChange={handleChange} required/>
                       
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Password</label>
                        <input type="text" class="form-control" id="inputZip" name="Password" value={post.Password} onChange={handleChange} />

                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Image url</label>
                        <input type="text" className='form-control' name="image" id="" value={post.image} onChange={handleChange} required/>
                      
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address </label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="Address" value={post.Address} onChange={handleChange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" name="City" value={post.City} onChange={handleChange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" name="Zip" value={post.Zip} onChange={handleChange}/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">State</label>
                        <input type="text" class="form-control" id="inputZip" name="State" value={post.State} onChange={handleChange}/>
                    </div>
                   
                    <div class="col-12 d-flex  justify-content-center p-3">
                     <button className='btn btn-success'onClick={editUser} >Update</button>
                     {/* <button className='btn btn-success' onClick={editUser}>Add User</button> */}
                      
                    </div>
                </form>
            </div>

     {/* <label>First Name : </label> &nbsp;
      <input type="text" name="FName" id="" value={post.FName} onChange={handleChange}/>
      <br />
      <label htmlFor="">Last Name : </label> &nbsp;
      <input type="text" name='LastName' value={post.LastName} onChange={handleChange}/>
      <br />
      <label>Email Id : </label> &nbsp;
      <input type="text" name='Email' value={post.Email} onChange={handleChange}/>
      <br />
      <label htmlFor="">Image Url : </label> &nbsp;
      <input type="text" name="image" id="" value={post.image} onChange={handleChange}/>
      <br />
      <br />
      <button className='btn btn-success'onClick={editUser} >Update</button> */}
     </div>


    </>
  )
}

export default Edit
