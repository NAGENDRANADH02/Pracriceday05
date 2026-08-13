import { useRef } from 'react'

const Video = ({ videosData }) => {
  let videoRef = useRef([])

  let playVideo = index => {
    videoRef.current[index].play()
  }
  let pauseVideo = index => {
    videoRef.current[index].pause()
  }
  return (
    <>
      {videosData.map((video, index) => {
        return (
          <video
            src={video}
            ref={data => (videoRef.current[index] = data)}
            onMouseEnter={() => playVideo(index)}
            onMouseLeave={() => pauseVideo(index)}
          
          ></video>
        )
      })}
    </>
  )
}

export default Video
