/**
 * Created by the, rogue Pixxel on 05/25/2017.
 */
import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { initialState as jPlayerInitialState, reducer as jPlayers } from 'react-jplayer';
// import { initialState as jPlaylistInitialState, reducer as jPlaylists } from 'react-jplaylist';
import { Row, Col} from 'react-bootstrap';
import HomeVideos from './videosHome';
import Trending from './trendingVideos';
import YouTube from 'react-youtube';
import Footer from './footer';


import '../scss/body.css';
// import AudioPlayer from './player'
// import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel2';

// const store = createStore(combineReducers({
//     jPlayers,
//     jPlaylists,
// }), {
//     jPlayers: jPlayerInitialState(AudioPlayer),
//     jPlaylists: jPlaylistInitialState(AudioPlayer),
// },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
                    <span>Ad Small</span>
                </div>
                <div className="about">
                    <h1>Rijh Rang Entertainment</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores delectus deserunt dolore doloremque error ex, explicabo, id impedit incidunt inventore ipsum laborum nihil nobis pariatur quae repellat sapiente!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos dolor ipsam magni nemo quas voluptatibus? Esse ipsam porro repudiandae veniam voluptate! Consectetur dignissimos ipsum nobis odit, quibusdam temporibus voluptas?</p>
                </div>
                <Trending />
                {/*<Provider store={store}>*/}
                    {/*<div className="playlist">*/}
                        {/*<AudioPlayer />*/}
                    {/*</div>*/}
                {/*</Provider>*/}
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
                <Footer/>
            </div>
        );
    }
}

export default Body;
