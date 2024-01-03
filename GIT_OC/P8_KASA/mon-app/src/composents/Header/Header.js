import { Link } from 'react-router-dom'

import redLogo from '../Header/Logo_Kasa_red.png'
import './Header.scss'

function Header() {
  return (
    <div className="header">
      <img src={redLogo} className="" alt="logo" />
      <nav className="header_menu">
        <Link className="links" to="/">
          Accueil
        </Link>
        <Link className="links" to="/about">
          À Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
