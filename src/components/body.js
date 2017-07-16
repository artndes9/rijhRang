/**
 * Created by the, rogue Pixxel on 05/25/2017.
 */
import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { initialState as jPlayerInitialState, reducer as jPlayers } from 'react-jplayer';
// import { initialState as jPlaylistInitialState, reducer as jPlaylists } from 'react-jplaylist';
import HomeVideos from './videosHome';
import Trending from './trendingVideos';
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
    render() {
        const options = {
            items: 1,
            nav: false,
            rewind: true,
            autoplay: true
        };

        const events = {
            // onDragged: function(event) {...},
            // onChanged: function(event) {...}
        };
        return (
            <div className="body">
                <div className="homeSlider">
                    <OwlCarousel ref="slides" options={options} events={events} >
                        <div><img src="http://placehold.it/1920x500" alt="1"/></div>
                        <div><img src="http://placehold.it/1920x500" alt="2"/></div>
                        <div><img src="http://placehold.it/1920x500" alt="3"/></div>
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
                <HomeVideos />
                <div className="adSmall">
                    <span>Ad Small</span>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Body;
