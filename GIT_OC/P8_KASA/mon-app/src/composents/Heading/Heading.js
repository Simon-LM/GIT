import './Heading.scss'
import imageAbout from '../../assets/images/Image_About.png'

function Heading() {
  return (
    <div className="heading">
      <img src={imageAbout} className="heading__img" alt="logo" />
    </div>
  )
}

export default Heading
