import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <nav>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/destination" exact activeClassName="active">Destination</NavLink>
            <NavLink to="/crew" exact activeClassName="active">Crew</NavLink>
            <NavLink to="/technology" exact activeClassName="active">Technology</NavLink>
        </nav>
    </header>
  )
}

export default Navbar