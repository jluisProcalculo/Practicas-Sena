import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Utils/routes'

const Navbar = () => {
  return (
    <div>
      <Link to={routes.explore}>
        <button>Explore</button>
      </Link>
    </div>
  )
}

export default Navbar