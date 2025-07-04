import React from "react";
import {Link} from "react-router-dom";
//import "../App.css"
import "./navbar.css"
import {useState} from 'react';

export default function Nav() {
    const [show,setShow] = useState(true);

    return(
        <>
        <button onClick={()=> setShow(!show)}>Menu</button>
            <nav>
            {show && (
                <nav>
                <p><Link to="/" className="nav">Home</Link></p>
                <p><Link to="/About" className="nav">About</Link></p>
                <p><Link to="/Blog" className="nav">Blog</Link></p>
                <p><Link to="/Contact" className="nav">Contact</Link></p>
                </nav>
            )}
            </nav>
        </>
    )
}