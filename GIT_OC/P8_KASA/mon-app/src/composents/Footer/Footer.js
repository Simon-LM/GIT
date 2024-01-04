import { Link } from 'react-router-dom'

import whitLogo from '../Footer/Logo_Kasa_whit.png'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={whitLogo} className="footer_logo" alt="logo" />
      <p>©2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
