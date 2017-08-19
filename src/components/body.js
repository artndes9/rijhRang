/**
 * Created by the, rogue Pixxel on 05/25/2017.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { initialState as jPlayerInitialState, reducer as jPlayers } from 'react-jplayer';
import { initialState as jPlaylistInitialState, reducer as jPlaylists } from 'react-jplaylist';
import { Row, Col} from 'react-bootstrap';
import HomeVideos from './videosHome';
import Trending from './trendingVideos';
import YouTube from 'react-youtube';
// import AdSense from 'react-adsense';
import Footer from './footer';

import '../scss/body.css';
import AudioPlayer from './player'
// import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel2';

const store = createStore(combineReducers({
    jPlayers,
    jPlaylists,
}), {
    jPlayers: jPlayerInitialState(AudioPlayer),
    jPlaylists: jPlaylistInitialState(AudioPlayer),
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: []
        };
    }

    latestVideo = (dataFromHomeVideos) => {
        this.setState({
            videoList: dataFromHomeVideos
        });
        console.log(this.state.videoList);
    };

    render() {
        const options = {
            items: 1,
            nav: false,
            rewind: true
        };

        const events = {
            // onDragged: function(event) {...},
            // onChanged: function(event) {...}
        };
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        const latestList = this.state.videoList.map((video) =>
            <div key={video.etag} className="slide">
                <div className="bgThumb" style={{"backgroundImage" : "url( "+ video.snippet.thumbnails.high.url +" )"}}>
                </div>
                <h2>Just In ....</h2>
                <div className="videoContainer col-md-6">
                    <YouTube
                        videoId={video.id.videoId}
                        opts={opts}
                    />
                </div>
                <div className="videoDetail col-md-6">
                    <h1>{ video.snippet.title }</h1>
                    <h3>{ video.snippet.description }</h3>
                </div>
            </div>
        );

        return (
            <div className="body">
                <div className="homeSlider">
                    <OwlCarousel ref="slides" options={options} events={events} >
                        {latestList}
                    </OwlCarousel>
                </div>
                <div className="adSmall">
                    {/*<AdSense.Google client='ca-pub-9109562110699707'*/}
                                    {/*slot='5051505922'*/}
                                    {/*style={{width: 728, height: 90}}*/}
                                    {/*format='' />*/}
                </div>
                <div className="about">
                    <h1>Rijh Rang Entertainment</h1>
                    <p>Rijh rang is an entertainment platform providing latest entertainment from all around the country as well as keeping you up to date with our latest music and video releases.
                        Here you can find the latest releases from our official nagpuri YouTube channel rijh Rang and also get the latest music releases as soon as they are launched.
                        Subscribe to our YouTube channel and bookmark this website to get all the latest updates.
                    </p>
                    <h4>Subscribe us on &nbsp; <div className="g-ytsubscribe" data-channelid="UC8v7ZGa8Xr50o2gCN_EWJIg"></div></h4>
                </div>
                <Trending />
                <Row>
                    <Col md={12}>
                        <HomeVideos
                            fetchList={this.latestVideo.bind(this)}
                        />
                    </Col>
                </Row>
                <div className="adSmall">
                    <span>Ad Small</span>
                </div>
                <Row>
                    <Col md={12}>
                        <Provider store={store}>
                            <div className="playlist">
                                <AudioPlayer />
                            </div>
                        </Provider>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default Body;
