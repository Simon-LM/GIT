import { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_about.svg'
import '../../main.scss'

function Collapse({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`collapse ${className}`}>
      <div className={`collapse__title ${className}-title`}>
        <span>{title}</span>
        <button className={`collapse__img`}>
          <img
            src={arrowIcon}
            alt="flèche pour ouvrir"
            onClick={handleToggle}
            className={`collapse__img ${isOpen ? 'rotate' : ''}`}
          />
        </button>
      </div>
      <div
        className={`collapse__content ${className}-content ${
          isOpen ? 'open' : ''
        }`}
      >
        {content}
      </div>
    </div>
  )
}

export default Collapse
