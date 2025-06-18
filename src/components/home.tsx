import React from 'react'
import {Link} from 'react-router-dom'

const homepage = [
    {id:1,title:"Home page 1"},
    {id:2,title:"Home page 2"},
    {id:3,title:"Home page 3"}
]

function Home() {
  return (
    <div>
        <ul>
            {homepage.map((item)=>
            <li key={item.id}>
                <Link to = {`/home/${item.id}/${item.title}`}>
                <h2>{item.title}</h2>
                </Link>
            </li>
            )}
        </ul>
    </div>
  )
}

export default Home