import {Component} from 'react'

import Cookies from 'js-cookie'
import {AiTwotoneFire} from 'react-icons/ai'

import Header from '../Header'
import TrendingCard from '../ChannelCard'

class Trending extends Component {
  state = {
    watchData: [],
  }

  componentDidMount() {
    this.getWatchesData()
  }

  getWatchesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    /* console.log(data) */
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        title: each.title,
        publishedAt: each.published_at,
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
        <AiTwotoneFire />
        <h1>Trending</h1>
        <ul>
          {watchData.map(each => (
            <TrendingCard key={each.id} channelDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Trending
