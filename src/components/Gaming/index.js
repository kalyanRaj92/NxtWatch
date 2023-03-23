import {Component} from 'react'

import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import GamingCard from '../ChannelCard'

class Gaming extends Component {
  state = {
    watchData: [],
  }

  componentDidMount() {
    this.getWatchesData()
  }

  getWatchesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        watchData: updatedData,
      })
    }
  }

  render() {
    const {watchData} = this.state
    return (
      <div>
        <Header />
        <SiYoutubegaming />
        <h1>Gaming</h1>
        <ul>
          {watchData.map(each => (
            <GamingCard key={each.id} channelDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Gaming
