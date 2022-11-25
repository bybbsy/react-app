import { useState } from "react";
import { Link } from "react-router-dom";
import { IconNavbar } from "./IconNavbar/IconNavbar";
import './Navbar.css';

export function Navbar() {
  const [navbarState, setNavbarState] = useState(false)

  const handleNavbarState = () => {
    setNavbarState(prev => !prev)
  }

  return (
    <div className={"navbar__wrapper " + (navbarState && 'closed')}>
      <nav className="navbar__content">
        <header>
          <h4>Navbar</h4>
          <IconNavbar handleClick={handleNavbarState} navbarState={navbarState}></IconNavbar>
        </header>
        <ul className="navbar__list">
          <li>
            <Link to='/'>
              <p>Main</p>
            </Link>
          </li>
          <li>
            <Link to='/notes'>
              <p>Notes</p>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


<style>

</style>
