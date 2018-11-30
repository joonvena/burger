import React, { Component } from 'react'
import { Table, Glyphicon, Button, Modal } from 'react-bootstrap';
import { getAllRestaurants } from '../actions/actions_restaurant';
import _ from 'lodash';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class RestaurantList extends Component {

    /**
     * @desc This component renders list of restaurants
     */
    

    componentDidMount() {
        this.props.getAllRestaurants();
    }

    renderRestaurantList() {
        return _.map(this.props.restaurants.data, restaurant => {
            return (
              
                

                    <tr key={restaurant._id}>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.address}</td>
                    <td>{restaurant.city}</td>
                    <td>{restaurant.phone}</td>
                    <td><Link to={`/ravintolat/${restaurant._id}`}><Glyphicon glyph="info-sign" /></Link></td>
                    </tr>
                  

            );
        });
    }

    render() {

        if(this.props.hasError) {
            return <p>Jokin meni pieleen</p>;
        }

        if(this.props.isLoading) {
            return <p>Ladataan...</p>
        }

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Ravintolan nimi</th>
                    <th>Osoite</th>
                    <th>Kaupunki</th>
                    <th>Puhelin</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
            {this.renderRestaurantList()}
            </tbody>
            </Table>
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


export default connect(mapStateToProps, {getAllRestaurants})(RestaurantList);