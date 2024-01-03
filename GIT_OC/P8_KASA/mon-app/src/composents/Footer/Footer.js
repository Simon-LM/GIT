import { Link } from 'react-router-dom'

import whitLogo from '../Footer/Logo_Kasa_whit.png'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={whitLogo} className="" alt="logo" />
      <nav className="footer_menu">
        <Link className="links links_footer" to="/">
          Accueil
        </Link>
        <Link className="links links_footer" to="/about">
          À Propos
        </Link>
      </nav>
    </div>
  )
}

export default Footer
