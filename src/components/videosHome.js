import React, {Component} from 'react';
import Axios from 'axios';
import '../scss/video.css';


class HomeVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount = () => {
        let _this = this;
        this.serverRequest =
            Axios
                .get("https://www.googleapis.com/youtube/v3/activities?key=AIzaSyA9iMEljwboo9zpc4da-vid_q1s6-WmgfE&channelId=UC8v7ZGa8Xr50o2gCN_EWJIg&part=snippet,id&order=date&maxResults=50")
                .then(function(result) {
                    _this.setState({
                        list: result.data.items
                    });
                })
    };

    render() {
    return (
        <div className="videos">
            <div className="videoWrapper">
            <h2>Latest Videos</h2>
            {this.state.list.map(function(video) {
                let url = "https://www.youtube.com/watch?v=" + video.id.videoId;
                return (
                    <a key={video.etag} href={url} >
                        <div className="videoList">
                            <div className="videoContainer">
                                <img src={ video.snippet.thumbnails.medium.url } alt=""/>
                            </div>
                            <div className="videoDescription">
                                <h3>{ video.snippet.title }</h3>
                                <p>{video.snippet.description}</p>
                            </div>
                            <hr/>
                        </div>
                    </a>
                );
            })}
            </div>
            <div className="adLong">
                <span>Ad Long</span>
            </div>
        </div>
    )
}
}

export default HomeVideos;