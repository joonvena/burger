import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { Panel, Row, Col, Grid } from 'react-bootstrap';
import { getRestaurantReviewAverage, getRestaurantById } from '../actions/actions_restaurant';
import Rating from 'react-rating';
import RestaurantComments from './Restaurant_Comments';
import Map from './Map';

class Restaurant extends Component {

  componentDidMount() {
    const id  = this.state.restaurant._id;
    this.props.getRestaurantById(id);
    this.props.getRestaurantReviewAverage(id);
}

  state = {
    restaurant: this.props.location.state.restaurant
  }


  render() {
  // If data is not loaded display this message
  if(this.props.isLoading) {
    return <div>Ladataan ravintolaa</div>
  }

  if(this.props.hasError) {
    return <div>Virhe tapahtui!</div>
  }

return _.map(this.props.average.data, average => {
    return (

      <div>

        <Grid fluid className="splash_search">
                    <Row className="show-grid">
                        <Col xs={12} sm={12}>
                            <Col xs={12} sm={3} />
                            <Col xs={12} sm={6} className="site_container">

      <Panel>
        <Panel.Heading>{this.state.restaurant.name}, {this.state.restaurant.address}, {this.state.restaurant.city}</Panel.Heading>
        <Panel.Body>
          <Row className="show-grid">
          <Col xs={12} sm={6}>
          <h4>Arvostelut</h4>
          <p>Hampurilainen: <Rating initialRating={average.average} readonly={true} style={{ 'color': '#ffd942' }} emptySymbol="fa fa-star-o fa-lg"
                          fullSymbol="fa fa-star fa-lg" /></p>
          <p>Lisukkeet: <Rating initialRating={average.average} readonly={true} style={{ 'color': '#ffd942' }} emptySymbol="fa fa-star-o fa-lg"
                          fullSymbol="fa fa-star fa-lg" /></p>
          <p>Ravintola: <Rating initialRating={average.average} readonly={true} style={{ 'color': '#ffd942' }} emptySymbol="fa fa-star-o fa-lg"
                          fullSymbol="fa fa-star fa-lg" /></p>
          </Col>
          <Col xs={12} sm={6}>
          <Map restaurant_address={this.state.restaurant.address} restaurant_city={this.state.restaurant.city} />
          </Col>
          </Row>
          <Row className="show-grid comment_section">
          <Col xs={12} sm={12} style={{'paddingTop': '30px'}}>
          <h4>Kommentit ({this.state.restaurant.comments.length})</h4>
          {this.state.restaurant.comments.length > 0 ? (
                  
                  <RestaurantComments comments_list={this.state.restaurant.comments} comments={this.props.restaurants.data}/>) : (null)}
          </Col>
          
          </Row>
          

        </Panel.Body>
      </Panel>

      </Col>
      </Col>
      </Row>
      </Grid>

      </div>

    )
    
  }
  )}
}


const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    average: state.average,
    hasError: state.restaurantIsLoadingError,
    isLoading: state.restaurantIsLoading
  };
};


export default connect(mapStateToProps, { getRestaurantReviewAverage, getRestaurantById })(Restaurant);
