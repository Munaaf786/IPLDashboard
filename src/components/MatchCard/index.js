import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  const status = matchStatus === 'Lost' ? 'lost' : 'won'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={`match-status ${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
