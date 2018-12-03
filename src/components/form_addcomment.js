import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment } from '../actions/actions_comments';
import Rating from 'react-rating';

class AddComment extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        this.setState({value: event});
        this.handleInitialize();
      }

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            "restaurantid": this.props.restaurants.data[0]._id,
            "grade": this.state.value
        };
        this.props.initialize(initData);
    }

    onSubmit(values) {
        // Kun formi on lähetetty ohjataan 
        // käyttäjä takaisin /ravintolat juureen
        const id = this.props.restaurants.data[0]._id
        this.props.postComment(values);
        this.props.history.push('/');
    }



    render() {
        const { handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <fieldset className="uk-fieldset" />
            <div className="uk-margin">
            <input className="uk-input" type="text" name="nickname" placeholder="Nimimerkki" />
            <Rating {...this.props} initialRating={this.state.value} onClick={this.handleClick} />
            </div>
            <fieldset className="uk-fieldset" />
            <div className="uk-margin">
            <input className="uk-input" type="text" name="text" placeholder="Arvostelu" />
            </div>
            <fieldset className="uk-fieldset" />
            <div className="uk-margin">
            <input className="uk-input" type="hidden" name="restaurantid" />
            </div>
            <button type="submit">Lisää</button>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        comments: state.comments,
        hasError: state.commentIsLoadingError,
        isLoading: state.commenttIsLoading
    };
};

export default reduxForm({
    form: 'NewCommentForm' // Arvon pitää olla uniikki
})(
    connect(mapStateToProps, { postComment })(withRouter(AddComment))
);