import React, { Component } from 'react'
import _ from 'lodash';
import {connect} from 'react-redux';
import Rating from 'react-rating';

class RestaurantComments extends Component {

    /**
     * @desc This component renders list of restaurants
     */

    renderCommentsList() {
        return _.map(this.props.restaurants.data[0].comments, comment => {
            return (

        <div key={comment._id}>
                <article className="uk-comment">
                <header className="uk-comment-header uk-grid-medium uk-flex-middle" style={{'padding-left': '25px', 'padding-top': '20px'}}
                    uk-grid="true">
                    <div className="uk-width-auto">
                        <img className="uk-comment-avatar" src="/images/profile.jpg" width="80" height="80"
                            alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset"
                                href="#">{comment.nickname}</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><Rating initialRating={comment.grade} readonly={true} style={{'color': '#ffd942'}} emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x" /></li>
                        </ul>
                    </div>
                </header>
                <div className="uk-comment-body">
                <p>{comment.text}</p>
                </div>
            </article>
            </div>

        

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
            
            
            this.renderCommentsList()

        )};

    }


const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        hasError: state.restaurantIsLoadingError,
        isLoading: state.restaurantIsLoading
    };
};


export default connect(mapStateToProps)(RestaurantComments);