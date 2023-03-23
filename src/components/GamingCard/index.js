const GamingCard = props => {
  const {channelDetails} = props
  const {thumbnailUrl, title, viewCount} = channelDetails
  return (
    <li>
      <div>
        <img src={thumbnailUrl} alt="" />
        <p>{title}</p>
        <p>{viewCount},Watching Worldwide</p>
      </div>
    </li>
  )
}
export default GamingCard
