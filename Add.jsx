import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const obj = {
    FName: "",
    LastName: "",
    Email: "",
    Password:"",
    Address:"",
    City:"",
    Zip:"",
    State:"",
    image: ""
}
const Add = () => {

    // const [post, setPost] = useState([])
    const [objPost, setObjPost] = useState(obj)
    const naviget = useNavigate()

    const createPost = () => {
        axios.post('http://localhost:8000/posts', objPost)

            .then(response => {
                setObjPost(response.data);
                alert("User created successfully");
            })

            .catch(error => {
                alert("Error creating post: " + error);
            });

        naviget('/')
    }
    const handelChange = (e) => {
        setObjPost(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        })

        )
    }

    const validate = () => {
        const pattern = /^[a-zA-Z]+$/;

        if (!objPost.FName.match(pattern) && objPost.FName == '') {
            alert("Fill the First Name")
        }
        else if (objPost.LastName == '') {
            alert("Enter the Last Name")

        }
        else if (objPost.Email == '') {
            alert("Enter the Email id")

        }
        else if (objPost.image == '') {
            alert("Enter image link")

        }
        else {
            createPost();
        }
    }

    return (
        <>
            <div className="container">
                <form class="row g-3 bg-body-secondary mt-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" name="FName" className='form-control' id="" value={objPost.FName} onChange={handelChange} required/>
                       
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" className='form-control' name='LastName' value={objPost.LastName} onChange={handelChange} required/>
                        
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">Email Id</label>
                        <input type="email" name='Email' className='form-control' value={objPost.Email} onChange={handelChange} required/>
                       
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Password</label>
                        <input type="text" class="form-control" id="inputZip" name="Password" value={objPost.Password} onChange={handelChange} />

                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Image url</label>
                        <input type="text" className='form-control' name="image" id=""  value={objPost.image} onChange={handelChange} required/>
                      
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address </label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="Address" value={objPost.Address} onChange={handelChange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" name="City" value={objPost.City} onChange={handelChange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" name="Zip" value={objPost.Zip} onChange={handelChange}/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">State</label>
                        <input type="text" class="form-control" id="inputZip" name="State" value={objPost.State} onChange={handelChange}/>
                    </div>
                   
                    <div class="col-12 d-flex  justify-content-center p-3">
                     <button className='btn btn-success' onClick={validate}>Add User</button>
                      
                    </div>
                </form>
            </div>


            {/* <label>First Name : </label> &nbsp;
      <input type="text" name="FName" id="" value={objPost.FName} onChange={handelChange} required/>
      <br />
      <label htmlFor="">Last Name : </label> &nbsp;
      <input type="text" name='LastName' value={objPost.LastName} onChange={handelChange} required/>
      <br />
      <label>Email Id : </label> &nbsp;
      <input type="email" name='Email' value={objPost.Email} onChange={handelChange} required/>
      <br />
      <label htmlFor="">Image Url : </label> &nbsp;
      <input type="text" name="image" id="" value={objPost.image} onChange={handelChange} required/>
      <br />
      <br />
      <button className='btn btn-success' onClick={validate}>Add User</button> */}
        </>
    )
}

export default Add
