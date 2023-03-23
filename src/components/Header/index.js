import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ChannelsHeader from '../ChannelsHeader'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </Link>
      <ul>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </ul>
      <div>
        <ChannelsHeader />
      </div>
    </div>
  )
}

export default withRouter(Header)
