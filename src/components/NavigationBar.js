import React, { Component } from 'react';

class NavigationBar extends Component {

    render() {
        return (

            <div>
                <nav className="uk-navbar uk-padding-large">

                    <div id="offcanvas-slide" style={{ 'zIndex': '1000000', 'position': 'absolute' }} uk-offcanvas>
                        <div className="uk-offcanvas-bar">

                            <ul className="uk-nav uk-nav-default">
                                <li><a href="#">Etusivu</a></li>
                                <li><a href="#">Ravintolat</a></li>
                                <li><a href="#">Lisää ravintola</a></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavigationBar