import React from "react";  
import { Link } from "react-router-dom"


function Nav() {
    return(
    <nav>
        <ul>
          <Link style={{ textDecoration: 'none' }} to="/">
            <li>Alle Bruggen</li>
          </Link>
          <Link style={{ textDecoration: 'none' }}  to="/collection">
            <li>Mijn collectie</li>
          </Link>
          <Link style={{ textDecoration: 'none' }}  to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
    </nav>
    )
}

export default Nav