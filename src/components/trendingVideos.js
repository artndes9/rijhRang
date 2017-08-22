import React, {Component} from 'react';
import Axios from 'axios';
import OwlCarousel from 'react-owl-carousel2';
import '../scss/owl.theme.default.css';
import Modal from 'react-modal';
import YouTube from './modal';

Modal.defaultStyles = {...Modal.defaultStyles, ...{
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)',
        zIndex            : '999'
    },
    content : {
        position                   : 'relative',
        top                        : '50%',
        left                       : '50%',
        transform                  : 'translate(-50%, -50%)',
        width                      : '700px',
        maxWidth                  : '100%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none'
    }
}};

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            link: '',
            list: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(video) {
        this.setState({
            modalIsOpen: true,
            originalBodyOverflow: document.body.style.overflow, link: video.id});
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.setState({modalIsOpen: false, link: ''});
        document.body.style.overflow = this.state.originalBodyOverflow;
    }

    componentDidMount = () => {
        let _this = this;
        this.serverRequest =
            Axios
                .get("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyA9iMEljwboo9zpc4da-vid_q1s6-WmgfE")
                .then(function(result) {
                    _this.setState({
                        list: result.data.items
                    });
                })
    };

    render() {
        let self = this;

        const options = {
            items: 5,
            nav: true,
            rewind: true,
            margin:5,
            slideBy:5,
            autoplay: false,
            responsive:{
                0:{
                    items:1,
                    dots: false,
                    slideBy:1
                },
                600:{
                    items:3,
                    slideBy:3
                },
                1000:{
                    items:5,
                    slideBy:5
                }
            }
        };

        let trendingList;
        if (this.state.list !== null) {
            console.log("not");
            trendingList = this.state.list.map((tvideo) =>
                <div key={tvideo.etag} onClick={() => self.openModal(tvideo)}>
                    <a>
                        <div className="videoList">
                            <div className="videoContainer">
                                <img src={ tvideo.snippet.thumbnails.medium.url } alt=""/>
                            </div>
                            <div className="videoDescription">
                                <h3 className="wrapTitle">{ tvideo.snippet.title }</h3>
                                <p className="wrapText">{tvideo.snippet.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            );
        } else {
            console.log("null");
            trendingList = null

        }

        // const opts = {
        //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //         autoplay: 1
        //     }
        // };

        return (
            <div ref="trend" className="trendingVideos">
                <h2>Trending Videos from YouTube</h2>
                <OwlCarousel ref="slides" options={options} >
                    {trendingList}
                </OwlCarousel>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Video player" >
                    <button onClick={this.closeModal}>close</button>
                    <YouTube
                        name={this.state.link}
                    />
                </Modal>
            </div>
        )
    }
}

export default Trending;