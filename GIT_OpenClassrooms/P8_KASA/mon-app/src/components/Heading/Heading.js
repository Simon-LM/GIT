import './Heading.scss'

function Heading(props) {
  return (
    <div className="heading">
      <img src={props.srcImage} className="heading__img" alt="logo" />
    </div>
  )
}

export default Heading
