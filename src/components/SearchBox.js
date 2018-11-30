import React, { Component } from 'react'
import _ from 'lodash';
import {connect} from 'react-redux';
import { getAllRestaurants, getRestaurantReviewAverage } from '../actions/actions_restaurant';
import {Redirect, Link} from 'react-router-dom';

class SearchBox extends Component {

    state = {
        restaurantSelect: '',
        restaurantWasFound: false,
        restaurant: null
    }

    componentDidMount() {
        this.props.getAllRestaurants();
    }

    handleInput = (value) => {
        this.setState(() => ({
            restaurantSelect: value
        }))
    }



    searchRestaurant = (event) => {
        event.preventDefault()
        for(var i = 0; i < this.props.restaurants.data.length; i++){
            if(this.state.restaurantSelect === this.props.restaurants.data[i].name){
                let id = this.props.restaurants.data[i]._id
                let restaurant = this.props.restaurants.data[i];          
                this.setState(() =>({
                    restaurant: restaurant,
                    restaurantId: id}), () => (this.setState({restaurantWasFound: true}))
                )
            }
        }
    }

    render() {

        return (
            <div>
                <div class="uk-grid uk-grid-collapse search_restaurant_section" uk-grid>
                                <div class="uk-width-1-4"></div>
                                <div class="uk-width-1-2">
                                        <form class="uk-search uk-search-large uk-width-1-1">
                                                <input class="uk-search-input search_bar" style={{'paddingLeft': '20px'}} type="search" placeholder="Hae ravintolaa..." onInput={(event) => this.handleInput(event.target.value)} />
                                                <button type="submit" onClick={this.searchRestaurant}>Search</button>
                                            </form>
                                    </div>
                                <div class="uk-width-1-4"></div>
                            </div>
                            <div class="uk-grid uk-grid-collapse search_restaurant_section" style={{'marginTop': '50px'}} uk-grid>
                                <div class="uk-width-1-4"></div>
                                <div class="uk-width-1-2">
                            {this.state.restaurantWasFound ? (
                                
                                <Link
                                to={{
                                  pathname: "/restaurants/restaurant",
                                  state:  {restaurant:this.state.restaurant}
                                }}
                              >{this.state.restaurant.name}</Link>
                                ):(null)}
                                </div>
                                <div class="uk-width-1-4"></div>
                                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        hasError: state.restaurantIsLoadingError,
        isLoading: state.restaurantIsLoading
    };
};


export default connect(mapStateToProps, {getAllRestaurants, getRestaurantReviewAverage})(SearchBox);