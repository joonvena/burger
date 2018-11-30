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

    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" placeholder={field.placeholder} {...field.input} />
                <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
            </div>
        );
    }

    renderhiddenField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="hidden" placeholder={field.placeholder} {...field.input} />
                
            </div>
        );
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
                <Field
                    label="Nimimerkki"
                    placeholder="Nimimerkki"
                    name="nickname"
                    component={this.renderField} />
                    <p>Arvosana</p>
                    <Rating {...this.props} initialRating={this.state.value} onClick={this.handleClick} />
                <Field
                    name="grade"
                    component={this.renderhiddenField} />
                <Field
                    label="Arvostelu"
                    placeholder="Anna lyhyt arvio ravintolasta"
                    name="text"
                    component={this.renderField} />
                <Field
                    name="restaurantid"
                    component={this.renderhiddenField} />
                <button type="submit" className="btn btn-primary">Lisää</button>
                <Link to="/" className="btn btn-danger">Poistu</Link>
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