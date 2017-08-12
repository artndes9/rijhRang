import React, {Component} from 'react';
import Axios from 'axios';
import { Row, Col} from 'react-bootstrap';
import Modal from 'react-modal';
import YouTube from './modal';
import '../scss/video.css';


class HomeVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            link: '',
            dataFromHomeVideos: [],
            list: []
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(video) {
        this.setState({modalIsOpen: true,originalBodyOverflow: document.body.style.overflow, link: video.id.videoId});
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.setState({modalIsOpen: false, link: ''});
        document.body.style.overflow = this.state.originalBodyOverflow;
    }
    latestVideo(){
        this.props.fetchList(this.state.list.slice(0, 3));
    };
    componentDidMount = () => {
        let _this = this;
        this.serverRequest =
            Axios
                .get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyA9iMEljwboo9zpc4da-vid_q1s6-WmgfE&channelId=UC8v7ZGa8Xr50o2gCN_EWJIg&part=snippet,id&type=video&order=date&maxResults=50")
                .then(function(result) {
                    _this.setState({
                        list: result.data.items
                    });
                    _this.latestVideo();
                })
    };

    render() {
        let self = this;
        const videoList = this.state.list.map((video) =>
            <Col md={4}  key={video.etag}  className="videoItem">
                <a onClick={() => self.openModal(video)}>
                    <div className="videoList">
                        <div className="videoContainer">
                            <img src={ video.snippet.thumbnails.high.url } alt=""/>
                        </div>
                        <div className="videoDescription">
                            <h3>{ video.snippet.title }</h3>
                        </div>
                    </div>
                </a>
            </Col>

        );
        return (
        <div ref="video" className="videos">
            <Row>
                <Col md={10} xs={12} className="videoWrapper">
                    <h2>Latest Videos</h2>
                        <Row>
                            {videoList}
                        </Row>
                </Col>
                <Col md={2} xs={12}>
                    <div className="adLong">Ad Long</div>
                    <div className="texAd">Text Ads</div>
                </Col>
            </Row>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Video Player">
                <button onClick={this.closeModal}>close</button>
                <YouTube
                    name={this.state.link}
                />
            </Modal>
        </div>
    )
}
}

export default HomeVideos;