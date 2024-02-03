import axios from 'axios';
// import { Button, Modal } from 'bootstrap';
import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { Icon } from '@iconify/react';
import { Spinner } from 'react-bootstrap';

const Home = () => {

    const [post, setPost] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = 'http://localhost:8000/posts'

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPost(response.data)
                setLoading(false);
            })
            .catch((error) => {
                alert("Error" + error)
            })
    }, [])

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8000/posts/${id}`)
        window.location.reload();

    }

    const handleView = (user) => {
        setSelectedUser(user);
    };

    const handleClose = () => {
        setSelectedUser(null);
      };

    return (
        <div className="container-fluid navcss">
        <div className='container' >
           
            <div className="row">
            {loading ? (
        
        <Spinner animation="border" role="status"  className=' m-auto '>
          <span className="visually-hidden  ">Loading...</span>
        </Spinner>
      ) : post.map((item, index) => {
        return (
            <>
                <div className=" row-cols-1 col-md-6 g-3">
                    {/* <div class="card " style={{width: "15rem;"}}>
                    <img src={item.image} class="card-img-top" alt="image not Found" style={{borderRadius:"50%"}}/>
                    <div class="card-body">
                        <h5 class="card-title">{item.FName}</h5>
                        <p class="card-text">{item.LastName}</p>
                        <a href="#" >{item.Email}</a>
                        <br /> <br/>
                        <Link to={`/edit/${item.id}`}><button class="btn btn-primary">Edit</button> </Link>
                        <button class="btn btn-danger" onClick={()=>{deleteUser(item.id)}}  >Delete</button> 
                    </div>
                </div> */}
                    <div class="card mb-3 border-success" style={{width: "400px;"}}>
                        <div class="row g-0">
                            <div class="col-md-4 d-flex align-content-center justify-content-center  ">
                                <img src={item.image} class="card img-fluid rounded-center mt-3 mx-2" alt="Image Not Found" style={{ height: "150px" }} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body ">
                                    <h5 class="card-title ">{item.FName}</h5>
                                    <p class="card-text">{item.LastName}</p>
                                    <p class="card-text"><small class="text-body-secondary">{item.Email}</small></p>
                                    {/* <div className="row col-md-10"> */}
                                    {/* <div className="col-md-4"> */}
                                    <Link to={`/edit/${item.id}`}><button class="btn btn-outline-warning">
                                    <Icon icon="tabler:edit" /> <small>Edit</small></button> </Link>
                                    {/* <Link to={`/view/${item.id}`}><button class="btn btn-success">View</button> </Link> */}
                                    <button className="btn  btn-outline-success  me-2" onClick={() => handleView(item)}>
                                    <Icon icon="carbon:view-filled" /> <small>View</small> 
                                    </button>
                                    <button class="btn btn-danger" onClick={() => { deleteUser(item.id) }}  >
                                    <Icon icon="material-symbols:delete" /> <small>Delete</small> </button>
                                    {/* </div> */}
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }) }
                
            </div>
            <Modal show={selectedUser !== null} onHide={handleClose} className=' bg-body-dark '>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                    {selectedUser && (
                        <>
                            <p>First Name: {selectedUser.FName}</p>
                            <p>Last Name: {selectedUser.LastName}</p>
                            <p>Email: {selectedUser.Email}</p>
                            <p>Password: {selectedUser.Password}</p>
                            <p>Address: {selectedUser.Address}</p>
                            <p>City: {selectedUser.City}</p>
                           
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary ' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>



        </div>
        </div>
    )
}

export default Home
