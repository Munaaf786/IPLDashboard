import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getUpdatedMatchDetails = data => ({
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    venue: data.venue,
    result: data.result,
    umpires: data.umpires,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
  })

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getUpdatedMatchDetails(
        data.latest_match_details,
      ),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getUpdatedMatchDetails(eachMatch),
      ),
    }
    this.setState({
      teamMatchData: updatedData,
      isLoading: false,
    })
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return id
  }

  renderRecentMatches = () => {
    const {teamMatchData} = this.state
    const {recentMatches} = teamMatchData
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
        ))}
      </ul>
    )
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchData
    return (
      <div className={`team-match-bg-container ${this.getClassName()}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <div className="latest-matches-container">
              <h1 className="latest-matches-label">Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
              {this.renderRecentMatches()}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
