import React, { useState } from 'react'
import { useRef } from 'react'
const MusicwithFunction = () => {
    let musicRef=useRef()
    let [playSong,setPlaySong]=useState();
    let play=()=>{
        musicRef.current.play()
    }
    let pause=()=>{
        musicRef.current.pause();
    }
    let playMusic=()=>{
        setPlaySong(!playSong)
        if (!playSong){
            play()
        }
        else{
            pause()
        }

    }
  return (
    <div>
        <audio src="Srivalli.mp3" ref={musicRef}></audio>
        <img src="image.png" alt="" onClick={playMusic}/>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      
    </div>
  )
}

export default MusicwithFunction
