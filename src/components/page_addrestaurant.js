import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Col, Grid, Row, Panel} from 'react-bootstrap';
import _ from 'lodash';
import AddRestaurantForm from '../components/form_addrestaurant';


class AddRestaurantPage extends Component {


    render() {

        // If data is not loaded display this message

        if(this.props.hasError) {
            return <div>Ravintolan lisäys epäonnistui</div>
        }

        

        return (
            <div>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} sm={2}></Col>
                        <Col xs={12} sm={8}>

                        <AddRestaurantForm />    
                        
                        </Col>
                        <Col xs={12} sm={2}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurantAdded,
        hasError: state.restaurantAddError,
        isLoading: state.restaurantIsLoading
    };
};


export default connect(mapStateToProps)(AddRestaurantPage);