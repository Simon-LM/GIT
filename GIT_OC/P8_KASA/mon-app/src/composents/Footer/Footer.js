import whitLogo from '../Footer/Logo_Kasa_whit.png'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={whitLogo} className="footer__logo" alt="logo" />
      <p className="footer__legal-info">©2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
