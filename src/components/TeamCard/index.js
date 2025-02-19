import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-image-url" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
