import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import {Modal, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import Map from '../components/Map';
import { getRestaurantById, getRestaurantReviewAverage } from '../actions/actions_restaurant';
import { connect } from 'react-redux';

class restaurant_card extends Component {

  state = {
      showModal: false,
      showCommentModal: false,
      comments: []
  }

  componentDidMount() {
    console.log("I mount")
    this.props.getRestaurantById(this.props.restaurant._id);

  }

  openModal = () => {
      this.setState({showModal:true,
    })

  }


  openCommentModal = () => {
      this.setState({showCommentModal: true})
  }

  handleCommentClose = () => {
      this.setState({showCommentModal: false})
  }
  handleClose = () => {
      this.setState({showModal: false})
  }
    
  render() {

    let comments;
    comments = this.props.restaurants.data[0].comments.map((comment) => {
        return(
            <div>
            <p><b>{comment.nickname}</b></p>
            <p>{comment.text}</p>
            </div>
        )
    })

    return (
      <div>
           <div className="uk-grid uk-grid-collapse search_restaurant_section" style={{ 'marginTop': '50px' }} uk-grid>
                    <div className="uk-width-1-4"></div>
                    <div className="uk-width-1-2@s">
                    <div className="uk-width-1-1" style={{'paddingLeft': '5px', 'paddingRight': '5px'}}>
                       
                        <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
                        <h3 className="uk-card-title" onClick={this.openModal}>{this.props.restaurant.name}</h3>
                            <div style={{'marginBottom': '20px'}}>
                            <span uk-icon="icon: home; ratio: 1.5"></span>
                            <span className="uk-text-middle" style={{'margin-left': '15px'}}>{this.props.restaurant.address}, {this.props.restaurant.city}</span>
                            </div>

                            <div className="uk-flex-last uk-card-media-right uk-cover-container map_container">
                                            <Map restaurant_address={this.props.restaurant.address} restaurant_city={this.props.restaurant.city}/>
                                            <canvas width="600" height="400"></canvas>
                                        </div>
                       
                            
    
                        </div>
                        

                          <Modal show={this.state.showModal} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>{this.props.restaurant.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                             <h4>{this.props.restaurant.address}</h4>
                         
                            <Button onClick={this.openCommentModal}>Kommentit</Button>                             
                            <div className="uk-flex-last uk-card-media-right uk-cover-container map_container">
                                            <Map restaurant_address={this.props.restaurant.address} restaurant_city={this.props.restaurant.city}/>
                                            <canvas width="400" height="400"></canvas>
                                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={this.state.showCommentModal} onHide={this.handleCommentClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>{this.props.restaurant.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                             {comments}
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={this.handleCommentClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    </div>
                    <div className="uk-width-1-4"></div>
                </div>
            </div>
        
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
  
  
  export default connect(mapStateToProps, { getRestaurantReviewAverage, getRestaurantById })(restaurant_card);
