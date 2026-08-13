import SingleVideo from './SingleVideo'
import GroupOfVideos from './GroupOfVideos'

const VideoPlayer = () => {
  return (
    <>
      <article id='singleVideo'>
        <SingleVideo></SingleVideo>
      </article>
      <article id='group'>
        <GroupOfVideos></GroupOfVideos>
      </article>
    </>
  )
}

export default VideoPlayer
