import React from 'react';
import { Gui, SeekBar, BufferBar,
    Poster, Audio, Title, Mute, Play, PlayBar,
    VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, { connect, Playlist, Shuffle, Next, Previous, Repeat,
        MediaLink, Title as PlaylistTitle } from 'react-jplaylist';
import '../scss/player.css';
import ArtistTitle from "./artistTitle";

const options = {
    id: 'AudioPlaylist',
    verticalVolume: true,
};

const jPlaylistOptions = {
    hidePlaylist: false,
    playlist: [
        {
            title: 'Bubble',
            artist: 'Miaow',
            sources: {
                m4a: './mp/1.m4a',
                oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
            },
            poster: 'http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png',
            free: true,
        },
        {
            title: 'Tempered Song',
            artist: 'Miaow',
            sources: {
                mp3: '../mp/2.mp3',
                oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
            },
            poster: 'http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png',
            free: true,
        },
        {
            title: 'Cro Magnon Man',
            artist: 'The Stark Palace',
            sources: {
                mp3: '../mp/3.mp3',
                oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
            },
            poster: 'http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png',
            free: true,
        },
    ],
};


const AudioPlaylist = () => (
    <JPlaylist className="jp-sleek">
        <Audio />
        <Gui>
            <div className="jp-title-container">
                <Poster />
                <Title />
            </div>
            <div className="jp-controls jp-icon-controls">
                <Previous><i className="fa fa-step-backward" /></Previous>
                <Play><i className="fa">{/* Icon set in css*/}</i></Play>
                <Next><i className="fa fa-step-forward" /></Next>
                <Repeat>
                    <i className="fa">{/* Icon set in css*/}</i>
                    {/*<i className="fa fa-repeat" />*/}
                </Repeat>
                <Shuffle><i className="fa fa-random" /></Shuffle>
                <div className="jp-progress">
                    <SeekBar>
                        <BufferBar />
                        <PlayBar />
                        <CurrentTime />
                        <Duration />
                    </SeekBar>
                </div>
                <div className="jp-volume-container">
                    <Mute>
                        <i className="fa">{/* Icon set in css*/}</i>
                    </Mute>
                    <div className="jp-volume-slider">
                        <div className="jp-volume-bar-container">
                            <VolumeBar />
                        </div>
                    </div>
                </div>
                <Download><i className="fa fa-download" /></Download>
            </div>
            <BrowserUnsupported />
        </Gui>
        <div className="playlistContainer">
            <div className="nowPlaying">
                <Poster />
                <ArtistTitle />
            </div>
            <div className="jp-playlist-container">
                <Playlist>
                    <MediaLink>
                        <PlaylistTitle />
                    </MediaLink>
                </Playlist>
            </div>
        </div>
    </JPlaylist>
);


export default connect(AudioPlaylist, options, jPlaylistOptions);