import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import IndexPage from './components/page_index';
import RestaurantPage from './components/page_restaurant';
import NavigationBar from './components/NavigationBar';
import SearchBox from './components/SearchBox';
import RestaurantPAge from './components/page_restaurant';
import AddRestaurant from './components/page_addrestaurant';
import Restaurant from './components/restaurant';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div className="uk-container uk-container-expand uk-padding-remove">
        <div className="uk-cover-container uk-height-viewport">
            <img src="/images/burgerheader.jpg" alt="" uk-cover="true" />
            <div className="uk-position-top">

                    <nav className="uk-navbar uk-padding-large">

                    <div id="offcanvas-slide" style={{'zIndex': '1000000', 'position': 'absolute'}} uk-offcanvas="true">
                        <div className="uk-offcanvas-bar">

                            <ul className="uk-nav uk-nav-default">
                                <li><a href="#">Etusivu</a></li>
                                <li><a href="#">Ravintolat</a></li>
                                <li><a href="#">Lisää ravintola</a></li>
                            </ul>

                        </div>
                    </div>
                    </nav>
                <Switch>
                    <Route path="/lisaaravintola" component={AddRestaurant}/>
                    <Route path="/ravintolat/:id/" component={RestaurantPage}/>
                    <Route path ="/restaurants/restaurant" component={Restaurant}/>
                    <Route path="/" component={IndexPage}/> 
                </Switch>
                </div>
          </div>
          </div>


        </BrowserRouter>
    </Provider>
    , document.querySelector('.uk-cont'));
