import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { getAllRestaurants, getRestaurantReviewAverage } from '../actions/actions_restaurant';
import { Redirect, Link } from 'react-router-dom';
import RestaurantCard from '../components/restaurant_card';

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
        for (var i = 0; i < this.props.restaurants.data.length; i++) {
            if (this.state.restaurantSelect === this.props.restaurants.data[i].name) {
                let id = this.props.restaurants.data[i]._id
                let restaurant = this.props.restaurants.data[i];
                this.setState(() => ({
                    restaurant: restaurant,
                    restaurantId: id
                }), () => (this.setState({ restaurantWasFound: true }))
                )
            }
        }
    }

    render() {

        return (
            <div>
                <div className="uk-grid uk-grid-collapse search_restaurant_section" uk-grid>
                    <div className="uk-width-1-4"></div>
                    <div className="uk-width-1-2@s">
                    <div className="uk-width-1-1" style={{'paddingLeft': '5px', 'paddingRight': '5px'}}>
                        <form class="uk-search uk-search-large uk-width-1-1">
                            <input className="uk-search-input search_bar" style={{ 'paddingLeft': '20px' }} type="search" placeholder="Hae ravintolaa..." onInput={(event) => this.handleInput(event.target.value)} />
                            <button className="uk-button uk-button-danger uk-button-large uk-align-center" onClick={this.searchRestaurant}>Haku</button>
                        </form>
                    </div>
                    </div>
                    <div className="uk-width-1-4"></div>
                </div>
            
            
            <RestaurantCard restaurant_found={this.state.restaurantWasFound} restaurant={this.state.restaurant} />

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


export default connect(mapStateToProps, { getAllRestaurants, getRestaurantReviewAverage })(SearchBox);