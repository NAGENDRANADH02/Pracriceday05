import React, { Component } from 'react'

export default class Music extends Component {
    constructor() {
        super();
        this.music = React.createRef();
        this.state={
            song:false
        }

    }
    musicPlay=()=>{
        this.music.current.play();
    }
    musicPause=()=>{
        this.music.current.pause();
    }
    songPlay=()=>{
        this.setState({song:!this.state.song})
        if (!this.state.song){
            this.musicPlay()
        } else {
            this.musicPause()
        }
    }
    render() {
        return (
            <div>
                <audio  ref={this.music} src='Srivalli.mp3'></audio>
                <img src="https://naasongs.com.co/wp-content/uploads/2021/10/pushpa-songs-naa-songs.jpeg" alt="" onClick={this.musicPlay} />
                <button onClick={this.songPlay}>Play</button>

            </div>
        )
    }
}
