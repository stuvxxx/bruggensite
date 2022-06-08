import React from "react";  
import { Link } from "react-router-dom"


function Nav() {
    return(
    <nav>
        <ul>
          <Link to="/">
            <li>Alle Bruggen</li>
          </Link>
          <Link  to="/collection">
            <li>Mijn collectie</li>
          </Link>
          <Link  to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
    </nav>
    )
}

export default Nav