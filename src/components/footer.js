import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    <span><h4>&copy; 2017 rijh rang entertainment</h4></span>
                </div>
                <div className="sitemap">
                    <span className="slink"><a href="#">Mp3</a></span>
                    <span className="slink"><a href="#">Videos</a></span>
                    <span className="slink"><a href="#">Photos</a></span>
                </div>
                <hr/>
                <div className="policies">
                    <span><a href="#">Privacy Policy</a></span>
                    <span><a href="#">Disclaimer</a></span>
                    <span><a href="#">Terms of Usage</a></span>
                </div>
            </div>
        );
    }
}

export default Footer;