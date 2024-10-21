import './Heading.scss'

function Heading(props) {
  return (
    <div className="heading">
      <img src={props.srcImage} className="heading__img" alt="Paysage côtier" />
    </div>
  )
}

export default Heading
