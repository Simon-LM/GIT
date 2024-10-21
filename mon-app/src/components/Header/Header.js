import { Link } from 'react-router-dom'
import redLogo from '../../assets/images/Logo_Kasa_red.png'
import './Header.scss'

function Header() {
  return (
    <div className="header">
      <img src={redLogo} className="header__logo" alt="Kasa" />
      <nav className="header__menu">
        <Link className="header__link links" to="/">
          Accueil
        </Link>
        <Link className="header__link links" to="/about">
          À propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
