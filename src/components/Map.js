import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from 'react-geocode';
import { connect } from 'react-redux';
import {mapiApi, geoApi} from '../env/keys.js'

class MapComponent extends Component {
    constructor() {
        super();
        this.state = { latitude: "", longitude: "" };
      }

    
    geoLocate() {
        Geocode.setApiKey(geoApi);
        const address = this.props.restaurant_address + ", " + this.props.restaurant_city;
        Geocode.fromAddress(address).then(
            response => {
              this.setState({latitude: response.results[0].geometry.location.lat});
              this.setState({longitude: response.results[0].geometry.location.lng});
            },
            error => {
              console.error(error);
            }
          );
    }

    componentDidMount() {
        this.geoLocate();
    }

    render() {

        const style = {
            height: '300px',
            width: '100%'
        }

        const longitude = this.state.longitude;
        const latitude = this.state.latitude;

        console.log("this is long: " + longitude);
        console.log("this is lat" + latitude);

        return (
            
            <Map
            google={this.props.google}
            style={style}
            center={{
              lat: latitude,
              lng: longitude
            }}
            zoom={14}
          >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: latitude, lng: longitude}} />

            </Map>
        );
    }



}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
    };
};

const WrappedContainer = GoogleApiWrapper({
    apiKey: mapiApi
 })(MapComponent);
 export default connect(mapStateToProps)(WrappedContainer);