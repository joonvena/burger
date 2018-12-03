import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import _ from 'lodash';
import Map from '../components/Map';

export default class restaurant_card extends Component {

  render() {
    return (
         
 
          <div>
          {this.props.restaurant_found ? (
            <Panel>
                <Panel.Heading><Link
                                to={{
                                    pathname: "/restaurants/restaurant",
                                    state: { restaurant: this.props.restaurant }
                                }}
                            >{this.props.restaurant.name}</Link></Panel.Heading>
                <Panel.Body>{this.props.restaurant.address}, {this.props.restaurant.city}
                  <div className="map_container">
                   <Map restaurant_address={this.props.restaurant.address} restaurant_city={this.props.restaurant.city}/>
                   </div>
                </Panel.Body>
            </Panel>
            ) : (null)}
            </div>
    )
                            
  }
}
