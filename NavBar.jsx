import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    <div>
      
      
      <nav class="navbar bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary">
        <div class="container-fluid">
        <Link to='/'><a class="navbar-brand">Employee Manager &nbsp;<Icon icon="clarity:employee-group-solid" /></a></Link>
          <form class="d-flex" role="search">
          <Link to='/add'> <button class="btn btn-primary">Add New User</button> </Link>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
