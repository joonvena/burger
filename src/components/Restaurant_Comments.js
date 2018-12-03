import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { Panel, Row, Col } from 'react-bootstrap';

class RestaurantComments extends Component {

    /**
     * @desc This component renders list of restaurants
     */




    renderCommentsList() {
    
        return _.map(this.props.comments[0].comments, comment => {
            return (
                <div key={comment._id}>
                <Panel className="comment_box">
                <Panel.Body>
                <Row className="show-grid">
                <Col xs={12} sm={8}>
                <p><b>{comment.nickname}</b></p>
                </Col>

                <Col xs={12} sm={4} className="rating">
                <Rating initialRating={comment.grade} readonly={true} style={{ 'color': '#ffd942' }} emptySymbol="fa fa-star-o fa-lg"
                                        fullSymbol="fa fa-star fa-lg" />
                </Col>
                </Row>

                <Row className="show-grid">
                <Col xs={12} sm={2}>
                <img src="/images/profile.jpg" width="80" height="80"
                                    alt="" />
                </Col>
                <Col xs={12} sm={10}>
                {comment.text}
                </Col>
               
                </Row>
                    

                </Panel.Body>
                 </Panel>
                 </div>

            );
        });
    }

    render() {

        if (this.props.hasError) {
            return <p>Jokin meni pieleen</p>;
        }

        if (this.props.isLoading) {
            return <p>Ladataan...</p>
        }


            return (
                this.renderCommentsList()
            )


    };

}


const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        hasError: state.restaurantIsLoadingError,
        isLoading: state.restaurantIsLoading
    };
};


export default connect(mapStateToProps)(RestaurantComments);