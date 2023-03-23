import {Link} from 'react-router-dom'
import {AiTwotoneHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import Footer from '../Footer'

const ChannelsHeader = () => (
  <>
    <div>
      <ul>
        <Link to="/">
          <AiTwotoneHome />
          <li>Home</li>
        </Link>
        <Link to="/trending">
          <AiTwotoneFire />
          <li>Trending</li>
        </Link>
        <Link to="/gaming">
          <SiYoutubegaming />
          <li>Gaming</li>
        </Link>
      </ul>
    </div>
    <div>
      <Footer />
    </div>
  </>
)

export default ChannelsHeader
