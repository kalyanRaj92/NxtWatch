const ChannelCard = props => {
  const {channelDetails} = props
  const {
    profileImageUrl,
    name,
    thumbnailUrl,
    publishedAt,
    title,
    viewCount,
  } = channelDetails
  return (
    <li>
      <div>
        <img src={thumbnailUrl} alt="" />
        <p>{title}</p>
        <img src={profileImageUrl} alt="" />
        <p>{name}</p>
        <p>{viewCount}</p>
        <p>{publishedAt}</p>
      </div>
    </li>
  )
}
export default ChannelCard
