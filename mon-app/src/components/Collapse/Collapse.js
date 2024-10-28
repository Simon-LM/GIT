import { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_about.svg'

function Collapse({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`collapse ${className}`}>
      <div className={`collapse__title ${className}-title`}>
        <span>{title}</span>
        <button
          onClick={handleToggle}
          className={`collapse__arrow ${isOpen ? 'rotate' : ''}`}
        >
          <img
            src={arrowIcon}
            alt="flèche pour ouvrir"
            className={`collapse__img`}
          />
        </button>
      </div>
      <div
        className={`collapse__content ${className}-content ${
          isOpen ? 'is-open' : ''
        }`}
      >
        {content}
      </div>
    </div>
  )
}
export default Collapse
