const TrendingCard = props => {
  const {channelDetails} = props
  const {name, thumbnailUrl, publishedAt, title, viewCount} = channelDetails
  return (
    <li>
      <div>
        <img src={thumbnailUrl} alt="" />
        <p>{title}</p>
        <p>{name}</p>
        <p>{viewCount}</p>
        <p>{publishedAt}</p>
      </div>
    </li>
  )
}
export default TrendingCard
