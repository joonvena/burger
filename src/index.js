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
        <div>

        <NavigationBar />
        
       

                    
                <Switch>
                    <Route path="/lisaaravintola" component={AddRestaurant}/>
                    <Route path="/ravintolat/:id/" component={RestaurantPage}/>
                    <Route path ="/restaurants/restaurant" component={Restaurant}/>
                    <Route path="/" component={IndexPage}/> 
                </Switch>
                
          </div>


        </BrowserRouter>
    </Provider>
    , document.querySelector('.container-fluid'));
