import React from 'react'
import {Link} from 'react-router-dom'
//import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <Link to="/home">home</Link>
        <Link to="/classroom">classroom</Link>
        <Link to="/createclass">create classroom</Link>
    </div>
  )
}

export default Nav