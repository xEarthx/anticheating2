import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Link to="/home">home</Link>
        <Link to="/classroom">classroom</Link>
    </div>
  )
}

export default Nav