import React, {Component} from 'react';
import YouTube from 'react-youtube';

// const videoIdA = 'XxVg_s8xAms';
// const videoIdB = '-DX3vJiqxm4';
let timestamp = 6;
let timer;
let done = true;

class YTModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoId: this.props.name,
            player: null,
            time: null,
            overlay: false
        };

        this.onReady = this.onReady.bind(this);
        // this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);
        this.onPauseVideo = this.onPauseVideo.bind(this);
    }

    onReady(event) {
        this.setState({
            player: event.target,
            time: event.target.getCurrentTime(),
        });
        done = true;
    }

    onPlayVideo() {
        this.state.player.playVideo();
        this.setState({overlay: false});
    }

    onPauseVideo() {
        this.state.player.pauseVideo();
    }

    onPlayerStateChange =  (event) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
            this.timestamp_callback();
        }
    };
    timestamp_reached = () => {
        this.onPauseVideo();
        this.setState({
            overlay: true
        });
        done = true;
    };

    timestamp_callback = () => {
        clearTimeout(timer);

        let current_time = this.state.time;
        let remaining_time = timestamp - current_time;
        if (remaining_time > 0 && !done) {
            timer = setTimeout(this.timestamp_reached, remaining_time * 1000);
        }
    };
    render() {
        let _this = this;
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        const adstyle = {
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "violet",
            top: "0"
        };
        const normal = () => {
            return(
                <div className="youtubeVideo">
                    <YouTube opts={opts} videoId={this.state.videoId} onStateChange={this.onPlayerStateChange} onReady={this.onReady} />
                    <button onClick={this.onPlayVideo}>Play</button>
                    <button onClick={this.onPauseVideo}>Pause</button>
                </div>
            );
        };
        const videoads = () => {
            return(
                <div className="youtubeVideo">
                    <YouTube opts={opts} videoId={this.state.videoId} onStateChange={this.onPlayerStateChange} onReady={this.onReady} />
                    <div className="ads" style={adstyle} onClick={this.onPlayVideo}>ad ad ad</div>
                    <button onClick={this.onPlayVideo}>Play</button>
                    <button onClick={this.onPauseVideo}>Pause</button>
                </div>
            );
        };


        if(this.state.overlay){
            return videoads();
        }else{
            return normal();
        }
    }
}

export default YTModal;