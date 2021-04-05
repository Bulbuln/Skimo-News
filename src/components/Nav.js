import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    
    return (
        <nav className="nav-main">


            <h2>Skimo <span>News</span></h2>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/news">News</Link> </li>
                <li> <Link to="/jokes">Some Jokes </Link> </li>
            </ul>

        
            
            
        </nav>
    )
}

export default Nav
