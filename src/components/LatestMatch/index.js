import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    umpires,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="match-details-logo-container">
        <div className="match-details-container">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue-and-result">{venue}</p>
          <p className="venue-and-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="separator" />
      <div className="innings-container">
        <p className="innings-section-labels">First Innings</p>
        <p className="innings-values">{firstInnings}</p>
        <p className="innings-section-labels">Second Innings</p>
        <p className="innings-values">{secondInnings}</p>
        <p className="innings-section-labels">Man Of The Match</p>
        <p className="innings-values">{manOfTheMatch}</p>
        <p className="innings-section-labels">Umpires</p>
        <p className="innings-values">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
