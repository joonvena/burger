import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { postRestaurant } from '../actions/actions_restaurant';

class AddRestaurant extends Component {

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

    onSubmit(values) {
        // Kun formi on lähetetty ohjataan 
        // käyttäjä takaisin /ravintolat juureen
        this.props.postRestaurant(values)
        this.props.history.push('/');

    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Nimi"
                    placeholder="Anna ravintolan nimi"
                    name="name"
                    component={this.renderField} />
                <Field
                    label="Osoite"
                    placeholder="Anna ravintolan osoite"
                    name="address"
                    component={this.renderField} />
                <Field
                    label="Kaupunki"
                    placeholder="Anna ravintolan kaupunki"
                    name="city"
                    component={this.renderField} />
                <Field
                    label="Puh"
                    placeholder="Anna ravintolan puh. numero"
                    name="phone"
                    component={this.renderField} />
                <button type="submit" className="btn btn-primary">Lisää</button>
                <Link to="/" className="btn btn-danger">Poistu</Link>
            </form>
        );
    }
}


// Uuden ravintolan lisäämisen formin virhekäsittely
function validate(values) {
    // Jos errors oliolla on propseja redux form olettaa 
    // että formissa on virheitä
    const errors = {};

    if (!values.nimi) {
        errors.nimi = "Nimi on pakollinen!";
    }

    if (!values.osoite) {
        errors.osoite = "Osoite on pakollinen!";
    }

    if (!values.kaupunki) {
        errors.kaupunki = "Kaupunki on pakollinen!";
    }

    return errors;
}

const mapStateToProps = (state) => {
    return {
        wasAdded: state.wasAdded
    };
};

export default reduxForm({
    validate,
    form: 'RestaurantNewForm' // Arvon pitää olla uniikki
})(
    connect(mapStateToProps, { postRestaurant })(withRouter(AddRestaurant))
);