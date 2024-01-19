import { useParams, Navigate } from 'react-router-dom'
import propertiesData from '../../../src/assets/Datas/Housing_information.json'
import Slideshow from '../../components/Slideshow/Slideshow'
import Rating from '../../components/Rating/Rating'
import Owner from '../../components/Owner/Owner'
import Property from '../../components/Property/Property'
import Collapse from '../../components/Collapse/Collapse'
import './Housing_pages.scss'

function HousingInfo() {
  const { id } = useParams()
  const property = propertiesData.find((p) => p.id === id)

  if (!property) {
    return <Navigate to="/error404" />
  }

  return (
    <div className="housing-pages">
      <Slideshow images={property.pictures} />
      <div className="housing-pages__specifics">
        <Property property={property} />
        <div className="housing-pages__owner">
          <div className="housing-pages__owner__host">
            <Owner host={property.host} />
          </div>
          <div className="housing-pages__owner__rating">
            <Rating rating={property.rating} />
          </div>
        </div>
      </div>
      <div className="housing-pages__collapses">
        <Collapse
          title="Description"
          content={property.description}
          className="collapse--apartement"
        />
        <Collapse
          title="Equipments"
          // content={property.description}
          content={
            <ul className="equipment">
              {property.equipments.map((equipment, index) => (
                <li key={index} className="equipment__item">
                  {equipment}
                </li>
              ))}
            </ul>
          }
          className="collapse--apartement"
        />
      </div>
    </div>
  )
}

export default HousingInfo
