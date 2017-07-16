/**
 * Created by the, rogue Pixxel on 06/02/2017.
 */
import React from 'react';
// import { connect } from 'react-redux';

import { connectWithId } from 'react-jplayer-utils';



const mapStateToProps = ({jPlayers},{id}) => {
    return {
        title: jPlayers[id].media.title,
        artist: jPlayers[id].media.artist,
    };
};

const ArtistTitle  = ({ title, artist })  => {

        return (
            <div className="songDetails">
                <div className="songTitle">
                    {title}
                </div>
                <div className="songArtist">
                    {artist}
                </div>
            </div>
        );
}

export default connectWithId(mapStateToProps)(ArtistTitle);