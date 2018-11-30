import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getRestaurantById, getRestaurantReviewAverage } from '../actions/actions_restaurant';
import Rating from 'react-rating';
import RestaurantComments from './Restaurant_Comments';
import Map from './Map';

class RestaurantPage extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getRestaurantById(id);
        this.props.getRestaurantReviewAverage(id);
    }

    render() {
        // If data is not loaded display this message
        if (this.props.isLoading) {
            return <div>Ladataan ravintolaa</div>
        }

        if (this.props.hasError) {
            return <div>Virhe tapahtui!</div>
        }


        return _.map(this.props.restaurants.data, restaurant => {
            return _.map(this.props.average.data, average => {
                return (



                    <div className="uk-panel-scrollable uk-height-viewport uk-position-top" style={{ 'paddingTop': '70px' }}>

                        <div className="uk-grid uk-grid-collapse  restaurant_info_section" uk-grid="true">
                            <div className="uk-width-1-4"></div>
                            <div className="uk-width-1-2@s">
                                <div className="uk-width-1-1">
                                    <div className="uk-card-header uk-card-default uk-card">
                                        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                            <div className="uk-width-auto">
                                                <img className="uk-border-circle" width="40" height="40" src="/images/burger_review.png" />
                                            </div>
                                            <div className="uk-width-2-3">
                                                <h3 className="uk-card-title uk-margin-remove-bottom">{restaurant.name}</h3>
                                                <p className="uk-text-meta uk-margin-remove-top">{restaurant.address},
                                               {restaurant.city}</p>


                                            </div>

                                            <div className="uk-width-auto uk-position-right" style={{ 'marginRight': '20px', 'marginTop': '20px' }}>
                                                <a href="#offcanvas-slide"
                                                    uk-toggle><span uk-icon="icon: menu; ratio: 2"></span></a>
                                            </div>

                                        </div>


                                        <hr className="uk-diver-small" />
                                    </div>

                                    <div className="uk-card uk-card-body_new uk-card-body uk-card-default uk-grid-collapse uk-child-width-expand uk-margin-remove-top"
                                        uk-grid="true">
                                        <div className="uk-flex-last uk-card-media-right uk-cover-container map_container">
                                            <Map />
                                            <canvas width="600" height="400"></canvas>
                                        </div>


                                        <div className="uk-card-body_new_index uk-width-expand">
                                            <h3 className="uk-card-title">Arvosanat</h3>
                                            <table class="uk-table">
                                            <tbody>
        <tr>
                                            <td>Hampurilainen:</td>
                                            <td><Rating initialRating={average.average} readonly={true} style={{'color': '#ffd942'}} emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x" /></td>
                                            </tr>
                                            <tr>
                                                <td>Lisukkeet:</td>
  <td><Rating initialRating={average.average} readonly={true} style={{'color': '#ffd942'}} emptySymbol="fa fa-star-o fa-2x"
                                            fullSymbol="fa fa-star fa-2x" /></td>
                                            </tr>
                                            <tr>
                                                <td>Ravintola:</td>
                                            <td><Rating initialRating={average.average} readonly={true} style={{'color': '#ffd942'}} emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x" /></td>
                                                </tr>

  </tbody>
  </table>
                                        </div>
                                        

                                    </div>
                                    

                                    <div className="uk-width-1-1 comment" style={{'margin-bottom': '150px'}}>
                                        {restaurant.comments.length > 0 ? (
                                        <RestaurantComments />):(null)}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                );
            }
            )
        }
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        average: state.average,
        hasError: state.restaurantIsLoadingError,
        isLoading: state.restaurantIsLoading
    };
};


export default connect(mapStateToProps, { getRestaurantById, getRestaurantReviewAverage })(RestaurantPage);