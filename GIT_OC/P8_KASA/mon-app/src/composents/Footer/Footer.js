import whiteLogo from '../../assets/images/Logo_Kasa_white.png'
import '../../main.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={whiteLogo} className="footer__logo" alt="logo" />
      <p className="footer__legal-info">©2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
