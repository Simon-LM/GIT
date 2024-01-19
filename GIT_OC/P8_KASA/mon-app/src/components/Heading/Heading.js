import './Heading.scss'
// import imageAbout from '../../assets/images/Image_About.png'

function Heading(props) {
  return (
    <div className="heading">
      <img src={props.srcImage} className="heading__img" alt="logo" />
    </div>
  )
}

export default Heading
