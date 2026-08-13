import Video from './Video'

import Video1 from '../../public/Devatha Full Video Song - Potugadu Video Songs - Manchu Manoj, Sakshi Chaudhary - Aditya Movies (360p, h264).mp4'

import Video2 from '../../public/Mila Mila Full Songs - Kerintha Video Songs - Sumanth Aswin, Sri Divya - Aditya Movies - Aditya Movies (360p, h264).mp4'

import Video3 from '../../public/Mr. Majnu - Kopam Ga Kopam Ga Video  Akhil Akkineni, Nidhhi Agerwal  BVSN Prasad  Thaman S - Sony Music South (360p, h264).mp4'

import Video4 from '../../public/REMO (Telugu) - Kollagottey Video  Sivakarthikeyan  Anirudh - SonyMusicSouthVEVO (360p, h264).mp4'

import Video5 from '../../public/rowdyboys-songs--ashish-anupama--devi-sri-prasad--harsha-konuganti---vesaane-o-nicchena-lyrical.mp4'

const GroupOfVideos = () => {
  let videosData = [Video1, Video2, Video3, Video4, Video5]
  return (
    <>
      <Video videosData={videosData}></Video>
    </>
  )
}

export default GroupOfVideos
