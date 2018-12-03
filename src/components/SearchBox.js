import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { getAllRestaurants, getRestaurantReviewAverage } from '../actions/actions_restaurant';
import { Redirect, Link } from 'react-router-dom';
import { Col, FormControl, Button, Row, Grid } from 'react-bootstrap';
import RestaurantCard from '../components/restaurant_card';
import AlertBox from '../components/AlertBox';

class SearchBox extends Component {

    state = {
        restaurantSelect: '',
        restaurantWasFound: false,
        show_modal: false,
        restaurant: null,
        foundRestaurants: []
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
        let restaurants = [];
        for (var i = 0; i < this.props.restaurants.data.length; i++) {
            if (this.state.restaurantSelect === this.props.restaurants.data[i].name) {
                let restaurant = this.props.restaurants.data[i];
                restaurants.push(restaurant);
            }
            else if (this.state.restaurantSelect === this.props.restaurants.data[i].city) {
                let restaurant = this.props.restaurants.data[i];
                restaurants.push(restaurant);

            }
        }

        this.setState(() => ({
            foundRestaurants: restaurants
        }), () => (this.setState({ restaurantWasFound: true }))
        )
    }




    render() {
        return (
            <div>
                <Grid fluid className="splash_search">
                    <Row className="show-grid information text-center">
                        <Col xs={12} sm={12}>
                            <Col xs={12} sm={3} />
                            <Col xs={12} sm={6} className="site_container">
                                <img src="/images/burger_review.png" className="header_logo" />
                                <form>
                                    <FormControl type="text" className="burger_search" placeholder="Hae ravintolaa" onInput={(event) => this.handleInput(event.target.value)} />
                                    <br />
                                    <Button type="submit" className="btn restaurant_search_button" onClick={this.searchRestaurant}>Haku</Button>
                                </form>
                                <Row className="show-grid" className="search_results" style={{ 'marginTop': '20px' }}>
                                    <Col xs={12} sm={12}>
                                        <Col xs={12} sm={3} />
                                        <Col xs={12} sm={6} className="result_list">
                                            {this.state.foundRestaurants.map(restaurant => {
                                                return (
                                                    <RestaurantCard restaurant_found={true} show_modal={true} restaurant={restaurant} />)
                                            })}
                                        </Col>
                                        <Col xs={12} sm={3} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={3} />
                        </Col>
                    </Row>


                </Grid>
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